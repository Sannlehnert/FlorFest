import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { invitation } from '../data/invitation';
import DiscoBall from './DiscoBall';
import SparkleSystem from './SparkleSystem';
import { fadeInUp, scaleIn, createStaggerContainer } from '../animations/variants';

const GiftSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAlias = async () => {
    try {
      await navigator.clipboard.writeText(invitation.giftAlias);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.warn('Error copying alias:', err);
    }
  };

  const containerVariants = createStaggerContainer(0.15, 0.2);

  return (
    <section className="relative min-h-dvh flex items-center justify-center px-4 py-16 bg-background overflow-hidden will-change-transform">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="absolute inset-0 bg-ambient-light" />
        <div className="absolute inset-0 bg-depth" />
      </div>

      <div className="absolute -right-16 sm:-right-20 md:-right-32 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" role="presentation">
        <DiscoBall className="w-40 sm:w-48 md:w-104" opacity={0.10} duration={55} />
      </div>
      <div className="absolute -left-12 sm:-left-16 md:-left-24 bottom-1/4 pointer-events-none" aria-hidden="true" role="presentation">
        <DiscoBall className="w-28 sm:w-32 md:w-48" opacity={0.06} duration={65} />
      </div>

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" role="presentation">
        <SparkleSystem count={3} reflections={1} className="opacity-30" />
        <motion.div
          className="absolute top-1/4 left-1/3 w-36 sm:w-48 h-36 sm:h-48 rounded-full border border-silver-dim opacity-20"
          animate={{ scale: [1, 1.02, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute top-0 left-0 w-1/4 sm:w-1/3 h-px bg-line transform -rotate-6 origin-top-left opacity-30" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative z-10 container-invitation"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          <div className="flex-1 content-left">
            <motion.div variants={fadeInUp} className="mb-2">
              <span className="title-section text-text-muted">Regalo</span>
            </motion.div>

            {/* Mensaje principal del regalo */}
            <motion.p
              variants={scaleIn}
              className="body-large text-text-primary mt-2"
            >
              El mejor regalo es tu presencia
            </motion.p>

            {/* Mensaje secundario con el alias */}
            <motion.p
              variants={fadeInUp}
              className="body-small text-text-muted mt-2"
            >
              {invitation.giftMessage}
            </motion.p>

            <motion.div variants={scaleIn} className="relative mt-4">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyAlias}
                className="px-4 sm:px-6 py-3 min-h-11 border border-border-button rounded-full text-text-primary body-semibold transition-all duration-200 touch-manipulation focus:outline-none focus:ring-2 focus:ring-silver-dim focus:ring-offset-2 focus:ring-offset-background w-full sm:w-auto"
                aria-label="Copiar alias al portapapeles"
              >
                {invitation.giftAlias}
                <AnimatePresence>
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, y: -5, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -5, scale: 0.9 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap body-tiny text-silver bg-background-card/90 px-3 py-1 rounded-full border border-silver-dim shadow-sm"
                    >
                      Alias copiado ✓
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-6 flex items-center gap-3 sm:gap-4">
              <span className="w-8 sm:w-12 h-px bg-line" />
              <span className="body-tiny text-text-muted">CON ALEGRÍA · CON AMOR · CON PRESENCIA</span>
              <span className="w-8 sm:w-12 h-px bg-line" />
            </motion.div>
          </div>

          <motion.div variants={scaleIn} className="flex-1 flex justify-center items-center mt-6 md:mt-0">
            <div className="w-full max-w-xs aspect-square flex items-center justify-center relative">
              <svg
                className="w-3/4 h-3/4 text-silver-dim opacity-60"
                viewBox="0 0 200 200"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                role="presentation"
              >
                <rect x="40" y="80" width="120" height="90" rx="4" stroke="currentColor" fill="none" />
                <path d="M40 80 L100 60 L160 80" stroke="currentColor" fill="none" />
                <path d="M100 60 L100 170" stroke="currentColor" fill="none" />
                <path d="M80 120 Q100 100 120 120" stroke="currentColor" fill="none" />
                <path d="M80 140 Q100 160 120 140" stroke="currentColor" fill="none" />
                <path d="M100 60 Q80 40 70 50 Q60 60 80 70 Q100 80 100 60" stroke="currentColor" fill="none" />
                <path d="M100 60 Q120 40 130 50 Q140 60 120 70 Q100 80 100 60" stroke="currentColor" fill="none" />
                <circle cx="100" cy="125" r="3" stroke="currentColor" fill="none" opacity="0.3" />
                <circle cx="100" cy="125" r="1.5" fill="currentColor" opacity="0.2" />
                <path d="M60 95 L80 95" stroke="currentColor" fill="none" opacity="0.2" strokeDasharray="2 2" />
                <path d="M120 95 L140 95" stroke="currentColor" fill="none" opacity="0.2" strokeDasharray="2 2" />
                <path d="M60 145 L80 145" stroke="currentColor" fill="none" opacity="0.2" strokeDasharray="2 2" />
                <path d="M120 145 L140 145" stroke="currentColor" fill="none" opacity="0.2" strokeDasharray="2 2" />
                <circle cx="50" cy="90" r="1" fill="currentColor" opacity="0.3" />
                <circle cx="150" cy="140" r="1" fill="currentColor" opacity="0.3" />
                <circle cx="70" cy="170" r="1" fill="currentColor" opacity="0.2" />
                <circle cx="130" cy="70" r="1" fill="currentColor" opacity="0.2" />
                <path d="M20 130 Q100 180 180 130" stroke="currentColor" fill="none" opacity="0.1" strokeDasharray="4 4" />
              </svg>
              <div className="absolute top-0 right-0 w-6 sm:w-8 h-px bg-line" />
              <div className="absolute bottom-0 left-0 w-6 sm:w-8 h-px bg-line" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default GiftSection;