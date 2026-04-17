// Auto-generated list of gallery images in /public/gallery/
// Build photos = real rigs/shop shots. Product photos = accessories/components.

export const GALLERY_BUILDS = Array.from({ length: 25 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `/gallery/build-${n}.jpg`;
});

export const GALLERY_PRODUCTS = [
    "/gallery/product-01.jpg",
    "/gallery/product-02.png",
    "/gallery/product-03.jpg",
    "/gallery/product-04.jpg",
];

// Curated order, interleaving products for visual rhythm
export const GALLERY_ALL = [
    ...GALLERY_BUILDS.slice(0, 6),
    GALLERY_PRODUCTS[0],
    ...GALLERY_BUILDS.slice(6, 12),
    GALLERY_PRODUCTS[1],
    ...GALLERY_BUILDS.slice(12, 18),
    GALLERY_PRODUCTS[2],
    ...GALLERY_BUILDS.slice(18, 25),
    GALLERY_PRODUCTS[3],
];

export const TESTIMONIALS = [
    {
        name: "Harsh P.",
        role: "Gamer · Rajkot",
        stars: 5,
        text: "Got my dream RTX build from Sagar Infotech. Cable management is absolute art and the benchmarks matched what they promised on paper. Best studio in Rajkot, hands down.",
    },
    {
        name: "Priya M.",
        role: "Content Creator",
        stars: 5,
        text: "My MacBook wouldn't boot and three other shops gave up. Sagar bhai diagnosed it in 20 minutes and saved three years of footage. I'll never go anywhere else.",
    },
    {
        name: "Rohan D.",
        role: "College Student",
        stars: 5,
        text: "Honest pricing, zero upsell. They actually talked me OUT of buying a bigger GPU than I needed. That's rare. Rig runs cool and quiet for months now.",
    },
    {
        name: "Yash K.",
        role: "Twitch Streamer",
        stars: 5,
        text: "Custom liquid-cooled build — looks insane on camera and temps never cross 65°C during a 6-hour stream. Sagar Infotech knows what they're doing.",
    },
    {
        name: "Nikita S.",
        role: "Architect",
        stars: 5,
        text: "Needed a workstation for heavy 3D rendering. They specced it exactly to my workload and delivered under budget. Post-sale support has been flawless.",
    },
    {
        name: "Vivek J.",
        role: "Returning Client",
        stars: 5,
        text: "Third upgrade from them in five years. Always the same — professional, patient, and passionate. Feels like talking to friends, not a shop.",
    },
];

export const GOOGLE_REVIEWS_URL =
    "https://www.google.com/maps/search/Sagar+Infotech+Darshan+Arcade+University+Road+Rajkot/";
