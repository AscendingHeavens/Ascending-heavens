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