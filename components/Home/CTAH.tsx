// components/home/CTA.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
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
        <Link href="/companions/new">
          <Button size="lg" variant="secondary" className="text-black bg-white hover:bg-neutral-100">
            Bulid Your Companion
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
