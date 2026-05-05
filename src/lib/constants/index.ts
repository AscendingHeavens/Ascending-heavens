import { Variants } from "framer-motion";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL 

export const DEFAULT_GET_API_HEADER = () => {
  return {
    "Content-Type": "application/json",
  };
};
export const DEFAULT_POST_API_HEADER = () => {
  return {
    
    "Content-Type": "application/json",
  };
};

export const DEFAULT_FORM_DATA_HEADER = () => {
  return {
    "Content-Type": "application/json",
  };
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export const basePricing: BaseProject[] = [
  {
    projectType: "Landing Pages",
    priceRange: { inr: "₹20K – ₹60K", usd: "$240 – $720" },
    details: "Next.js, Tailwind, basic SEO, contact forms"
  },
  {
    projectType: "Corporate Websites",
    priceRange: { inr: "₹40K – ₹80K", usd: "$480 – $960" },
    details: "Multi-page site, blog, CMS integration"
  },
  {
    projectType: "E-Commerce (Basic)",
    priceRange: { inr: "₹75K – ₹1.5L", usd: "$900 – $1,800" },
    details: "Product pages, checkout, payment gateway, CRM"
  },
  {
    projectType: "E-Commerce (Advanced)",
    priceRange: { inr: "₹1.5L – ₹3L", usd: "$1,800 – $3,600" },
    details: "Multi-vendor, custom dashboard, inventory mgmt"
  },
  {
    projectType: "CRM & ERP Systems",
    priceRange: { inr: "₹2L – ₹5L+", usd: "$2,400 – $6,000+" },
    details: "Custom business solutions, role-based access, automation"
  },
  {
    projectType: "Custom SaaS MVPs",
    priceRange: { inr: "₹3L – ₹8L+", usd: "$3,600 – $9,600+" },
    details: "Full SaaS apps with multi-tenant support"
  },
  {
    projectType: "Marketing Websites",
    priceRange: { inr: "₹30K – ₹70K", usd: "$360 – $840" },
    details: "SEO-optimized, conversion-focused sites"
  },
  {
    projectType: "Web Apps (Custom Software)",
    priceRange: { inr: "₹2L – ₹6L+", usd: "$2,400 – $7,200+" },
    details: "Bespoke solutions for startups & enterprises"
  }
];

// Add-ons
export const addOns: AddOnService[] = [
  {
    service: "Advanced SEO & Content Strategy",
    pricing: { inr: "₹15K – ₹30K", usd: "$180 – $360" },
    details: "SEO audit, keyword research, blog setup"
  },
  {
    service: "Marketing & Lead Generation",
    pricing: { inr: "₹25K – ₹50K", usd: "$300 – $600" },
    details: "AI lead scoring, automation tools"
  },
  {
    service: "Cloud Scaling & DB Optimization",
    pricing: { inr: "₹30K – ₹80K", usd: "$360 – $960" },
    details: "High-traffic site optimization"
  },
  {
    service: "DevOps & CI/CD Pipelines",
    pricing: { inr: "₹20K – ₹60K", usd: "$240 – $720" },
    details: "Automated deployments, infra setup"
  },
  {
    service: "AI & Automation Features",
    pricing: { inr: "₹50K+", usd: "$600+" },
    details: "AI chatbots, automation, predictive analytics"
  },
  {
    service: "Mobile App (React Native/Flutter)",
    pricing: { inr: "₹1L – ₹3L", usd: "$1,200 – $3,600" },
    details: "Mobile version of the web product"
  }
];

// Bundles
export const smartBundles: BundlePackage[] = [
  {
    bundle: "Startup Booster",
    includes: "Business Website + Branding + SEO + Lead Gen",
    discountedPrice: { inr: "₹60K (Save ₹15K)", usd: "$720 (Save $180)" }
  },
  {
    bundle: "E-Com Pro",
    includes: "E-Commerce + CRM + Advanced Analytics",
    discountedPrice: { inr: "₹1.75L (Save ₹25K)", usd: "$2,100 (Save $300)" }
  },
  {
    bundle: "SaaS Growth Pack",
    includes: "Multi-Tenant SaaS + Cloud Scaling + DevOps",
    discountedPrice: { inr: "₹3.5L (Save ₹50K)", usd: "$4,200 (Save $600)" }
  },
  {
    bundle: "Enterprise Suite",
    includes: "CRM + Marketing Automation + AI Analytics",
    discountedPrice: { inr: "₹5L+", usd: "$6,000+" }
  }
];


export const CONTAINER_ANIMATION:Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};