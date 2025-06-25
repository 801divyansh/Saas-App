"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Bot, FileText, Mic } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="h-6 w-6 text-purple-500" />,
    title: "Instant Answers",
    description: "Get lightning-fast responses to your queries in real-time."
  },
  {
    icon: <FileText className="h-6 w-6 text-blue-500" />,
    title: "Export to Markdown",
    description: "Save conversations in clean markdown format with one click."
  },
  {
    icon: <Mic className="h-6 w-6 text-pink-500" />,
    title: "Voice Commands",
    description: "Talk to the assistant like a human — fast, simple, natural."
  },
  {
    icon: <Bot className="h-6 w-6 text-green-500" />,
    title: "Smart Suggestions",
    description: "Get contextual suggestions to improve productivity."
  }
];

export default function Features() {
  return (
    <section id="feature" className="w-full max-w-7xl py-16">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent "
        >
          Powerful Features Designed for You
        </motion.h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="rounded-xl border border-border bg-card p-6 shadow-md transition-all duration-300  hover:border-primary hover:shadow-lg hover:bg-accent/50"
          >
            <Badge
              variant="outline"
              className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted hover:bg-primary/10 transition"
            >
              {feature.icon}
              <span className="font-medium text-sm">{feature.title}</span>
            </Badge>
            <p className="text-sm text-muted-foreground mt-2">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
