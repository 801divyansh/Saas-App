// components/home/Hero.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import animationData from "@/constants/4Jroswou69.json";
import { Badges } from "@/components/Home/Badges";
import { GlowEffect } from "@/components/GlowEffect"

export default function Hero() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleTryItFree = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    router.push('/Dashboard');
  };

  return (
    <section className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 py-15 px-6">
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
        <Badges />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          The AI Assistant Built for Productivity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          Simplify your work, speed up your workflow, and elevate your productivity — all in one smart tool.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 relative"
        >
          <div className="relative">
            <Button 
              size="lg" 
              onClick={handleTryItFree}
              disabled={isLoading}
              className="relative z-20 cursor-pointer"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 dark:border-black border-2 dark:border-t-transparent border-white border-t-transparent rounded-full animate-spin"></div>
                  Loading...
                </div>
              ) : (
                "Try it Free"
              )}
            </Button>
            {!isLoading && (
              <GlowEffect
                colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
                mode="colorShift"
                blur="soft"
                duration={3}
                scale={1.1}
                className="absolute inset-0 rounded-lg"
              />
            )}
          </div>
        </motion.div>

      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="hidden md:block w-full max-w-md"
      >
        <Lottie animationData={animationData as any} />
      </motion.div>
    </section>

  );
}
