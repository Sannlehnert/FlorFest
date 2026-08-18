import { motion } from 'framer-motion';
import { invitation } from '../data/invitation';
import DiscoBall from './DiscoBall';
import SparkleSystem from './SparkleSystem';
import ScrollIndicator from './ScrollIndicator';
import { fadeInUp, scaleIn, createStaggerContainer } from '../animations/variants';

const HeroSection: React.FC = () => {
  const containerVariants = createStaggerContainer(0.08, 0.1);

  return (
    <section id="inicio" className="relative min-h-dvh flex items-center justify-center px-4 pt-16 pb-28 bg-background overflow-hidden invitation-section">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="absolute inset-0 bg-ambient-light" />
        <div className="absolute inset-0 bg-depth" />
      </div>

      <div className="absolute -left-16 sm:-left-20 md:-left-32 top-1/2 -translate-y-1/2 pointer-events-none">
        <DiscoBall
          className="w-32 sm:w-44 md:w-56 lg:w-104"
          opacity={0.34}
          duration={50}
        />
      </div>
      <div className="absolute -right-12 sm:-right-16 md:-right-24 bottom-1/3 pointer-events-none">
        <DiscoBall
          className="w-24 sm:w-32 md:w-40"
          opacity={0.12}
          duration={60}
        />
      </div>

      {/* ─── ESTRELLA CHROME ─── */}
      <div className="absolute top-8 right-8 sm:top-12 sm:right-12 pointer-events-none opacity-20" aria-hidden="true" role="presentation">
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 L13.5 9.5 L21 11 L13.5 12.5 L12 20 L10.5 12.5 L3 11 L10.5 9.5 Z" />
        </svg>
      </div>

      <SparkleSystem count={3} reflections={1} className="opacity-50" />

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full border border-silver-dim opacity-20"
          animate={{ scale: [1, 1.02, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
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
              <span className="title-section text-silver-dim">Celebramos</span>
            </motion.div>

            <motion.h1 variants={scaleIn} className="script-hero text-left leading-[0.9] tracking-tight">
              {invitation.fullName}
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="mt-3 flex flex-col items-start gap-1"
            >
              <div className="w-12 h-px bg-silver-dim/60" />
              <span className="font-serif text-silver text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.3em] uppercase leading-[1.2]">
                MIS XV
              </span>
              <div className="w-12 h-px bg-silver-dim/60" />
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-4 flex items-center gap-3 sm:gap-4">
              <span className="w-8 sm:w-12 h-px bg-line" />
              <span className="title-balloon">{invitation.eventName}</span>
              <span className="w-8 sm:w-12 h-px bg-line" />
            </motion.div>

            <motion.p variants={fadeInUp} className="hero-tagline mt-4 max-w-md">
              <span>Una noche de</span>{' '}
              <em>brillo</em>, música y <strong>celebración</strong>
            </motion.p>
          </div>

          <div className="flex-1 flex md:justify-end md:items-end">
            <motion.div
              variants={fadeInUp}
              className="mt-8 md:mt-20 w-full max-w-xs border-t border-b border-white/15 py-5 md:text-right"
              aria-label={`${invitation.day} de ${invitation.month} de ${invitation.year}, ${invitation.time}`}
            >
              <p className="title-section text-chrome">03 · 10 · 26</p>
              <p className="body-small text-text-muted mt-2">20:30 HS · CENTENARIO</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <ScrollIndicator className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2" />
    </section>
  );
};

export default HeroSection;
