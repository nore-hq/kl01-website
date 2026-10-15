"use client";

import React from "react";
import { soundFX } from "@/utils/soundFX";
import { MapPin, Navigation, MessageSquare } from "lucide-react";

export default function StudioSection() {
  return (
    <section id="location" style={{ padding: "clamp(60px, 8vw, 90px) 0", backgroundColor: "#060709", borderBottom: "1px solid rgba(230, 0, 18, 0.18)" }}>
      <div className="rr-container">
        {/* Minimal Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto clamp(28px, 5vw, 40px) auto" }}>
          <span className="font-mono" style={{ fontSize: "clamp(9px, 1.8vw, 10px)", letterSpacing: "0.25em", color: "#E60012", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
            STUDIO LOCATION
          </span>
          <h2 className="font-cinzel" style={{ fontSize: "clamp(1.7rem, 4vw, 3rem)", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.05em", marginBottom: "8px" }}>
            VISIT OUR <span style={{ color: "#E60012" }}>STUDIO</span>
          </h2>
          <p className="font-serif" style={{ fontSize: "clamp(0.95rem, 2vw, 16px)", color: "var(--text-secondary)", fontStyle: "italic", padding: "0 10px" }}>
            Kallumoodu, Muttathara, Thiruvananthapuram
          </p>
        </div>

        {/* Google Maps Display & Location Card */}
        <div className="rr-card" style={{ padding: "clamp(14px, 3vw, 20px)", borderRadius: "2px", overflow: "hidden" }}>
          {/* Interactive Google Map Iframe */}
          <div style={{ height: "clamp(260px, 45vw, 420px)", width: "100%", borderRadius: "2px", overflow: "hidden", position: "relative" }}>
            <iframe
              title="KL-01 Car Spa Studio Location"
              src="https://maps.google.com/maps?q=KL-01+Car+Spa+Kallumoodu+Muttathara+Manacaud+Thiruvananthapuram+Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.15)" }}
              loading="lazy"
            />
            <div
              className="font-mono"
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                backgroundColor: "rgba(6, 7, 9, 0.85)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(230, 0, 18, 0.45)",
                padding: "5px 12px",
                fontSize: "clamp(8px, 1.8vw, 10px)",
                color: "#E60012",
                borderRadius: "2px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              KALLUMOODU // MUTTATHARA, TRIVANDRUM
            </div>
          </div>

          {/* Minimalist Details Strip Below Map */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", padding: "clamp(18px, 3vw, 24px) 8px 10px 8px", gap: "18px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", maxWidth: "560px" }}>
              <MapPin size={20} color="#E60012" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <div className="font-cinzel font-bold text-white uppercase" style={{ fontSize: "clamp(11px, 2vw, 12px)", letterSpacing: "0.1em", marginBottom: "4px" }}>
                  TC 68/1098/13, Manacaud - Muttathara Road
                </div>
                <div className="font-sans" style={{ fontSize: "clamp(11.5px, 2vw, 13px)", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Near New Rajasthan Marbles &amp; Indian Oil Petrol Pump, Kallumoodu, Trivandrum – 695008
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", width: "100%", maxWidth: "480px" }}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=KL-01+Car+Spa+Muttathara+Thiruvananthapuram+Kerala"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="rr-btn-gold"
                style={{ padding: "12px 20px", fontSize: "10.5px", flex: "1 1 200px" }}
              >
                <Navigation size={13} />
                <span>GOOGLE MAPS</span>
              </a>

              <a
                href="https://wa.me/919567512720?text=Hello%20KL-01%20Car%20Spa,%20I%20would%20like%20to%20visit%20your%20studio."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playThrottle()}
                className="rr-btn-outline"
                style={{ padding: "12px 20px", fontSize: "10.5px", flex: "1 1 200px" }}
              >
                <MessageSquare size={13} />
                <span>WHATSAPP CHAT</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
