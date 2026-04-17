import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    Cpu,
    Lightning,
    Wrench,
    ShieldCheck,
    Star,
    WhatsappLogo,
    MapPin,
} from "@phosphor-icons/react";
import { BRAND, IMAGES, SERVICES, STATS } from "../lib/constants";
import Testimonials from "../components/Testimonials";
import { GALLERY_BUILDS } from "../lib/gallery";

const Home = () => {
    return (
        <div data-testid="page-home">
            {/* ============ HERO ============ */}
            <section
                className="relative min-h-[100svh] flex items-end overflow-hidden grain"
                data-testid="hero-section"
            >
                <div className="absolute inset-0 z-0">
                    <img
                        src={IMAGES.hero}
                        alt="Gaming PC motherboard"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-bg" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-20 md:pb-28 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="flex items-center gap-2 mb-8"
                    >
                        <span className="w-8 h-px bg-brand-blue" />
                        <span className="overline">
                            Rajkot · Custom PC Studio
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="font-display font-black text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-[-0.03em] text-white max-w-5xl"
                    >
                        Built for the <br />
                        <span className="text-gradient-blue italic">
                            frame-chasers.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-8 text-base md:text-lg text-zinc-300 max-w-xl leading-relaxed"
                    >
                        Sagar Infotech hand-crafts gaming PCs, sells premium
                        laptops, and repairs hardware with board-level
                        precision — right here in the heart of Rajkot.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.55 }}
                        className="mt-10 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href={BRAND.whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="hero-whatsapp-btn"
                            className="group inline-flex items-center gap-3 bg-brand-blue text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-blueHover transition-all duration-300"
                        >
                            <WhatsappLogo size={18} weight="fill" />
                            Build My Rig
                            <ArrowRight
                                size={16}
                                weight="bold"
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                        <Link
                            to="/services"
                            data-testid="hero-services-btn"
                            className="group inline-flex items-center gap-3 text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Explore Services
                            <ArrowUpRight
                                size={16}
                                weight="bold"
                                className="group-hover:rotate-45 transition-transform"
                            />
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-6 right-6 md:right-16 z-10 hidden md:flex items-center gap-3 text-zinc-500">
                    <span className="text-[10px] tracking-[0.3em] uppercase">
                        Scroll
                    </span>
                    <span className="w-px h-12 bg-gradient-to-b from-brand-blue to-transparent" />
                </div>
            </section>

            {/* ============ MARQUEE ============ */}
            <section className="border-y border-white/5 bg-brand-bg2 py-6 overflow-hidden">
                <div className="marquee flex whitespace-nowrap gap-14 text-3xl md:text-5xl font-display font-black text-white/5 tracking-tighter">
                    {Array.from({ length: 2 }).map((_, i) => (
                        <div key={i} className="flex gap-14 shrink-0">
                            <span>RTX 50 SERIES</span>
                            <span className="text-brand-blue/40">★</span>
                            <span>INTEL CORE ULTRA</span>
                            <span className="text-brand-blue/40">★</span>
                            <span>RYZEN 9000</span>
                            <span className="text-brand-blue/40">★</span>
                            <span>DDR5</span>
                            <span className="text-brand-blue/40">★</span>
                            <span>PCIe 5.0 NVMe</span>
                            <span className="text-brand-blue/40">★</span>
                            <span>LIQUID COOLED</span>
                            <span className="text-brand-blue/40">★</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============ STATS BAND ============ */}
            <section
                className="relative py-20 md:py-28 bg-brand-bg"
                data-testid="stats-section"
            >
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14">
                        {STATS.map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.08,
                                }}
                                className="flex flex-col gap-2 border-l-2 border-brand-blue pl-5"
                            >
                                <span className="font-display font-black text-4xl md:text-6xl text-white tracking-tight">
                                    {s.value}
                                </span>
                                <span className="text-xs text-zinc-400 tracking-[0.2em] uppercase">
                                    {s.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ SERVICES PREVIEW ============ */}
            <section
                className="relative py-24 md:py-32 bg-brand-bg2 overflow-hidden"
                data-testid="services-preview"
            >
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                    <img
                        src={IMAGES.circuitMacro}
                        alt=""
                        className="w-full h-full object-cover fade-bottom"
                    />
                </div>
                <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
                    <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
                        <div className="lg:col-span-7">
                            <p className="overline mb-5">What We Do</p>
                            <h2 className="font-display font-black text-4xl md:text-6xl text-white tracking-[-0.03em] leading-[1]">
                                Five services.
                                <br />
                                <span className="text-gradient-blue italic">
                                    Zero shortcuts.
                                </span>
                            </h2>
                        </div>
                        <div className="lg:col-span-5 flex lg:justify-end">
                            <Link
                                to="/services"
                                data-testid="services-view-all"
                                className="group inline-flex items-center gap-3 text-white px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase border border-white/20 hover:border-brand-blue transition-all"
                            >
                                View All
                                <ArrowUpRight
                                    size={16}
                                    className="group-hover:rotate-45 transition-transform"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {SERVICES.slice(0, 3).map((s, i) => (
                            <motion.div
                                key={s.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.12 }}
                                className="group relative bg-brand-surface border border-white/10 p-8 overflow-hidden hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-[0_0_40px_rgba(30,115,190,0.15)] transition-all duration-500"
                                data-testid={`service-card-${s.id}`}
                            >
                                <div className="relative aspect-[4/3] overflow-hidden mb-7 -mx-8 -mt-8">
                                    <img
                                        src={IMAGES[s.image]}
                                        alt={s.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] tracking-[0.25em] text-brand-blueLight">
                                        {s.number}
                                    </div>
                                </div>
                                <h3 className="font-display text-2xl font-bold text-white mb-3 tracking-tight">
                                    {s.title}
                                </h3>
                                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                                    {s.short}
                                </p>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-brand-blueLight font-bold hover:gap-3 transition-all"
                                >
                                    Learn more <ArrowRight size={14} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ SHOWCASE SPLIT ============ */}
            <section
                className="relative py-24 md:py-32 bg-brand-bg"
                data-testid="showcase-section"
            >
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-14 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 relative"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <img
                                src={IMAGES.customBuilds}
                                alt="Custom PC build"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                        <div className="absolute -bottom-8 -right-4 md:-right-10 bg-brand-blue text-white px-8 py-5 max-w-[240px]">
                            <div className="flex gap-0.5 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} weight="fill" />
                                ))}
                            </div>
                            <p className="text-xs leading-relaxed tracking-wide">
                                "Best PC builders in Rajkot. Period."
                            </p>
                            <p className="text-[10px] tracking-widest uppercase mt-2 opacity-80">
                                — Gaming Community, Rajkot
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6"
                    >
                        <p className="overline mb-5">Why Sagar Infotech</p>
                        <h2 className="font-display font-black text-4xl md:text-5xl text-white tracking-[-0.03em] leading-[1.05] mb-8">
                            Every rig is a
                            <br />
                            <span className="italic text-gradient-blue">
                                hand-built promise.
                            </span>
                        </h2>
                        <p className="text-zinc-400 leading-relaxed mb-10 max-w-lg">
                            We don't push cookie-cutter boxes. We listen, we
                            spec, we build, we stress-test — and we stand
                            behind every machine for the long haul.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Cpu,
                                    title: "Spec Before Sell",
                                    desc: "We tailor parts to your workload, not our margin.",
                                },
                                {
                                    icon: Lightning,
                                    title: "Thermal Tested",
                                    desc: "Stress-tested before it ever leaves the bench.",
                                },
                                {
                                    icon: Wrench,
                                    title: "Board-Level Repair",
                                    desc: "Diagnostic-first, chip-level when it matters.",
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Genuine Parts",
                                    desc: "Only verified OEM components. No greys.",
                                },
                            ].map((f) => (
                                <div
                                    key={f.title}
                                    className="flex gap-4 items-start"
                                >
                                    <div className="w-10 h-10 border border-brand-blue/40 flex items-center justify-center shrink-0 text-brand-blueLight">
                                        <f.icon size={18} weight="duotone" />
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-white text-sm mb-1 tracking-tight">
                                            {f.title}
                                        </h4>
                                        <p className="text-xs text-zinc-500 leading-relaxed">
                                            {f.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ============ GALLERY TEASER ============ */}
            <section
                className="relative py-24 md:py-32 bg-brand-bg overflow-hidden"
                data-testid="gallery-teaser"
            >
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
                    <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
                        <div className="lg:col-span-8">
                            <p className="overline mb-5">The Bench Book</p>
                            <h2 className="font-display font-black text-4xl md:text-6xl text-white tracking-[-0.03em] leading-[1]">
                                A few machines
                                <br />
                                <span className="italic text-gradient-blue">
                                    we've shipped.
                                </span>
                            </h2>
                        </div>
                        <div className="lg:col-span-4 flex lg:justify-end">
                            <Link
                                to="/gallery"
                                data-testid="gallery-teaser-viewall"
                                className="group inline-flex items-center gap-3 text-white px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase border border-white/20 hover:border-brand-blue transition-all"
                            >
                                See the Full Gallery
                                <ArrowUpRight
                                    size={16}
                                    className="group-hover:rotate-45 transition-transform"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {GALLERY_BUILDS.slice(0, 8).map((src, i) => (
                            <motion.div
                                key={src}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.55,
                                    delay: Math.min(i * 0.05, 0.3),
                                }}
                                className={`relative overflow-hidden bg-brand-surface border border-white/5 hover:border-brand-blue/40 transition-all duration-500 group ${
                                    i === 0 || i === 5
                                        ? "row-span-2 aspect-[3/4]"
                                        : "aspect-square"
                                }`}
                            >
                                <img
                                    src={src}
                                    alt={`Build ${i + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ TESTIMONIALS ============ */}
            <Testimonials />

            {/* ============ CTA BAND ============ */}
            <section
                className="relative py-20 md:py-24 bg-brand-bg2 border-y border-white/5 overflow-hidden"
                data-testid="cta-band"
            >
                <div className="absolute inset-0 hero-grid-bg opacity-40" />
                <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8">
                        <p className="overline mb-4">Ready When You Are</p>
                        <h2 className="font-display font-black text-3xl md:text-5xl text-white tracking-[-0.02em] leading-[1.05]">
                            Step into the studio. Or just
                            <span className="text-brand-blueLight italic">
                                {" "}
                                WhatsApp us.
                            </span>
                        </h2>
                        <p className="mt-5 text-sm text-zinc-400 leading-relaxed max-w-2xl flex items-start gap-2">
                            <MapPin
                                size={16}
                                weight="fill"
                                className="text-brand-blue mt-0.5 shrink-0"
                            />
                            <span className="tracking-wide">{BRAND.address}</span>
                        </p>
                    </div>
                    <div className="lg:col-span-4 flex lg:justify-end gap-3">
                        <a
                            href={BRAND.whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="cta-whatsapp-btn"
                            className="inline-flex items-center gap-2 bg-brand-blue text-white px-7 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-blueHover transition-all"
                        >
                            <WhatsappLogo size={16} weight="fill" /> Message Us
                        </a>
                        <Link
                            to="/contact"
                            data-testid="cta-contact-btn"
                            className="inline-flex items-center gap-2 text-white px-7 py-4 text-xs font-bold tracking-[0.2em] uppercase border border-white/20 hover:border-brand-blue transition-all"
                        >
                            Visit
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
