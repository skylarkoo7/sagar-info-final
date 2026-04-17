import React from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { BRAND } from "../lib/constants";

export const WhatsAppFloat = () => {
    return (
        <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noreferrer"
            data-testid="floating-whatsapp"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-brand-blue hover:bg-brand-blueHover text-white flex items-center justify-center shadow-[0_10px_40px_rgba(30,115,190,0.45)] animate-pulse-blue transition-all duration-300 hover:scale-110"
        >
            <WhatsappLogo size={26} weight="fill" />
        </a>
    );
};

export default WhatsAppFloat;
