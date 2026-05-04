"use client";

import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  const phone = "919152783125"; // no + sign for wa.me

  return (
    <motion.a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-green-500/30 blur-xl opacity-70 group-hover:opacity-100 transition" />

      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition-all">
        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.888.76 5.593 2.086 7.94L0 32l7.88-2.066A15.91 15.91 0 0 0 16 32c8.837 0 16-7.163 16-16.004C32 7.56 24.837.396 16 .396zm0 29.164a13.1 13.1 0 0 1-6.68-1.84l-.478-.284-4.676 1.226 1.25-4.56-.31-.47A13.067 13.067 0 1 1 29.067 16c0 7.202-5.865 13.06-13.067 13.06zm7.19-9.767c-.393-.197-2.327-1.15-2.686-1.28-.36-.132-.622-.197-.885.197-.262.393-1.016 1.28-1.246 1.54-.23.262-.458.295-.852.098-.393-.197-1.66-.612-3.164-1.95-1.17-1.04-1.96-2.323-2.19-2.716-.23-.393-.025-.606.173-.803.178-.177.393-.458.59-.688.197-.23.262-.393.393-.656.13-.262.065-.492-.033-.688-.098-.197-.885-2.13-1.213-2.917-.32-.767-.647-.662-.885-.674-.23-.01-.492-.012-.754-.012-.262 0-.688.098-1.05.492-.36.393-1.377 1.345-1.377 3.28 0 1.936 1.41 3.804 1.607 4.066.197.262 2.778 4.243 6.735 5.946.94.405 1.672.647 2.243.828.942.3 1.8.258 2.477.157.756-.113 2.327-.95 2.655-1.87.328-.918.328-1.705.23-1.87-.098-.164-.36-.262-.754-.46z" />
        </svg>
      </div>
    </motion.a>
  );
}