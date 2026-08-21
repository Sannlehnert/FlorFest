import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useMusic } from '../context/MusicContext';
import { useReducedMotion } from '../context/ReducedMotionContext';
import { invitation } from '../data/invitation';
import DiscoBall from './DiscoBall';
import SparkleSystem from './SparkleSystem';
import InvitationEnvelope from './InvitationEnvelope';
import { DURATION, EASING, fadeInUp, createStaggerContainer } from '../animations/variants';

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

    hasStarted.current = true;
    setIsEntering(true);
    play();

    window.setTimeout(onEnter, prefersReduced ? 120 : 920);
  };

  const containerVariants = createStaggerContainer(0.11, 0.18);

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      exit={{
        opacity: 0,
        scale: prefersReduced ? 1 : 1.015,
        transition: { duration: prefersReduced ? 0.12 : DURATION.CINEMATIC, ease: EASING.OUT },
      }}
      variants={containerVariants}
      className="intro-screen fixed inset-0 z-50 overflow-hidden bg-background"
      style={{ touchAction: 'manipulation' }}
      aria-labelledby="intro-title"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-noise opacity-25" />
        <div className="absolute inset-0 bg-ambient-light" />
        <div className="absolute inset-0 bg-depth" />
        <div className="intro-vignette absolute inset-0" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: -12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: prefersReduced ? 0.2 : 1.1, delay: 0.12, ease: EASING.OUT }}
        className="absolute -left-12 -top-12 pointer-events-none sm:-left-10 sm:-top-16"
        aria-hidden="true"
      >
        <DiscoBall
          className="w-40 sm:w-52 md:w-64"
          opacity={0.5}
          duration={48}
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: -12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: prefersReduced ? 0.2 : 1.2, delay: 0.24, ease: EASING.OUT }}
        className="absolute -right-14 -top-8 pointer-events-none sm:-right-10 sm:-top-14"
        aria-hidden="true"
      >
        <DiscoBall
          className="w-32 sm:w-44 md:w-56"
          opacity={0.34}
          duration={56}
        />
      </motion.div>

      <SparkleSystem count={4} reflections={1} className="opacity-45" />

      <div className="intro-stage relative z-10 mx-auto flex min-h-dvh w-full max-w-3xl flex-col items-center justify-center px-5 text-center">
        <motion.header variants={fadeInUp} className="intro-identity">
          <p className="eyebrow text-silver-dim">FLOR FEST · 2026</p>
          <h1 id="intro-title" className="intro-title text-chrome">
            {invitation.name}
          </h1>
          <div className="mt-2 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-silver-dim/55" />
            <p className="intro-subtitle">Mis xv años</p>
            <span className="h-px w-8 bg-silver-dim/55" />
          </div>
        </motion.header>

        <motion.div variants={fadeInUp} className="intro-envelope-wrap">
          <InvitationEnvelope
            isOpen={isEntering}
            onOpen={handleEnter}
            prefersReducedMotion={prefersReduced}
          />
        </motion.div>

        <motion.div variants={fadeInUp} className="intro-instruction-wrap" aria-live="polite">
          <p id="envelope-instruction" className="intro-instruction">
            {isEntering ? 'Abriendo la invitación…' : 'Presioná el sobre para abrir la invitación'}
          </p>
          {!isEntering && (
            <motion.span
              className="mt-2 block h-5 w-px bg-silver-dim/55"
              animate={prefersReduced ? undefined : { scaleY: [0.55, 1, 0.55], opacity: [0.35, 0.8, 0.35] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            />
          )}
        </motion.div>
      </div>
    </motion.main>
  );
};

export default IntroScreen;
