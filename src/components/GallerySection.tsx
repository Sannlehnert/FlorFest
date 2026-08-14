import React from 'react';
import { motion } from 'framer-motion';
import { invitation } from '../data/invitation';
import DiscoBall from './DiscoBall';
import SparkleSystem from './SparkleSystem';
import Polaroid from './Polaroid';
import { EASING } from '../animations/variants';
import { useReducedMotion } from '../context/ReducedMotionContext';

const GallerySection: React.FC = () => {
  const prefersReduced = useReducedMotion();

  if (!invitation.photos || invitation.photos.length === 0) {
    return null;
  }

  const getRotation = (index: number) => {
    const rotations = [-2, -1, 0, 1, 2, -1.5, 1.5, 0.5, -0.5];
    return rotations[index % rotations.length];
  };

  const getOffsetY = (index: number) => {
    const offsets = [-4, -2, 0, 2, 4, -3, 3, -1, 1];
    return offsets[index % offsets.length];
  };

  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center px-4 py-16 bg-background overflow-hidden will-change-transform">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="absolute inset-0 bg-ambient-light" />
        <div className="absolute inset-0 bg-depth" />
      </div>

      <div className="absolute -left-12 sm:-left-16 md:-left-24 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" role="presentation">
        <DiscoBall
          className="w-24 sm:w-32 md:w-44"
          opacity={0.10}
          duration={55}
        />
      </div>

      {/* ─── ESTRELLA CHROME ─── */}
      <div className="absolute top-8 right-8 sm:top-12 sm:right-12 pointer-events-none opacity-15" aria-hidden="true" role="presentation">
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 L13.5 9.5 L21 11 L13.5 12.5 L12 20 L10.5 12.5 L3 11 L10.5 9.5 Z" />
        </svg>
      </div>

      <SparkleSystem count={2} reflections={1} className="opacity-20" />

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" role="presentation">
        <motion.div
          className="absolute top-1/3 right-1/4 w-36 sm:w-48 h-36 sm:h-48 rounded-full border border-silver-dim opacity-15"
          animate={{ scale: [1, 1.02, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute top-0 left-0 w-1/3 sm:w-1/2 h-px bg-line transform -rotate-6 origin-top-left opacity-20" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center mb-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: EASING.OUT }}
          className="w-8 sm:w-12 h-px bg-line mb-6"
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: EASING.OUT }}
          className="title-section text-silver"
        >
          Momentos
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, delay: 0.1, ease: EASING.OUT }}
          className="w-8 sm:w-12 h-px bg-line mt-6"
        />
      </div>

      <div className="relative z-10 w-full max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {invitation.photos.map((src, index) => {
            const rotation = getRotation(index);
            const offsetY = getOffsetY(index);
            const shadowIntensity = index % 3 === 0 ? 'strong' : 'medium';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.92, rotate: rotation * 0.5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: prefersReduced ? 0.2 : 0.3,
                  delay: prefersReduced ? 0.02 : 0.03 + index * 0.03,
                  ease: EASING.OUT,
                }}
                className="relative"
                style={{ transform: `translateY(${offsetY}px)` }}
              >
                <Polaroid
                  src={src}
                  alt={`Foto ${index + 1} - Florencia Lehnert`}
                  rotation={0}
                  scale={1}
                  offsetX={0}
                  offsetY={0}
                  shadowIntensity={shadowIntensity}
                  priority={index === 0}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3, delay: 0.2, ease: EASING.OUT }}
        className="relative z-10 w-8 sm:w-12 h-px bg-line mt-12"
      />
    </section>
  );
};

export default GallerySection;