
import { CONTAINER_ANIMATION, FADE_IN_ANIMATION } from "@/lib/constants";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";


interface PricingCardProps {
  title: string;
  items: PricingCardItem[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, items }) => {
  
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const previousScrollY = useRef(0);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setIsVisible(true);
      else setIsVisible(false);
    });
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollDirection(currentScrollY > previousScrollY.current ? "down" : "up");
    previousScrollY.current = currentScrollY;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      // threshold: isMobile ? 0.1 : 0.7, // Adjust threshold for mobile 0.1 means 10% visibility and desktop 0.5 means 50% visibility

    });

    if (sectionRef.current) observer.observe(sectionRef.current);
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      variants={CONTAINER_ANIMATION}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="mb-8"
    >
      <h2 className="text-3xl font-semibold mb-8 text-center text-white dark:text-white">
        {title}
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={FADE_IN_ANIMATION(scrollDirection)}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            custom={index}
            className="rounded-2xl border border-white/10 bg-white/[0.03] text-white p-6 backdrop-blur-xl transition-all hover:scale-[1.02] hover:border-white/25"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{item.details}</p>
            <div className="flex items-center justify-between text-sm font-medium">
              <span className="bg-gradient-to-r  from-[#050505] via-[#1A0F2E] to-[#050505] px-3 py-2 rounded-full text-white text-nowrap">
                {item.price}
              </span>
              <span className="text-white dark:text-gray-400 px-3 py-2 rounded-full text-nowrap">
                ({item.usd})
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingCard;