import React from 'react';
import { motion } from 'framer-motion';
import { invitation } from '../data/invitation';
import DiscoBall from './DiscoBall';
import SparkleSystem from './SparkleSystem';
import ScrollIndicator from './ScrollIndicator';
import FFMonogram from './FFMonogram';
import { fadeInUp, scaleIn, createStaggerContainer } from '../animations/variants';

const EmotionalSection: React.FC = () => {
  const containerVariants = createStaggerContainer(0.4, 0.3);

  return (
    <section id="cierre" className="relative min-h-dvh flex flex-col items-center justify-center px-6 pt-16 pb-28 bg-background overflow-hidden invitation-section">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-25" />
        <div className="absolute inset-0 bg-ambient-light" />
        <div className="absolute inset-0 bg-depth" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-silver/5 to-transparent" />
      </div>

      <div className="absolute -left-12 sm:-left-16 bottom-1/4 pointer-events-none" aria-hidden="true" role="presentation">
        <DiscoBall
          className="w-24 sm:w-32 md:w-40"
          opacity={0.18}
          duration={60}
        />
      </div>

      <SparkleSystem count={2} reflections={1} className="opacity-35" />

      {/* ─── DESTELLO METÁLICO SUTIL ─── */}
      <div className="absolute top-8 right-8 sm:top-12 sm:right-12 pointer-events-none opacity-10" aria-hidden="true" role="presentation">
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" strokeDasharray="2 2" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-silver-dim opacity-10 blur-sm pointer-events-none"
        aria-hidden="true"
        role="presentation"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <motion.div variants={fadeInUp} className="flex justify-center mb-8">
          <div className="w-8 sm:w-12 h-px bg-line" />
        </motion.div>
        <motion.p
          variants={scaleIn}
          className="font-serif text-text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed tracking-wide"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {invitation.emotionalMessage}
        </motion.p>
        <FFMonogram className="mx-auto mt-8 w-24 sm:w-28" />
        <motion.p variants={fadeInUp} className="body-tiny text-text-muted mt-6 tracking-[0.3em]">
          — {invitation.fullName} · {invitation.eventName}
        </motion.p>
      </motion.div>

      <ScrollIndicator className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2" />
    </section>
  );
};

export default EmotionalSection;
