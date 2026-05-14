"use client";
import { useState } from "react";

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

  return (
    <section id="skills" style={{ borderBottom: `3px solid ${NB.black}`, background: NB.bg, overflow: "hidden" }}>
      <div style={{ padding: "clamp(40px,7vw,80px) clamp(20px,5vw,64px)" }}>

        {/* Label */}
        <div
          className="nb-section-label"
          style={{ marginBottom: "clamp(28px,5vw,48px)" }}
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
          {SKILLS.map((s) => (
            <SkillPill key={s.name} skill={s} />
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
}: {
  skill: { name: string; level: string; color: string };
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
        boxShadow: hov ? `4px 4px 0px ${NB.black}` : `3px 3px 0px ${NB.black}`,
        padding: "10px 18px",
        transform: hov ? "translate(-2px,-2px)" : "translate(0,0)",
        transition: "all 0.15s ease",
        cursor: "default",
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