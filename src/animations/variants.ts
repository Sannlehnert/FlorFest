import type { Variants } from 'framer-motion';

export const DURATION = {
  MICRO: 0.12,
  NORMAL: 0.3,
  CINEMATIC: 0.5,
  AMBIENT: 3,
} as const;

export const EASING = {
  OUT: [0.16, 1, 0.3, 1],
  IN: [0.4, 0, 0.2, 1],
  SPRING: { type: 'spring', damping: 20, stiffness: 200 },
  SMOOTH: 'easeInOut',
} as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.NORMAL, ease: EASING.OUT },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.NORMAL, ease: EASING.OUT },
  },
};

export const cinematicIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.CINEMATIC, ease: EASING.OUT },
  },
};

export const ambientFloat: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-4, 4, -4],
    transition: {
      duration: DURATION.AMBIENT,
      repeat: Infinity,
      ease: EASING.SMOOTH,
    },
  },
};

export const createStaggerContainer = (
  staggerDelay: number = 0.06,
  delayChildren: number = 0.08
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

export const useReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const getReducedVariant = (variant: Variants): Variants => {
  if (variant.hidden && variant.visible) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.12, ease: 'easeOut' },
      },
    };
  }
  return variant;
};