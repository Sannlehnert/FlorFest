import React from 'react';
import { motion } from 'framer-motion';
import { invitation } from '../data/invitation';
import DiscoBall from './DiscoBall';
import SparkleSystem from './SparkleSystem';
import { fadeInUp, scaleIn, createStaggerContainer } from '../animations/variants';

const LocationSection: React.FC = () => {
  const handleOpenMaps = () => {
    window.open(invitation.mapsUrl, '_blank');
  };

  const containerVariants = createStaggerContainer(0.08, 0.1);

  return (
    <section className="relative min-h-dvh flex items-center justify-center px-4 py-16 bg-background overflow-hidden will-change-transform">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="absolute inset-0 bg-ambient-light" />
        <div className="absolute inset-0 bg-depth" />
      </div>

      <div className="absolute -right-16 sm:-right-20 md:-right-32 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" role="presentation">
        <DiscoBall className="w-40 sm:w-48 md:w-104" opacity={0.12} duration={55} />
      </div>
      <div className="absolute -left-12 sm:-left-16 md:-left-24 bottom-1/4 pointer-events-none" aria-hidden="true" role="presentation">
        <DiscoBall className="w-28 sm:w-32 md:w-48" opacity={0.08} duration={65} />
      </div>

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" role="presentation">
        <SparkleSystem count={3} reflections={1} className="opacity-30" />
        <motion.div
          className="absolute top-1/3 right-1/4 w-40 sm:w-56 h-40 sm:h-56 rounded-full border border-silver-dim opacity-20"
          animate={{ scale: [1, 1.02, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute top-0 left-0 w-1/3 sm:w-1/2 h-px bg-line transform -rotate-6 origin-top-left opacity-30" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative z-10 container-invitation"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
          <div className="flex-1 content-left">
            <motion.div variants={fadeInUp} className="mb-2">
              <span className="title-section text-text-muted">Ubicación</span>
            </motion.div>
            <motion.h3 variants={scaleIn} className="title-display-small text-text-primary mt-2">
              {invitation.location}
            </motion.h3>
            <motion.div variants={fadeInUp} className="mt-4 flex items-start gap-3">
              <svg
                className="w-4 h-4 text-silver-dim shrink-0 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                role="presentation"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="body text-text-secondary">{invitation.address}</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-2 flex items-center gap-3 sm:gap-4">
              <span className="w-6 sm:w-8 h-px bg-line" />
              <p className="body-small text-text-muted">{invitation.time}</p>
              <span className="w-6 sm:w-8 h-px bg-line" />
            </motion.div>
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenMaps}
              className="mt-6 px-6 sm:px-8 py-3 min-h-11 border border-border-button rounded-full label-button transition-colors duration-200 touch-manipulation focus:outline-none focus:ring-2 focus:ring-silver-dim focus:ring-offset-2 focus:ring-offset-background w-full sm:w-auto"
            >
              Ver ubicación
            </motion.button>
            <motion.div variants={fadeInUp} className="mt-6 flex items-center gap-3 sm:gap-4">
              <span className="w-8 sm:w-12 h-px bg-line" />
              <span className="body-tiny text-text-muted">{invitation.location}</span>
              <span className="w-8 sm:w-12 h-px bg-line" />
            </motion.div>
          </div>

          <motion.div variants={scaleIn} className="flex-1 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="w-full max-w-sm aspect-4/3 bg-background-card/50 rounded-lg border-2 border-silver-dim overflow-hidden relative shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <svg
                  className="w-3/4 h-3/4"
                  viewBox="0 0 200 150"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  role="presentation"
                >
                  <rect x="10" y="10" width="180" height="130" rx="4" stroke="white/20" />
                  <path d="M100 20 L100 130 M20 75 L180 75" stroke="white/10" strokeWidth="0.5" strokeDasharray="4 4" />
                  <circle cx="100" cy="75" r="8" fill="white/20" stroke="white/40" strokeWidth="1.5" />
                  <circle cx="100" cy="75" r="2" fill="white/60" />
                  <path d="M100 75 L112 87 M100 75 L88 63 M100 75 L100 87 M100 75 L88 75 M100 75 L112 63" stroke="white/15" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="absolute bottom-3 left-3 w-6 sm:w-8 h-px bg-line" />
              <div className="absolute top-3 right-3 w-6 sm:w-8 h-px bg-line" />
              <div className="absolute bottom-3 right-3 body-tiny text-text-muted opacity-60">
                {invitation.location}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LocationSection;