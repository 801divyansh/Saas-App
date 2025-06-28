// components/home/CTA.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CTA() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/companions/new");
    }, 800); 
  };

  return (
    <section className="w-full max-w-7xl py-20 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-pink-800 via-purple-800 to-blue-800 p-10 rounded-3xl text-white shadow-md"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Supercharge Your Workflow?
        </h2>
        <p className="text-md sm:text-lg max-w-2xl mx-auto mb-6">
          Start using our smart assistant today and see the difference in minutes. It's fast, intuitive, and built to scale.
        </p>
        
        <Button
          size="lg"
          variant="secondary"
          onClick={handleClick}
          disabled={loading}
          className="text-black bg-white hover:bg-neutral-100 transition-all "
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              Loading...
            </>
          ) : (
            "Build Your Companion"
          )}
        </Button>
      </motion.div>
    </section>
  );
}
