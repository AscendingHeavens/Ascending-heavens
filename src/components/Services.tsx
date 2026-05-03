"use client";

import { motion } from "framer-motion";
import { Layers, Rocket, LineChart } from "lucide-react";

const SERVICES = [
  {
    icon: Layers,
    tag: "01 — Build",
    title: "Websites & apps, engineered to convert.",
    body: "Editorial craft meets production-grade code. Every pixel earns its place.",
    bullets: ["Marketing sites", "Product UX", "Custom web apps"],
  },
  {
    icon: Rocket,
    tag: "02 — Scale",
    title: "Funnels and growth systems that compound.",
    body: "From first touch to loyal customer — one connected loop, built to repeat.",
    bullets: ["Acquisition funnels", "Lifecycle automation", "Content engines"],
  },
  {
    icon: LineChart,
    tag: "03 — Optimize",
    title: "Performance and analytics, made decisive.",
    body: "Clarity on what works, the discipline to remove what doesn't. Every week.",
    bullets: ["Experiment ops", "Dashboards", "Conversion review"],
  },
];

export default function Services() {


  const stagger = {
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section
      id="services"
      className="relative py-28 md:py-36 px-6 md:px-10 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-xl">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/40 font-mono-ui mb-5">
              Services
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-[1.05]">
              How we help you{" "}
              <span className="italic font-light text-white/60">
                ascend.
              </span>
            </h2>
          </div>

          <p className="md:max-w-sm text-white/60 text-base leading-relaxed">
            One team. Three disciplines. Working as a single system so you don't
            have to stitch it together.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.tag}
              
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 backdrop-blur-sm hover:border-white/25 hover:bg-white/[0.05] transition-all duration-500"
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-10">
                <div className="w-11 h-11 rounded-xl bg-white/10 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <service.icon className="w-5 h-5" />
                </div>

                <span className="text-[11px] font-mono-ui text-white/40 uppercase tracking-[0.18em]">
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl md:text-[26px] tracking-tight leading-[1.15] mb-4 text-white">
                {service.title}
              </h3>

              <p className="text-white/60 text-[15px] leading-relaxed mb-8">
                {service.body}
              </p>

              {/* Bullets */}
              <ul className="mt-auto space-y-2 pt-6 border-t border-white/10">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2 text-sm text-white/70"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}