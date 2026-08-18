import { motion } from 'framer-motion';
import { useReducedMotion } from '../context/ReducedMotionContext';

interface ScrollIndicatorProps {
  className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ className = '' }) => {
  const prefersReduced = useReducedMotion();

  // Animación de "respiración" suave
  const breathe = prefersReduced
    ? undefined
    : {
        y: [0, -4, 0, 4, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut' as const,
        },
      };

  return (
    <div
      className={`scroll-cue flex flex-col items-center gap-1.5 ${className}`}
      aria-hidden="true"
    >
      <motion.span
        className="text-[0.58rem] sm:text-[0.62rem] font-medium text-silver tracking-[0.24em] uppercase whitespace-nowrap"
        animate={breathe}
        style={{ textShadow: '0 0 8px rgba(224,224,224,0.15)' }}
      >
        SEGUÍ BAJANDO
      </motion.span>

      <div className="relative flex flex-col items-center">
        <div className="w-px h-5 bg-silver/35" />
        <motion.div
          className="w-5 h-5 text-silver/70"
          animate={breathe}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5" />
            <path d="M7 7l5 5 5-5" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
