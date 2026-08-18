import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { invitation } from '../data/invitation';
import DiscoBall from './DiscoBall';
import SparkleSystem from './SparkleSystem';
import ScrollIndicator from './ScrollIndicator';
import { fadeInUp, scaleIn, createStaggerContainer } from '../animations/variants';
import giftImage from '/images/gifts/gif-box-illustration.webp';

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
    <section id="regalo" className="relative min-h-dvh flex items-center justify-center px-4 pt-16 pb-28 bg-background overflow-hidden invitation-section">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="absolute inset-0 bg-ambient-light" />
        <div className="absolute inset-0 bg-depth" />
      </div>

      <div className="absolute -right-16 sm:-right-20 md:-right-32 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" role="presentation">
        <DiscoBall
          className="w-32 sm:w-40 md:w-56 lg:w-104"
          opacity={0.22}
          duration={55}
        />
      </div>
      <div className="absolute -left-12 sm:-left-16 md:-left-24 bottom-1/4 pointer-events-none" aria-hidden="true" role="presentation">
        <DiscoBall
          className="w-24 sm:w-28 md:w-36"
          opacity={0.06}
          duration={65}
        />
      </div>

      {/* ─── DESTELLO METÁLICO ─── */}
      <div className="absolute top-8 right-8 sm:top-12 sm:right-12 pointer-events-none opacity-15" aria-hidden="true" role="presentation">
        <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" strokeDasharray="2 2" />
          <circle cx="12" cy="12" r="3" />
        </svg>
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
              <span className="title-section text-chrome">Regalo</span>
            </motion.div>

            <motion.p variants={scaleIn} className="body-large text-text-primary mt-2">
              El mejor regalo es tu presencia
            </motion.p>

            <motion.p variants={fadeInUp} className="body-small text-text-muted mt-2">
              {invitation.giftMessage}
            </motion.p>

            <motion.div variants={scaleIn} className="relative mt-4">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyAlias}
                className="px-4 sm:px-6 py-3 min-h-11 border border-border-button rounded-full text-text-primary body-semibold transition-all duration-200 touch-manipulation focus:outline-none focus:ring-2 focus:ring-silver-dim focus:ring-offset-2 focus:ring-offset-background w-full sm:w-auto inline-flex items-center justify-center gap-2"
                aria-label="Copiar alias al portapapeles"
              >
                <span>{invitation.giftAlias}</span>
                <svg
                  className="w-4 h-4 text-silver-dim shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
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
              <span className="w-8 sm:w-12 h-px bg-silver-dim" />
              <span className="body-tiny text-text-muted">CON ALEGRÍA · CON AMOR · CON PRESENCIA</span>
              <span className="w-8 sm:w-12 h-px bg-silver-dim" />
            </motion.div>
          </div>

          <motion.div variants={scaleIn} className="flex-1 flex justify-center items-center mt-6 md:mt-0">
            <div className="asset-spotlight w-full max-w-xs aspect-square flex items-center justify-center relative">
              <img
                src={giftImage}
                alt="Regalo decorativo"
                className="w-full h-full object-contain opacity-80"
                loading="lazy"
                decoding="async"
                width="1100"
                height="733"
                aria-hidden="true"
              />
              <div className="absolute top-0 right-0 w-6 sm:w-8 h-px bg-line" />
              <div className="absolute bottom-0 left-0 w-6 sm:w-8 h-px bg-line" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <ScrollIndicator className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2" />
    </section>
  );
};

export default GiftSection;
