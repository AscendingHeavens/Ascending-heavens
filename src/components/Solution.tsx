"use client";

import { fadeUp } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Solution() {
  

  return (
    <section
      className="relative py-32 md:py-40 px-6 md:px-10"
      style={{
        background:
          "linear-gradient(180deg, #0e0219 0%, #581778 45%, #0b030f 82%, #000000 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/60 font-mono-ui mb-5">
            The shift
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-[1.05] text-white">
            That’s where{" "}
            <span className="italic font-light">Ascending Heavens</span>{" "}
            changes everything.
          </h2>

          <p className="mt-7 text-lg text-white/70 leading-relaxed max-w-lg">
            We create aligned systems where design, development, and growth
            work together — one clear direction, one compounding engine.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
            <Stat value="3×" label="faster shipping" />
            <Stat value="1 team" label="instead of four" />
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <Mockup />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }:{value:string,label:string}) {
  return (
    <div className="border-l border-white/25 pl-4">
      <div className="font-display text-3xl text-white tracking-tight">
        {value}
      </div>
      <div className="text-xs uppercase tracking-[0.18em] text-white/55 mt-1 font-mono-ui">
        {label}
      </div>
    </div>
  );
}

function Mockup() {
  return (
    <div className="relative">

      {/* Glow */}
      <div
        className="absolute -inset-6 rounded-[32px] opacity-60 blur-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.05))",
        }}
      />

      <div className="relative rounded-[28px] border border-white/15 bg-[#0E0E12]/80 backdrop-blur-2xl p-5 shadow-[0_40px_120px_rgba(0,0,0,0.6)] overflow-hidden">

        {/* Header */}
        <div className="flex items-center gap-1.5 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="ml-4 text-[11px] text-white/35 font-mono-ui">
            ascending.heavens / overview
          </span>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-6 gap-3">

          {/* Growth */}
          <div className="col-span-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/40 font-mono-ui">
                  Growth trajectory
                </div>
                <div className="font-display text-xl text-white mt-1">
                  +184%{" "}
                  <span className="text-[10px] text-emerald-300/80 ml-1">
                    ▲ MoM
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/50" />
            </div>
            <Sparkline />
          </div>

          {/* Systems */}
          <div className="col-span-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 flex flex-col justify-between">
            <div className="text-[10px] uppercase tracking-[0.18em] text-white/40 font-mono-ui">
              Systems
            </div>
            <div>
              <div className="font-display text-2xl text-white">12 / 12</div>
              <div className="text-[11px] text-white/40 mt-1">aligned</div>
            </div>
          </div>

          {/* Workstreams */}
          <div className="col-span-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-[10px] uppercase tracking-[0.18em] text-white/40 font-mono-ui mb-3">
              Active workstreams
            </div>
            <ul className="space-y-2">
              {[
                ["Site redesign", "shipped"],
                ["Funnel build", "in review"],
                ["Analytics", "running"],
              ].map(([name, state]) => (
                <li key={name} className="flex justify-between text-[12px]">
                  <span className="text-white/75">{name}</span>
                  <span className="text-white/40 font-mono-ui text-[10px]">
                    {state}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bars */}
          <div className="col-span-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-[10px] uppercase tracking-[0.18em] text-white/40 font-mono-ui mb-3">
              Conversion rate
            </div>
            <div className="flex items-end gap-1 h-16">
              {[35, 48, 42, 60, 55, 72, 68, 84, 90].map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-white/20 to-white/80"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 300 80" className="w-full h-20" fill="none">
      <path
        d="M0,70 L30,62 L60,65 L90,50 L120,52 L150,38 L180,40 L210,24 L240,28 L270,14 L300,6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}