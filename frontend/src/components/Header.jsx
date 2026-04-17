import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { List, X, WhatsappLogo } from "@phosphor-icons/react";
import { BRAND } from "../lib/constants";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
];

export const Header = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <header
            data-testid="site-header"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "backdrop-blur-xl bg-black/70 border-b border-white/5"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-20">
                <Link
                    to="/"
                    className="flex items-center gap-3 group"
                    data-testid="logo-link"
                >
                    <div className="w-11 h-11 rounded-lg bg-white p-1 flex items-center justify-center overflow-hidden ring-1 ring-white/10 group-hover:ring-brand-blue transition-all">
                        <img
                            src={BRAND.logo}
                            alt="Sagar Infotech"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="hidden sm:flex flex-col leading-none">
                        <span className="font-display font-black text-white text-[15px] tracking-tight">
                            SAGAR INFOTECH
                        </span>
                        <span className="text-[10px] tracking-[0.25em] text-brand-blueLight uppercase mt-0.5">
                            Rajkot · Est. 2016
                        </span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-1" data-testid="desktop-nav">
                    {navLinks.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            end={l.to === "/"}
                            data-testid={`nav-${l.label.toLowerCase()}`}
                            className={({ isActive }) =>
                                `relative px-5 py-2 text-sm font-medium tracking-wide transition-colors ${
                                    isActive
                                        ? "text-white"
                                        : "text-zinc-400 hover:text-white"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {l.label}
                                    {isActive && (
                                        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-6 h-px bg-brand-blue" />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href={BRAND.whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        data-testid="header-whatsapp-cta"
                        className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-widest uppercase bg-brand-blue text-white hover:bg-brand-blueHover transition-all duration-300"
                    >
                        <WhatsappLogo size={16} weight="fill" />
                        <span>Get Quote</span>
                    </a>
                    <button
                        onClick={() => setOpen((v) => !v)}
                        className="md:hidden w-10 h-10 flex items-center justify-center text-white border border-white/10"
                        data-testid="mobile-menu-toggle"
                        aria-label="Menu"
                    >
                        {open ? <X size={20} /> : <List size={20} />}
                    </button>
                </div>
            </div>

            {open && (
                <div
                    className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5"
                    data-testid="mobile-nav"
                >
                    <nav className="flex flex-col px-6 py-4">
                        {navLinks.map((l) => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                end={l.to === "/"}
                                data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                                className={({ isActive }) =>
                                    `py-3 text-base font-medium border-b border-white/5 ${
                                        isActive ? "text-brand-blue" : "text-zinc-300"
                                    }`
                                }
                            >
                                {l.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
