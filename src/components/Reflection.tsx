import React from 'react';
import { motion } from 'framer-motion';

interface ReflectionProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  blur?: number;
}

const Reflection: React.FC<ReflectionProps> = ({
  className = '',
  style,
  size = 40,
  opacity = 0.05,
  duration = 8,
  delay = 0,
  blur = 20,
}) => {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        ...style,
        width: size,
        height: size,
        background: 'radial-gradient(circle, rgba(224,224,224,0.3) 0%, transparent 70%)',
        filter: `blur(${blur}px)`,
      }}
      animate={{
        opacity: [opacity * 0.5, opacity, opacity * 0.5],
        scale: [0.9, 1.1, 0.9],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      aria-hidden="true"
      role="presentation"
    />
  );
};

export default Reflection;
