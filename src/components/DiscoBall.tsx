import React from 'react';
import { motion } from 'framer-motion';

interface DiscoBallProps {
  className?: string;
  opacity?: number;
  duration?: number;
}

const DiscoBall: React.FC<DiscoBallProps> = ({
  className = '',
  opacity = 0.15,
  duration = 30,
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      style={{ opacity }}
      aria-hidden="true"
      role="presentation"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="discoGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#f0f0f0" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#b0b0b0" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#505050" stopOpacity="0.9" />
          </radialGradient>
          <radialGradient id="highlight" cx="30%" cy="25%" r="40%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="100" r="90" fill="url(#discoGrad)" />

        <g stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" fill="none">
          <ellipse cx="100" cy="30" rx="70" ry="15" />
          <ellipse cx="100" cy="60" rx="85" ry="18" />
          <ellipse cx="100" cy="100" rx="90" ry="20" />
          <ellipse cx="100" cy="140" rx="85" ry="18" />
          <ellipse cx="100" cy="170" rx="70" ry="15" />
          <ellipse cx="100" cy="100" rx="18" ry="90" />
          <ellipse cx="100" cy="100" rx="40" ry="90" />
          <ellipse cx="100" cy="100" rx="60" ry="90" />
          <ellipse cx="100" cy="100" rx="80" ry="90" />
        </g>

        <circle cx="60" cy="50" r="25" fill="url(#highlight)" opacity="0.6" />
        <circle cx="130" cy="70" r="15" fill="url(#highlight)" opacity="0.4" />
        <circle cx="80" cy="150" r="10" fill="url(#highlight)" opacity="0.3" />
        <circle cx="150" cy="130" r="8" fill="url(#highlight)" opacity="0.2" />

        <circle cx="65" cy="45" r="3" fill="white" opacity="0.9" />
        <circle cx="80" cy="55" r="2" fill="white" opacity="0.7" />
        <circle cx="120" cy="65" r="2" fill="white" opacity="0.6" />
        <circle cx="55" cy="70" r="1.5" fill="white" opacity="0.5" />
        <circle cx="140" cy="80" r="1.5" fill="white" opacity="0.4" />

        <circle cx="100" cy="100" r="90" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
        <circle cx="100" cy="100" r="96" stroke="rgba(0,0,0,0.2)" strokeWidth="2" fill="none" />
      </svg>
    </motion.div>
  );
};

export default DiscoBall;