"use client";

import { fadeUp } from "@/lib/constants";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const BEFORE = [
  "Disconnected tools",
  "Unclear growth",
  "Constant firefighting",
  "Scattered messaging",
];

const AFTER = [
  "Unified systems",
  "Clear direction",
  "Scalable growth",
  "One coherent story",
];

export default function Transformation() {
 

  return (
    <section
      id="transformation"
      className="relative py-28 md:py-36 px-6 md:px-10 bg-white text-[#09090B]"
    >
      <div className="max-w-6xl mx-auto">

      
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl mb-16"
        >
          <div className="text-[11px] uppercase tracking-[0.22em] text-black/45 font-mono-ui mb-5">
            The transformation
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-[1.05]">
            From chaos to clarity —
            <br />
            <span className="text-black/45">in one system.</span>
          </h2>
        </motion.div>

        {/* Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-black/10">

          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 bg-gradient-to-br from-[#FBF5F4] to-[#F3EDEB] border-b md:border-b-0 md:border-r border-black/10 relative"
          >
            <div className="text-[11px] uppercase tracking-[0.22em] text-black/40 font-mono-ui mb-4">
              Before
            </div>

            <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-8 text-black/85">
              Disconnected effort.
              <br />
              Diminishing returns.
            </h3>

            <ul className="space-y-4">
              {BEFORE.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 w-5 h-5 rounded-full bg-black/5 border border-black/10 flex items-center justify-center">
                    <X className="w-3 h-3 text-black/50" />
                  </span>

                  <span className="text-black/60 line-through decoration-black/20 decoration-[1px]">
                    {b}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 bg-gradient-to-br from-[#0B0B0D] to-[#1E1E24] text-white relative overflow-hidden"
          >
            {/* Glow */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
              }}
            />

            <div className="relative">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/50 font-mono-ui mb-4">
                After
              </div>

              <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-8">
                Aligned systems.
                <br />
                Compounding growth.
              </h3>

              <ul className="space-y-4">
                {AFTER.map((a, i) => (
                  <motion.li
                    key={a}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 w-5 h-5 rounded-full bg-white text-black flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </span>

                    <span className="text-white/90">{a}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}