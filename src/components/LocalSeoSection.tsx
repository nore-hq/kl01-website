"use client";

import React, { useState } from "react";
import { soundFX } from "@/utils/soundFX";
import {
  Sparkles,
  Wrench,
  Droplets,
  ShieldCheck,
  ChevronDown,
  Navigation,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Award
} from "lucide-react";

export default function LocalSeoSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    soundFX.playClick();
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const localities = [
    "Manacaud (Manakkad)",
    "Muttathara",
    "Kallumoodu Junction",
    "Kamaleswaram",
    "Ambalathara",
    "Attukal",
    "Chalai",
    "East Fort",
    "Thiruvallam",
    "Trivandrum (KL01)"
  ];

  const pillarCards = [
    {
      icon: <Sparkles size={22} color="#E60012" />,
      tag: "PREMIUM DETAILING",
      title: "Best Car Spa in Manacaud & Muttathara",
      desc: "Comprehensive luxury car spa with 3-stage rotary & dual-action machine paint polish, swirl mark elimination, high-grade ceramic coatings, and self-healing PPF designed for Trivandrum's tropical climate.",
      highlights: ["3-Stage Paint Correction", "Ceramic & Graphene Coating", "Interior Deep Steam Extraction"]
    },
    {
      icon: <Droplets size={22} color="#E60012" />,
      tag: "PRESSURE FOAM WASH",
      title: "Best Car Wash in Manacaud & Muttathara",
      desc: "Touchless high-pressure pre-rinse followed by thick pH-neutral snow foam washing, high-blast underbody chassis flushing, microfibre drying, and alloy wheel decontamination.",
      highlights: ["pH-Neutral Snow Foam", "Underbody Chassis Jet Wash", "Swirl-Free Microfibre Care"]
    },
    {
      icon: <Wrench size={22} color="#E60012" />,
      tag: "GARAGE & REPAIR",
      title: "Best Garage & Car Service Centre",
      desc: "Fully equipped automotive repair garage at Kallumoodu on the Manacaud-Muttathara Road. Periodic synthetic oil servicing, brake inspections, suspension overhauls, and OBD2 scanner diagnostics.",
      highlights: ["Periodic Maintenance & Oil", "Brakes & Suspension Tuning", "OBD2 Computer Diagnostics"]
    },
    {
      icon: <ShieldCheck size={22} color="#E60012" />,
      tag: "BODY & PROTECTION",
      title: "Denting, Painting & Anti-Rust Studio",
      desc: "Expert panel dent straightening, digital computerized shade matching, high-bake booth repainting, and rubberized underbody anti-rust coatings to shield against road salts and monsoon rains.",
      highlights: ["Precision Panel Dent Repair", "Oven-Baked Clearcoat Finish", "Rubberized Underbody Seal"]
    }
  ];

  const faqs = [
    {
      q: "Which is the best car spa and car wash in Manacaud and Muttathara?",
      a: "KL-01 Car Spa & Detailers is widely rated as the premier car spa and car wash studio in the Manacaud and Muttathara region of Trivandrum. Situated right at Kallumoodu Junction, KL-01 delivers touchless high-pressure washes, rich pH-neutral snow foam, deep interior steam extraction, multi-stage machine paint polish, and professional ceramic/PPF protective coatings."
    },
    {
      q: "Where can I find the best garage and car service centre near Manacaud or Muttathara?",
      a: "KL-01 Car Spa operates a fully certified automotive repair garage and service centre located at Kallumoodu Junction (near New Rajasthan Marbles & Indian Oil Petrol Pump), directly on the Manacaud-Muttathara Road. We handle routine engine oil servicing, brake and suspension repair, OBD2 scanner diagnostics, car A/C gas recharge, and denting & painting."
    },
    {
      q: "What car detailing services are available at KL-01 Car Spa in Muttathara Trivandrum?",
      a: "Our detailing catalog includes Self-Healing Paint Protection Film (PPF), 10H Ceramic Coating, Graphene Shielding, 3-Stage Mirror Finish Machine Polish, Headlight Yellowing Restoration, Glass Water-Spot Polish, Rubberized Underbody Anti-Rust Treatment, and complete interior upholstery shampooing."
    },
    {
      q: "How far is KL-01 Car Spa from Manacaud Junction and Muttathara Bypass?",
      a: "KL-01 Car Spa is located directly on the connecting Manacaud - Muttathara Road at Kallumoodu (TC 68/1098/13). It is only 3 minutes (approx. 1 km) from Manacaud Junction and 2 minutes from Muttathara / Kamaleswaram, featuring easy vehicular access and ample dedicated parking for hatchbacks, sedans, and large luxury SUVs."
    },
    {
      q: "How can I book an appointment or check car wash and garage slot availability?",
      a: "You can book directly via WhatsApp at +91 95675 12720 or call the concierge desk. Walk-ins are also welcome for express foam car washes, paint evaluations, and mechanical diagnostics."
    }
  ];

  return (
    <section
      id="local-hub"
      style={{
        padding: "clamp(60px, 8vw, 100px) 0",
        backgroundColor: "#060709",
        borderBottom: "1px solid rgba(230, 0, 18, 0.18)",
        position: "relative"
      }}
    >
      <div className="rr-container">
        {/* Editorial Section Header */}
        <div style={{ textAlign: "center", maxWidth: "840px", margin: "0 auto clamp(32px, 5vw, 48px) auto" }}>
          <span
            className="font-mono"
            style={{
              fontSize: "clamp(9px, 1.8vw, 10px)",
              letterSpacing: "0.26em",
              color: "#E60012",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "10px"
            }}
          >
            LOCAL SERVICE HUB // TRIVANDRUM
          </span>
          <h2
            className="font-cinzel"
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "0.06em",
              lineHeight: 1.2,
              marginBottom: "16px"
            }}
          >
            BEST CAR SPA, CAR WASH &amp; GARAGE IN{" "}
            <span style={{ color: "#E60012" }}>MANACAUD &amp; MUTTATHARA</span>
          </h2>
          <p
            className="font-serif"
            style={{
              fontSize: "clamp(0.95rem, 2vw, 15.5px)",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              maxWidth: "720px",
              margin: "0 auto"
            }}
          >
            Centrally situated at Kallumoodu on the Manacaud–Muttathara road,{" "}
            <strong style={{ color: "#FFFFFF", fontWeight: 600 }}>KL-01 Car Spa &amp; Detailers</strong>{" "}
            combines master craftsmanship, cutting-edge detailing technology, and certified mechanical garage care for vehicle owners seeking pure excellence.
          </p>

          {/* Quick Geo Badges */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
              marginTop: "22px"
            }}
          >
            {localities.map((loc, idx) => (
              <span
                key={idx}
                className="font-mono"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.14em",
                  padding: "5px 11px",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(230, 0, 18, 0.25)",
                  color: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "2px",
                  textTransform: "uppercase"
                }}
              >
                📍 {loc}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Pillar Service Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "clamp(40px, 6vw, 60px)"
          }}
        >
          {pillarCards.map((card, i) => (
            <div
              key={i}
              className="rr-card"
              style={{
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "rgba(10, 12, 16, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                position: "relative",
                transition: "all 0.3s ease"
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "2px",
                      backgroundColor: "rgba(230, 0, 18, 0.1)",
                      border: "1px solid rgba(230, 0, 18, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {card.icon}
                  </div>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "8.5px",
                      letterSpacing: "0.2em",
                      color: "#E60012",
                      textTransform: "uppercase"
                    }}
                  >
                    {card.tag}
                  </span>
                </div>

                <h3
                  className="font-cinzel"
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    letterSpacing: "0.04em",
                    marginBottom: "10px",
                    lineHeight: 1.3
                  }}
                >
                  {card.title}
                </h3>

                <p
                  className="font-sans"
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                    marginBottom: "16px"
                  }}
                >
                  {card.desc}
                </p>
              </div>

              {/* Bullet highlights */}
              <div
                style={{
                  paddingTop: "14px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px"
                }}
              >
                {card.highlights.map((h, hi) => (
                  <div
                    key={hi}
                    className="font-mono"
                    style={{
                      fontSize: "10px",
                      color: "rgba(255, 255, 255, 0.75)",
                      letterSpacing: "0.08em",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    <span style={{ color: "#E60012", fontSize: "12px" }}>✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Local Verification & Landmark Info Banner */}
        <div
          className="rr-card"
          style={{
            padding: "clamp(20px, 4vw, 30px)",
            marginBottom: "clamp(40px, 6vw, 60px)",
            backgroundColor: "rgba(10, 12, 16, 0.9)",
            border: "1px solid rgba(230, 0, 18, 0.35)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px"
          }}
        >
          <div style={{ flex: "1 1 340px" }}>
            <span
              className="font-mono"
              style={{
                fontSize: "9px",
                letterSpacing: "0.22em",
                color: "#E60012",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "6px"
              }}
            >
              DRIVING DISTANCES &amp; LANDMARKS
            </span>
            <h4
              className="font-cinzel"
              style={{
                fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.04em",
                marginBottom: "8px"
              }}
            >
              Effortless Access from Manacaud &amp; Muttathara
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12.5px", color: "var(--text-secondary)" }}>
                <MapPin size={16} color="#E60012" style={{ flexShrink: 0 }} />
                <span>
                  <strong style={{ color: "#FFF" }}>From Manacaud Junction:</strong> 1.1 km (approx. 3 mins via Muttathara Main Road)
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12.5px", color: "var(--text-secondary)" }}>
                <MapPin size={16} color="#E60012" style={{ flexShrink: 0 }} />
                <span>
                  <strong style={{ color: "#FFF" }}>From Muttathara / Kamaleswaram:</strong> 850 metres (approx. 2 mins via Kallumoodu)
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12.5px", color: "var(--text-secondary)" }}>
                <Clock size={16} color="#E60012" style={{ flexShrink: 0 }} />
                <span>
                  <strong style={{ color: "#FFF" }}>Timings:</strong> Open Daily 8:30 AM – 8:30 PM (Early morning wash slots available)
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", flex: "1 1 260px", justifyContent: "flex-end" }}>
            <a
              href="https://www.google.com/maps/search/?api=1&query=KL-01+Car+Spa+Muttathara+Thiruvananthapuram+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="rr-btn-gold"
              style={{ padding: "12px 20px", fontSize: "10.5px", flex: "1 1 180px", textAlign: "center" }}
            >
              <Navigation size={13} />
              <span>GET DIRECTIONS</span>
            </a>
            <a
              href="https://wa.me/919567512720?text=Hello%20KL-01%20Car%20Spa,%20I%20am%20looking%20for%20car%20spa/garage%20services%20in%20Manacaud/Muttathara."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playThrottle()}
              className="rr-btn-outline"
              style={{ padding: "12px 20px", fontSize: "10.5px", flex: "1 1 180px", textAlign: "center" }}
            >
              <MessageSquare size={13} />
              <span>WHATSAPP CONSULT</span>
            </a>
          </div>
        </div>

        {/* Local Frequently Asked Questions (FAQ) Accordion */}
        <div style={{ maxWidth: "840px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <span
              className="font-mono"
              style={{
                fontSize: "9px",
                letterSpacing: "0.24em",
                color: "#E60012",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "8px"
              }}
            >
              ANSWERS FOR CAR OWNERS
            </span>
            <h3
              className="font-cinzel"
              style={{
                fontSize: "clamp(1.4rem, 3.2vw, 2.2rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.05em"
              }}
            >
              MANACAUD &amp; MUTTATHARA <span style={{ color: "#E60012" }}>CAR CARE FAQ</span>
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: isOpen ? "rgba(18, 20, 26, 0.9)" : "rgba(10, 12, 16, 0.6)",
                    border: isOpen ? "1px solid rgba(230, 0, 18, 0.45)" : "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "2px",
                    overflow: "hidden",
                    transition: "all 0.25s ease"
                  }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    style={{
                      width: "100%",
                      padding: "16px 20px",
                      background: "transparent",
                      border: "none",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "14px",
                      cursor: "pointer",
                      textAlign: "left"
                    }}
                    aria-expanded={isOpen}
                  >
                    <span
                      className="font-cinzel"
                      style={{
                        fontSize: "clamp(12.5px, 2vw, 14.5px)",
                        fontWeight: 600,
                        letterSpacing: "0.03em",
                        color: isOpen ? "#E60012" : "#FFFFFF"
                      }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      color={isOpen ? "#E60012" : "rgba(255,255,255,0.6)"}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                        flexShrink: 0
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 20px 18px 20px",
                        fontSize: "13px",
                        lineHeight: 1.6,
                        color: "var(--text-secondary)",
                        borderTop: "1px solid rgba(255,255,255,0.04)",
                        paddingTop: "12px"
                      }}
                      className="font-sans"
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
