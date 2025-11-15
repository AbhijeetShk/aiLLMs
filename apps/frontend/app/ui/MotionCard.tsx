"use client";
import { motion } from "framer-motion";

export default function MotionCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={
        "bg-white/60 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-lg p-5 border border-white/30 dark:border-white/10 " +
        className
      }
    >
      {children}
    </motion.div>
  );
}
