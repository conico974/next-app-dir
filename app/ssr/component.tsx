"use client";
import { motion } from "framer-motion";

interface MotionLayoutProps {
  children: React.ReactNode;
}

export default function MotionLayout({ children }: MotionLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
