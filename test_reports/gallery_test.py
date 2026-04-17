import asyncio
from playwright.async_api import async_playwright

BASE_URL = "https://sagar-sleek-digital.preview.emergentagent.com"

async def test_gallery():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.set_viewport_size({"width": 1920, "height": 1080})

        errors = []
        page.on("pageerror", lambda err: errors.append(str(err)))

        # ---- Gallery Page ----
        await page.goto(BASE_URL + "/gallery", wait_until="networkidle", timeout=20000)
        print("=== GALLERY PAGE ===")

        hero = await page.locator("h1, h2").first.text_content()
        print("Hero text:", hero)

        # Filter pills
        all_work = await page.get_by_role("button", name="ALL WORK").is_visible()
        custom_builds = await page.get_by_role("button", name="CUSTOM BUILDS").is_visible()
        components = await page.get_by_role("button", name="COMPONENTS & GEAR").is_visible()
        print("Filter pills - All Work:", all_work, "Custom Builds:", custom_builds, "Components:", components)

        total_imgs = await page.locator("img[src*='/gallery/']").count()
        print("Total gallery images (All Work):", total_imgs)

        # Filter Custom Builds
        await page.get_by_role("button", name="CUSTOM BUILDS").click(force=True)
        await page.wait_for_timeout(500)
        builds_count = await page.locator("img[src*='build-']").count()
        products_count = await page.locator("img[src*='product-']").count()
        print("Custom Builds filter - builds:", builds_count, "products:", products_count)

        # Filter Components & Gear
        await page.get_by_role("button", name="COMPONENTS & GEAR").click(force=True)
        await page.wait_for_timeout(500)
        builds_count2 = await page.locator("img[src*='build-']").count()
        products_count2 = await page.locator("img[src*='product-']").count()
        print("Components & Gear filter - builds:", builds_count2, "products:", products_count2)

        # Back to All Work
        await page.get_by_role("button", name="ALL WORK").click(force=True)
        await page.wait_for_timeout(500)

        # Lightbox test
        first_img = page.locator("img[src*='/gallery/']").first
        await first_img.click(force=True)
        await page.wait_for_timeout(700)

        # Check for fixed overlay (lightbox)
        fixed_els = await page.locator("div").filter(has_text="").all()
        # Check body overflow
        overflow = await page.evaluate("document.body.style.overflow")
        print("Body overflow on lightbox open:", overflow)

        # Take screenshot of lightbox
        await page.screenshot(path=".screenshots/gallery_lightbox.jpg", quality=40, full_page=False)

        # Test Escape
        await page.keyboard.press("Escape")
        await page.wait_for_timeout(400)
        overflow_after = await page.evaluate("document.body.style.overflow")
        print("Body overflow after Escape:", overflow_after)

        # Test arrow keys - open again
        await first_img.click(force=True)
        await page.wait_for_timeout(500)
        await page.keyboard.press("ArrowRight")
        await page.wait_for_timeout(300)
        await page.keyboard.press("ArrowLeft")
        await page.wait_for_timeout(300)
        await page.keyboard.press("Escape")
        print("Keyboard navigation tested")

        # Check CTA section
        see_work = await page.get_by_text("See the Full Gallery").is_visible()
        print("Gallery CTA (See the Full Gallery):", see_work)

        print("Page errors:", errors)
        print()

        # ---- Home Page ----
        await page.goto(BASE_URL, wait_until="networkidle", timeout=20000)
        print("=== HOME PAGE ===")

        # Gallery link in nav
        gallery_nav = await page.locator("nav").get_by_role("link", name="Gallery").is_visible()
        print("Gallery link in header nav:", gallery_nav)

        # Scroll through page
        await page.evaluate("window.scrollTo(0, 2000)")
        await page.wait_for_timeout(800)

        gallery_cta = await page.get_by_text("See the Full Gallery").is_visible()
        print("Gallery Teaser CTA visible:", gallery_cta)

        await page.evaluate("window.scrollTo(0, 4000)")
        await page.wait_for_timeout(800)

        # Testimonials
        harsh = await page.get_by_text("Harsh P.").is_visible()
        print("Testimonial Harsh P.:", harsh)

        rating_49 = await page.get_by_text("4.9").is_visible()
        print("4.9 rating visible:", rating_49)

        await page.screenshot(path=".screenshots/home_middle.jpg", quality=40, full_page=False)

        # Footer gallery
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await page.wait_for_timeout(500)
        footer_gallery = await page.locator("footer").get_by_role("link", name="Gallery").is_visible()
        print("Footer Gallery link:", footer_gallery)

        print("Home page errors:", errors)
        print()

        # ---- Mobile Nav ----
        await page.set_viewport_size({"width": 390, "height": 844})
        await page.goto(BASE_URL, wait_until="networkidle", timeout=20000)
        print("=== MOBILE NAV ===")

        # Open mobile menu
        hamburger = page.locator("button[aria-label*='menu'], button[aria-label*='Menu'], button[class*='hamburger'], button[class*='mobile']").first
        if await hamburger.is_visible():
            await hamburger.click(force=True)
            await page.wait_for_timeout(500)

        mobile_gallery = await page.get_by_role("link", name="Gallery").is_visible()
        print("Mobile nav Gallery link:", mobile_gallery)

        await browser.close()
        print("\n=== TEST COMPLETE ===")

asyncio.run(test_gallery())
