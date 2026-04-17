import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, WhatsappLogo, ArrowRight } from "@phosphor-icons/react";
import { BRAND, IMAGES, SERVICES } from "../lib/constants";

const Services = () => {
    return (
        <div data-testid="page-services">
            {/* Hero */}
            <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 grain overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <img
                        src={IMAGES.hero}
                        alt=""
                        className="w-full h-full object-cover fade-bottom"
                    />
                </div>
                <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex items-center gap-2 mb-8"
                    >
                        <span className="w-8 h-px bg-brand-blue" />
                        <span className="overline">Our Services</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="font-display font-black text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.03em] text-white max-w-5xl"
                    >
                        Everything your
                        <span className="italic text-gradient-blue"> rig </span>
                        could ever ask for.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-8 text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed"
                    >
                        Five specialised verticals, one bench. From custom
                        battle stations to board-level repair — this is what
                        we do, day in and day out.
                    </motion.p>
                </div>
            </section>

            {/* Service list (alternating) */}
            <section className="pb-24 md:pb-32 bg-brand-bg" data-testid="services-list">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col gap-20 md:gap-28">
                    {SERVICES.map((s, i) => {
                        const reverse = i % 2 === 1;
                        return (
                            <motion.article
                                key={s.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`grid lg:grid-cols-12 gap-10 items-center ${
                                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                                }`}
                                data-testid={`service-row-${s.id}`}
                            >
                                <div className="lg:col-span-6 relative">
                                    <div className="relative aspect-[5/4] overflow-hidden">
                                        <img
                                            src={IMAGES[s.image]}
                                            alt={s.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]"
                                        />
                                        <div className="absolute top-5 left-5 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-1.5 text-xs tracking-[0.3em] text-brand-blueLight font-bold">
                                            {s.number}
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6">
                                    <p className="overline mb-5">
                                        {`Service ${s.number}`}
                                    </p>
                                    <h2 className="font-display font-black text-3xl md:text-5xl text-white tracking-[-0.02em] leading-[1.05] mb-5">
                                        {s.title}
                                    </h2>
                                    <p className="text-zinc-400 leading-relaxed mb-8 max-w-xl">
                                        {s.description}
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                                        {s.features.map((f) => (
                                            <li
                                                key={f}
                                                className="flex items-start gap-2 text-sm text-zinc-300"
                                            >
                                                <CheckCircle
                                                    size={18}
                                                    weight="fill"
                                                    className="text-brand-blue shrink-0 mt-0.5"
                                                />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href={BRAND.whatsappLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        data-testid={`service-enquire-${s.id}`}
                                        className="group inline-flex items-center gap-2 text-white px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase border border-white/20 hover:border-brand-blue transition-all"
                                    >
                                        Enquire
                                        <ArrowRight
                                            size={14}
                                            weight="bold"
                                            className="group-hover:translate-x-1 transition-transform"
                                        />
                                    </a>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </section>

            {/* Process */}
            <section
                className="py-24 md:py-32 bg-brand-bg2 border-t border-white/5"
                data-testid="services-process"
            >
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
                    <div className="max-w-2xl mb-16">
                        <p className="overline mb-5">The Studio Workflow</p>
                        <h2 className="font-display font-black text-4xl md:text-5xl text-white tracking-[-0.02em] leading-[1.05]">
                            Four steps.
                            <span className="italic text-gradient-blue"> No surprises.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            {
                                n: "01",
                                t: "Consult",
                                d: "WhatsApp, call, or walk in. We listen before we spec.",
                            },
                            {
                                n: "02",
                                t: "Quote",
                                d: "Transparent, part-by-part. No hidden margins.",
                            },
                            {
                                n: "03",
                                t: "Craft",
                                d: "Assembly, cable management, BIOS tuning, stress test.",
                            },
                            {
                                n: "04",
                                t: "Deliver",
                                d: "Full walkthrough, warranty papers, lifetime service line.",
                            },
                        ].map((p, i) => (
                            <motion.div
                                key={p.n}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="bg-brand-surface border border-white/10 p-8 hover:border-brand-blue/40 transition-all"
                            >
                                <span className="font-display font-black text-5xl text-brand-blue/60 tracking-tighter block mb-4">
                                    {p.n}
                                </span>
                                <h3 className="font-display text-xl font-bold text-white mb-2">
                                    {p.t}
                                </h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    {p.d}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-brand-bg border-t border-white/5">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                    <h2 className="font-display font-black text-3xl md:text-5xl text-white tracking-[-0.02em] leading-[1.05] max-w-2xl">
                        Know what you want? <br />
                        <span className="italic text-gradient-blue">
                            Let's price it.
                        </span>
                    </h2>
                    <a
                        href={BRAND.whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        data-testid="services-cta-whatsapp"
                        className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-blueHover transition-all"
                    >
                        <WhatsappLogo size={16} weight="fill" /> Get a Quote
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Services;
