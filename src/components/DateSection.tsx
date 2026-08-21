import React from 'react';
import { motion } from 'framer-motion';
import { invitation } from '../data/invitation';
import { useCountdown } from '../data/countdown';
import DiscoBall from './DiscoBall';
import SparkleSystem from './SparkleSystem';
import ScrollIndicator from './ScrollIndicator';
import { fadeInUp, scaleIn, createStaggerContainer } from '../animations/variants';

const AnimatedNumber: React.FC<{ value: number; label: string }> = ({ value, label }) => {
  const formatted = String(value).padStart(2, '0');
  return (
    <div className="text-center">
      <div className="relative inline-block">
        <span className="countdown-number">
          {formatted}
        </span>
      </div>
      <p className="body-tiny mt-1 text-silver-dim">{label}</p>
    </div>
  );
};

const DateSection: React.FC = () => {
  const containerVariants = createStaggerContainer(0.08, 0.1);
  const timeLeft = useCountdown();

  return (
    <section id="fecha" className="relative min-h-dvh flex items-center justify-center px-4 pt-16 pb-28 bg-background overflow-hidden invitation-section">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="absolute inset-0 bg-ambient-light" />
        <div className="absolute inset-0 bg-depth" />
      </div>

      <div className="absolute -right-16 sm:-right-20 md:-right-32 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" role="presentation">
        <DiscoBall
          className="w-32 sm:w-40 md:w-56 lg:w-104"
          opacity={0.14}
          duration={55}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" role="presentation">
        <SparkleSystem count={2} reflections={0} className="opacity-20" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative z-10 container-invitation"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
          <div className="flex-1 content-left">
            <motion.div variants={fadeInUp} className="mb-2">
              <span className="eyebrow text-silver-dim">La fecha</span>
            </motion.div>
            <motion.div variants={scaleIn} className="mt-2">
              <span className="date-month">
                {invitation.month.toUpperCase()}
              </span>
            </motion.div>
            <motion.div variants={scaleIn}>
              <span className="date-day">
                {invitation.day}
              </span>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-1">
              <span className="eyebrow text-text-secondary">{invitation.year}</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-4 flex items-center gap-3 sm:gap-4">
              <span className="w-8 sm:w-12 h-px bg-silver-dim" />
              <span className="body-small text-text-muted">
                {invitation.dayOfWeek} · {invitation.time}
              </span>
              <span className="w-8 sm:w-12 h-px bg-silver-dim" />
            </motion.div>
          </div>

          <div className="flex-1 flex flex-col items-start text-left md:items-end md:text-right md:mt-16">
            <motion.div variants={fadeInUp}>
              <span className="eyebrow text-silver-dim block mb-4">Faltan</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex gap-4 sm:gap-6 md:gap-8 justify-start md:justify-end flex-wrap">
              <AnimatedNumber value={timeLeft.days} label="Días" />
              <AnimatedNumber value={timeLeft.hours} label="Horas" />
              <AnimatedNumber value={timeLeft.minutes} label="Min" />
              <AnimatedNumber value={timeLeft.seconds} label="Seg" />
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-6 sm:mt-8 flex justify-start md:justify-end">
              <div className="w-12 sm:w-16 h-px bg-silver-dim" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <ScrollIndicator className="scroll-cue-position absolute left-1/2 z-20 -translate-x-1/2" />
    </section>
  );
};

export default DateSection;
