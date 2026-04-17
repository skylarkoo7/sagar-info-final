export const BRAND = {
    name: "SAGAR INFOTECH",
    shortName: "Sagar Infotech",
    tagline: "Rajkot's Premium PC & Gaming Hardware Studio",
    phone: "9408488855",
    phoneLink: "tel:+919408488855",
    whatsappLink: "https://wa.me/919408488855",
    address:
        "SAGAR INFOTECH, DARSHAN ARCADE, UNIVERSITY RD, NR. HP PETROL PUMP, OPP. SHANTI MULTISPECIALITY HOSPITAL, ARCHANA SOCIETY, PANCHAYAT NAGAR, RAJKOT, GUJARAT 360005",
    addressShort:
        "DARSHAN ARCADE, UNIVERSITY RD, NR. HP PETROL PUMP, RAJKOT, GUJARAT 360005",
    mapQuery:
        "SAGAR+INFOTECH+Darshan+Arcade+University+Road+Rajkot+Gujarat+360005",
    logo: "https://customer-assets.emergentagent.com/job_sagar-sleek-digital/artifacts/uerdwkuq_WhatsApp%20Image%202026-04-17%20at%2011.47.06%20AM.jpeg",
    established: "Est. Rajkot",
};

export const IMAGES = {
    hero: "https://images.unsplash.com/photo-1632749042303-7f7a18ed6ff0?crop=entropy&cs=srgb&fm=jpg&q=85&w=2000",
    customBuilds:
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    gamingSetup:
        "https://images.unsplash.com/photo-1626218174358-7769486c4b79?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    laptopRepair:
        "https://images.unsplash.com/photo-1769085794397-9cde6d47233a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    laptopSales:
        "https://images.pexels.com/photos/19012051/pexels-photo-19012051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    circuitMacro:
        "https://images.unsplash.com/photo-1651340527836-263c5072968e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800",
};

export const SERVICES = [
    {
        id: "gaming-pc",
        number: "01",
        title: "Custom Gaming PC Builds",
        short: "Hand-assembled battle stations tuned for 1440p and 4K.",
        description:
            "From RTX-powered eSports rigs to no-compromise 4K creator workstations — every wire dressed, every thermal benchmarked, every boot flawless.",
        features: [
            "Latest Intel & AMD platforms",
            "RTX 40/50 series GPUs",
            "Custom cable management",
            "Thermal & stability testing",
        ],
        image: "gamingSetup",
    },
    {
        id: "pc-assembly",
        number: "02",
        title: "Custom PC Assembly",
        short: "Bring your parts, we craft the machine.",
        description:
            "Whether you've sourced components yourself or need guidance on compatibility, our technicians assemble with showroom precision — including BIOS tuning and OS setup.",
        features: [
            "Part compatibility review",
            "Clean assembly & cabling",
            "BIOS / XMP optimisation",
            "Windows + driver install",
        ],
        image: "customBuilds",
    },
    {
        id: "laptop-sales",
        number: "03",
        title: "Laptops & Gaming Notebooks",
        short: "Gaming, creator & business laptops at honest prices.",
        description:
            "A curated lineup of gaming and productivity laptops from the brands that matter. Hands-on demos, honest recommendations, and immediate after-sale support.",
        features: [
            "ASUS ROG, Lenovo Legion, HP Omen",
            "Creator series & Ultrabooks",
            "EMI options available",
            "1-on-1 consultation",
        ],
        image: "laptopSales",
    },
    {
        id: "repair",
        number: "04",
        title: "Laptop & PC Repair",
        short: "Fast, diagnostic-first hardware repair.",
        description:
            "Board-level expertise for laptops and desktops — from thermal repasting and SSD upgrades to motherboard diagnostics and data rescue.",
        features: [
            "Free diagnostic check",
            "Genuine spare parts",
            "Data recovery",
            "Same-day turnaround on most fixes",
        ],
        image: "laptopRepair",
    },
    {
        id: "upgrades",
        number: "05",
        title: "Component Upgrades",
        short: "Breathe new life into the machine you already own.",
        description:
            "GPU swaps, RAM boosts, NVMe migrations, and PSU overhauls. We'll stress-test the outcome and tune it for the workload you actually run.",
        features: [
            "GPU & CPU upgrades",
            "DDR5 RAM & NVMe SSDs",
            "PSU & cooling overhauls",
            "Post-upgrade benchmarking",
        ],
        image: "circuitMacro",
    },
];

export const STATS = [
    { value: "10+", label: "Years in Rajkot" },
    { value: "2,400+", label: "Rigs Shipped" },
    { value: "98%", label: "Repeat Clients" },
    { value: "24 hr", label: "Avg Repair SLA" },
];
