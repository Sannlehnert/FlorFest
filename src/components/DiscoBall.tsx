import React from 'react';
import { motion } from 'framer-motion';

interface DiscoBallProps {
  className?: string;
  opacity?: number;
  duration?: number;
}

const DiscoBall: React.FC<DiscoBallProps> = ({
  className = '',
  opacity = 0.2,
  duration = 30,
}) => {
  return (
    <motion.div
      className={`relative aspect-square rounded-full ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      style={{ opacity }}
      aria-hidden="true"
      role="presentation"
    >
      <div className="absolute inset-0 rounded-full bg-linear-to-br from-silver/40 via-white/10 to-silver/5 shadow-[0_0_80px_rgba(255,255,255,0.05)]">
        <div className="absolute inset-0 rounded-full bg-[repeating-conic-gradient(rgba(255,255,255,0.15)_0deg,rgba(255,255,255,0.05)_4deg,transparent_4deg,transparent_8deg)] mix-blend-overlay" />
        <div className="absolute top-1/4 left-1/3 w-1/4 h-1/4 rounded-full bg-white/30 blur-sm" />
        <div className="absolute bottom-1/3 right-1/4 w-1/5 h-1/5 rounded-full bg-white/20 blur-sm" />
      </div>
      <div className="absolute -inset-4 rounded-full border border-silver/10 opacity-30" />
      <div className="absolute -inset-8 rounded-full border border-silver/5 opacity-20" />
    </motion.div>
  );
};

export default DiscoBall;