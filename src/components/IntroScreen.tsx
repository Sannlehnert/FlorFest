import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useMusic } from '../context/MusicContext';
import { useReducedMotion } from '../context/ReducedMotionContext';
import { invitation } from '../data/invitation';
import DiscoBall from './DiscoBall';
import SparkleSystem from './SparkleSystem';
import {
  DURATION,
  EASING,
  fadeInUp,
  scaleIn,
  createStaggerContainer,
} from '../animations/variants';

interface IntroScreenProps {
  onEnter: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter }) => {
  const { play } = useMusic();
  const hasStarted = useRef(false);
  const [isEntering, setIsEntering] = useState(false);
  const prefersReduced = useReducedMotion();

  const handleEnter = () => {
    if (isEntering || hasStarted.current) return;
    setIsEntering(true);
    hasStarted.current = true;
    play();
    setTimeout(() => onEnter(), 200);
  };

  const containerVariants = createStaggerContainer(0.15, 0.3);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: DURATION.CINEMATIC, ease: EASING.OUT } }}
      variants={containerVariants}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
      style={{ touchAction: 'manipulation' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReduced ? 0.3 : 1.2, delay: 0.1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="absolute inset-0 bg-ambient-light" />
        <div className="absolute inset-0 bg-depth" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: prefersReduced ? 0.4 : 1.6, delay: 0.3, ease: EASING.OUT }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 pointer-events-none md:-right-32"
        aria-hidden="true"
        role="presentation"
      >
        <DiscoBall
          className="w-52 sm:w-64 md:w-80 lg:w-96"
          opacity={0.38}
          duration={45}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: prefersReduced ? 0.4 : 1.6, delay: 0.5, ease: EASING.OUT }}
        className="absolute -left-20 bottom-1/4 pointer-events-none md:-left-32"
        aria-hidden="true"
        role="presentation"
      >
        <DiscoBall
          className="w-24 sm:w-32 md:w-40"
          opacity={0.18}
          duration={55}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReduced ? 0.3 : 1.2, delay: 0.6 }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        role="presentation"
      >
        <SparkleSystem count={6} reflections={3} className="opacity-70" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReduced ? 0.3 : 1, delay: 0.4 }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        role="presentation"
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 rounded-full border border-silver-dim"
          animate={{ scale: [1, 1.04, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-40 sm:w-56 h-40 sm:h-56 rounded-full border border-silver-dim"
          animate={{ scale: [1, 1.06, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <div className="absolute top-0 right-0 w-1/3 h-px bg-line transform rotate-12 origin-top-right" />
        <div className="absolute bottom-0 left-0 w-1/4 h-px bg-line transform -rotate-6 origin-bottom-left" />
      </motion.div>

      <div className="intro-content relative z-10 w-full max-w-6xl px-4 sm:px-6 md:px-12">
        <div className="intro-grid flex flex-col md:flex-row md:items-start md:justify-between gap-5 md:gap-8">
          <div className="intro-heading w-full md:flex-1 content-left">
            <motion.div variants={fadeInUp} className="mb-2">
              <span className="title-section text-silver">It's my birthday</span>
            </motion.div>
            <motion.h1
              variants={scaleIn}
              className="intro-name script-hero text-left leading-[0.9] tracking-tight"
              style={{ fontFamily: 'var(--font-script)' }}
            >
              <span className="block sm:inline">{invitation.name}</span>{' '}
              <span className="block sm:inline">{invitation.lastName}</span>
            </motion.h1>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="mt-3 flex items-center gap-3 sm:gap-4"
            >
              <span className="w-8 sm:w-12 h-px bg-line" />
              <span className="title-balloon title-balloon-lg">{invitation.eventName}</span>
              <span className="w-8 sm:w-12 h-px bg-line" />
            </motion.div>
          </div>

          <div className="intro-actions w-full md:flex-1 content-right md:mt-16">
            <motion.div variants={fadeInUp} className="text-right">
              <p className="body-large text-text-secondary">
                {invitation.dayOfWeek} {invitation.day}
              </p>
              <p className="body text-text-muted">
                {invitation.month} {invitation.year}
              </p>
              <p className="body-small text-text-muted mt-1">{invitation.time}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 sm:mt-10">
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.94 }}
                onClick={handleEnter}
                disabled={isEntering}
                aria-disabled={isEntering}
                className={`
                  px-6 sm:px-10 py-3 sm:py-4 min-h-11 sm:min-h-12 border rounded-full label-button
                  transition-all duration-200 touch-manipulation w-full sm:w-auto
                  focus:outline-none focus:ring-2 focus:ring-silver-dim focus:ring-offset-2 focus:ring-offset-background
                  ${isEntering
                    ? 'border-white/10 text-white/30 cursor-not-allowed'
                    : 'border-border-button text-text-secondary hover:bg-white/5 cursor-pointer'
                  }
                `}
              >
                {isEntering ? 'Entrando...' : 'Tocá para entrar'}
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="mt-6 sm:mt-8 flex justify-end"
            >
              <div className="w-12 sm:w-16 h-px bg-line" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroScreen;
