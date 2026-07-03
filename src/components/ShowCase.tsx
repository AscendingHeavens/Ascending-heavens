"use client";


import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";

type Project = {
  name: string;
  url: string;
  category: string;
  summary: string;
  tags: string[];
  thumbnail?: string; // path under /public — omitted for sites with no public preview
  protected?: boolean; // deployment sits behind an auth wall (no public preview)
};

const PROJECTS: Project[] = [
  {
    name: "NextBoard",
    url: "https://rishi-nextboard.vercel.app/",
    thumbnail: "/screenshots/nextboard.png",
    category: "SaaS Template",
    summary:
      "Revenue and order analytics dashboard — daily/YTD revenue, customer counts, and a live recent-orders feed.",
    tags: ["Next.js", "Dashboard"],
  },
  {
    name: "Experiences",
    url: "https://next-travels.vercel.app/",
    thumbnail: "/screenshots/experiences.png",
    category: "Client Concept",
    summary:
      "Resort and getaway booking site built around large hero imagery and a reservation-first layout.",
    tags: ["Next.js", "Tailwind"],
  },
  {
    name: "CarHub",
    url: "https://carhub-ochre.vercel.app/",
    thumbnail: "/screenshots/carhub.png",
    category: "SaaS Template",
    summary:
      "Car rental landing page — bold hero, sign-in flow, and a 'find, book, or rent' value prop up front.",
    tags: ["Next.js", "Marketplace"],
  },
  {
    name: "Vrunda Skin",
    url: "https://vrindaskin.vercel.app/",
    thumbnail: "/screenshots/vrundaskin.png",
    category: "Client Site",
    summary:
      "Live D2C storefront for an Ayurvedic skincare brand, built around its acne-treatment product line.",
    tags: ["Next.js", "D2C"],
  },
  {
    name: "Sudhajal",
    url: "https://sudhajal.vercel.app/",
    thumbnail: "/screenshots/sudhajal.png",
    category: "Client Site",
    summary:
      "Live site for a Nashik-based RO/water-purifier service company — plans, product catalogue, and enquiry form.",
    tags: ["Next.js", "Service Business"],
  },
  {
    name: "Falcon",
    url: "https://falcon.ascending-heavens.com/",
    thumbnail: "/screenshots/falcon.png",
    category: "Open Source",
    summary:
      "Docs site for our own minimalistic Go web framework — blazing fast, minimal & flexible, developer-friendly. One-line install via go get.",
    tags: ["Go", "OSS", "Docs"],
  },
  {
    name: "BackendForger",
    url: "https://bgv2.netlify.app/",
    thumbnail: "/screenshots/backendforger.png",
    category: "Open Source",
    summary:
      "Landing page for BackendForger — 'the key to your simplified backend' — with Team, Forger, and download/GitHub sections.",
    tags: ["Next.js", "Dev Tool"],
  },
  {
    name: "MediCare",
    url: "https://hospital-template3-ten.vercel.app/",
    thumbnail: "/screenshots/medicare.png",
    category: "Template",
    summary:
      "Full hospital template — specialties, doctor directory with availability, and an appointment booking form.",
    tags: ["Next.js", "Healthcare"],
  },

  {
    name: "Clinical Sanctuary",
    url: "https://hospital-template1-delta.vercel.app/",
    thumbnail: "/screenshots/clinical-sanctuary.png",
    category: "Template",
    summary:
      "Premium hospital variant with tiered preventive health-checkup packages and a lead-gen health guide.",
    tags: ["Next.js", "Healthcare"],
  },
  {
    name: "Meddical",
    url: "https://hospital-template2.vercel.app/",
    thumbnail: "/screenshots/meddical.png",
    category: "Template",
    summary:
      "Hospital template with a doctor grid, specialty listing, and an editorial news/blog section.",
    tags: ["Next.js", "Healthcare"],
  },
  {
    name: "OpenRainbow",
    url: "https://openrainbow.vercel.app/",
    thumbnail: "/screenshots/openrainbow.png",
    category: "Client Site",
    summary:
      "IT services company site spanning network design, infrastructure upgrades, and managed maintenance.",
    tags: ["Next.js", "IT Services"],
  },
];

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PortfolioGrid() {
  

  // const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
 const visible = PROJECTS;

  return (
    <section className="relative bg-[#050505] px-6 py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute z-[-1] left-1/2 top-[-10%] -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-[40px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.16) 0%, rgba(168,85,247,0.06) 35%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-2xl"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/70 font-mono-ui mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Full Portfolio
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display font-medium text-white text-[36px] sm:text-5xl leading-[1.05] tracking-[-0.03em]"
          >
            Every build, live
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg text-white/55 leading-relaxed"
          >
            Client sites, SaaS templates, and internal tools — shipped, deployed,
            and browsable right now.
          </motion.p>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative z-20 mt-10 flex flex-wrap gap-2 pointer-events-auto"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                console.log("[PortfolioGrid] filter clicked:", category);
                setActiveCategory(category);
              }}
              className={`rounded-full border px-4 py-1.5 text-[13px] font-mono-ui transition-colors ${
                activeCategory === category
                  ? "border-white/30 bg-white/10 text-white"
                  : "border-white/10 bg-white/[0.02] text-white/45 hover:text-white/70 hover:bg-white/[0.05]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div> */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {visible.map((project) => (
            <motion.div key={project.name} variants={fadeUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden transition-colors hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-white/[0.02]">
        {project.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.thumbnail}
            alt={`Preview of ${project.name}`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/[0.06] to-white/[0.01]">
            <Lock className="w-6 h-6 text-white/25" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />

        {project.protected && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white/70 font-mono-ui">
            <Lock className="w-3 h-3" />
            Protected
          </div>
        )}

        <div className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>

        <div className="absolute bottom-3 left-4 right-4">
          <span className="text-[10px] uppercase tracking-[0.18em] text-white/70 font-mono-ui">
            {/* {project.category} */}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h4 className="font-display font-medium text-white text-lg leading-tight">
          {project.name}
        </h4>

        <p className="mt-2 text-[13px] text-white/50 leading-relaxed">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10.5px] text-white/45 font-mono-ui"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}