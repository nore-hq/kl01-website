"use client";

import React, { useState } from "react";
import { soundFX } from "@/utils/soundFX";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

interface ServiceItem {
  id: string;
  roman: string;
  category: "coatings" | "detailing" | "mechanical";
  title: string;
  subtitle: string;
  duration: string;
  tag: string;
  specs: string[];
  features: string[];
}

export default function TreatmentsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const services: ServiceItem[] = [
    /* ── Protective Coatings & PPF ── */
    {
      id: "ppf",
      roman: "I",
      category: "coatings",
      title: "PPF (Paint Protection Film)",
      subtitle: "Clear Protective Film Against Scratches & Stone Chips",
      duration: "2 – 4 Days",
      tag: "PAINT PROTECTION",
      specs: ["Stone Chip Defense", "Self-Healing Surface", "High-Gloss Finish"],
      features: [
        "Protects high-impact panels including bumper, bonnet, fenders, and side mirrors",
        "Self-healing topcoat helps light swirl marks and wash scratches disappear with heat",
        "Preserves original factory clearcoat and keeps paint looking brand new",
      ],
    },
    {
      id: "borophene",
      roman: "II",
      category: "coatings",
      title: "Borophene Coating",
      subtitle: "Advanced High-Tech Protective Surface Shield",
      duration: "1 – 2 Days",
      tag: "ADVANCED COATING",
      specs: ["High Water Beading", "Heat & UV Resistance", "Deep Mirror Gloss"],
      features: [
        "Next-generation protective coating providing intense water repellency",
        "Protects factory clearcoat from extreme Kerala sunlight, tree sap, and road tar",
        "Creates a slick, high-gloss surface that makes subsequent washing quick and effortless",
      ],
    },
    {
      id: "graphene",
      roman: "III",
      category: "coatings",
      title: "Graphene Coating",
      subtitle: "Graphene-Infused High-Gloss Paint Shield",
      duration: "1 – 2 Days",
      tag: "EXTREME GLOSS",
      specs: ["Reduced Water Spotting", "Hydrophobic Slickness", "Sun & Rain Defense"],
      features: [
        "Formulated to reduce heat retention on body panels, minimizing stubborn water spot etching",
        "Strong hydrophobic barrier causes water and rainwater puddles to bead and roll right off",
        "Enhances deep paint color richness and protects against daily environmental fading",
      ],
    },
    {
      id: "ceramic",
      roman: "IV",
      category: "coatings",
      title: "Ceramic Coating",
      subtitle: "Durable Gloss Clearcoat Glass Coating",
      duration: "1 – 2 Days",
      tag: "POPULAR COATING",
      specs: ["Deep Wet Gloss", "Water-Repellent Layer", "Easy Maintenance"],
      features: [
        "Creates a durable, crystal-clear protective bond over the factory clearcoat",
        "Guards paint against oxidation, bird droppings, acidic rain, and road grime",
        "Keeps the car cleaner for longer with slick, water-sheeting hydrophobic properties",
      ],
    },
    {
      id: "teflon",
      roman: "V",
      category: "coatings",
      title: "Teflon Coating",
      subtitle: "Gloss Enhancement & Paint Sealant Treatment",
      duration: "Same Day",
      tag: "PAINT SEALANT",
      specs: ["Slick Smooth Touch", "Quick Dust Repellent", "Cost-Effective Shine"],
      features: [
        "Economical protective sealant that restores surface slickness and brilliant shine",
        "Helps repel dust accumulation and shields clearcoat during daily city commutes",
        "A great periodic maintenance treatment to keep your vehicle looking polished and fresh",
      ],
    },

    /* ── Precision Detailing & Clarity ── */
    {
      id: "foam-wash",
      roman: "VI",
      category: "detailing",
      title: "Foam Wash",
      subtitle: "Gentle Snow Foam Wash & Detailed Cleansing",
      duration: "Approx. 1 – 2 Hrs",
      tag: "SAFE HAND WASH",
      specs: ["Thick Active Foam", "Scratch-Safe Wash", "Complete Microfiber Dry"],
      features: [
        "Thick snow foam blankets the car to safely loosen and lift road dust and grit",
        "Detailed cleaning of wheel arches, alloy rims, door sills, and emblems",
        "Gently hand-washed and dried using clean, plush microfiber towels to prevent swirls",
      ],
    },
    {
      id: "interior-fabric",
      roman: "VII",
      category: "detailing",
      title: "Interior Fabric Cleaning",
      subtitle: "Deep Seat, Carpet & Upholstery Stain Extraction",
      duration: "Same Day Service",
      tag: "DEEP CABIN HYGIENE",
      specs: ["Upholstery Vacuum", "Stain & Dirt Extraction", "Cabin Odor Removal"],
      features: [
        "Thorough vacuuming and deep shampoo extraction for fabric seats, door pads, and carpets",
        "Effectively removes beverage spills, food stains, body sweat, and ground-in dust",
        "Eliminates stale interior odors and leaves the car cabin clean, hygienic, and fresh",
      ],
    },
    {
      id: "headlight-restoration",
      roman: "VIII",
      category: "detailing",
      title: "Head Light Restoration",
      subtitle: "Haze & Yellowing Removal with UV Protective Seal",
      duration: "1 – 2 Hours",
      tag: "NIGHT VISIBILITY",
      specs: ["Removes Foggy Oxidation", "Restores Lens Clarity", "UV Protective Coat"],
      features: [
        "Eliminates cloudy yellow haze and surface oxidation from weathered plastic lenses",
        "Restores clear light transmission for brighter night visibility and safer highway driving",
        "Treated with a protective UV sealant to delay future sun yellowing and weathering",
      ],
    },
    {
      id: "windshield-polish",
      roman: "IX",
      category: "detailing",
      title: "Windshield Glass Polish",
      subtitle: "Wiper Mark, Water Scale & Road Haze Removal",
      duration: "2 – 3 Hours",
      tag: "MONSOON READY",
      specs: ["Wiper Scratch Buffing", "Water Mark Removal", "Glare-Free Night Drive"],
      features: [
        "Machine polishes away light wiper blade sweep marks and stubborn hard water scaling",
        "Dramatically reduces oncoming high-beam headlight glare and light distortion at night",
        "Ensures smooth wiper glide and crystal-clear visibility during heavy monsoon showers",
      ],
    },
    {
      id: "watermark-removal",
      roman: "X",
      category: "detailing",
      title: "Water Mark Removing",
      subtitle: "Safe Removal of Stubborn Mineral & Hard Water Stains",
      duration: "Half Day",
      tag: "WATER SPOT CARE",
      specs: ["Mineral Descaling", "Safe on Paint & Glass", "Spot-Free Clarity"],
      features: [
        "Specialized chemical descaling to dissolve stubborn borewell and hard water spots",
        "Safely treats glass windows, windshield, and painted panels without harming clearcoat",
        "Restores uniform smoothness and spotless reflections across the entire vehicle",
      ],
    },

    /* ── Chassis, Bodywork & Mechanical Atelier ── */
    {
      id: "underbody-3m",
      roman: "XI",
      category: "mechanical",
      title: "Under Body 3M Coating",
      subtitle: "Genuine 3M Anti-Corrosion Chassis Treatment",
      duration: "Half Day",
      tag: "GENUINE 3M",
      specs: ["Genuine 3M Compound", "Anti-Rust Protection", "Dampens Road Noise"],
      features: [
        "Thorough high-pressure underbody cleaning to remove mud, grease, and road salt",
        "Heavy-duty 3M rubberized coating shields the chassis against coastal humidity and rust",
        "Provides a durable barrier that protects against flying gravel chips and road debris",
      ],
    },
    {
      id: "silencer-coating",
      roman: "XII",
      category: "mechanical",
      title: "Silencer Coating",
      subtitle: "High-Temperature Anti-Rust Exhaust Pipe Treatment",
      duration: "1 – 2 Hours",
      tag: "EXHAUST CARE",
      specs: ["Heat-Resistant Coating", "Prevents Silencer Rust", "Clean Underside Look"],
      features: [
        "Surface preparation to clean dirt and existing surface rust from exhaust piping",
        "Heat-tolerant protective coating formulated to withstand hot exhaust temperatures",
        "Shields silencer box and pipes from rust caused by rain splashes and water puddles",
      ],
    },
    {
      id: "denting-painting",
      roman: "XIII",
      category: "mechanical",
      title: "Car Denting & Painting",
      subtitle: "Panel Dent Repair, Color Matching & Repainting",
      duration: "Inspection Based",
      tag: "BODY REPAIR",
      specs: ["Accurate Color Matching", "Dent Correction", "Clearcoat Finish"],
      features: [
        "Skilled straightening and repair of accidental panel dents and body creases",
        "Precise paint mixing to accurately match your car manufacturer's original shade",
        "Finished with a high-gloss clearcoat for a smooth, seamless factory-like panel match",
      ],
    },
    {
      id: "ac-work",
      roman: "XIV",
      category: "mechanical",
      title: "Car A/C Work",
      subtitle: "AC Cooling Inspection, Gas Refill & Filter Cleaning",
      duration: "Same Day",
      tag: "CHILLING COMFORT",
      specs: ["Cooling Check", "Gas Refill & Leak Test", "AC Vent Cleaning"],
      features: [
        "Comprehensive performance check of compressor, condenser, cooling coil, and lines",
        "Refrigerant gas top-up and vacuum leak testing to restore maximum cooling efficiency",
        "Cabin AC filter cleaning and duct deodorization to ensure clean, odor-free cold airflow",
      ],
    },
    {
      id: "mechanical-work",
      roman: "XV",
      category: "mechanical",
      title: "Car Mechanical Work",
      subtitle: "General Periodic Service, Brakes, Suspension & Repairs",
      duration: "Inspection Based",
      tag: "GENERAL SERVICE",
      specs: ["Oil & Filter Service", "Brakes & Suspension", "Diagnostic Scanner Check"],
      features: [
        "Periodic car servicing including engine oil change, oil filter, air filter, and fluids",
        "Inspection and replacement of brake pads, suspension bushings, and steering parts",
        "Electronic vehicle scanning to diagnose check engine lights and troubleshoot issues",
      ],
    },
  ];

  const filtered =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const categories = [
    { id: "all", name: "ALL SERVICES (15)" },
    { id: "coatings", name: "COATINGS & PPF (5)" },
    { id: "detailing", name: "DETAILING & CLARITY (5)" },
    { id: "mechanical", name: "BODY & MECHANICAL (5)" },
  ];

  return (
    <section
      id="services"
      style={{
        padding: "clamp(60px, 8vw, 110px) 0 clamp(50px, 7vw, 100px)",
        backgroundColor: "#050608",
        borderBottom: "1px solid rgba(230, 0, 18, 0.18)",
        position: "relative",
      }}
    >
      <span id="treatments" style={{ position: "absolute", top: "-80px" }} />
      {/* Subtle ambient red background wash */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "400px",
          background: "radial-gradient(circle, rgba(230, 0, 18, 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="rr-container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header — Rolls-Royce Editorial Typography */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "clamp(32px, 5vw, 52px)",
            paddingBottom: "22px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
            gap: "20px",
          }}
        >
          <div>
            <span
              className="font-mono"
              style={{
                fontSize: "clamp(9px, 1.8vw, 10px)",
                letterSpacing: "0.28em",
                color: "#E60012",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "8px",
              }}
            >
              SERVICES OFFERED // TRIVANDRUM CAR SPA
            </span>
            <h2
              className="font-cinzel"
              style={{
                fontSize: "clamp(1.7rem, 4.2vw, 3.4rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                lineHeight: 1.15,
              }}
            >
              OUR <span style={{ color: "#E60012" }}>SERVICES</span>
            </h2>
            <p
              className="font-serif"
              style={{
                fontSize: "clamp(0.95rem, 2vw, 15px)",
                color: "rgba(255, 255, 255, 0.65)",
                fontStyle: "italic",
                marginTop: "6px",
                letterSpacing: "0.04em",
              }}
            >
              Complete automotive detailing, protective coatings, bodywork &amp; mechanical care.
            </p>
          </div>

          {/* Minimalist Filter Tabs (Horizontal Scrollable on Mobile) */}
          <div className="mobile-tabs-container">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  soundFX.playClick();
                  setActiveCategory(cat.id);
                }}
                className="font-cinzel"
                style={{
                  padding: "9px 18px",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  borderRadius: "2px",
                  border:
                    activeCategory === cat.id
                      ? "1px solid #E60012"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                  backgroundColor:
                    activeCategory === cat.id
                      ? "rgba(230, 0, 18, 0.16)"
                      : "rgba(10, 12, 16, 0.5)",
                  color: activeCategory === cat.id ? "#FFFFFF" : "rgba(255, 255, 255, 0.6)",
                  boxShadow:
                    activeCategory === cat.id
                      ? "0 0 20px rgba(230, 0, 18, 0.25)"
                      : "none",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  backdropFilter: "blur(10px)",
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Bespoke Architectural Service Cards (15 Total Services) */}
        <div className="grid-3" style={{ rowGap: "28px" }}>
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rr-card"
              style={{
                padding: "36px 30px",
                borderRadius: "2px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                {/* Top Roman Numeral & Badges Strip */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    className="font-cinzel"
                    style={{
                      fontSize: "1.7rem",
                      fontWeight: 700,
                      color: "#E60012",
                      opacity: 0.95,
                      textShadow: "0 0 15px rgba(230, 0, 18, 0.35)",
                    }}
                  >
                    {item.roman}
                  </span>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.1em",
                        padding: "3px 8px",
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        color: "rgba(255, 255, 255, 0.8)",
                        borderRadius: "2px",
                      }}
                    >
                      {item.duration}
                    </span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.12em",
                        padding: "3px 8px",
                        backgroundColor: "rgba(230, 0, 18, 0.12)",
                        border: "1px solid rgba(230, 0, 18, 0.38)",
                        color: "#FF4D5A",
                        borderRadius: "2px",
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3
                  className="font-cinzel"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    color: "#FFFFFF",
                    lineHeight: 1.3,
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p
                  className="font-sans"
                  style={{
                    fontSize: "12px",
                    color: "rgba(255, 255, 255, 0.65)",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  {item.subtitle}
                </p>

                {/* Micro Technical Specs Strip */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "22px",
                    paddingBottom: "18px",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  {item.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono"
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.08em",
                        padding: "3px 8px",
                        backgroundColor: "rgba(10, 12, 16, 0.6)",
                        border: "1px solid rgba(230, 0, 18, 0.2)",
                        color: "#E60012",
                        borderRadius: "2px",
                      }}
                    >
                      • {spec}
                    </span>
                  ))}
                </div>

                {/* Real Feature Bullets */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {item.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "12px",
                        color: "rgba(255, 255, 255, 0.72)",
                        lineHeight: 1.55,
                      }}
                    >
                      <Check
                        size={13}
                        color="#E60012"
                        style={{ flexShrink: 0, marginTop: "3px" }}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Action */}
              <div
                style={{
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.15em",
                    color: "rgba(255, 255, 255, 0.4)",
                    textTransform: "uppercase",
                  }}
                >
                  KL-01 TRIVANDRUM
                </span>

                <a
                  href={`https://wa.me/919567512720?text=Hello%20KL-01%20Car%20Spa,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                    item.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "10px",
                    fontFamily: "var(--font-cinzel)",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "#E60012",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    padding: "6px 12px",
                    borderRadius: "2px",
                    border: "1px solid rgba(230, 0, 18, 0.3)",
                    backgroundColor: "rgba(230, 0, 18, 0.06)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(230, 0, 18, 0.2)";
                    e.currentTarget.style.borderColor = "#E60012";
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(230, 0, 18, 0.06)";
                    e.currentTarget.style.borderColor = "rgba(230, 0, 18, 0.3)";
                    e.currentTarget.style.color = "#E60012";
                  }}
                >
                  <span>ENQUIRE</span>
                  <ArrowUpRight size={11} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div
          className="rr-card"
          style={{
            marginTop: "clamp(36px, 6vw, 60px)",
            padding: "clamp(20px, 4vw, 28px) clamp(18px, 4vw, 36px)",
            borderRadius: "2px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            borderLeft: "2px solid #E60012",
          }}
        >
          <div style={{ maxWidth: "700px" }}>
            <h4
              className="font-cinzel"
              style={{ fontSize: "clamp(12px, 2.2vw, 14px)", fontWeight: 700, letterSpacing: "0.1em", color: "#FFFFFF", marginBottom: "6px" }}
            >
              NEED A CUSTOM PACKAGE OR VEHICLE INSPECTION?
            </h4>
            <p className="font-sans" style={{ fontSize: "12.5px", color: "rgba(255, 255, 255, 0.65)", lineHeight: 1.6 }}>
              Visit our Kallumoodu car spa in Trivandrum or message us on WhatsApp with photos of your car for an honest assessment and personalized estimate.
            </p>
          </div>

          <a
            href="https://wa.me/919567512720?text=Hello%20KL-01%20Car%20Spa,%20I%20would%20like%20a%20vehicle%20inspection%20and%20estimate."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playThrottle()}
            className="rr-btn-gold"
            style={{ padding: "12px 24px", fontSize: "11px", width: "100%", maxWidth: "340px" }}
          >
            <Sparkles size={13} />
            <span>TALK TO US ON WHATSAPP</span>
          </a>
        </div>
      </div>
    </section>
  );
}
