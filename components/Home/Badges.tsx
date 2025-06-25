import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";

export function Badges() {
    return (
        <div className="flex items-center justify-center gap-4 mb-6">
            <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="px-4 py-2 rounded-full dark:bg-purple-500/10 dark:text-purple-300 text-sm font-medium flex items-center gap-2 border dark:border-purple-600/20 bg-purple-600/10 text-purple-500 border-purple-700/20"
            >
            <Sparkles className="w-4 h-4" />
            AI-Powered Learning
            </motion.span>
            <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="px-4 py-2 rounded-full dark:bg-pink-500/10 dark:text-pink-300 text-sm font-medium flex items-center gap-2 border dark:border-pink-600/20 bg-pink-600/10 text-pink-500 border-pink-700/20"
            >
            <Zap className="w-4 h-4" />
            Instant Answers
            </motion.span>
      </div>
    )
}