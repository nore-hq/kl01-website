"use client";

import React from "react";
import Image from "next/image";
import { soundFX } from "@/utils/soundFX";
import { Phone, ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#040507", color: "#FFFFFF", paddingTop: "clamp(40px, 6vw, 60px)", paddingBottom: "clamp(30px, 5vw, 36px)", borderTop: "1px solid rgba(230, 0, 18, 0.18)" }}>
      <div className="rr-container">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", paddingBottom: "32px", borderBottom: "1px solid rgba(255,255,255,0.06)", gap: "20px" }}>
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ width: "42px", height: "42px", position: "relative", flexShrink: 0 }}>
              <Image
                src="/assets/logo.png"
                alt="KL-01 Car Spa"
                width={120}
                height={60}
                style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 2px 10px rgba(230, 0, 18, 0.35))" }}
              />
            </div>
            <div>
              <div className="font-cinzel" style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.15em", color: "#FFFFFF" }}>
                KL<span style={{ color: "#E60012" }}>-01</span> CAR SPA
              </div>
              <div className="font-mono" style={{ fontSize: "8.5px", letterSpacing: "0.18em", color: "#E60012", textTransform: "uppercase" }}>
                Trivandrum Atelier
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }} className="font-cinzel">
            <a href="#atelier" onClick={() => soundFX.playClick()} style={{ fontSize: "11px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.7)" }}>
              ATELIER
            </a>
            <a href="#polish" onClick={() => soundFX.playClick()} style={{ fontSize: "11px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.7)" }}>
              POLISH
            </a>
            <a href="#services" onClick={() => soundFX.playClick()} style={{ fontSize: "11px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.7)" }}>
              SERVICES
            </a>
            <a href="#location" onClick={() => soundFX.playClick()} style={{ fontSize: "11px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.7)" }}>
              LOCATION
            </a>
          </div>

          {/* Contact action */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="tel:+919567512720"
              className="font-cinzel"
              style={{ fontSize: "12px", color: "#E60012", display: "flex", alignItems: "center", gap: "6px", textDecoration: "none" }}
            >
              <Phone size={13} /> +91 95675 12720
            </a>

            <button
              onClick={scrollToTop}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(230, 0, 18, 0.35)",
                color: "#E60012",
                padding: "8px 12px",
                borderRadius: "2px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "10px",
                fontFamily: "var(--font-mono)",
              }}
              title="Return to top"
            >
              <span>TOP</span>
              <ChevronUp size={12} />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", paddingTop: "20px", fontSize: "9.5px", fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.4)", gap: "10px" }}>
          <div>
            © {new Date().getFullYear()} KL-01 CAR SPA &amp; DETAILERS.
          </div>
          <div>
            KALLUMOODU, MUTTATHARA, TRIVANDRUM — 695008
          </div>
        </div>
      </div>
    </footer>
  );
}
