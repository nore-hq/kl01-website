"use client";

import React, { useRef, useState } from "react";
import { soundFX } from "@/utils/soundFX";
import { Sparkles, MessageSquare, Play, Pause, Volume2, VolumeX, Check, ShieldCheck } from "lucide-react";

export default function PolishShowcaseSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    soundFX.playClick();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    soundFX.playClick();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="polish"
      style={{
        padding: "clamp(60px, 8vw, 110px) 0 clamp(50px, 7vw, 100px)",
        backgroundColor: "#060709",
        borderBottom: "1px solid rgba(230, 0, 18, 0.18)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span id="craftsmanship" style={{ position: "absolute", top: "-80px" }} />

      {/* Atmospheric Ambient Red Radial Glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "15%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(230, 0, 18, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="rr-container" style={{ position: "relative", zIndex: 2 }}>
        {/* Top Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(36px, 6vw, 56px)" }}>
          <span
            className="font-mono"
            style={{
              fontSize: "clamp(9px, 1.8vw, 10px)",
              letterSpacing: "0.28em",
              color: "#E60012",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "10px",
            }}
          >
            MACHINE POLISHING // TRIVANDRUM
          </span>
          <h2
            className="font-cinzel"
            style={{
              fontSize: "clamp(1.7rem, 4.5vw, 3.6rem)",
              fontWeight: 400,
              letterSpacing: "0.10em",
              color: "#FFFFFF",
              textTransform: "uppercase",
              lineHeight: 1.2,
              marginBottom: "14px",
            }}
          >
            RESTORE YOUR CAR&apos;S <span style={{ color: "#E60012" }}>SHOWROOM SHINE.</span>
          </h2>
          <p
            className="font-serif"
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.35rem)",
              color: "rgba(255, 255, 255, 0.72)",
              fontStyle: "italic",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.5,
              padding: "0 10px",
            }}
          >
            Professional machine polishing that safely removes swirl marks, light scratches,
            and restores deep, brilliant mirror gloss to your vehicle.
          </p>
        </div>

        {/* Two-Column Showcase Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(28px, 4vw, 48px)",
            alignItems: "center",
          }}
        >
          {/* Left Column: Real-Footage Vertical Cinema Video Frame */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Glowing red back-aura behind the video */}
            <div
              style={{
                position: "absolute",
                inset: "-20px",
                background: "radial-gradient(ellipse at center, rgba(230, 0, 18, 0.22) 0%, transparent 70%)",
                filter: "blur(40px)",
                pointerEvents: "none",
                borderRadius: "16px",
              }}
            />

            {/* Video Container Box */}
            <div
              className="rr-card"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "380px",
                aspectRatio: "9/16",
                borderRadius: "4px",
                overflow: "hidden",
                border: "1px solid rgba(230, 0, 18, 0.35)",
                borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(230, 0, 18, 0.15)",
                backgroundColor: "#050608",
              }}
            >
              <video
                ref={videoRef}
                src="/assets/polish-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: "contrast(1.08) brightness(1.02)",
                }}
              />

              {/* Video Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "rgba(6, 7, 9, 0.8)",
                  backdropFilter: "blur(12px)",
                  padding: "6px 12px",
                  borderRadius: "2px",
                  border: "1px solid rgba(230, 0, 18, 0.3)",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "#E60012",
                    boxShadow: "0 0 10px #E60012",
                    display: "inline-block",
                  }}
                />
                <span
                  className="font-mono"
                  style={{ fontSize: "9px", letterSpacing: "0.18em", color: "#FFFFFF", textTransform: "uppercase" }}
                >
                  REAL WORK FOOTAGE
                </span>
              </div>

              {/* Video Controls */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  right: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  zIndex: 10,
                }}
              >
                <button
                  onClick={togglePlay}
                  title={isPlaying ? "Pause video" : "Play video"}
                  style={{
                    background: "rgba(6, 7, 9, 0.75)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(230, 0, 18, 0.35)",
                    color: "#FFFFFF",
                    padding: "8px",
                    borderRadius: "2px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    transition: "all 0.2s ease",
                  }}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause size={13} color="#E60012" /> : <Play size={13} color="#E60012" />}
                </button>

                <button
                  onClick={toggleMute}
                  title={isMuted ? "Unmute audio" : "Mute audio"}
                  style={{
                    background: "rgba(6, 7, 9, 0.75)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(230, 0, 18, 0.35)",
                    color: "#FFFFFF",
                    padding: "8px",
                    borderRadius: "2px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    transition: "all 0.2s ease",
                  }}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX size={13} color="#E60012" /> : <Volume2 size={13} color="#E60012" />}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Real Detailing Work & Honest Benefits */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div>
              <span
                className="font-mono"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  color: "#FF4D5A",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                EXPERT MACHINE POLISHING
              </span>
              <h3
                className="font-cinzel"
                style={{
                  fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  color: "#FFFFFF",
                  lineHeight: 1.25,
                  marginBottom: "16px",
                }}
              >
                Professional Scratch &amp; Swirl Mark Removal
              </h3>
              <p
                className="font-sans"
                style={{
                  fontSize: "14px",
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                  marginBottom: "20px",
                }}
              >
                Daily driving, harsh sunlight, road dust, and improper washing create fine swirls
                and dullness over your car&apos;s clearcoat. At KL-01 Car Spa in Kallumoodu, Trivandrum,
                our multi-stage machine polishing safely refines the clearcoat surface to remove
                imperfections and bring back that deep, glossy mirror reflection.
              </p>
            </div>

            {/* 3 Real Service Pillars */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div
                className="rr-card"
                style={{
                  padding: "18px 20px",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(230, 0, 18, 0.12)",
                    border: "1px solid rgba(230, 0, 18, 0.4)",
                    borderRadius: "2px",
                    padding: "8px",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <Sparkles size={16} color="#E60012" />
                </div>
                <div>
                  <h4
                    className="font-cinzel"
                    style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", color: "#FFFFFF", marginBottom: "4px" }}
                  >
                    SWIRL &amp; LIGHT SCRATCH REMOVAL
                  </h4>
                  <p className="font-sans" style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.65)", lineHeight: 1.5 }}>
                    Carefully removes spiderweb wash marks, light surface scratches, and environmental hazing caused by daily use.
                  </p>
                </div>
              </div>

              <div
                className="rr-card"
                style={{
                  padding: "18px 20px",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(230, 0, 18, 0.12)",
                    border: "1px solid rgba(230, 0, 18, 0.4)",
                    borderRadius: "2px",
                    padding: "8px",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <ShieldCheck size={16} color="#E60012" />
                </div>
                <div>
                  <h4
                    className="font-cinzel"
                    style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", color: "#FFFFFF", marginBottom: "4px" }}
                  >
                    SAFE CLEARCOAT PRESERVATION
                  </h4>
                  <p className="font-sans" style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.65)", lineHeight: 1.5 }}>
                    Polishing is done safely using balanced pads and compounds to protect factory paint thickness without burning the clearcoat.
                  </p>
                </div>
              </div>

              <div
                className="rr-card"
                style={{
                  padding: "18px 20px",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(230, 0, 18, 0.12)",
                    border: "1px solid rgba(230, 0, 18, 0.4)",
                    borderRadius: "2px",
                    padding: "8px",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <Check size={16} color="#E60012" />
                </div>
                <div>
                  <h4
                    className="font-cinzel"
                    style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", color: "#FFFFFF", marginBottom: "4px" }}
                  >
                    HIGH-GLOSS MIRROR REFLECTION
                  </h4>
                  <p className="font-sans" style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.65)", lineHeight: 1.5 }}>
                    Restores rich color depth and clarity, leaving the vehicle ultra-smooth and ready for protective wax, ceramic, or graphene coating.
                  </p>
                </div>
              </div>
            </div>

            {/* Real Studio Highlights & WhatsApp CTA */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "18px",
                paddingTop: "14px",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <div>
                  <div className="font-cinzel" style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", fontWeight: 700, color: "#E60012" }}>
                    CARS &amp; BIKES
                  </div>
                  <div className="font-mono" style={{ fontSize: "9px", color: "rgba(255, 255, 255, 0.5)", textTransform: "uppercase" }}>
                    All Segments Handled
                  </div>
                </div>

                <div>
                  <div className="font-cinzel" style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", fontWeight: 700, color: "#FFFFFF" }}>
                    TRIVANDRUM
                  </div>
                  <div className="font-mono" style={{ fontSize: "9px", color: "rgba(255, 255, 255, 0.5)", textTransform: "uppercase" }}>
                    Kallumoodu Car Spa
                  </div>
                </div>

                <div>
                  <div className="font-cinzel" style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", fontWeight: 700, color: "#FF4D5A" }}>
                    DETAILED CARE
                  </div>
                  <div className="font-mono" style={{ fontSize: "9px", color: "rgba(255, 255, 255, 0.5)", textTransform: "uppercase" }}>
                    Multi-Stage Machine Polish
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919567512720?text=Hello%20KL-01%20Car%20Spa,%20I%20would%20like%20to%20enquire%20about%20car%20polishing%20service."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playThrottle()}
                className="rr-btn-gold"
                style={{ padding: "14px 24px", fontSize: "11px", width: "100%", maxWidth: "340px" }}
              >
                <MessageSquare size={14} />
                <span>BOOK POLISH VIA WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
