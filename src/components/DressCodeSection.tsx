import React from 'react';
import { motion } from 'framer-motion';
import { invitation } from '../data/invitation';
import DiscoBall from './DiscoBall';
import SparkleSystem from './SparkleSystem';
import { fadeInUp, scaleIn, createStaggerContainer } from '../animations/variants';
import dressIllustration from '/images/dress-code/dress-illustration.png';

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
        <DiscoBall
          className="w-32 sm:w-40 md:w-56 lg:w-104"
          opacity={0.10}
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

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" role="presentation">
        <SparkleSystem count={3} reflections={1} className="opacity-25" />
        <motion.div
          className="absolute top-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full border border-silver-dim opacity-20"
          animate={{ scale: [1, 1.02, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute bottom-0 right-0 w-1/4 sm:w-1/3 h-px bg-line transform rotate-6 origin-bottom-right opacity-30" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-10 right-10 w-16 h-16 pointer-events-none"
          aria-hidden="true"
          role="presentation"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-silver-dim opacity-25">
            <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
          </svg>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative z-10 container-invitation"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
          <div className="flex-1 content-left">
            <motion.div variants={fadeInUp} className="mb-2">
              <span className="title-section text-silver">Dress Code</span>
            </motion.div>

            <motion.div variants={scaleIn} className="mt-2">
              <span
                className="block font-serif font-bold leading-[1.1] tracking-widest text-text-primary"
                style={{
                  fontSize: 'clamp(3rem, 10vw, 5.5rem)',
                  fontFamily: 'var(--font-serif)',
                }}
              >
                {invitation.dressCode}
              </span>
            </motion.div>

            <motion.p variants={fadeInUp} className="body-small text-text-muted mt-4 max-w-xs">
              Vístete para brillar esta noche
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-6 flex items-center gap-3 sm:gap-4">
              <span className="w-8 sm:w-12 h-px bg-silver-dim" />
              <span className="body-tiny text-text-muted">ELEGANCIA · GLAMOUR · BRILLO</span>
              <span className="w-8 sm:w-12 h-px bg-silver-dim" />
            </motion.div>
          </div>

          <motion.div
            variants={scaleIn}
            className="flex-1 flex justify-center items-center mt-6 md:mt-0"
          >
            <div className="w-full max-w-xs md:max-w-sm aspect-4/5 flex items-center justify-center relative">
              <img
                src={dressIllustration}
                alt="Ilustración de vestimenta elegante"
                className="w-full h-full object-contain opacity-90"
                loading="lazy"
                aria-hidden="true"
              />
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