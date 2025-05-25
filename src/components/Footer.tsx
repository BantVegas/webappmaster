"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="w-full mt-auto py-6 px-4 flex flex-col md:flex-row items-center justify-between bg-white/30 backdrop-blur-xl border-t border-white/20 z-20"
    >
      <div className="flex items-center gap-2 mb-2 md:mb-0 text-slate-700 text-center">
        <span className="font-bold text-blue-700">WebAppMaster</span>
        <span className="hidden md:inline">|</span>
        <span className="text-sm">© {new Date().getFullYear()} Martin Lukáč</span>
      </div>
      <div className="flex gap-4 text-sm text-blue-700">
        <a
          href="mailto:info@webappmaster.sk"
          className="hover:underline"
        >
          info@webappmaster.sk
        </a>
        <a
          href="tel:+421950889523"
          className="hover:underline"
        >
          +421 950 889 523
        </a>
        <a
          href="https://www.linkedin.com/in/lukacmartin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </motion.footer>
  );
}
