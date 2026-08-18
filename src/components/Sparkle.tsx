import React from 'react';
import { motion } from 'framer-motion';

interface SparkleProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  color?: string;
}

const Sparkle: React.FC<SparkleProps> = ({
  className = '',
  style,
  size = 2,
  opacity = 0.4,
  duration = 4,
  delay = 0,
  color = 'rgba(255,255,255,0.8)',
}) => {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        ...style,
        width: size,
        height: size,
        background: color,
        boxShadow: `0 0 ${size * 2}px ${color}`,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: [0, opacity, 0],
        scale: [0.5, 1.2, 0.5],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
        times: [0, 0.5, 1],
      }}
      aria-hidden="true"
      role="presentation"
    />
  );
};

export default Sparkle;
