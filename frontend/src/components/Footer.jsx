import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, WhatsappLogo, Clock } from "@phosphor-icons/react";
import { BRAND } from "../lib/constants";

export const Footer = () => {
    return (
        <footer
            className="relative bg-brand-bg2 border-t border-white/5 pt-20 pb-10 overflow-hidden"
            data-testid="site-footer"
        >
            <div className="absolute inset-0 opacity-30 pointer-events-none hero-grid-bg" />
            <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/5">
                    <div className="lg:col-span-5 flex flex-col gap-5">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-white p-1 ring-1 ring-white/10">
                                <img
                                    src={BRAND.logo}
                                    alt="Sagar Infotech"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="font-display font-black text-white text-base tracking-tight">
                                    SAGAR INFOTECH
                                </span>
                                <span className="text-[10px] tracking-[0.25em] text-brand-blueLight uppercase mt-1">
                                    Rajkot · Since Day One
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
                            Hand-built gaming PCs, premium laptops, and
                            board-level repair — engineered out of Rajkot with
                            obsession-level precision.
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                            <a
                                href={BRAND.whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-widest uppercase bg-brand-blue text-white hover:bg-brand-blueHover transition-all"
                                data-testid="footer-whatsapp-cta"
                            >
                                <WhatsappLogo size={15} weight="fill" /> Chat Now
                            </a>
                            <a
                                href={BRAND.phoneLink}
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-widest uppercase text-white border border-white/15 hover:border-brand-blue transition-all"
                                data-testid="footer-call-cta"
                            >
                                <Phone size={15} weight="fill" /> Call
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <p className="overline mb-5">Navigate</p>
                        <ul className="flex flex-col gap-3">
                            {[
                                ["Home", "/"],
                                ["About", "/about"],
                                ["Services", "/services"],
                                ["Contact", "/contact"],
                            ].map(([l, to]) => (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        className="text-sm text-zinc-300 hover:text-brand-blueLight transition-colors"
                                        data-testid={`footer-nav-${l.toLowerCase()}`}
                                    >
                                        {l}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <p className="overline">Visit the Studio</p>
                        <div className="flex gap-3 items-start">
                            <MapPin
                                size={18}
                                weight="fill"
                                className="text-brand-blue mt-1 shrink-0"
                            />
                            <p
                                className="text-[13px] leading-relaxed text-zinc-300 tracking-wide"
                                data-testid="footer-address"
                            >
                                {BRAND.address}
                            </p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Phone
                                size={18}
                                weight="fill"
                                className="text-brand-blue shrink-0"
                            />
                            <a
                                href={BRAND.phoneLink}
                                className="text-sm text-white hover:text-brand-blueLight transition-colors tracking-wide"
                                data-testid="footer-phone"
                            >
                                {BRAND.phone}
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Clock
                                size={18}
                                weight="fill"
                                className="text-brand-blue shrink-0"
                            />
                            <p className="text-sm text-zinc-300 tracking-wide">
                                Mon–Sat · 10:00 AM – 9:00 PM
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <p className="text-xs text-zinc-500 tracking-widest uppercase">
                        © {new Date().getFullYear()} Sagar Infotech · All
                        Rights Reserved
                    </p>
                    <p className="text-xs text-zinc-500 tracking-widest uppercase">
                        Crafted in Rajkot, Gujarat
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
