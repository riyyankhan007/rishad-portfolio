"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export interface SlideItem {
  id: string;
  image: string;
  title: string;
  category: string;
  designerNote: string;
}

interface PresentationDeckProps {
  projectTitle: string;
  deckSubtitle: string;
  slides: SlideItem[];
}

export default function PresentationDeck({
  projectTitle,
  deckSubtitle,
  slides,
}: PresentationDeckProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const containerRef = useRef<HTMLDivElement>(null);

  const total = slides.length;

  const goToSlide = useCallback((index: number, dir: "next" | "prev" = "next") => {
    setDirection(dir);
    setCurrentIdx((index + total) % total);
  }, [total]);

  const nextSlide = useCallback(() => {
    goToSlide(currentIdx + 1, "next");
  }, [currentIdx, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIdx - 1, "prev");
  }, [currentIdx, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape" && isFullscreen) setIsFullscreen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, isFullscreen]);

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
  };

  const current = slides[currentIdx];

  return (
    <div
      ref={containerRef}
      className={`deck-wrapper ${isFullscreen ? "is-fullscreen" : ""}`}
      style={{
        background: "var(--bg-dark)",
        color: "#ffffff",
        borderRadius: isFullscreen ? "0" : "var(--radius-xl)",
        overflow: "hidden",
        boxShadow: "var(--shadow-float)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        position: isFullscreen ? "fixed" : "relative",
        inset: isFullscreen ? "0" : "auto",
        zIndex: isFullscreen ? 9999 : 20,
        margin: isFullscreen ? "0" : "30px 0",
      }}
    >
      {/* PPT HEADER BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "clamp(12px, 2vw, 18px) clamp(16px, 3vw, 28px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          background: "rgba(25, 23, 21, 0.95)",
          backdropFilter: "blur(12px)",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              background: "var(--accent-terracotta)",
              color: "#ffffff",
              padding: "4px 10px",
              borderRadius: "var(--radius-pill)",
              fontSize: "10px",
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            PPT SLIDEDECK
          </span>
          <div>
            <h4
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(14px, 1.4vw, 18px)",
                fontWeight: 500,
                color: "#ffffff",
              }}
            >
              {projectTitle}
            </h4>
            <span
              style={{
                fontSize: "11px",
                color: "#a8a29e",
                fontFamily: "var(--font-mono)",
              }}
            >
              {deckSubtitle}
            </span>
          </div>
        </div>

        {/* CONTROLS */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--accent-brass)",
              fontWeight: 600,
            }}
          >
            {String(currentIdx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
            style={{
              padding: "6px 14px",
              borderRadius: "var(--radius-pill)",
              background: isPlaying ? "var(--accent-terracotta)" : "rgba(255,255,255,0.12)",
              color: "#ffffff",
              fontSize: "11px",
              fontFamily: "var(--font-mono)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <span>{isPlaying ? "❚❚" : "▶"}</span>
            <span className="hide-on-mobile">{isPlaying ? "Pause" : "Auto"}</span>
          </button>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            aria-label="Toggle Fullscreen"
            style={{
              padding: "6px 12px",
              borderRadius: "var(--radius-pill)",
              background: "rgba(255,255,255,0.12)",
              color: "#ffffff",
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            {isFullscreen ? "✕" : "⛶"}
          </button>
        </div>
      </div>

      {/* STAGE: SLIDE DISPLAY WITH SWIPE */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          minHeight: isFullscreen ? "auto" : "clamp(260px, 48vw, 680px)",
          maxHeight: isFullscreen ? "calc(100vh - 160px)" : "680px",
          background: "#0d0c0b",
          overflow: "hidden",
        }}
      >
        <div
          key={current.id}
          className={`slide-animation ${direction}`}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={current.image}
            alt={`${projectTitle} — ${current.title}`}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 1380px"
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* OVERLAY NAVIGATION ARROWS */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          style={{
            position: "absolute",
            top: "50%",
            left: "14px",
            transform: "translateY(-50%)",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "rgba(20, 18, 16, 0.7)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#ffffff",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.25s ease",
            zIndex: 10,
          }}
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          style={{
            position: "absolute",
            top: "50%",
            right: "14px",
            transform: "translateY(-50%)",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "rgba(20, 18, 16, 0.7)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#ffffff",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.25s ease",
            zIndex: 10,
          }}
        >
          ›
        </button>

        {/* PERSPECTIVE BADGE */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "16px",
            background: "rgba(15, 14, 13, 0.8)",
            padding: "5px 12px",
            borderRadius: "var(--radius-pill)",
            fontSize: "11px",
            fontFamily: "var(--font-mono)",
            color: "var(--accent-brass)",
            border: "1px solid rgba(255,255,255,0.1)",
            zIndex: 5,
          }}
        >
          {current.category}
        </div>
      </div>

      {/* FIRST-PERSON SLIDE NOTE */}
      <div
        style={{
          padding: "clamp(16px, 2.5vw, 24px) clamp(18px, 3vw, 32px)",
          background: "rgba(28, 26, 23, 0.95)",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ maxWidth: "800px" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                color: "var(--accent-terracotta)",
                textTransform: "uppercase",
                fontWeight: 600,
                display: "block",
                marginBottom: "4px",
              }}
            >
              DESIGNER&apos;S PRESENTATION NOTE · PERSPECTIVE #{currentIdx + 1}
            </span>
            <h5
              style={{
                fontSize: "16px",
                fontFamily: "var(--font-serif)",
                color: "#ffffff",
                marginBottom: "6px",
              }}
            >
              {current.title}
            </h5>
            <p
              style={{
                fontSize: "13.5px",
                color: "#d4cdc3",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              {current.designerNote}
            </p>
          </div>

          <div className="mobile-touch-hint" style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "#8c8579" }}>
            Swipe left/right or use keyboard arrows ‹ ›
          </div>
        </div>

        {/* THUMBNAIL TRACK */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "18px",
            overflowX: "auto",
            paddingBottom: "8px",
            scrollbarWidth: "thin",
          }}
        >
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => goToSlide(idx, idx > currentIdx ? "next" : "prev")}
              style={{
                position: "relative",
                width: "80px",
                height: "48px",
                flexShrink: 0,
                borderRadius: "var(--radius-xs)",
                overflow: "hidden",
                border: idx === currentIdx ? "2px solid var(--accent-terracotta)" : "1px solid rgba(255, 255, 255, 0.2)",
                opacity: idx === currentIdx ? 1 : 0.6,
                transform: idx === currentIdx ? "scale(1.04)" : "scale(1)",
                transition: "all 0.2s ease",
                cursor: "pointer",
                padding: 0,
                background: "#000",
              }}
            >
              <Image
                src={s.image}
                alt={`Thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                style={{ objectFit: "cover" }}
              />
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .slide-animation {
          animation: slideInFade 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes slideInFade {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 640px) {
          .hide-on-mobile {
            display: none !important;
          }
          .mobile-touch-hint {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
