"use client";

import { fadeUp } from "@/lib/constants";
import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    body: "We dig into your audience, funnel, and current stack. Every assumption gets a receipt.",
  },
  {
    n: "02",
    title: "Align",
    body: "We map a single strategy where brand, product, and marketing speak the same language.",
  },
  {
    n: "03",
    title: "Build",
    body: "Design and engineering ship as one team — in weeks, not quarters.",
  },
  {
    n: "04",
    title: "Scale",
    body: "Weekly reviews compound the wins. What works gets doubled. What doesn't gets killed.",
  },
];

export default function Process() {
 

  return (
    <section
      id="process"
      className="relative bg-white py-28 md:py-36 px-6 md:px-10 text-[#09090B]"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl mb-16"
        >
          <div className="text-[11px] uppercase tracking-[0.22em] text-black/45 font-mono-ui mb-5">
            The path
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-[1.05]">
            Your path to{" "}
            <span className="italic font-light text-black/55">
              ascent.
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Ultra subtle glowing line */}
          <div className="absolute left-[24px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-black/10">
            <div className="absolute inset-0 blur-sm bg-purple-500/20 opacity-30" />
          </div>

          <ul className="space-y-14 md:space-y-20">
            {STEPS.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative grid grid-cols-[64px_1fr] md:grid-cols-2 md:gap-10 items-start"
              >
                {/* TEXT */}
                <div
                  className={`${
                    i % 2 === 0
                      ? "md:order-1 md:text-right md:pr-12"
                      : "md:order-2 md:pl-12"
                  } row-start-1 col-start-2 md:col-start-auto`}
                >
                  <h3 className="font-display text-2xl md:text-4xl tracking-tight leading-tight mb-3">
                    {s.title}
                  </h3>

                  <p className="text-black/55 text-[15px] md:text-base leading-relaxed max-w-md md:inline-block">
                    {s.body}
                  </p>
                </div>

                {/* STEP NUMBER */}
                <div
                  className={`${
                    i % 2 === 0
                      ? "md:order-2 md:pl-12"
                      : "md:order-1 md:pr-12 md:text-right"
                  } row-start-1 col-start-1 md:col-start-auto flex md:block`}
                >
                  <motion.span
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className={["relative inline-flex items-center justify-center w-12 h-12 rounded-full", 
                    "bg-[#09090B] text-white font-mono-ui text-xs transition-all duration-300"].join("")}
                  >
                    {/* Subtle glow ring */}
                    <span className="absolute inset-0 rounded-full border border-purple-500/20 opacity-0 hover:opacity-100 transition" />

                    {/* Soft outer glow (barely visible) */}
                    <span className="absolute inset-0 rounded-full blur-md bg-purple-500/10 opacity-0 hover:opacity-100 transition" />

                    {s.n}
                  </motion.span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}