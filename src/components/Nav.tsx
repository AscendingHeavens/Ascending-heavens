"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useContact } from "./ContactProvider";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { open } = useContact();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/50 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-[64px]">
        {/* Logo */}
        <a href="./#top" className="flex items-center gap-3 group">
          {/* Wings Placeholder (you'll drop image here later) */}
          <div className="relative w-18 h-18 flex items-center justify-center">
            {/* Glow */}
            <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500" />

            {/* IMAGE GOES HERE */}
            {/* Replace this div with your wings PNG */}
            <img
              src="/logo.png"
              alt="Ascending Heavens Wings"
              className="relative h-full w-auto object-contain"
            />
          </div>

          {/* Text Logo */}
          <div className="flex flex-col leading-[1]">
            {/* Ascending (subtle) */}
            <span className="text-[11px] tracking-[0.25em] text-white/40 uppercase">
              Ascending
            </span>

            {/* Heavens (main brand) */}
            <span className="text-[18px] font-semibold tracking-tight bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Heavens
            </span>
          </div>
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
          {[
            { name: "Services", href: "./#services" },
            { name: "Process", href: "./#process" },
            { name: "Work", href: "./#transformation" },
            // {name:"Pricing", href:"/pricing"}
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={[
                "relative hover:text-white transition-colors",
                "after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0",
                "after:bg-white after:transition-all hover:after:w-full",
              ].join(" ")}
            >
              {item.name}
            </a>
          ))}
        </nav>

       
        <Button
          onClick={() => open("nav")}
          className="h-9 rounded-full bg-white text-black hover:bg-white/90 text-[13px] font-medium px-5 transition-all hover:scale-[1.05] active:scale-[0.97]"
        >
          Start your ascent
        </Button>
      </div>
    </motion.header>
  );
}
