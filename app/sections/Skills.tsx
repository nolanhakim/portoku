"use client";
import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const NB = {
  yellow: "#F5E642", pink: "#FF6B9D", teal: "#4ECDC4",
  green: "#A8E063", orange: "#FF6B35", purple: "#C084FC",
  black: "#0A0A0A", bg: "#FFFEF0",
};

const SKILLS = [
  { name: "HTML", level: "Advanced", color: NB.orange },
  { name: "CSS", level: "Advanced", color: NB.teal },
  { name: "Tailwind", level: "Advanced", color: NB.teal },
  { name: "MySQL", level: "Advanced", color: NB.pink },
  { name: "JavaScript", level: "Intermediate", color: NB.yellow },
  { name: "Next.js", level: "Intermediate", color: NB.yellow },
  { name: "Laravel", level: "Intermediate", color: NB.purple },
  { name: "PHP", level: "Intermediate", color: NB.purple },
  { name: "Postman", level: "Intermediate", color: NB.green },
];

const MARQUEE = [
  "HTML", "CSS", "Tailwind CSS", "JavaScript", "Next.js",
  "Laravel", "PHP", "MySQL", "REST API", "Git", "Postman",
  "HTML", "CSS", "Tailwind CSS", "JavaScript", "Next.js",
  "Laravel", "PHP", "MySQL", "REST API", "Git", "Postman",
];

const MARQUEE_COLORS = [NB.black, NB.orange, NB.black, NB.pink, NB.black, NB.teal];

export default function Skills() {
  const { ref, hasRevealed } = useScrollReveal(0.05);

  return (
    <section id="skills" ref={ref} style={{ borderBottom: `3px solid ${NB.black}`, background: NB.bg, overflow: "hidden" }}>
      <div style={{ padding: "clamp(40px,7vw,80px) clamp(20px,5vw,64px)" }}>

        {/* Label */}
        <div
          className="nb-section-label"
          style={{
            marginBottom: "clamp(28px,5vw,48px)",
            opacity: hasRevealed ? 1 : 0,
            transform: hasRevealed ? "translateX(0)" : "translateX(-20px)",
            transition: "opacity 0.5s ease 0ms, transform 0.5s ease 0ms",
          }}
        >
          Tech stack &amp; tools
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {SKILLS.map((s, idx) => (
            <SkillPill key={s.name} skill={s} index={idx} hasRevealed={hasRevealed} />
          ))}
        </div>

      </div>

      {/* Marquee */}
      <div style={{ borderTop: `3px solid ${NB.black}`, borderBottom: `3px solid ${NB.black}`, background: "#F5F0DC", padding: "14px 0", overflow: "hidden" }}>
        <div className="animate-marquee" style={{ display: "flex", whiteSpace: "nowrap" }}>
          {MARQUEE.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginRight: "32px",
                flexShrink: 0,
                color: MARQUEE_COLORS[i % MARQUEE_COLORS.length],
              }}
            >
              {item} <span style={{ color: "#0A0A0A", marginLeft: "32px", opacity: 0.3 }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillPill({
  skill,
  index,
  hasRevealed,
}: {
  skill: { name: string; level: string; color: string };
  index: number;
  hasRevealed: boolean;
}) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: hov ? skill.color : NB.bg,
        border: `2px solid ${NB.black}`,
        boxShadow: hov ? `5px 5px 0px ${NB.black}` : `3px 3px 0px ${NB.black}`,
        padding: "10px 18px",
        cursor: "default",
        opacity: hasRevealed ? 1 : 0,
        transform: hasRevealed
          ? (hov ? "translate(-2px,-2px)" : "translate(0,0)")
          : "translateY(16px)",
        transition: hov
          ? "background 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease"
          : `opacity 0.4s ease ${80 + index * 40}ms, transform 0.4s ease ${80 + index * 40}ms, background 0.15s ease, box-shadow 0.15s ease`,
      }}
    >
      <span style={{ fontWeight: 700, fontSize: "14px", color: NB.black }}>{skill.name}</span>
      <span
        style={{
          background: skill.color,
          border: `2px solid ${NB.black}`,
          fontSize: "9px",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          padding: "1px 7px",
          color: NB.black,
        }}
      >
        {skill.level}
      </span>
    </div>
  );
}