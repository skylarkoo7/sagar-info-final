import React from "react";
import { motion } from "framer-motion";
import { Star, GoogleLogo, Quotes, ArrowUpRight } from "@phosphor-icons/react";
import { TESTIMONIALS, GOOGLE_REVIEWS_URL } from "../lib/gallery";

export const Testimonials = () => {
    return (
        <section
            className="relative py-24 md:py-32 bg-brand-bg overflow-hidden"
            data-testid="testimonials-section"
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
                <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
                    <div className="lg:col-span-7">
                        <p className="overline mb-5">Word on the Street</p>
                        <h2 className="font-display font-black text-4xl md:text-6xl text-white tracking-[-0.03em] leading-[1]">
                            Don't take our word.
                            <br />
                            <span className="italic text-gradient-blue">
                                Take theirs.
                            </span>
                        </h2>
                    </div>
                    <div className="lg:col-span-5 flex lg:justify-end items-center gap-5">
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                                <div className="flex gap-0.5 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            weight="fill"
                                            className="text-brand-blueLight"
                                        />
                                    ))}
                                </div>
                                <span className="font-display font-bold text-white text-lg leading-none">
                                    4.9 / 5
                                </span>
                                <span className="text-[10px] tracking-[0.25em] text-zinc-500 uppercase mt-1">
                                    Google Reviews
                                </span>
                            </div>
                            <a
                                href={GOOGLE_REVIEWS_URL}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="google-reviews-link"
                                className="inline-flex items-center gap-2 px-5 py-3 text-[11px] font-bold tracking-[0.2em] uppercase text-white border border-white/15 hover:border-brand-blue hover:bg-brand-blue/10 transition-all"
                            >
                                <GoogleLogo size={14} weight="bold" />
                                View All
                                <ArrowUpRight size={12} weight="bold" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.6,
                                delay: Math.min(i * 0.08, 0.35),
                            }}
                            className="group relative bg-brand-surface border border-white/10 p-8 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[0_10px_40px_rgba(30,115,190,0.12)] transition-all duration-500"
                            data-testid={`testimonial-${i}`}
                        >
                            <Quotes
                                size={36}
                                weight="fill"
                                className="text-brand-blue/25 absolute top-6 right-6"
                            />
                            <div className="flex gap-0.5 mb-5">
                                {[...Array(t.stars)].map((_, j) => (
                                    <Star
                                        key={j}
                                        size={14}
                                        weight="fill"
                                        className="text-brand-blueLight"
                                    />
                                ))}
                            </div>
                            <p className="text-[15px] text-zinc-300 leading-relaxed mb-8">
                                "{t.text}"
                            </p>
                            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                <div>
                                    <p className="font-display font-bold text-white text-sm">
                                        {t.name}
                                    </p>
                                    <p className="text-[11px] tracking-[0.15em] uppercase text-zinc-500 mt-1">
                                        {t.role}
                                    </p>
                                </div>
                                <GoogleLogo
                                    size={18}
                                    weight="bold"
                                    className="text-zinc-600 group-hover:text-brand-blueLight transition-colors"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
