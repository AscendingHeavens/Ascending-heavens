"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { useContact } from "./ContactProvider";
import { fadeUp } from "@/lib/constants";

export default function FinalCTA() {
  const { open } = useContact();

 

  return (
    <section className="relative px-6 md:px-10 pb-0">
      <div className="max-w-6xl mx-auto">

        <div
          className="relative rounded-[36px] overflow-hidden px-8 md:px-16 py-24 md:py-32 text-center"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 50% 110%, rgba(255,255,255,1) 0%, rgba(235,235,240,1) 40%, rgba(200,200,208,1) 100%)",
          }}
        >

          {/* Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.9), transparent 65%)",
            }}
          />

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative"
          >
            {/* Label */}
            <div className="text-[11px] uppercase tracking-[0.22em] text-black/45 font-mono-ui mb-6">
              The ascent
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-[1.04] text-[#09090B] max-w-3xl mx-auto">
              You're closer than you think.
              <br />
              <span className="text-black/50">
                The only thing missing is the right system.
              </span>
            </h2>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  onClick={() => open("final")}
                  className="group rounded-full bg-[#09090B] text-white hover:bg-black px-8 py-4 text-[15px] font-medium shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                >
                  Get your growth plan
                  <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </motion.div>

              <span className="text-sm text-black/50">
                Free 30-min strategy session · no pressure
              </span>
            </div>

            {/* Trust microcopy */}
            <p className="mt-6 text-xs text-black/40">
              No spam. No long-term contracts. Just clarity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}