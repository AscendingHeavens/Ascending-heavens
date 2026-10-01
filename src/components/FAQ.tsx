"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

const FAQS = [
   {
    question: "How much does it cost to build a website in India?",
    answer:
      "The cost of building a website depends on the project's complexity, features, and design requirements. Our business websites typically start from ₹20,000, while larger corporate websites, e-commerce platforms, and custom web applications are priced based on their scope. Every project receives a transparent proposal with no hidden charges."
  },
  {
    question: "How much does it cost to build a custom SaaS product?",
    answer:
      "Custom SaaS development pricing depends on the number of features, user roles, integrations, infrastructure, and scalability requirements. MVPs generally require a smaller investment than enterprise-grade SaaS platforms. After a discovery session, we provide a detailed scope, timeline, and fixed project estimate."
  },
  {
    question: "Do you build AI-powered applications?",
    answer:
      "Yes. We develop AI-powered web applications, internal business tools, automation systems, AI chatbots, retrieval-augmented generation (RAG) applications, recommendation systems, workflow automation, and custom AI integrations tailored to business requirements."
  },
  {
    question: "What technologies do you use for software development?",
    answer:
      "We build modern applications using Next.js, React, TypeScript, Go, Python, PostgreSQL, ClickHouse, Node.js, Tailwind CSS, cloud platforms, and modern AI frameworks. Every solution is designed to be scalable, secure, and easy to maintain."
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We redesign existing websites to improve user experience, performance, search engine optimization (SEO), conversion rates, and mobile responsiveness while preserving your existing content and business goals."
  },
  {
    question: "Do you provide SEO with website development?",
    answer:
      "Yes. Every website is built with technical SEO best practices, including fast loading speeds, clean code, responsive design, structured metadata, optimized images, and search-engine-friendly architecture. Advanced SEO and content strategy are also available as an additional service."
  },
  {
    question: "How long does it take to build a website or web application?",
    answer:
      "Project timelines depend on complexity. Landing pages and business websites usually take a few weeks, while e-commerce platforms, SaaS products, CRM systems, AI applications, and enterprise software require longer development cycles based on their requirements."
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with startups, SMEs, and enterprises across India, Europe, the United States, the United Arab Emirates, and other global markets. Our team collaborates remotely using modern project management and communication tools."
  },
  {
    question: "Do you offer custom software development for startups?",
    answer:
      "Yes. We help startups design, build, and scale MVPs, SaaS platforms, AI applications, internal tools, dashboards, APIs, and customer-facing web applications. Our development process focuses on speed, scalability, and long-term product growth."
  },
  {
    question: "Why should I choose Ascending Heavens over a freelance developer?",
    answer:
      "Unlike hiring an individual freelancer, you work with a multidisciplinary team covering frontend development, backend engineering, AI development, cloud infrastructure, UI/UX, and product strategy. This enables faster delivery, better code quality, and long-term technical support from one team."
  }
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
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
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
                      id={`faq-answer-${i}`}
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
