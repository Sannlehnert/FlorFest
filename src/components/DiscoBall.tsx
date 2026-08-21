import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../context/ReducedMotionContext';

interface DiscoBallProps {
  className?: string;
  opacity?: number;
  duration?: number;
  priority?: boolean;
}

const DiscoBall: React.FC<DiscoBallProps> = ({
  className = '',
  opacity = 0.15,
  duration = 30,
  priority = false,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative aspect-square ${className}`}
      animate={prefersReducedMotion ? undefined : { y: [0, -6, 0], rotate: [-1.5, 1.5, -1.5] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      style={{ opacity }}
      aria-hidden="true"
      role="presentation"
    >
      <img
        src="/images/branding/disco-ball.webp"
        alt=""
        width="900"
        height="860"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className="h-full w-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.14)]"
      />
      <motion.span
        className="absolute left-[24%] top-[22%] h-2 w-2 rounded-full bg-white shadow-[0_0_18px_8px_rgba(255,255,255,0.55)]"
        animate={prefersReducedMotion ? undefined : { opacity: [0.25, 1, 0.25], scale: [0.8, 1.25, 0.8] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};

export default DiscoBall;
