import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { invitation } from '../data/invitation';
import DiscoBall from './DiscoBall';
import SparkleSystem from './SparkleSystem';
import ScrollIndicator from './ScrollIndicator';
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

  const containerVariants = createStaggerContainer(0.12, 0.15);

  return (
    <section id="regalo" className="relative min-h-dvh flex items-center justify-center px-4 pt-16 pb-28 bg-background overflow-hidden invitation-section">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="absolute inset-0 bg-ambient-light" />
        <div className="absolute inset-0 bg-depth" />
      </div>

      <div className="absolute -right-16 sm:-right-20 md:-right-32 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <DiscoBall className="w-32 sm:w-40 md:w-56 lg:w-80" opacity={0.12} duration={55} />
      </div>
      <SparkleSystem count={2} reflections={0} className="opacity-25" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative z-10 w-full max-w-4xl"
      >
        <motion.div variants={fadeInUp} className="mb-3">
          <span className="title-section text-chrome">Regalo</span>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-[1fr_1.05fr] md:items-end">
          <div>
            <motion.h2 variants={scaleIn} className="font-serif text-chrome text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
              Tu presencia<br />es lo más importante
            </motion.h2>
            <motion.p variants={fadeInUp} className="body text-text-muted mt-5 max-w-md">
              {invitation.giftMessage}
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} className="relative border-y border-white/15 py-7 md:px-8">
            <p className="body-tiny text-silver-dim tracking-[0.28em] uppercase">Alias</p>
            <motion.button
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCopyAlias}
              className="relative mt-3 flex w-full items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-silver-dim"
              aria-label="Copiar alias al portapapeles"
            >
              <span className="font-serif text-2xl sm:text-3xl text-text-primary break-all">{invitation.giftAlias}</span>
              <span className="shrink-0 rounded-full border border-white/25 p-3" aria-hidden="true">
                <svg className="w-4 h-4 text-silver" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </span>
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute -bottom-8 left-0 body-tiny text-silver"
                  >
                    Alias copiado ✓
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
            <p className="body-tiny text-text-muted mt-5 tracking-[0.18em] uppercase">Solo si querés hacerme un detalle</p>
          </motion.div>
        </div>
      </motion.div>

      <ScrollIndicator className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2" />
    </section>
  );
};

export default GiftSection;
