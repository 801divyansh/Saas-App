"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
    { value: "100K+", label: "AI Companions Generated" },
    { value: "50K+", label: "Happy Users" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "AI Support" },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-7xl lg:mt-30 mb-30 mt-16"
    >
      <div className="absolute rounded-t-2xl inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
      <div className="relative pt-4 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
            }
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="text-center space-y-2"
          >
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}