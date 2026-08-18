import React from 'react';
import { motion } from 'framer-motion';

interface FFMonogramProps {
  className?: string;
}

const FFMonogram: React.FC<FFMonogramProps> = ({ className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className={`ff-monogram ${className}`}
    aria-label="Sello Flor Fest"
  >
    <img
      src="/images/logo.webp"
      alt="Monograma FF"
      width="180"
      height="180"
      loading="lazy"
      decoding="async"
    />
  </motion.div>
);

export default FFMonogram;
