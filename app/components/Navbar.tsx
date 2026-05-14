"use client";
import { useState, useEffect } from "react";

const links = ["About", "Skills", "Portfolio", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        height: "64px",
        background: "#FFFEF0",
        borderBottom: scrolled ? "3px solid #0A0A0A" : "3px solid transparent",
        transition: "border-color 0.3s ease",
      }}
    >
      {/* Logo — always visible */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ display: "flex", alignItems: "center", background: "none", border: "none", cursor: "pointer", padding: 0 }}
      >
        <span
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "26px",
            background: "#F5E642",
            border: "2px solid #0A0A0A",
            padding: "0 6px",
            lineHeight: 1.2,
          }}
        >
          NUL
        </span>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "26px" }}>.</span>
      </button>

      {/* Desktop only — hidden on mobile via CSS */}
      <div className="nb-desktop-only" style={{ gap: "6px", alignItems: "center" }}>
        <ul style={{ display: "flex", gap: "6px", listStyle: "none", margin: 0, padding: 0 }}>
          {links.map((l) => (
            <li key={l}>
              <NavLink label={l} onClick={() => go(l)} />
            </li>
          ))}
        </ul>
      </div>

      <a
        href="mailto:nolantino29@gmail.com"
        className="nb-desktop-only"
        style={{
          alignItems: "center",
          background: "#F5E642",
          color: "#0A0A0A",
          fontSize: "12px",
          fontWeight: "800",
          padding: "8px 20px",
          border: "2px solid #0A0A0A",
          boxShadow: "3px 3px 0px #0A0A0A",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          textDecoration: "none",
          transition: "transform 0.1s ease, box-shadow 0.1s ease",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translate(-1px,-1px)"; e.currentTarget.style.boxShadow = "4px 4px 0px #0A0A0A"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "3px 3px 0px #0A0A0A"; }}
      >
        Hire me
      </a>
    </nav>
  );
}

function NavLink({ label, onClick }: { label: string; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontSize: "12px",
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        padding: "6px 14px",
        border: "2px solid #0A0A0A",
        background: hov ? "#F5E642" : "transparent",
        cursor: "pointer",
        transition: "background 0.15s ease",
      }}
    >
      {label}
    </button>
  );
}