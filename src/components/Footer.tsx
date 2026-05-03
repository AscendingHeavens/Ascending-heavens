"use client";

import { fadeUp } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

 

  return (
    <footer className="relative bg-[#050505] text-white pt-24 pb-12 px-6 md:px-10 mt-[-40px] rounded-t-[40px]">
      <div className="max-w-6xl mx-auto">

        {/* Top */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20"
        >

          {/* Brand */}
          <div className="md:col-span-6">
  
  {/* Logo + Name */}
  <a href="#top" className="flex items-center gap-3 group mb-8">
    
    {/* Wings / Logo */}
    <div className="relative w-16 h-16 flex items-center justify-center">
      
      {/* Glow Aura */}
      <div className="absolute inset-0 bg-purple-500/20 blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500" />

      <img
        src="/logo.png"
        alt="Ascending Heavens Wings"
        className="relative h-full w-auto object-contain"
      />
    </div>

    {/* Text */}
    <div className="flex flex-col leading-[1]">
      
      <span className="text-[11px] tracking-[0.25em] text-white/40 uppercase">
        Ascending
      </span>

      <span className="text-[18px] font-semibold tracking-tight bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
        Heavens
      </span>

    </div>
  </a>

  {/* Headline */}
  <p className="font-display text-3xl md:text-5xl tracking-[-0.02em] leading-[1.1] text-white/90 max-w-lg">
    Not built to exist. <br /> Built to ascend.
  </p>

  {/* Subtext */}
  <p className="mt-5 text-white/40 text-sm max-w-sm leading-relaxed">
    We don’t design websites.  
    We architect perception, direction, and dominance — for founders who refuse to stay grounded.
  </p>

</div>

          {/* Links */}
          {[
            {
              title: "Studio",
              links: ["Services", "Process", "Work"],
              hrefs: ["#services", "#process", "#transformation"],
            },
            {
              title: "Company",
              links: ["About"],
              hrefs: ["#top", "#top", "#top"],
            },
            {
              title: "Contact",
              links: [
                "Email us",
                "Twitter",
                "LinkedIn",
              ],
              hrefs: [
                "mailto:services@ascending-heavens.com",
                "#top",
                "https://www.linkedin.com/company/ascending-heavens",
              ],
            },
          ].map((col) => (
            <div key={col.title} className="md:col-span-2">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/35 font-mono-ui mb-5">
                {col.title}
              </div>

              <ul className="space-y-3 text-sm text-white/65">
                {col.links.map((l, idx) => (
                  <li key={l}>
                    <a
                      href={col.hrefs[idx]}
                      className="hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all hover:after:w-full"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/35 font-mono-ui uppercase tracking-[0.18em]"
        >
          <span>© {year} Ascending Heavens</span>
          <span>Built with intent · crafted in silence</span>
        </motion.div>
      </div>
    </footer>
  );
}