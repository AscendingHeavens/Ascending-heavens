"use client";

import { motion } from "framer-motion";

export default function Struggle() {
  return (
    <section className="relative bg-[#0B0B0D] py-36 md:py-48 px-6 text-center overflow-hidden">

      {/* Base dark */}
      <div className="absolute inset-0 bg-[#0B0B0D]" />

      {/* Main purple glow (hero style) */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute left-1/2 -translate-x-1/2 top-[55%] -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[80px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.22) 0%, rgba(168,85,247,0.1) 40%, transparent 70%)",
        }}
      />

      {/* Secondary top glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(168,85,247,0.12), transparent 70%)",
        }}
      />

      {/* Optional grain */}
      <div className="absolute inset-0 ah-grain opacity-50 pointer-events-none" />

      {/* Text */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="font-display text-3xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.15] text-white/35"
        >
          You try <span className="text-white">hiring agencies.</span>
          <br />
          You try <span className="text-white">managing everything yourself.</span>
          <br />
          But things <span className="text-white italic">still break.</span>
        </motion.p>
      </motion.div>
    </section>
  );
}