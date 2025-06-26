'use client';

import { PricingTable } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const plans = ['Monthly', 'Yearly'];

const Subscription = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('Monthly');

  return (
    <main className="min-h-screen px-4 sm:px-10 lg:px-20 pb-24 pt-16 bg-background text-foreground">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
      >
        Unlock Premium Learning 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mt-4 mb-12"
      >
        Choose the plan that fits your learning journey. Get access to exclusive AI companions,
        advanced features, and priority support!
      </motion.p>

      {/* Tabs */}
      <div className="flex justify-center mb-6 gap-4">
        {plans.map((plan) => (
          <button
            key={plan}
            onClick={() => setActiveTab(plan)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === plan
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow"
                : "bg-muted text-muted-foreground hover:bg-muted/70"
            }`}
          >
            {plan}
          </button>
        ))}
      </div>

      {/* Carousel-style Animated Pricing Table */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-7xl mx-auto rounded-2xl  bg-card/60 backdrop-blur-md shadow-xl p-6"
        >
          <PricingTable
            appearance={{
              baseTheme: theme === 'dark' ? dark : undefined,
            }}
            // Optionally: You can pass product id or plan based on `activeTab`
          />
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Subscription;
