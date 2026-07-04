"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

const FAQS = [
  {
    question: "What's your pricing model?",
    answer:
      "Three tiers, priced on scope, not hours. \"Ship It\" is project-based, $5K–$20K, for one-off builds like landing pages, MVPs, or API integrations — fixed scope, fixed price, 2–6 week delivery. \"Build & Grow\" is a $5K–$10K/month retainer for ongoing product development plus growth execution, typically 3–6 months while a startup hires internally. \"AI Integration\" is project-based, $10K–$30K, for RAG pipelines, recommendation engines, and LLM-powered features, with a discovery phase and 4–12 week delivery.",
  },
  {
    question: "Who's actually building my product — senior engineers, or juniors managed by a PM?",
    answer:
      "There is no PM layer. Three senior specialists work as one unit: Rishi Mishra handles systems architecture, backend, and AI pipelines; Nikhil Parbat handles backend infrastructure, data pipelines, and analytics; Sarvesh Shinde handles frontend, design, and growth execution. The person you talk to is the person writing the code — no game of telephone, no bench of interchangeable juniors.",
  },
  {
    question: "How is this different from hiring a local senior engineer?",
    answer:
      "A single senior engineer costs CHF 150K+/year in Zurich, $80K+ in Dubai, or €70K+ in Berlin — and that's one specialization. Ascending Heavens gives you three specializations (systems/AI architecture, backend/data, frontend/growth) working as one team, for less than the cost of one local hire, with zero recruitment overhead or onboarding time.",
  },
  {
    question: "How is this different from Upwork freelancers or a large agency like Toptal?",
    answer:
      "Freelancers on Upwork are strangers who've never worked together and don't share context. Large agencies staff a bench of interchangeable juniors behind a PM who doesn't code. Ascending Heavens is three senior specialists who already work together daily, review each other's code, and deliver as one unit — you're not assembling a team, you're hiring one.",
  },
  {
    question: "Do you actually build AI features, or just talk about it?",
    answer:
      "AI is core, not bolted on. The team ships production RAG pipelines with hybrid search (vector + BM25 + reciprocal rank fusion) and cross-encoder reranking, LLM orchestration with multi-tier routing, and embedding-based retrieval systems — not outsourced to a third-party consultant when a client asks for AI features.",
  },
  {
    question: "How is this different from a no-code tool or an AI app builder?",
    answer:
      "No-code tools and Bubble-style builders work until custom logic is needed, then break. Ascending Heavens builds real, maintainable, production-grade systems — Go and Python backends, React/Next.js frontends, PostgreSQL/ClickHouse data layers — engineered to be extended by a client's future in-house hires, not just a working demo.",
  },
  {
    question: "Do I need to hire separate vendors for backend, frontend, and growth?",
    answer:
      "No. One team covers backend-to-browser: Go/Python APIs, React/Next.js frontends, PostgreSQL/ClickHouse data layers, and the growth layer — landing pages, funnels, and ad campaigns. One invoice, one Slack channel, one team that knows the entire codebase, instead of three vendors who don't talk to each other.",
  },
  {
    question: "What kind of companies do you work with?",
    answer:
      "Primarily funded B2B SaaS startups from Seed to Series B, 5–30 person teams, $500K–$10M ARR, with validated product-market fit but no full in-house engineering or growth team yet — companies that need execution velocity, not another strategy deck. Core verticals include e-commerce infrastructure, healthtech, fintech, logistics/supply-chain SaaS, martech, and AI-native products.",
  },
  {
    question: "What if my project doesn't have a clear spec yet?",
    answer:
      "A working product, budget, and product sense are the baseline — pre-revenue equity-only deals and \"just build me an app\" requests with no spec aren't a fit. For everything else, projects with a defined scope start with a discovery phase before any fixed-price work begins, so the spec gets sharpened before building starts, not guessed at.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section id="faq" className="relative py-28 md:py-36 px-6 md:px-10 bg-black text-white overflow-hidden">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.04] rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-white/40 font-mono mb-4">
            The clarity
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            Questions founders{" "}
            <span className="italic font-light text-white/60">actually ask.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-white/25 bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 p-6 md:p-8 text-left"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono text-white/30 mt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base md:text-lg font-medium leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-white text-black border-white rotate-180"
                        : "border-white/20 text-white/60"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/60 text-[15px] leading-relaxed px-6 md:px-8 pb-6 md:pb-8 pl-[3.75rem] md:pl-[4.25rem]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}