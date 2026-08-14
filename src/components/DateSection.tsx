import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { invitation } from '../data/invitation';
import DiscoBall from './DiscoBall';
import SparkleSystem from './SparkleSystem';
import { fadeInUp, scaleIn, createStaggerContainer } from '../animations/variants';

const AnimatedNumber: React.FC<{ value: number; label: string }> = ({ value, label }) => {
  const formatted = String(value).padStart(2, '0');
  return (
    <div className="text-center">
      <div className="relative inline-block">
        <AnimatePresence mode="wait">
          <motion.span
            key={formatted}
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tabular-nums leading-none block will-change-transform will-change-opacity"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {formatted}
          </motion.span>
        </AnimatePresence>
      </div>
      <p className="body-tiny mt-1 text-silver-dim">{label}</p>
    </div>
  );
};

const DateSection: React.FC = () => {
  const containerVariants = createStaggerContainer(0.08, 0.1);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(
      invitation.year,
      getMonthIndex(invitation.month),
      invitation.day,
      20,
      30,
      0
    );

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getMonthIndex(monthName: string): number {
    const months: Record<string, number> = {
      enero: 0,
      febrero: 1,
      marzo: 2,
      abril: 3,
      mayo: 4,
      junio: 5,
      julio: 6,
      agosto: 7,
      septiembre: 8,
      octubre: 9,
      noviembre: 10,
      diciembre: 11,
    };
    return months[monthName.toLowerCase()] ?? 0;
  }

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
          opacity={0.12}
          duration={55}
        />
      </div>
      <div className="absolute -left-12 sm:-left-16 md:-left-24 bottom-1/4 pointer-events-none" aria-hidden="true" role="presentation">
        <DiscoBall
          className="w-24 sm:w-28 md:w-36"
          opacity={0.08}
          duration={65}
        />
      </div>

      {/* ─── DESTELLO METÁLICO ─── */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-12 pointer-events-none opacity-15" aria-hidden="true" role="presentation">
        <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" strokeDasharray="2 2" />
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" role="presentation">
        <SparkleSystem count={3} reflections={1} className="opacity-30" />
        <motion.div
          className="absolute top-1/3 left-1/4 w-40 sm:w-56 h-40 sm:h-56 rounded-full border border-silver-dim opacity-20"
          animate={{ scale: [1, 1.02, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute top-0 right-0 w-1/4 sm:w-1/3 h-px bg-line transform rotate-6 origin-top-right opacity-30" />
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
              <span className="title-section text-silver">Fecha</span>
            </motion.div>
            <motion.div variants={scaleIn} className="mt-2">
              <span className="title-section text-text-secondary block tracking-[0.4em]">
                {invitation.month.toUpperCase()}
              </span>
            </motion.div>
            <motion.div variants={scaleIn}>
              <span
                className="block font-serif font-bold leading-[0.9] tracking-tight text-text-primary"
                style={{
                  fontSize: 'clamp(4rem, 18vw, 12rem)',
                  fontFamily: 'var(--font-serif)',
                }}
              >
                {invitation.day}
              </span>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-1">
              <span className="title-section text-text-secondary">{invitation.year}</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-4 flex items-center gap-3 sm:gap-4">
              <span className="w-8 sm:w-12 h-px bg-silver-dim" />
              <span className="body-small text-text-muted">
                {invitation.dayOfWeek} · {invitation.time}
              </span>
              <span className="w-8 sm:w-12 h-px bg-silver-dim" />
            </motion.div>
          </div>

          <div className="flex-1 content-right md:mt-16">
            <motion.div variants={fadeInUp} className="text-right">
              <span className="title-section text-silver-dim block mb-4">Faltan</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex gap-4 sm:gap-6 md:gap-8 justify-end flex-wrap">
              <AnimatedNumber value={timeLeft.days} label="Días" />
              <AnimatedNumber value={timeLeft.hours} label="Horas" />
              <AnimatedNumber value={timeLeft.minutes} label="Min" />
              <AnimatedNumber value={timeLeft.seconds} label="Seg" />
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-6 sm:mt-8 flex justify-end">
              <div className="w-12 sm:w-16 h-px bg-silver-dim" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DateSection;