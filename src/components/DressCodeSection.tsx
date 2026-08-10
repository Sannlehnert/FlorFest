import React from 'react';
import { motion } from 'framer-motion';
import { invitation } from '../data/invitation';
import DiscoBall from './DiscoBall';
import SparkleSystem from './SparkleSystem';
import { fadeInUp, scaleIn, createStaggerContainer } from '../animations/variants';

const DressCodeSection: React.FC = () => {
  const containerVariants = createStaggerContainer(0.08, 0.1);

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
        <SparkleSystem count={3} reflections={1} className="opacity-25" />
        <motion.div
          className="absolute top-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full border border-silver-dim opacity-20"
          animate={{ scale: [1, 1.02, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute bottom-0 right-0 w-1/4 sm:w-1/3 h-px bg-line transform rotate-6 origin-bottom-right opacity-30" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative z-10 container-invitation"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-12">
          <div className="flex-1 content-left">
            <motion.div variants={fadeInUp} className="mb-2">
              <span className="title-section text-text-muted">Dress Code</span>
            </motion.div>
            <motion.div variants={scaleIn} className="mt-2">
              <span
                className="block font-serif font-bold leading-[1.1] tracking-widest text-text-primary"
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  fontFamily: 'var(--font-serif)',
                }}
              >
                {invitation.dressCode}
              </span>
            </motion.div>
            <motion.p variants={fadeInUp} className="body-small text-text-muted mt-3 max-w-xs">
              Vístete para brillar esta noche
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-6 flex items-center gap-3 sm:gap-4">
              <span className="w-8 sm:w-12 h-px bg-line" />
              <span className="body-tiny text-text-muted">ELEGANCIA · GLAMOUR · BRILLO</span>
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
                <path d="M100 30 L80 60 L120 60 L100 30Z" stroke="currentColor" fill="none" />
                <path d="M80 60 L65 80 M120 60 L135 80" stroke="currentColor" fill="none" />
                <path d="M85 45 Q100 55 115 45" stroke="currentColor" fill="none" />
                <path d="M70 85 C70 85 85 80 100 80 C115 80 130 85 130 85" stroke="currentColor" fill="none" />
                <path d="M70 85 L60 170 M130 85 L140 170 M60 170 L140 170" stroke="currentColor" fill="none" />
                <path d="M75 110 Q100 105 125 110" stroke="currentColor" fill="none" opacity="0.4" />
                <path d="M80 135 Q100 130 120 135" stroke="currentColor" fill="none" opacity="0.4" />
                <path d="M58 170 Q70 180 100 175 Q130 180 142 170" stroke="currentColor" fill="none" />
                <circle cx="100" cy="95" r="4" stroke="currentColor" fill="none" opacity="0.3" />
                <circle cx="100" cy="95" r="2" fill="currentColor" opacity="0.2" />
                <path d="M75 75 L85 78" stroke="currentColor" fill="none" opacity="0.5" />
                <path d="M125 75 L115 78" stroke="currentColor" fill="none" opacity="0.5" />
                <circle cx="45" cy="80" r="1.5" fill="currentColor" opacity="0.3" />
                <circle cx="155" cy="120" r="1.5" fill="currentColor" opacity="0.3" />
                <circle cx="50" cy="150" r="1" fill="currentColor" opacity="0.2" />
                <circle cx="150" cy="70" r="1" fill="currentColor" opacity="0.2" />
                <path d="M30 100 Q100 50 170 100" stroke="currentColor" fill="none" opacity="0.1" strokeDasharray="4 4" />
              </svg>
              <div className="absolute top-0 left-0 w-6 sm:w-8 h-px bg-line" />
              <div className="absolute bottom-0 right-0 w-6 sm:w-8 h-px bg-line" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default DressCodeSection;