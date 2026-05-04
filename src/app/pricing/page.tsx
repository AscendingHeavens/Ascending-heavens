"use client";

import PricingCard from "@/components/PricingCard";
import { basePricing, addOns, smartBundles } from "@/lib/constants";

const PricingPage = () => {
  const baseItems = basePricing.map((b) => ({
    title: b.projectType,
    price: b.priceRange.inr,
    usd: b.priceRange.usd,
    details: b.details,
  }));

  const addOnItems = addOns.map((a) => ({
    title: a.service,
    price: a.pricing.inr,
    usd: a.pricing.usd,
    details: a.details,
  }));

  const bundleItems = smartBundles.map((s) => ({
    title: s.bundle,
    price: s.discountedPrice.inr,
    usd: s.discountedPrice.usd,
    details: s.includes,
  }));

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white px-6 py-12">

      {/* Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#1A0F2E] to-[#050505]" />

      {/* Subtle Purple Glow */}
      <div
        className="absolute left-1/2 top-[-20%] -translate-x-1/2 w-[1000px] h-[1000px] rounded-full blur-[100px] opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(168,85,247,0.1) 40%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-display font-semibold mb-16 text-center">
          Ascending Heavens Pricing
        </h1>

        <PricingCard
          title="Base Pricing by Project Type"
          items={baseItems}
        />

        <PricingCard
          title="Add-ons & Upsells"
          items={addOnItems}
        />

        <PricingCard
          title="Smart Bundles"
          items={bundleItems}
        />
      </div>
    </div>
  );
};

export default PricingPage;