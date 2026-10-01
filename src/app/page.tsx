
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero'
import Problem from '@/components/Problem';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Solution from '@/components/Solution';
import Struggle from '@/components/Struggle';
import Transformation from '@/components/Transformation';
import Trust from '@/components/Trust';
import FAQ from '@/components/FAQ';
import Script from 'next/script';

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ascending-heavens.com/#organization",
      name: "Ascending Heavens",
      url: "https://ascending-heavens.com/",
      logo: "https://ascending-heavens.com/logo.png",
      email: "services@ascending-heavens.com",
      sameAs: ["https://www.linkedin.com/company/ascending-heavens"],
      description: "A product engineering team helping startups build software, AI systems, and data infrastructure.",
      knowsAbout: [
        "Product engineering",
        "Custom software development",
        "SaaS development",
        "Startup MVP development",
        "Artificial intelligence integration",
        "Retrieval-augmented generation",
        "Data infrastructure",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://ascending-heavens.com/#website",
      url: "https://ascending-heavens.com/",
      name: "Ascending Heavens",
      publisher: { "@id": "https://ascending-heavens.com/#organization" }
    }
  ]
};


const page = () => {
  return (
  
   <div className="relative">
      <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <main>
        <Hero />
        <Trust />
        <Problem />
        <Struggle />
        <Solution />
        <Services />
        <Transformation />
        <Process />
        <FinalCTA />
        <FAQ />
      </main>

      <Footer />
    </div>
                   
  
  )
}

export default page
