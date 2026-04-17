import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
    X,
    CaretLeft,
    CaretRight,
    WhatsappLogo,
    ArrowUpRight,
} from "@phosphor-icons/react";
import { GALLERY_ALL } from "../lib/gallery";
import { BRAND } from "../lib/constants";

const CATEGORIES = [
    { id: "all", label: "All Work" },
    { id: "builds", label: "Custom Builds" },
    { id: "products", label: "Components & Gear" },
];

const Gallery = () => {
    const [filter, setFilter] = useState("all");
    const [activeIndex, setActiveIndex] = useState(null);

    const images =
        filter === "builds"
            ? GALLERY_ALL.filter((src) => src.includes("build-"))
            : filter === "products"
              ? GALLERY_ALL.filter((src) => src.includes("product-"))
              : GALLERY_ALL;

    const open = (i) => setActiveIndex(i);
    const close = () => setActiveIndex(null);
    const prev = (e) => {
        e?.stopPropagation();
        setActiveIndex((i) => (i - 1 + images.length) % images.length);
    };
    const next = (e) => {
        e?.stopPropagation();
        setActiveIndex((i) => (i + 1) % images.length);
    };

    React.useEffect(() => {
        if (activeIndex === null) return;
        const onKey = (e) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [activeIndex]); // eslint-disable-line

    return (
        <div data-testid="page-gallery">
            {/* Hero */}
            <section className="relative pt-36 pb-14 md:pt-44 md:pb-20 grain overflow-hidden">
                <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex items-center gap-2 mb-8"
                    >
                        <span className="w-8 h-px bg-brand-blue" />
                        <span className="overline">The Gallery</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="font-display font-black text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.03em] text-white max-w-5xl"
                    >
                        Real rigs.
                        <span className="italic text-gradient-blue"> Real clients. </span>
                        Rajkot.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-8 text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed"
                    >
                        Every photo here walked out of our bench. No stock
                        art, no rendered mockups — just machines we assembled,
                        tuned, and handed over.
                    </motion.p>

                    {/* Filters */}
                    <div className="mt-12 flex flex-wrap gap-3">
                        {CATEGORIES.map((c) => (
                            <button
                                key={c.id}
                                onClick={() => setFilter(c.id)}
                                data-testid={`filter-${c.id}`}
                                className={`px-5 py-2.5 text-[11px] font-bold tracking-[0.2em] uppercase border transition-all duration-300 ${
                                    filter === c.id
                                        ? "bg-brand-blue border-brand-blue text-white"
                                        : "border-white/15 text-zinc-400 hover:border-brand-blue hover:text-white"
                                }`}
                            >
                                {c.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Masonry Grid */}
            <section
                className="pb-24 md:pb-32 bg-brand-bg"
                data-testid="gallery-grid"
            >
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
                        {images.map((src, i) => (
                            <motion.button
                                key={src}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: Math.min(i * 0.03, 0.4),
                                }}
                                onClick={() => open(i)}
                                data-testid={`gallery-item-${i}`}
                                className="group mb-5 inline-block w-full overflow-hidden bg-brand-surface border border-white/5 hover:border-brand-blue/50 transition-all duration-500 break-inside-avoid relative"
                            >
                                <img
                                    src={src}
                                    alt={`Sagar Infotech build ${i + 1}`}
                                    loading="lazy"
                                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                    <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-white">
                                        <span className="w-6 h-px bg-brand-blue" />
                                        View
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-brand-bg2 border-y border-white/5">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-8 items-center">
                    <h2 className="lg:col-span-8 font-display font-black text-3xl md:text-5xl text-white tracking-[-0.02em] leading-[1.05]">
                        Want your build featured
                        <br />
                        <span className="italic text-gradient-blue">
                            right here?
                        </span>
                    </h2>
                    <div className="lg:col-span-4 flex lg:justify-end gap-3">
                        <a
                            href={BRAND.whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="gallery-whatsapp"
                            className="inline-flex items-center gap-2 bg-brand-blue text-white px-7 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-blueHover transition-all"
                        >
                            <WhatsappLogo size={16} weight="fill" /> Start Build
                        </a>
                        <Link
                            to="/services"
                            data-testid="gallery-services"
                            className="inline-flex items-center gap-2 text-white px-7 py-4 text-xs font-bold tracking-[0.2em] uppercase border border-white/20 hover:border-brand-blue transition-all"
                        >
                            Services <ArrowUpRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {activeIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={close}
                        data-testid="lightbox"
                    >
                        <button
                            onClick={close}
                            data-testid="lightbox-close"
                            className="absolute top-6 right-6 w-12 h-12 border border-white/15 text-white flex items-center justify-center hover:border-brand-blue hover:bg-brand-blue/20 transition-all"
                            aria-label="Close"
                        >
                            <X size={22} />
                        </button>
                        <button
                            onClick={prev}
                            data-testid="lightbox-prev"
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/15 text-white flex items-center justify-center hover:border-brand-blue hover:bg-brand-blue/20 transition-all"
                            aria-label="Previous"
                        >
                            <CaretLeft size={22} weight="bold" />
                        </button>
                        <button
                            onClick={next}
                            data-testid="lightbox-next"
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/15 text-white flex items-center justify-center hover:border-brand-blue hover:bg-brand-blue/20 transition-all"
                            aria-label="Next"
                        >
                            <CaretRight size={22} weight="bold" />
                        </button>
                        <motion.img
                            key={images[activeIndex]}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            src={images[activeIndex]}
                            alt={`Sagar Infotech build ${activeIndex + 1}`}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-[92vw] max-h-[88vh] object-contain"
                            data-testid="lightbox-image"
                        />
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.3em] uppercase text-zinc-400">
                            {activeIndex + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
