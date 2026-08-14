import React from 'react';
import { motion } from 'framer-motion';
import { invitation } from '../data/invitation';
import DiscoBall from './DiscoBall';
import SparkleSystem from './SparkleSystem';
import { fadeInUp, scaleIn, createStaggerContainer } from '../animations/variants';

const RsvpSection: React.FC = () => {
  const handleConfirm = () => {
    const message = encodeURIComponent(invitation.whatsappMessage);
    const url = `https://wa.me/${invitation.whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  const containerVariants = createStaggerContainer(0.06, 0.08);
  const closingVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center px-6 py-16 bg-background overflow-hidden will-change-transform">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-25" />
        <div className="absolute inset-0 bg-ambient-light" />
        <div className="absolute inset-0 bg-depth" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-silver/5 to-transparent" />
      </div>

      <div className="absolute -right-16 sm:-right-20 md:-right-32 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" role="presentation">
        <DiscoBall
          className="w-32 sm:w-40 md:w-56 lg:w-64"
          opacity={0.10}
          duration={55}
        />
      </div>
      <div className="absolute -left-12 sm:-left-16 md:-left-24 bottom-1/3 pointer-events-none" aria-hidden="true" role="presentation">
        <DiscoBall
          className="w-24 sm:w-28 md:w-36"
          opacity={0.06}
          duration={65}
        />
      </div>

      <SparkleSystem count={1} reflections={0} className="opacity-30" />

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" role="presentation">
        <motion.div
          className="absolute top-1/4 right-1/4 w-40 sm:w-56 h-40 sm:h-56 rounded-full border border-silver-dim opacity-15"
          animate={{ scale: [1, 1.02, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-32 sm:w-40 h-32 sm:h-40 rounded-full border border-silver-dim opacity-10"
          animate={{ scale: [1, 1.04, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <motion.div variants={fadeInUp} className="flex justify-center mb-8">
          <div className="w-8 sm:w-12 h-px bg-silver-dim" />
        </motion.div>

        <motion.h2 variants={scaleIn} className="font-serif text-text-primary text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1]">
          ¿Venis?
        </motion.h2>

        <motion.p variants={fadeInUp} className="body-large text-text-secondary mt-4 max-w-sm mx-auto">
          {invitation.rsvpMessage}
        </motion.p>

        <motion.div variants={fadeInUp} className="flex justify-center my-8">
          <div className="w-8 sm:w-12 h-px bg-silver-dim" />
        </motion.div>

        <motion.button
          variants={scaleIn}
          whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.2)' }}
          whileTap={{ scale: 0.95 }}
          onClick={handleConfirm}
          className="px-10 py-5 min-h-14 bg-white/15 border-2 border-white/50 rounded-full text-text-primary text-base font-semibold tracking-[0.15em] uppercase transition-colors duration-200 touch-manipulation focus:outline-none focus:ring-2 focus:ring-silver-dim focus:ring-offset-2 focus:ring-offset-background w-full sm:w-auto"
        >
          Confirmar asistencia
        </motion.button>

        <motion.div
          variants={closingVariants}
          className="mt-12 sm:mt-16 flex flex-col items-center gap-4"
        >
          <div className="relative flex items-center justify-center">
            <div className="w-12 sm:w-16 h-px bg-silver-dim" />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-silver-dim" />
            <div className="w-12 sm:w-16 h-px bg-silver-dim" />
          </div>
          <p className="font-serif text-text-secondary text-base sm:text-lg md:text-xl tracking-[0.15em]">
            {invitation.fullName}
          </p>
          <p className="body-tiny text-text-muted tracking-[0.2em]">
            {invitation.year} · {invitation.eventName}
          </p>
          <div className="w-6 sm:w-8 h-px bg-silver-dim mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RsvpSection;