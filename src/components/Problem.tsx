"use client";

import { fadeUp } from "@/lib/constants";
import { motion } from "framer-motion";
import { Unplug, Compass, TrendingDown, Shuffle } from "lucide-react";

const CARDS = [
  {
    icon: Unplug,
    title: "Disconnected tools",
    body: "Ten dashboards. Zero signal. Your stack fights itself while opportunity slips.",
  },
  {
    icon: Compass,
    title: "No clear direction",
    body: "A roadmap built from gut feelings is just fog. Teams drift. Momentum dies.",
  },
  {
    icon: TrendingDown,
    title: "Poor conversions",
    body: "Traffic comes. Nothing sticks. The funnel leaks before it reaches value.",
  },
  {
    icon: Shuffle,
    title: "Random marketing",
    body: "A launch here. A campaign there. No rhythm, no compounding, no system.",
  },
];

export default function Problem() {
  

  const stagger = {
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <section className="relative py-32 md:py-40 px-6 md:px-10 overflow-hidden bg-[#050505]">

      {/* BASE */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* MAIN PURPLE GLOW */}
      <div
        className="absolute left-1/2 bottom-[-25%] -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-[100px] opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(168,85,247,0.15) 40%, transparent 70%)",
        }}
      />

      {/* TOP FADE LIGHT */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(168,85,247,0.18), transparent 70%)",
        }}
      />

      {/* GRID TEXTURE */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADING */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl mb-20"
        >
          <div className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-mono-ui mb-6">
            The friction
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-[-0.035em] leading-[1.05] text-white">
            Growth shouldn't feel
            <br />
            <span className="text-white/40">this chaotic.</span>
          </h2>
        </motion.div>

        {/* CARDS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl p-[1px] overflow-hidden"
            >
              {/* GRADIENT BORDER */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/40 via-transparent to-transparent" />

              {/* CARD BODY */}
              <div className="relative rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md p-8 md:p-10 h-full transition duration-500 group-hover:border-white/20 group-hover:bg-white/[0.05]">

                {/* INNER GLOW */}
                <div
                  className="absolute -top-28 -right-28 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition duration-700"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(168,85,247,0.18), transparent 70%)",
                  }}
                />

                <div className="relative z-10">
                  {/* ICON */}
                  <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-105">
                    <c.icon className="w-5 h-5" />
                  </div>

                  {/* TITLE */}
                  <h3 className="font-display text-2xl tracking-tight text-white mb-3">
                    {c.title}
                  </h3>

                  {/* BODY */}
                  <p className="text-white/55 leading-relaxed text-[15px] max-w-md">
                    {c.body}
                  </p>
                </div>

                {/* INDEX */}
                <div className="absolute bottom-4 right-5 text-[11px] font-mono-ui text-white/20 tracking-wider">
                  0{i + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}