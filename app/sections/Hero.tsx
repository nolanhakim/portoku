"use client";
import { useState } from "react";

const NB = {
  yellow: "#F5E642",
  pink: "#FF6B9D",
  teal: "#4ECDC4",
  green: "#A8E063",
  orange: "#FF6B35",
  black: "#0A0A0A",
  bg: "#FFFEF0",
};

function NbBtn({
  children,
  bg = NB.yellow,
  color = NB.black,
  onClick,
  href,
  download,
}: {
  children: React.ReactNode;
  bg?: string;
  color?: string;
  onClick?: () => void;
  href?: string;
  download?: boolean;
}) {
  const [hov, setHov] = useState(false);
  const style: React.CSSProperties = {
    background: bg,
    color,
    fontSize: "13px",
    fontWeight: 800,
    padding: "12px 28px",
    border: `2px solid ${NB.black}`,
    boxShadow: hov ? "6px 6px 0px #0A0A0A" : "4px 4px 0px #0A0A0A",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    cursor: "pointer",
    transform: hov ? "translate(-2px,-2px)" : "translate(0,0)",
    transition: "transform 0.12s ease, box-shadow 0.12s ease",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    touchAction: "manipulation",
    WebkitTapHighlightColor: "transparent",
  };
  if (href) return <a href={href} download={download} style={style} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</a>;
  return <button style={style} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={onClick}>{children}</button>;
}

export default function Hero() {
  // No animation delay — elements appear immediately
  const fade = (_delay: number): React.CSSProperties => ({
    opacity: 1,
    transform: "none",
  });

  const mounted = true;

  return (
    <section
      id="home"
      style={{ paddingTop: "64px", borderBottom: `3px solid ${NB.black}`, background: NB.bg, overflow: "hidden" }}
    >
      <div style={{ padding: "clamp(32px,6vw,64px) clamp(20px,5vw,64px)" }}>

        {/* Status badge */}
        <div
          style={{
            ...fade(0),
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: NB.green,
            border: `2px solid ${NB.black}`,
            boxShadow: `3px 3px 0px ${NB.black}`,
            padding: "6px 16px",
            marginBottom: "clamp(28px,5vw,48px)",
            transform: mounted ? "rotate(-1.5deg)" : "rotate(-1.5deg) translateY(28px)",
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.5s ease 0ms, transform 0.5s ease 0ms",
          }}
        >
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: NB.black, display: "block", flexShrink: 0 }} />
          <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Open to work · Malang, Indonesia
          </span>
        </div>

        {/* Headline */}
        <div style={{ marginBottom: "clamp(24px,4vw,40px)" }}>
          <h1
            style={{
              ...fade(80),
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(60px,15vw,140px)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              color: NB.black,
            }}
          >
            Building
          </h1>

          <h1
            style={{
              ...fade(160),
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(60px,15vw,140px)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              color: NB.bg,
              WebkitTextStroke: `3px ${NB.black}`,
              background: NB.pink,
              display: "inline-block",
              padding: "0 8px",
              marginTop: "4px",
              transform: mounted ? "rotate(-1deg) translateY(0)" : "rotate(-1deg) translateY(28px)",
            }}
          >
            interfaces
          </h1>

          <br />
          <h1
            style={{
              ...fade(240),
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(60px,15vw,140px)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              color: NB.black,
            }}
          >
            that feel right.
          </h1>
        </div>

        {/* Sub & CTA */}
        <div style={{ ...fade(360), display: "flex", flexDirection: "column", gap: "24px" }}>
          <p style={{ maxWidth: "480px", fontSize: "clamp(14px,2vw,16px)", lineHeight: 1.8, color: "#333" }}>
            I&apos;m <strong>Nolan</strong> — a fresh D3 graduate in Teknologi Informasi from Universitas Brawijaya, Malang.
            I build responsive web applications — from frontend to backend.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <NbBtn bg={NB.yellow} href="#portfolio">
              View Portfolio →
            </NbBtn>
            <NbBtn bg="#FFFFFF" href="/cv.pdf" download>
              Download CV
            </NbBtn>
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            ...fade(480),
            marginTop: "clamp(32px,6vw,64px)",
            paddingTop: "clamp(24px,4vw,40px)",
            borderTop: `3px solid ${NB.black}`,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { val: "D3", lbl: "IT Graduate · UB", bg: NB.yellow },
              { val: "8", lbl: "Tech skills", bg: NB.teal },
              { val: "21", lbl: "Years old", bg: NB.pink },
            ].map((s) => (
              <div
                key={s.lbl}
                style={{
                  background: s.bg,
                  border: `2px solid ${NB.black}`,
                  boxShadow: `3px 3px 0px ${NB.black}`,
                  padding: "12px 20px",
                  minWidth: "90px",
                }}
              >
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "36px", lineHeight: 1, marginBottom: "4px" }}>{s.val}</p>
                <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.lbl}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <a href="mailto:nolanhakimm10@gmail.com" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: NB.black, textDecoration: "none", fontWeight: 500 }}>
              nolanhakimm10@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}