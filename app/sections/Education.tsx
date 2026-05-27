"use client";
import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const NB = {
    yellow: "#F5E642", pink: "#FF6B9D", teal: "#4ECDC4",
    green: "#A8E063", orange: "#FF6B35", black: "#0A0A0A", bg: "#fffef0ff",
};

const COURSES = [
    "Pemrograman Web", "Rekayasa Perangkat Lunak", "Basis Data",
    "Desain UI/UX", "Pemrograman Framework (Laravel)", "Cloud Computing",
    "Kecerdasan Buatan", "Keamanan Komputer", "Manajemen Proyek",
];

const COURSE_COLORS = [
    NB.yellow, NB.teal, NB.pink,
    NB.green, NB.orange, NB.yellow,
    NB.teal, NB.pink, NB.green,
];

const education = [
    {
        degree: "D3 Teknologi Informasi",
        institution: "Universitas Brawijaya",
        sub: "Fakultas Vokasi",
        period: "2023 – 2026",
        highlight: { label: "IPK", value: "3,89 / 4,00" },
        highlightColor: NB.green,
        accentColor: NB.teal,
        numberLabel: "01",
        courses: COURSES,
        tag: "Higher Education",
    },
    {
        degree: "Teknik Komputer Jaringan",
        institution: "SMK Negeri 1 Sukoharjo",
        sub: null,
        period: "2020 – 2023",
        highlight: { label: "Nilai Rata-Rata", value: "87,05" },
        highlightColor: NB.yellow,
        accentColor: NB.pink,
        numberLabel: "02",
        courses: null,
        tag: "Vocational High School",
    },
];

export default function Education() {
    const { ref, hasRevealed } = useScrollReveal(0.05);

    return (
        <section
            id="education"
            ref={ref}
            style={{
                borderBottom: `3px solid ${NB.black}`,
                background: "#fffef0ff",
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
                Education
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                {education.map((edu, idx) => (
                    <EducationCard key={idx} edu={edu} idx={idx} hasRevealed={hasRevealed} />
                ))}
            </div>
        </section>
    );
}

function EducationCard({
    edu,
    idx,
    hasRevealed,
}: {
    edu: typeof education[0];
    idx: number;
    hasRevealed: boolean;
}) {
    const [hov, setHov] = useState(false);

    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                border: `3px solid ${NB.black}`,
                boxShadow: hov ? `9px 9px 0px ${NB.black}` : `6px 6px 0px ${NB.black}`,
                background: "#FFFFFF",
                position: "relative",
                overflow: "hidden",
                opacity: hasRevealed ? 1 : 0,
                transform: hasRevealed
                    ? (hov ? "translate(-3px, -3px)" : "translate(0, 0)")
                    : "translateY(36px)",
                transition: hov
                    ? "transform 0.15s ease, box-shadow 0.15s ease"
                    : `opacity 0.6s ease ${150 + idx * 150}ms, transform 0.6s ease ${150 + idx * 150}ms, box-shadow 0.6s ease`,
            }}
        >
            {/* Big number background */}
            <span
                aria-hidden
                style={{
                    position: "absolute",
                    top: "-12px",
                    right: "16px",
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(80px,15vw,140px)",
                    lineHeight: 1,
                    color: NB.black,
                    opacity: 0.04,
                    userSelect: "none",
                    pointerEvents: "none",
                    letterSpacing: "-0.02em",
                }}
            >
                {edu.numberLabel}
            </span>

            {/* Top accent bar */}
            <div style={{ height: "6px", background: edu.accentColor, borderBottom: `3px solid ${NB.black}` }} />

            <div style={{ padding: "clamp(20px,4vw,36px)" }}>
                {/* Header row */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: "12px",
                        marginBottom: "20px",
                    }}
                >
                    <div>
                        {/* Tag */}
                        <div
                            style={{
                                display: "inline-block",
                                background: edu.accentColor,
                                border: `2px solid ${NB.black}`,
                                boxShadow: `2px 2px 0px ${NB.black}`,
                                padding: "2px 10px",
                                fontSize: "10px",
                                fontWeight: 800,
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                                marginBottom: "10px",
                            }}
                        >
                            {edu.tag}
                        </div>

                        {/* Degree */}
                        <h3
                            style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "clamp(26px,5vw,46px)",
                                lineHeight: 1,
                                letterSpacing: "0.02em",
                                color: NB.black,
                                marginBottom: "6px",
                            }}
                        >
                            {edu.degree}
                        </h3>

                        {/* Institution */}
                        <p style={{ fontSize: "14px", fontWeight: 700, color: NB.black, marginBottom: "2px" }}>
                            {edu.institution}
                        </p>
                        {edu.sub && (
                            <p style={{ fontSize: "12px", color: "#666", fontWeight: 500 }}>{edu.sub}</p>
                        )}
                    </div>

                    {/* Period + highlight */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                        {/* Period pill */}
                        <div
                            style={{
                                border: `2px solid ${NB.black}`,
                                padding: "6px 14px",
                                fontWeight: 800,
                                fontSize: "13px",
                                letterSpacing: "0.05em",
                                whiteSpace: "nowrap",
                                background: NB.bg,
                            }}
                        >
                            {edu.period}
                        </div>

                        {/* Highlight card */}
                        <div
                            style={{
                                background: edu.highlightColor,
                                border: `2px solid ${NB.black}`,
                                boxShadow: `3px 3px 0px ${NB.black}`,
                                padding: "8px 16px",
                                textAlign: "right",
                            }}
                        >
                            <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "2px" }}>
                                {edu.highlight.label}
                            </p>
                            <p style={{ fontSize: "20px", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em", lineHeight: 1 }}>
                                {edu.highlight.value}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Relevant courses */}
                {edu.courses && (
                    <div
                        style={{
                            borderTop: `2px solid ${NB.black}`,
                            paddingTop: "16px",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "10px",
                                fontWeight: 800,
                                textTransform: "uppercase",
                                letterSpacing: "0.12em",
                                marginBottom: "12px",
                                color: NB.black,
                            }}
                        >
                            Mata Kuliah Relevan
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                            {edu.courses.map((course, i) => (
                                <span
                                    key={course}
                                    style={{
                                        background: COURSE_COLORS[i % COURSE_COLORS.length],
                                        border: `2px solid ${NB.black}`,
                                        boxShadow: `2px 2px 0px ${NB.black}`,
                                        padding: "4px 12px",
                                        fontSize: "11px",
                                        fontWeight: 700,
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}