"use client";
import { useState } from "react";


const NB = {
  yellow: "#F5E642", pink: "#FF6B9D", teal: "#4ECDC4",
  green: "#A8E063", orange: "#FF6B35", black: "#0A0A0A", bg: "#FFFEF0",
};


export default function Contact() {
  return (
    <>
      <section
        id="contact"
        style={{
          borderBottom: `3px solid ${NB.black}`,
          background: NB.bg,
          padding: "clamp(40px,7vw,80px) clamp(20px,5vw,64px)",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <div>
            <div className="nb-section-label" style={{ marginBottom: "clamp(24px,4vw,40px)" }}>Contact</div>

            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px,8vw,72px)", lineHeight: 1, letterSpacing: "0.02em", marginBottom: "20px", color: NB.black }}>
              Let&apos;s create{" "}
              <span style={{ background: NB.yellow, padding: "0 8px", border: `2px solid ${NB.black}` }}>something</span>
              {" "}great.
            </h2>

            <p style={{ fontSize: "14px", lineHeight: 1.85, color: "#444", marginBottom: "32px" }}>
              Have a project in mind, want to collaborate, or just want to say hello?
              I&apos;d love to hear from you.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "420px" }}>
              {[
                { icon: "@", label: "nolantino29@gmail.com", href: "mailto:nolantino29@gmail.com", bg: NB.teal },
                { icon: "gh", label: "github.com/nolanhakim", href: "https://github.com/nolanhakim?tab=repositories", bg: NB.pink },
              ].map(item => (
                <ContactLink key={item.label} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: NB.black, borderTop: `3px solid ${NB.black}` }}>
        {/* Yellow accent top stripe */}
        <div style={{ background: NB.yellow, borderBottom: `3px solid ${NB.black}`, padding: "10px clamp(20px,5vw,64px)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: NB.black }}>
            ✦ Available for freelance &amp; full-time work
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 700, color: NB.black }}>
            nolantino29@gmail.com
          </span>
        </div>

        {/* Main footer body */}
        <div style={{ padding: "clamp(40px,6vw,72px) clamp(20px,5vw,64px)" }}>
          {/* Big name */}
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(64px,16vw,160px)", lineHeight: 0.9, letterSpacing: "0.02em", color: "#fff", marginBottom: "clamp(32px,4vw,56px)" }}>
            Catraliya<br />
            <span style={{ color: NB.yellow }}>Nolan</span>{" "}
            <span style={{ color: NB.pink }}>Hakim</span>
          </h2>

          {/* Info row */}
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "24px", borderTop: "2px solid #222", paddingTop: "clamp(24px,4vw,40px)" }}>
            {/* Col 1 — tagline */}
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "#888", lineHeight: 1.8, maxWidth: "220px" }}>
                Frontend &amp; Backend Web Developer based in Malang, Indonesia.
              </p>
            </div>

            {/* Col 2 — links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "#555", marginBottom: "4px" }}>Links</p>
              {[
                { label: "GitHub", href: "https://github.com/nolanhakim?tab=repositories" },
                { label: "Email",  href: "mailto:nolantino29@gmail.com" },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#aaa", textDecoration: "none", fontWeight: 600, transition: "color 0.15s ease", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  onMouseEnter={e => (e.currentTarget.style.color = NB.yellow)}
                  onMouseLeave={e => (e.currentTarget.style.color = "#aaa")}
                >
                  ↗ {s.label}
                </a>
              ))}
            </div>

            {/* Col 3 — stack */}
            <div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "#555", marginBottom: "10px" }}>Stack</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {["Next.js", "Laravel", "TailwindCSS", "MySQL"].map((tech, i) => {
                  const colors = [NB.yellow, NB.pink, NB.teal, NB.green];
                  return (
                    <span key={tech} style={{ background: colors[i], color: NB.black, border: `2px solid ${colors[i]}`, fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fontWeight: 800, textTransform: "uppercase", padding: "3px 10px" }}>
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "2px solid #1a1a1a", padding: "16px clamp(20px,5vw,64px)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#444" }}>
            © {new Date().getFullYear()} Catraliya Nolan Hakim
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#444" }}>
            Built with Next.js ✦ Neobrutalism UI
          </span>
        </div>
      </footer>
    </>
  );
}

function ContactLink({ icon, label, href, bg }: { icon: string; label: string; href: string; bg: string }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        textDecoration: "none",
        background: hov ? bg : "#fff",
        border: `2px solid ${NB.black}`,
        boxShadow: hov ? `4px 4px 0px ${NB.black}` : `3px 3px 0px ${NB.black}`,
        transform: hov ? "translate(-2px,-2px)" : "translate(0,0)",
        padding: "10px 16px",
        transition: "all 0.15s ease",
      }}
    >
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", fontWeight: 800, width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", border: `2px solid ${NB.black}`, background: hov ? NB.black : bg, color: hov ? "#fff" : NB.black, flexShrink: 0, transition: "all 0.15s ease" }}>
        {icon}
      </span>
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "13px", fontWeight: 600, color: NB.black }}>
        {label}
      </span>
    </a>
  );
}