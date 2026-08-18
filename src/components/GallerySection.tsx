import React from 'react';
import { motion } from 'framer-motion';
import { invitation } from '../data/invitation';
import DiscoBall from './DiscoBall';
import SparkleSystem from './SparkleSystem';
import Polaroid from './Polaroid';
import ScrollIndicator from './ScrollIndicator';
import { EASING } from '../animations/variants';
import { useReducedMotion } from '../context/ReducedMotionContext';

const PHOTOS_PER_PAGE = 4;

const GallerySection: React.FC = () => {
  const prefersReduced = useReducedMotion();

  if (!invitation.photos || invitation.photos.length === 0) {
    return null;
  }

  const pages = Array.from(
    { length: Math.ceil(invitation.photos.length / PHOTOS_PER_PAGE) },
    (_, pageIndex) =>
      invitation.photos.slice(
        pageIndex * PHOTOS_PER_PAGE,
        pageIndex * PHOTOS_PER_PAGE + PHOTOS_PER_PAGE
      )
  );

  const rotations = [-2.5, 1.5, -1, 2.5];

  return (
    <section className="relative bg-background invitation-section" aria-labelledby="moments-title">
      {pages.map((photos, pageIndex) => (
        <div
          key={`moment-page-${pageIndex}`}
          id={`momentos-${pageIndex + 1}`}
          className="relative min-h-dvh overflow-hidden px-4 pt-16 pb-28 flex items-center justify-center"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-noise opacity-20" />
            <div className="absolute inset-0 bg-ambient-light" />
            <div className="absolute inset-0 bg-depth" />
          </div>

          <div
            className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${
              pageIndex % 2 === 0 ? '-left-14 sm:-left-20' : '-right-14 sm:-right-20'
            }`}
            aria-hidden="true"
          >
            <DiscoBall
              className="w-28 sm:w-40 md:w-52"
              opacity={0.18}
              duration={48 + pageIndex * 5}
            />
          </div>

          <SparkleSystem count={4} reflections={1} className="opacity-45" />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.5, ease: EASING.OUT }}
            className="relative z-10 w-full max-w-5xl"
          >
            <header className="content-center mb-8 sm:mb-10">
              <p className="body-tiny text-silver-dim tracking-[0.32em] mb-2">
                CAPÍTULO {String(pageIndex + 1).padStart(2, '0')}
              </p>
              <h2
                id={pageIndex === 0 ? 'moments-title' : undefined}
                className="title-display-small text-chrome"
              >
                Momentos
              </h2>
              <p className="script-small mt-2 text-text-muted">
                Recuerdos que también son parte de esta noche
              </p>
            </header>

            <div className="moments-collage">
              {photos.map((src, photoIndex) => {
                const globalIndex = pageIndex * PHOTOS_PER_PAGE + photoIndex;

                return (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, scale: 0.92, y: 14 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: prefersReduced ? 0.15 : 0.4,
                      delay: prefersReduced ? 0 : photoIndex * 0.06,
                      ease: EASING.OUT,
                    }}
                    className={`moment-frame moment-frame-${photoIndex + 1}`}
                  >
                    <Polaroid
                      src={src}
                      alt={`Foto ${globalIndex + 1} de Florencia Lehnert`}
                      rotation={rotations[photoIndex]}
                      scale={1}
                      offsetX={0}
                      offsetY={0}
                      shadowIntensity={photoIndex === 0 ? 'strong' : 'medium'}
                      priority={false}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <ScrollIndicator className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2" />
        </div>
      ))}
    </section>
  );
};

export default GallerySection;
