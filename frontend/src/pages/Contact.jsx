import React from "react";
import { motion } from "framer-motion";
import {
    MapPin,
    Phone,
    WhatsappLogo,
    Clock,
    EnvelopeSimple,
    ArrowUpRight,
} from "@phosphor-icons/react";
import { BRAND } from "../lib/constants";

const Contact = () => {
    const mapSrc = `https://www.google.com/maps?q=${BRAND.mapQuery}&output=embed`;

    return (
        <div data-testid="page-contact">
            {/* Hero */}
            <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 grain overflow-hidden">
                <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex items-center gap-2 mb-8"
                    >
                        <span className="w-8 h-px bg-brand-blue" />
                        <span className="overline">Visit · Call · Chat</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="font-display font-black text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.03em] text-white max-w-5xl"
                    >
                        Come say
                        <span className="italic text-gradient-blue"> hello.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-8 text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed"
                    >
                        Step into the studio on University Road, or drop us a
                        WhatsApp. Either way, you'll talk to a human who
                        actually builds PCs.
                    </motion.p>
                </div>
            </section>

            {/* Contact grid */}
            <section className="pb-24 md:pb-28 bg-brand-bg" data-testid="contact-grid">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-8">
                    {/* Info cards */}
                    <div className="lg:col-span-5 grid grid-cols-1 gap-5">
                        <InfoCard
                            icon={MapPin}
                            overline="The Studio"
                            title="Drop By in Person"
                            testid="info-address"
                        >
                            <p
                                className="text-[13px] leading-relaxed text-zinc-300 tracking-wide"
                                data-testid="contact-address"
                            >
                                {BRAND.address}
                            </p>
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${BRAND.mapQuery}`}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-4 inline-flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase font-bold text-brand-blueLight hover:text-white transition-colors"
                                data-testid="open-in-maps"
                            >
                                Open in Maps
                                <ArrowUpRight size={14} weight="bold" />
                            </a>
                        </InfoCard>

                        <InfoCard
                            icon={Phone}
                            overline="Call Direct"
                            title="Dial us Anytime"
                            testid="info-phone"
                        >
                            <a
                                href={BRAND.phoneLink}
                                className="font-display text-3xl md:text-4xl font-black text-white tracking-tight hover:text-brand-blueLight transition-colors"
                                data-testid="contact-phone"
                            >
                                {BRAND.phone}
                            </a>
                            <p className="mt-3 text-xs text-zinc-500 tracking-wide">
                                Most answered within 2 rings during studio hours.
                            </p>
                        </InfoCard>

                        <InfoCard
                            icon={WhatsappLogo}
                            overline="Fastest Response"
                            title="Message on WhatsApp"
                            testid="info-whatsapp"
                        >
                            <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                                Quotes, specs, part availability — all handled on chat.
                            </p>
                            <a
                                href={BRAND.whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="contact-whatsapp-cta"
                                className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-blueHover transition-all"
                            >
                                <WhatsappLogo size={15} weight="fill" /> Chat Now
                            </a>
                        </InfoCard>

                        <InfoCard
                            icon={Clock}
                            overline="Studio Hours"
                            title="When We're Open"
                            testid="info-hours"
                        >
                            <div className="space-y-2 text-sm">
                                <HourRow day="Mon — Sat" time="10:00 AM – 9:00 PM" />
                                <HourRow day="Sunday" time="Closed" muted />
                            </div>
                        </InfoCard>
                    </div>

                    {/* Map */}
                    <div className="lg:col-span-7">
                        <div className="sticky top-28">
                            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[820px] w-full overflow-hidden border border-white/10 bg-brand-surface">
                                <iframe
                                    title="Sagar Infotech Map"
                                    src={mapSrc}
                                    width="100%"
                                    height="100%"
                                    style={{
                                        border: 0,
                                        filter:
                                            "invert(0.92) hue-rotate(180deg) saturate(0.85) contrast(1.05)",
                                    }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                    data-testid="contact-map"
                                />
                                <div className="absolute bottom-6 left-6 right-6 bg-black/85 backdrop-blur-xl border border-white/10 p-5 max-w-md">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="w-6 h-px bg-brand-blue" />
                                        <span className="overline">Find Us Here</span>
                                    </div>
                                    <p className="text-sm text-white leading-relaxed tracking-wide">
                                        Darshan Arcade, University Road — next
                                        to HP Petrol Pump, opposite Shanti
                                        Multispeciality Hospital.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom band */}
            <section className="py-16 bg-brand-bg2 border-t border-white/5">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <EnvelopeSimple
                            size={22}
                            weight="duotone"
                            className="text-brand-blueLight"
                        />
                        <p className="text-sm text-zinc-400 tracking-wide">
                            Prefer a call back? Send us "CALL ME" on WhatsApp.
                        </p>
                    </div>
                    <a
                        href={BRAND.phoneLink}
                        className="inline-flex items-center gap-2 text-white px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase border border-white/20 hover:border-brand-blue transition-all"
                        data-testid="contact-bottom-call"
                    >
                        <Phone size={14} weight="fill" /> {BRAND.phone}
                    </a>
                </div>
            </section>
        </div>
    );
};

const InfoCard = ({ icon: Icon, overline, title, children, testid }) => (
    <div
        className="bg-brand-surface border border-white/10 p-7 md:p-8 hover:border-brand-blue/40 transition-all duration-300"
        data-testid={testid}
    >
        <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 border border-brand-blue/40 flex items-center justify-center text-brand-blueLight">
                <Icon size={18} weight="duotone" />
            </div>
            <span className="overline">{overline}</span>
        </div>
        <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
            {title}
        </h3>
        {children}
    </div>
);

const HourRow = ({ day, time, muted }) => (
    <div className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0">
        <span className="text-zinc-300 tracking-wide">{day}</span>
        <span
            className={`tracking-wide ${muted ? "text-zinc-500" : "text-brand-blueLight font-medium"}`}
        >
            {time}
        </span>
    </div>
);

export default Contact;
