"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { soundFX } from "@/utils/soundFX";
import { Phone, MessageSquare, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "ATELIER", href: "#atelier" },
    { name: "POLISH", href: "#polish" },
    { name: "SERVICES", href: "#services" },
    { name: "LOCATION", href: "#location" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.35s ease",
        backgroundColor: isScrolled || mobileMenuOpen ? "rgba(6, 7, 9, 0.96)" : "transparent",
        backdropFilter: isScrolled || mobileMenuOpen ? "blur(20px)" : "none",
        WebkitBackdropFilter: isScrolled || mobileMenuOpen ? "blur(20px)" : "none",
        borderBottom: isScrolled || mobileMenuOpen ? "1px solid rgba(230, 0, 18, 0.22)" : "1px solid rgba(255,255,255,0.05)",
        padding: isScrolled ? "10px 0" : "16px 0",
      }}
    >
      <div className="rr-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Brand Identity */}
        <a
          href="#"
          onClick={() => soundFX.playClick()}
          style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
        >
          <div style={{ position: "relative", width: "40px", height: "40px", flexShrink: 0 }}>
            <Image
              src="/assets/logo.png"
              alt="KL01 Car Spa"
              width={120}
              height={60}
              style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 2px 8px rgba(230, 0, 18, 0.3))" }}
              priority
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              className="font-cinzel"
              style={{
                fontSize: "clamp(13px, 2.5vw, 16px)",
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#FFFFFF",
                lineHeight: 1.2,
              }}
            >
              KL<span style={{ color: "#E60012" }}>-01</span> CAR SPA
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: "clamp(7.5px, 1.4vw, 9px)",
                letterSpacing: "0.22em",
                color: "rgba(255, 255, 255, 0.55)",
                textTransform: "uppercase",
                marginTop: "2px",
              }}
            >
              Trivandrum Atelier
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} className="hidden-mobile">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => soundFX.playClick()}
              className="font-cinzel"
              style={{
                fontSize: "11px",
                letterSpacing: "0.22em",
                color: "rgba(255, 255, 255, 0.75)",
                textTransform: "uppercase",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E60012")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)")}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Direct Concierge WhatsApp Button (Desktop) */}
          <a
            href="https://wa.me/919567512720?text=Hello%20KL-01%20Car%20Spa,%20I%20would%20like%20to%20inquire%20about%20a%20bespoke%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playThrottle()}
            className="rr-btn-gold hidden-mobile"
            style={{ padding: "10px 22px", fontSize: "11px" }}
          >
            <MessageSquare size={13} />
            <span>BOOK ATELIER</span>
          </a>

          {/* Compact Mobile WhatsApp Button */}
          <a
            href="https://wa.me/919567512720?text=Hello%20KL-01%20Car%20Spa,%20I%20would%20like%20to%20inquire%20about%20a%20service."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playThrottle()}
            className="show-mobile-flex"
            style={{
              padding: "7px 12px",
              backgroundColor: "rgba(230, 0, 18, 0.15)",
              border: "1px solid rgba(230, 0, 18, 0.45)",
              color: "#FFFFFF",
              fontSize: "10px",
              fontFamily: "var(--font-cinzel)",
              fontWeight: 700,
              letterSpacing: "0.12em",
              borderRadius: "2px",
              alignItems: "center",
              gap: "5px",
              textDecoration: "none",
            }}
          >
            <MessageSquare size={11} color="#E60012" />
            <span>BOOK</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => {
              soundFX.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="show-mobile-flex"
            style={{
              padding: "8px 10px",
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#FFFFFF",
              cursor: "pointer",
              borderRadius: "2px",
              alignItems: "center",
              justifyContent: "center",
            }}
            id="mobile-nav-toggle-btn"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={18} color="#E60012" /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: "fixed",
              top: "60px",
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              zIndex: 48,
            }}
          />
          <div
            style={{
              position: "fixed",
              top: "60px",
              left: 0,
              right: 0,
              backgroundColor: "rgba(6, 7, 9, 0.98)",
              borderBottom: "1px solid rgba(230, 0, 18, 0.3)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.9)",
              padding: "24px 20px 32px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              zIndex: 49,
              maxHeight: "calc(100vh - 60px)",
              overflowY: "auto",
            }}
          >
            <div className="font-mono" style={{ fontSize: "9px", letterSpacing: "0.24em", color: "#E60012", textTransform: "uppercase" }}>
              NAVIGATION MENU
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    soundFX.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="font-cinzel"
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    color: "#FFFFFF",
                    padding: "12px 14px",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textDecoration: "none",
                  }}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={14} color="#E60012" />
                </a>
              ))}
            </nav>

            {/* Quick Actions in Mobile Drawer */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
              <a
                href="https://wa.me/919567512720?text=Hello%20KL-01%20Car%20Spa,%20I%20would%20like%20to%20book%20a%20service."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  soundFX.playThrottle();
                  setMobileMenuOpen(false);
                }}
                className="rr-btn-gold"
                style={{ width: "100%", padding: "14px 20px", fontSize: "11px" }}
              >
                <MessageSquare size={13} />
                <span>BOOK APPOINTMENT VIA WHATSAPP</span>
              </a>

              <a
                href="tel:+919567512720"
                onClick={() => soundFX.playClick()}
                className="rr-btn-outline"
                style={{ width: "100%", padding: "13px 20px", fontSize: "11px", color: "#FFFFFF" }}
              >
                <Phone size={13} color="#E60012" />
                <span>CALL: +91 95675 12720</span>
              </a>
            </div>

            <div style={{ textAlign: "center", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <span className="font-mono" style={{ fontSize: "8.5px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Kallumoodu, Muttathara, Trivandrum
              </span>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
