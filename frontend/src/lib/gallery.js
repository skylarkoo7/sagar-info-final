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
        name: "Harshal Vaghela",
        role: "University Road, Rajkot",
        stars: 5,
        text: "Got my RTX 4070 Super build from Sagar bhai last month. Temps stay under 65°C even in BGMI marathons and the cable management inside the case looks like showroom work. Paid exactly what was quoted — no surprises.",
    },
    {
        name: "Priyanka Thakkar",
        role: "Content Creator",
        stars: 5,
        text: "My MacBook Pro wouldn't power on and two other shops told me the logic board was dead. Sagar Infotech diagnosed a faulty power IC in 30 minutes and saved three years of client footage. Forever grateful.",
    },
    {
        name: "Rohan Dholakia",
        role: "BE Student, Marwadi University",
        stars: 5,
        text: "Walked in with a tight college budget, they talked me OUT of a bigger GPU than I needed and specced a Ryzen 5 build that crushes everything I throw at it. Honest shop, rare in this market.",
    },
    {
        name: "Yash Kotadia",
        role: "Streamer & Editor",
        stars: 5,
        text: "Custom liquid-cooled build with Lian Li fans — looks insane on my stream cam and Premiere renders that took 40 min on my old setup finish in 12. Worth every rupee.",
    },
    {
        name: "Nikita Sheth",
        role: "Architect, Rajkot",
        stars: 5,
        text: "Needed a workstation for heavy Revit + Lumion loads. They built exactly to my workflow and stayed under the budget I gave them. Post-sale support is just a WhatsApp away — no runaround.",
    },
    {
        name: "Vivek Jadeja",
        role: "Returning client · 3rd build",
        stars: 5,
        text: "Third upgrade with Sagar Infotech over five years. Same shop, same care. They even remember what parts they put in my old rig. Feels like family, not a transaction.",
    },
];

export const GOOGLE_REVIEWS_URL =
    "https://www.google.com/maps/search/Sagar+Infotech+Darshan+Arcade+University+Road+Rajkot/";
