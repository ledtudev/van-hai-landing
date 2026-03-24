"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative h-screen w-full overflow-hidden font-sans"
      id="top"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source
          src="https://vinhomeshaivanland.com/wp-content/uploads/2026/03/7591994995810.mp4"
          type="video/mp4"
        />
      </video>

      {/* Darker Top Overlay */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 z-20 h-48 bg-linear-to-b from-black/90 via-black/50 to-transparent transition-opacity duration-500 ${isScrolled ? "opacity-100" : "opacity-80"}`}
      />

      {/* Bottom vignette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-64 bg-linear-to-t from-black/60 to-transparent" />

      {/* Navigation */}
      <Navbar />

      {/* Hero content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 px-4 py-1.5 border border-white/30 rounded-full text-white/70 text-xs tracking-[0.25em] uppercase backdrop-blur-sm"
        >
          Vịnh Nam Chơn · Đà Nẵng
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-tight drop-shadow-2xl mb-4"
        >
          Vinhomes<br />
          <span className="text-[#d4af37]">Hải Vân Bay</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="text-white/70 text-sm md:text-base max-w-xl tracking-wide mb-8"
        >
          Tổ hợp nghỉ dưỡng – sinh thái – đô thị đẳng cấp quốc tế
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5, ease: "backOut" }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0c1f38] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-colors hover:bg-[#153154]"
        >
          <FileText className="h-4 w-4" />
          NHẬN BÁO GIÁ NGAY
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/80 pt-2 backdrop-blur-sm">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white" />
        </div>
      </motion.div>
    </div>
  );
}
