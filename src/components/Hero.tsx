"use client";
import { Button } from "./ui/button";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useContact } from "./ContactProvider";
import { motion } from "framer-motion";

export default function Hero() {
  const { open } = useContact();



  const stagger = {
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 overflow-hidden bg-[#050505]">
      {/* Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute left-1/2 bottom-[-20%] -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-[40px]"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(168,85,247,0.12) 35%, transparent 60%)",
        }}
      />

      {/* Grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, #A020F0 30%, transparent 75%)",
        }}
      />

      {/* Floating Chips */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="hidden lg:block absolute left-[8%] top-[30%]"
      >
        <FloatingChip label="conversion" value="+184%" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="hidden lg:block absolute right-[8%] top-[38%]"
      >
        <FloatingChip label="systems aligned" value="12 / 12" reverse />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Eyebrow */}
        <motion.div
          //  variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/70 font-mono-ui mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />A
          digital agency for founders on the ascent
        </motion.div>

        {/* Heading */}
        <motion.h1
          //  variants={fadeUp}
          className="font-display font-medium text-white text-[40px] sm:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.03em]"
        >
          You're building something bigger.
          <br />
          <span className="text-white/45">
            But everything feels disconnected.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          // variants={fadeUp}
          className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-white/55 leading-relaxed"
        >
          Your website, your marketing, your systems nothing works together.
          So growth slows down.
        </motion.p>

        {/* CTA */}
        <motion.div
          // variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button
            onClick={() => open("hero")}
            className="group h-12 rounded-full bg-white text-black hover:bg-white px-7 font-medium text-[15px] transition-all hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_60px_rgba(255,255,255,0.15)]"
          >
            Start Your Ascent
            <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>

          <a
            href="#services"
            className="h-12 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.02] hover:bg-white/[0.06] text-white/80 hover:text-white px-6 text-[15px] transition-colors"
          >
            See how we work
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs uppercase tracking-[0.3em] font-mono-ui flex flex-col items-center gap-2"
      >
        Scroll
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </motion.div>
    </section>
  );
}

function FloatingChip({ label, value, reverse = false }
  :{label:string,value:string,reverse?:boolean}
)   {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.4)] ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/90 to-white/30 flex items-center justify-center">
        <div className="w-3 h-3 rounded-sm bg-black/80" />
      </div>

      <div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-white/40 font-mono-ui">
          {label}
        </div>
        <div className="text-white font-display text-sm mt-0.5">{value}</div>
      </div>
    </div>
  );
}
