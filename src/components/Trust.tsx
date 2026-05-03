"use client";

import { motion } from "framer-motion";

const LOGOS = [
  { src: "/logos/18startup.svg", type: "mono" },
  { src: "/logos/reblueslogo.svg", type: "mono" },
  { src: "/logos/sudhajal.svg", type: "mono" },
  { src: "/logos/brahman.svg", type: "art" }, // special handling
];

export default function Trust() {
  return (
    <section className="relative bg-[#050505] border-y border-white/5 py-16 overflow-hidden">

      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-[11px] md:text-xs uppercase tracking-[0.32em] text-white/40 font-mono-ui mb-12"
      >
        Trusted by founders, startups, and growing businesses
      </motion.p>

      {/* Gradient Fade Mask */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, #A855F7 20%, #A855F7 80%, transparent 100%)",
        }}
      >
        {/* Marquee */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-24 w-max items-center"
        >
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[160px] h-[64px] group relative"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-purple-500/10 blur-xl  group-hover:opacity-100 transition duration-500" />

              <img
                src={logo.src}
                alt="brand logo"
                className={`
                  object-contain transition-all duration-500

                  ${
                    logo.type === "art"
                      ? "h-12 md:h-14 opacity-80 group-hover:opacity-100"
                      : "h-8 md:h-10 brightness-0 invert opacity-50 group-hover:opacity-100"
                  }
                `}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}