"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
    author: "Sarah Thompson",
    role: "Product Manager",
    text: "This assistant has completely changed the way I work. It's fast, smart, and beautifully designed."
  },
  {
    avatar: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
    author: "James Lee",
    role: "Startup Founder",
    text: "Exactly what our team needed to improve productivity. Highly recommend it to anyone building fast."
  },
  {
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    author: "Alice Jr",
    role: "Content Creator",
    text: "Using this tool daily to write, brainstorm, and organize my content — it’s a total game-changer!"
  }
];

export function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="mt-25 mb-20 max-w-7xl"
    >
      <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Loved by Creators
      </h2>
      <p className="text-muted-foreground text-center mb-12 text-lg">
        Join thousands of satisfied users who have transformed their portraits
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm relative border border-muted-foreground/10 group dark:hover:bg-white/10 hover:bg-pink-50 transition-all duration-300"
          >
            <div className="absolute -top-6 left-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <Star className="absolute top-4 right-4 text-yellow-500 w-6 h-6" />
            <p className="text-accent-foreground/60 mb-4 mt-6">{testimonial.text}</p>
            <div>
              <p className="font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {testimonial.author}
              </p>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
