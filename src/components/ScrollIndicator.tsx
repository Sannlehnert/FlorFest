import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '../context/ReducedMotionContext';

const ScrollIndicator: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();

  // Desaparece después de scrollear 150px
  const opacity = useTransform(scrollY, [0, 150], [1, 0]);
  const y = useTransform(scrollY, [0, 150], [0, -20]);

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
    <motion.div
      className="flex flex-col items-center gap-2 mt-8"
      style={{ opacity, y }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {/* Texto "SEGUÍ BAJANDO" con mayor opacidad */}
      <motion.span
        className="body-tiny text-silver tracking-[0.25em]"
        animate={breathe}
        style={{ textShadow: '0 0 8px rgba(224,224,224,0.15)' }}
      >
        SEGUÍ BAJANDO
      </motion.span>

      {/* Línea vertical + chevron */}
      <div className="relative flex flex-col items-center">
        <div className="w-px h-8 bg-silver/30" />
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
    </motion.div>
  );
};

export default ScrollIndicator;