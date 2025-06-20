'use client';
import { PricingTable } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import React from 'react'

const Subscription = () => {
  return (
    <main className="mt-7">
      {/* Animated Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent "
      >
        Unlock Premium Learning 🚀
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-lg md:text-xl text-gray-700 text-center mb-10"
      >
        Choose the plan that fits your learning journey. Get access to exclusive AI companions, advanced features, and priority support!
      </motion.p>
      {/* Animated Pricing Table */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6, type: 'spring' }}
        className="w-full"
      >
        <PricingTable />
      </motion.div>
    </main>
  )
}

export default Subscription
