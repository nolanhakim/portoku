"use client";
import { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

const NB = {
  yellow: "#F5E642", pink: "#FF6B9D", teal: "#4ECDC4",
  green: "#A8E063", orange: "#FF6B35", black: "#0A0A0A", bg: "#fffef0ff",
};

const INFO = [
  { label: "Location", value: "Kota Malang, Indonesia", bg: NB.teal },
  { label: "University", value: "Universitas Brawijaya", bg: NB.yellow },
  { label: "Degree", value: "D3 Teknologi Informasi", bg: "#FFFFFF" },
  { label: "Status", value: "Available for work", bg: NB.green },
];

export default function About() {
  const { ref, hasRevealed } = useScrollReveal(0.05);
  const [imgTilt, setImgTilt] = useState(false);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        borderBottom: `3px solid ${NB.black}`,
        background: NB.bg,
        padding: "clamp(40px,7vw,80px) clamp(20px,5vw,64px)",
      }}
    >
      {/* Section label */}
      <div
        className="nb-section-label"
        style={{
          marginBottom: "clamp(28px,5vw,48px)",
          opacity: hasRevealed ? 1 : 0,
          transform: hasRevealed ? "translateX(0)" : "translateX(-20px)",
          transition: "opacity 0.5s ease 0ms, transform 0.5s ease 0ms",
        }}
      >
        About me
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "clamp(32px,5vw,64px)", alignItems: "start" }}>

        {/* Left: photo */}
        <div
          style={{
            position: "relative",
            order: -1,
            transform: imgTilt ? "scale(1.02) rotate(1deg)" : "scale(1) rotate(0deg)",
            transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.6s ease 100ms",
            opacity: hasRevealed ? 1 : 0,
          }}
          className="lg:order-last"
          onMouseEnter={() => setImgTilt(true)}
          onMouseLeave={() => setImgTilt(false)}
        >
          <div
            style={{
              position: "relative",
              border: `3px solid ${NB.black}`,
              boxShadow: imgTilt ? `9px 9px 0px ${NB.black}` : `6px 6px 0px ${NB.black}`,
              overflow: "hidden",
              height: "clamp(300px,55vw,480px)",
              background: "#eee",
              transition: "box-shadow 0.4s ease",
            }}
          >
            <Image
              src="/img/profil1.jpeg"
              alt="Catraliya Nolan Hakim"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Name sticker */}
          <div
            style={{
              position: "absolute",
              bottom: "-14px",
              left: "50%",
              transform: imgTilt ? "translateX(-50%) rotate(2deg) scale(1.05)" : "translateX(-50%) rotate(-2deg) scale(1)",
              background: NB.yellow,
              border: `2px solid ${NB.black}`,
              boxShadow: `3px 3px 0px ${NB.black}`,
              padding: "8px 20px",
              whiteSpace: "nowrap",
              fontWeight: 800,
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          >
            Catraliya Nolan Hakim
          </div>
        </div>

        {/* Right: text */}
        <div
          style={{
            opacity: hasRevealed ? 1 : 0,
            transform: hasRevealed ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease 200ms, transform 0.6s ease 200ms",
          }}
        >
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(36px,7vw,64px)",
              lineHeight: 1,
              letterSpacing: "0.02em",
              marginBottom: "20px",
              color: NB.black,
            }}
          >
            Hello, I&apos;m{" "}
            <span style={{ background: NB.pink, padding: "0 6px", border: `2px solid ${NB.black}` }}>Nul</span>{""}
            — Web Developer
          </h2>

          <p style={{ fontSize: "14px", lineHeight: 1.85, color: "#444", marginBottom: "14px" }}>
            I&apos;m a frontend and backend web developer — a fresh D3 graduate in Teknologi Informasi
            from Universitas Brawijaya. I specialize in building modern, responsive, and
            performant web applications end-to-end.
          </p>
          <p style={{ fontSize: "14px", lineHeight: 1.85, color: "#444", marginBottom: "28px" }}>
            I work with <strong style={{ color: NB.black }}>Laravel</strong> and{" "}
            <strong style={{ color: NB.black }}>Next.js</strong> for development, and bring a strong
            eye for design to every project — making sure things don&apos;t just work, but feel great to use.
          </p>

          {/* Info cards grid */}
          <div className="grid grid-cols-2" style={{ gap: "10px" }}>
            {INFO.map((item, idx) => (
              <div
                key={item.label}
                style={{
                  background: item.bg,
                  border: `2px solid ${NB.black}`,
                  boxShadow: `3px 3px 0px ${NB.black}`,
                  padding: "12px 16px",
                  opacity: hasRevealed ? 1 : 0,
                  transform: hasRevealed ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ease ${300 + idx * 80}ms, transform 0.5s ease ${300 + idx * 80}ms`,
                }}
              >
                <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px", color: NB.black }}>
                  {item.label}
                </p>
                <p style={{ fontSize: "13px", fontWeight: 700, color: NB.black }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}