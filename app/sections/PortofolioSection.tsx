"use client";
import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface Project {
  num: string; title: string; shortDesc: string; fullDesc: string;
  tags: string[]; href: string; github?: string; image: string; year: string;
}

const NB = {
  yellow: "#F5E642", pink: "#FF6B9D", teal: "#4ECDC4",
  green: "#A8E063", orange: "#FF6B35", purple: "#C084FC",
  black: "#0A0A0A", bg: "#FFFEF0",
};
const TAG_COLORS = [NB.yellow, NB.pink, NB.teal, NB.green, NB.orange, NB.purple];
const CARD_COLORS = [NB.yellow, NB.pink, NB.teal, NB.green, NB.orange, NB.purple, NB.yellow, NB.pink, NB.teal];

const PROJECTS: Project[] = [
  { num: "01", year: "2025", title: "Web Top-Up", shortDesc: "Platform top-up game berbasis web.", fullDesc: "Website top-up game dengan katalog produk, sistem pembayaran, dan manajemen transaksi. Dibangun dengan tampilan yang cepat dan antarmuka yang ramah pengguna.", tags: ["Laravel", "TailwindCSS", "JavaScript", "PHP"], href: "#", github: "https://github.com/nolanhakim?tab=repositories", image: "/img/git.png" },
  { num: "02", year: "2025", title: "Web Jumeau", shortDesc: "Website brand / company profile Jumeau.", fullDesc: "Website company profile untuk brand Jumeau. Menampilkan profil bisnis, produk unggulan, dan halaman kontak dengan desain elegan dan responsif.", tags: ["HTML", "CSS"], href: "https://www.jumeauscent.com/", github: "https://github.com/nolanhakim?tab=repositories", image: "/img/jumeau.png" },
  { num: "03", year: "2024", title: "Web Cuaca", shortDesc: "Aplikasi prakiraan cuaca real-time.", fullDesc: "Web aplikasi cuaca yang mengambil data real-time dari OpenWeatherMap API. Menampilkan prakiraan harian, kondisi cuaca saat ini, dan visualisasi data yang interaktif.", tags: ["JavaScript", "REST API", "CSS"], href: "https://web-cuaca-ld9d.vercel.app/", github: "https://github.com/nolanhakim?tab=repositories", image: "/img/cuaca.png" },
  { num: "04", year: "2024", title: "Web Creanomic", shortDesc: "Platform kreatif & ekonomi digital.", fullDesc: "Website platform Creanomic adalah website suatu acara program kerja yang menggabungkan pameran dan festival kreatif serta sarana untuk mengembangkan ekonomi digital.", tags: ["Next.js", "Laravel", "MySQL"], href: "https://creanomic.com/", github: "https://github.com/nolanhakim?tab=repositories", image: "/img/crea.png" },
  { num: "05", year: "2024", title: "Web Cahaya Gemilang", shortDesc: "Company profile distributor bahan bangunan.", fullDesc: "Website company profile untuk CV Cahaya Gemilang, distributor bahan bangunan. Menampilkan katalog produk, profil perusahaan, dan formulir pemesanan.", tags: ["HTML", "CSS", "JavaScript", "PHP"], href: "https://www.kedai-cahayagemilang.my.id/", github: "https://github.com/nolanhakim?tab=repositories", image: "/img/cg1.png" },
  { num: "06", year: "2024", title: "Web Photobooth", shortDesc: "Aplikasi photobooth digital berbasis web.", fullDesc: "Web app photobooth yang memungkinkan pengguna mengambil foto langsung dari browser, memilih frame, dan mengunduh hasilnya. Dibangun dengan MediaDevices API.", tags: ["JavaScript", "Canvas API", "CSS"], href: "https://photobooth-vokasi.vercel.app/", github: "https://github.com/nolanhakim?tab=repositories", image: "/img/photo.png" },
  { num: "07", year: "2025", title: "Web Portofolio", shortDesc: "Personal portfolio — neobrutalism aesthetic.", fullDesc: "Website portofolio pribadi yang dibangun dengan Next.js 15. Menampilkan design system neobrutalism, animasi halus berbasis Intersection Observer, dan layout yang sepenuhnya responsif.", tags: ["Next.js", "TypeScript", "CSS"], href: "https://nolanhakim.my.id/", github: "https://github.com/nolanhakim?tab=repositories", image: "/img/porto.png" },
  { num: "08", year: "2025", title: "Web PSIK", shortDesc: "Project tugas akhir berbasis web.", fullDesc: "Website yang dikembangkan sebagai tugas akhir. Mencakup fitur manajemen data, autentikasi pengguna, dan dashboard administrasi dengan teknologi full-stack modern.", tags: ["Next.js", "Laravel", "MySQL", "Tailwind"], href: "#", github: "https://github.com/nolanhakim?tab=repositories", image: "/img/git.png" },
  { num: "09", year: "2025", title: "Web Saerah Meubel", shortDesc: "Website katalog & profil usaha Saerah Meubel.", fullDesc: "Website katalog produk online dan profil bisnis untuk Saerah Meubel, produsen furniture kayu custom berkualitas tinggi. Menampilkan koleksi furnitur secara dinamis, detail spesifikasi bahan, dan integrasi pemesanan WhatsApp.", tags: ["HTML", "CSS", "JavaScript"], href: "https://saerahmeubel.vercel.app/", github: "https://github.com/nolanhakim?tab=repositories", image: "/img/saerah.png" },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const idx = PROJECTS.findIndex(p => p.num === project.num);
  const accent = CARD_COLORS[idx % CARD_COLORS.length] ?? NB.yellow;

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", h);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const modalContent = (
    <div
      onClick={onClose}
      className="animate-backdrop"
      style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(10,10,10,0.75)", padding: "16px" }}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="animate-modal-pop"
        style={{ position: "relative", width: "100%", maxWidth: "640px", background: NB.bg, border: `3px solid ${NB.black}`, boxShadow: `8px 8px 0px ${NB.black}`, maxHeight: "92vh", overflow: "hidden", display: "flex", flexDirection: "column" }}
      >
        <div style={{ height: "8px", background: accent, flexShrink: 0 }} />
        <div style={{ position: "relative", width: "100%", height: "clamp(160px,35vw,240px)", flexShrink: 0 }}>
          <Image src={project.image} alt={project.title} fill className="object-cover" sizes="640px" />
          <button onClick={onClose} style={{ position: "absolute", top: "12px", right: "12px", width: "36px", height: "36px", background: NB.black, color: "#fff", border: `2px solid ${NB.black}`, fontSize: "20px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>×</button>
          <span style={{ position: "absolute", top: "12px", left: "12px", background: accent, color: NB.black, border: `2px solid ${NB.black}`, fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", padding: "3px 10px" }}>Website</span>
        </div>
        <div style={{ padding: "clamp(16px,4vw,28px)", overflowY: "auto" }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", color: "#888", marginBottom: "4px" }}>{project.num} · {project.year}</p>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(20px,4vw,28px)", letterSpacing: "0.02em", color: NB.black }}>{project.title}</h2>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {project.href !== "#" && <a href={project.href} target="_blank" rel="noopener noreferrer" style={{ background: accent, color: NB.black, border: `2px solid ${NB.black}`, boxShadow: `3px 3px 0px ${NB.black}`, fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", fontWeight: 700, padding: "6px 16px", textDecoration: "none", textTransform: "uppercase" }}>Visit ↗</a>}
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ background: NB.black, color: "#fff", border: `2px solid ${NB.black}`, boxShadow: `3px 3px 0px ${NB.black}`, fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", fontWeight: 700, padding: "6px 16px", textDecoration: "none", textTransform: "uppercase" }}>GitHub ↗</a>}
            </div>
          </div>
          <p style={{ fontSize: "14px", lineHeight: 1.85, color: "#444", marginBottom: "20px" }}>{project.fullDesc}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {project.tags.map((t, i) => <span key={t} style={{ background: TAG_COLORS[i % TAG_COLORS.length], border: `2px solid ${NB.black}`, fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", padding: "3px 10px", color: NB.black }}>{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
  return createPortal(modalContent, document.body);
}

function ProjectCard({ p, index: _index, accent, onOpen }: { p: Project; index: number; accent: string; onOpen: (p: Project) => void }) {
  const [hov, setHov] = useState(false);
  return (
    <div>
      <button
        onClick={() => onOpen(p)}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{ width: "100%", textAlign: "left", background: hov ? accent : "#FFFFFF", border: `2px solid ${NB.black}`, boxShadow: hov ? `6px 6px 0px ${NB.black}` : `4px 4px 0px ${NB.black}`, transform: hov ? "translate(-2px,-2px)" : "translate(0,0)", transition: "all 0.15s ease", cursor: "pointer", display: "block", touchAction: "manipulation", WebkitTapHighlightColor: "transparent" } as React.CSSProperties}
      >
        <div style={{ height: "6px", background: accent, borderBottom: `2px solid ${NB.black}` }} />
        <div style={{ position: "relative", width: "100%", height: "clamp(110px,25vw,155px)", borderBottom: `2px solid ${NB.black}`, overflow: "hidden" }}>
          <Image src={p.image} alt={p.title} fill className="object-cover" style={{ transform: hov ? "scale(1.05)" : "scale(1)", transition: "transform 0.4s ease" }} sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw" />
        </div>
        <div style={{ padding: "clamp(10px,2.5vw,18px)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: 700, color: "#888" }}>{p.num} · {p.year}</p>
            <span style={{ fontSize: "14px", transform: hov ? "translate(2px,-2px)" : "translate(0,0)", transition: "transform 0.15s ease" }}>↗</span>
          </div>
          <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(16px,3vw,20px)", letterSpacing: "0.02em", color: NB.black, marginBottom: "4px", lineHeight: 1.1 }}>{p.title}</h3>
          <p style={{ fontSize: "11px", color: "#666", lineHeight: 1.65, marginBottom: "10px" }}>{p.shortDesc}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
            {p.tags.slice(0, 3).map((t, i) => <span key={t} style={{ background: TAG_COLORS[i % TAG_COLORS.length], border: `2px solid ${NB.black}`, fontSize: "9px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", padding: "2px 7px", color: NB.black }}>{t}</span>)}
          </div>
        </div>
      </button>
    </div>
  );
}

export default function Portfolio() {
  const [modal, setModal] = useState<Project | null>(null);
  const openModal = useCallback((p: Project) => setModal(p), []);
  const closeModal = useCallback(() => setModal(null), []);
  const { ref, hasRevealed } = useScrollReveal(0.02);

  return (
    <>
      {modal && <ProjectModal project={modal} onClose={closeModal} />}
      <section id="portfolio" ref={ref} style={{ borderBottom: `3px solid ${NB.black}`, background: NB.bg }}>
        <div style={{ padding: `clamp(40px,7vw,80px) clamp(20px,5vw,64px) clamp(24px,4vw,40px)` }}>
          <div
            className="nb-section-label"
            style={{
              opacity: hasRevealed ? 1 : 0,
              transform: hasRevealed ? "translateX(0)" : "translateX(-20px)",
              transition: "opacity 0.5s ease 0ms, transform 0.5s ease 0ms",
            }}
          >
            Portfolio — Website
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", color: "#888", marginLeft: "auto" }}> projects</span>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ borderTop: `3px solid ${NB.black}` }}>
          {PROJECTS.map((p, i) => (
            <div
              key={p.num}
              style={{
                borderRight: `2px solid ${NB.black}`,
                borderBottom: `2px solid ${NB.black}`,
                padding: "10px",
                background: NB.bg,
                opacity: hasRevealed ? 1 : 0,
                transform: hasRevealed ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.5s ease ${100 + i * 60}ms, transform 0.5s ease ${100 + i * 60}ms`,
              }}
            >
              <ProjectCard p={p} index={i} accent={CARD_COLORS[i % CARD_COLORS.length]} onOpen={openModal} />
            </div>
          ))}
        </div>
        <div style={{ padding: `clamp(20px,4vw,40px) clamp(20px,5vw,64px)`, borderTop: `3px solid ${NB.black}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#888" }}>More work in progress —</p>
          <a href="https://github.com/nolanhakim?tab=repositories" target="_blank" rel="noopener noreferrer"
            style={{ background: NB.yellow, color: NB.black, border: `2px solid ${NB.black}`, boxShadow: `3px 3px 0px ${NB.black}`, fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", fontWeight: 800, padding: "10px 24px", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.05em", transition: "transform 0.1s ease, box-shadow 0.1s ease", display: "inline-block" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "5px 5px 0px #0A0A0A"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "3px 3px 0px #0A0A0A"; }}
          >
            Visit GitHub ↗
          </a>
        </div>
      </section>
    </>
  );
}

