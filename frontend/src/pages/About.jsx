import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Medal,
    Users,
    ChartLineUp,
    HandHeart,
    WhatsappLogo,
} from "@phosphor-icons/react";
import { BRAND, IMAGES, STATS } from "../lib/constants";

const values = [
    {
        icon: Medal,
        title: "Craftsmanship",
        desc: "Every cable routed, every thermal pad set with obsession. A PC from our bench is a portfolio piece.",
    },
    {
        icon: HandHeart,
        title: "Honest Counsel",
        desc: "We'll tell you when you're over-spending. We'd rather sell you the right machine than the biggest one.",
    },
    {
        icon: ChartLineUp,
        title: "Performance First",
        desc: "We benchmark, we tune, we validate. If it doesn't hit the numbers, it doesn't leave the studio.",
    },
    {
        icon: Users,
        title: "A Community, Not Clients",
        desc: "Gamers, creators, students, coders — we speak their language because we are them.",
    },
];

const About = () => {
    return (
        <div data-testid="page-about">
            {/* Hero */}
            <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden grain">
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <img
                        src={IMAGES.circuitMacro}
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
                        <span className="overline">About Sagar Infotech</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="font-display font-black text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.03em] text-white max-w-5xl"
                    >
                        A little workshop in
                        <span className="italic text-gradient-blue">
                            {" "}
                            Rajkot,
                        </span>{" "}
                        obsessed with the
                        <span className="italic text-gradient-blue">
                            {" "}
                            perfect build.
                        </span>
                    </motion.h1>
                </div>
            </section>

            {/* Story */}
            <section className="py-24 md:py-28 bg-brand-bg" data-testid="about-story">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-14 items-start">
                    <div className="lg:col-span-5">
                        <p className="overline mb-5">Our Story</p>
                        <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-[-0.02em] leading-tight">
                            Started with a screwdriver and a stubborn love for
                            <span className="italic text-gradient-blue">
                                {" "}
                                perfect frames.
                            </span>
                        </h2>
                    </div>
                    <div className="lg:col-span-7 space-y-6 text-zinc-400 leading-relaxed text-[15px]">
                        <p>
                            Sagar Infotech began the way all good workshops do
                            — with a cluttered desk, a soldering iron, and a
                            queue of friends asking "can you fix mine?" From
                            that modest corner on University Road, we grew
                            into Rajkot's go-to studio for serious gaming
                            rigs, productivity laptops, and the kind of
                            hardware repair that actually fixes things.
                        </p>
                        <p>
                            What hasn't changed is the bench itself. We still
                            build one machine at a time. We still benchmark
                            every rig before it walks out. We still pick up
                            the phone when you call. Because speed and
                            quality aren't a trade-off here — they're the
                            house standard.
                        </p>
                        <p>
                            Whether it's your first custom PC, your third GPU
                            upgrade, or a laptop that refuses to boot — we
                            treat every machine like it's our own. That's
                            the only way we know how to work.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-brand-bg2 border-y border-white/5">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-10">
                    {STATS.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.08 }}
                            className="border-l-2 border-brand-blue pl-5"
                        >
                            <span className="font-display font-black text-4xl md:text-6xl text-white block">
                                {s.value}
                            </span>
                            <span className="text-[10px] text-zinc-400 tracking-[0.25em] uppercase mt-2 block">
                                {s.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Values */}
            <section className="py-24 md:py-32 bg-brand-bg" data-testid="about-values">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
                    <div className="max-w-2xl mb-16">
                        <p className="overline mb-5">What Drives Us</p>
                        <h2 className="font-display font-black text-4xl md:text-5xl text-white tracking-[-0.02em] leading-[1.05]">
                            Four values. Every single build.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="bg-brand-surface border border-white/10 p-8 md:p-10 hover:border-brand-blue/40 hover:-translate-y-1 transition-all duration-300"
                                data-testid={`value-card-${i}`}
                            >
                                <div className="w-12 h-12 border border-brand-blue/40 flex items-center justify-center text-brand-blueLight mb-6">
                                    <v.icon size={22} weight="duotone" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-white mb-3 tracking-tight">
                                    {v.title}
                                </h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    {v.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-24 bg-brand-bg2 border-t border-white/5">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                    <div className="max-w-2xl">
                        <p className="overline mb-4">Let's Work Together</p>
                        <h2 className="font-display font-black text-3xl md:text-5xl text-white tracking-[-0.02em] leading-[1.05]">
                            Your next machine starts with a conversation.
                        </h2>
                    </div>
                    <div className="flex gap-3">
                        <a
                            href={BRAND.whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="about-whatsapp-btn"
                            className="inline-flex items-center gap-2 bg-brand-blue text-white px-7 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-blueHover transition-all"
                        >
                            <WhatsappLogo size={16} weight="fill" /> Start Chat
                        </a>
                        <Link
                            to="/services"
                            data-testid="about-services-btn"
                            className="inline-flex items-center gap-2 text-white px-7 py-4 text-xs font-bold tracking-[0.2em] uppercase border border-white/20 hover:border-brand-blue transition-all"
                        >
                            Services <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
