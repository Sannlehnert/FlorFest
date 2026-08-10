import React from 'react';
import { motion } from 'framer-motion';
import { invitation } from '../data/invitation';
import { fadeInUp, scaleIn, createStaggerContainer } from '../animations/variants';

const EmotionalSection: React.FC = () => {
  const containerVariants = createStaggerContainer(0.4, 0.3);

  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center px-6 py-16 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-25" />
        <div className="absolute inset-0 bg-ambient-light" />
        <div className="absolute inset-0 bg-depth" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-silver/5 to-transparent" />
      </div>

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
        <motion.div variants={fadeInUp} className="flex justify-center mt-10">
          <div className="w-12 sm:w-16 h-px bg-line" />
        </motion.div>
        <motion.p variants={fadeInUp} className="body-tiny text-text-muted mt-6 tracking-[0.3em]">
          — {invitation.fullName} · {invitation.eventName}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default EmotionalSection;