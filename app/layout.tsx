import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catraliya Nolan Hakim — Frontend & Backend Web Developer",
  description:
    "Portfolio of Nolan Hakim — D3 Teknologi Informasi graduate from Universitas Brawijaya, frontend and backend web developer based in Malang, Indonesia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ background: "#FFFEF0", color: "#0A0A0A" }}>{children}</body>
    </html>
  );
}