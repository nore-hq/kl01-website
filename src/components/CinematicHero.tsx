"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { soundFX } from "@/utils/soundFX";
import { Sparkles, MessageSquare, Pause, Play, VolumeX, Volume2 } from "lucide-react";

/* ── Magnetic text component: each character reacts dynamically to mouse proximity ── */
function MagneticText({
  text,
  className,
  style,
  intensity = 12,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  intensity?: number;
  as?: React.ElementType;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const rafRef = useRef<number>(0);
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        charsRef.current.forEach((charEl) => {
          if (!charEl) return;
          const rect = charEl.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = mousePos.current.x - cx;
          const dy = mousePos.current.y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 220;
          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * intensity;
            const moveX = (dx / dist) * force;
            const moveY = (dy / dist) * force;
            charEl.style.transform = `translate(${moveX}px, ${moveY}px)`;
            charEl.style.textShadow = `0 0 ${12 + force * 2}px rgba(230,0,18,${0.35 + (force / intensity) * 0.65}), 0 0 ${24 + force * 3}px rgba(230,0,18,0.4)`;
          } else {
            charEl.style.transform = "translate(0, 0)";
            charEl.style.textShadow = "";
          }
        });
      });
    },
    [intensity]
  );

  const handleMouseLeave = useCallback(() => {
    charsRef.current.forEach((charEl) => {
      if (!charEl) return;
      charEl.style.transform = "translate(0, 0)";
      charEl.style.textShadow = "";
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove, handleMouseLeave]);

  const chars = text.split("");
  charsRef.current = [];

  return (
    <Tag ref={containerRef} className={className} style={{ ...style, display: "inline-block", cursor: "default" }}>
      {chars.map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            charsRef.current[i] = el;
          }}
          className="hero-magnetic-char"
          style={{
            display: char === " " ? "inline" : "inline-block",
            transition: "transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), text-shadow 0.35s ease",
            willChange: "transform",
            color: "inherit",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
}

/* ── Main Hero ── */
export default function CinematicHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 120);
    return () => clearTimeout(t);
  }, []);

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
    <section className="hero-wrapper" id="atelier">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/assets/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="hero-video-bg"
      />

      {/* Cinematic Vignette & Ambient Starlight */}
      <div className="hero-overlay-cinematic" />
      <div className="starlight-bg" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none", zIndex: 1 }} />

      {/* Hero Content */}
      <div
        className="rr-container"
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 16px",
          width: "100%",
        }}
      >
        {/* Headline — interactive per-character magnetic tracking with ultra-thin Rolls-Royce typography */}
        <h1
          className={`hero-headline-entrance ${entered ? "hero-headline-visible" : ""}`}
          style={{
            marginBottom: "18px",
            lineHeight: 1.15,
            width: "100%",
          }}
        >
          <MagneticText
            text="IN PURSUIT OF"
            intensity={14}
            className="font-cinzel"
            style={{
              display: "block",
              fontSize: "clamp(1.5rem, 6.2vw, 4.8rem)",
              fontWeight: 400,
              letterSpacing: "clamp(0.10em, 1.8vw, 0.22em)",
              textTransform: "uppercase",
              color: "#FFFFFF",
              textShadow: "0 2px 18px rgba(0, 0, 0, 0.85), 0 0 20px rgba(255, 255, 255, 0.12)",
            }}
          />
          <MagneticText
            text="PERFECTION."
            intensity={18}
            className="font-cinzel"
            style={{
              display: "block",
              fontSize: "clamp(1.9rem, 8vw, 6rem)",
              fontWeight: 400,
              letterSpacing: "clamp(0.10em, 2vw, 0.18em)",
              textTransform: "uppercase",
              marginTop: "6px",
              color: "#E60012",
              textShadow: "0 2px 22px rgba(0, 0, 0, 0.85), 0 0 30px rgba(230, 0, 18, 0.45)",
            }}
          />
        </h1>

        {/* Subtitle */}
        <p
          className={`hero-sub-entrance ${entered ? "hero-sub-visible" : ""} font-serif`}
          style={{
            fontSize: "clamp(0.95rem, 2.5vw, 1.4rem)",
            color: "rgba(255,255,255,0.78)",
            letterSpacing: "0.08em",
            fontStyle: "italic",
            maxWidth: "600px",
            marginBottom: "36px",
            lineHeight: 1.5,
            textShadow: "0 2px 12px rgba(0, 0, 0, 0.8)",
            padding: "0 10px",
          }}
        >
          Handcrafted Automotive Preservation • Trivandrum
        </p>

        {/* CTAs */}
        <div
          className={`hero-cta-entrance ${entered ? "hero-cta-visible" : ""}`}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "14px",
            width: "100%",
            maxWidth: "460px",
          }}
        >
          <a
            href="#polish"
            onClick={() => soundFX.playThrottle()}
            className="rr-btn-gold"
            style={{ flex: "1 1 200px" }}
          >
            <Sparkles size={14} />
            <span>EXPLORE ATELIER</span>
          </a>

          <a
            href="https://wa.me/919567512720?text=Hello%20KL-01%20Car%20Spa,%20I%20would%20like%20to%20book%20a%20private%20atelier%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playThrottle()}
            className="rr-btn-outline"
            style={{ flex: "1 1 200px" }}
          >
            <MessageSquare size={14} />
            <span>CONCIERGE DESK</span>
          </a>
        </div>
      </div>

      {/* Discreet Bottom Ambient Controls */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <button
          onClick={togglePlay}
          title={isPlaying ? "Pause footage" : "Play footage"}
          style={{
            background: "rgba(6, 7, 9, 0.6)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(230, 0, 18, 0.35)",
            color: "#E60012",
            padding: "8px",
            borderRadius: "2px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            transition: "all 0.2s ease",
          }}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause size={12} /> : <Play size={12} />}
        </button>

        <button
          onClick={toggleMute}
          title={isMuted ? "Unmute audio" : "Mute audio"}
          style={{
            background: "rgba(6, 7, 9, 0.6)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(230, 0, 18, 0.35)",
            color: "#E60012",
            padding: "8px",
            borderRadius: "2px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            transition: "all 0.2s ease",
          }}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
        </button>
      </div>
    </section>
  );
}
