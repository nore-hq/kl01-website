"use client";

import React from "react";
import { soundFX } from "@/utils/soundFX";
import { Phone, MessageSquare } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="mobile-sticky-bar" aria-label="Quick contact actions">
      <a
        href="tel:+919567512720"
        onClick={() => soundFX.playClick()}
        className="bar-call"
      >
        <Phone size={13} color="#E60012" />
        <span>CALL ATELIER</span>
      </a>

      <a
        href="https://wa.me/919567512720?text=Hello%20KL-01%20Car%20Spa,%20I%20would%20like%20to%20inquire%20about%20a%20car%20detailing%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => soundFX.playThrottle()}
        className="bar-whatsapp"
      >
        <MessageSquare size={13} color="#FFFFFF" />
        <span>WHATSAPP</span>
      </a>
    </div>
  );
}
