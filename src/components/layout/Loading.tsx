import React from 'react';
import { motion } from 'motion/react';

export function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-loading flex flex-col items-center justify-center font-ui">
      <motion.div 
        className="w-16 h-16 border-4 border-border-default border-t-accent-blue rounded-full mb-6"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, ease: "linear", repeat: Infinity }}
      />
      <motion.p 
        className="text-text-secondary text-lg"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Just a second babe...
      </motion.p>
    </div>
  );
}
