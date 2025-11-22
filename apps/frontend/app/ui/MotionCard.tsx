"use client";
import { motion } from "framer-motion";

export default function MotionCard({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`
        p-6 rounded-2xl shadow-lg border
        bg-white/40 dark:bg-slate-800/40 
        backdrop-blur-xl border-white/30 dark:border-white/10 
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
