import React from 'react';
import { motion } from 'framer-motion';
import { useMusic } from '../context/MusicContext';

const MusicFloatingButton: React.FC = () => {
  const { isPlaying, togglePlay, isReady } = useMusic();

  if (!isReady) return null;

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={togglePlay}
      className="fixed bottom-20 right-4 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-background-card/90 backdrop-blur-sm border border-silver-dim shadow-lg flex items-center justify-center touch-manipulation focus:outline-none focus:ring-2 focus:ring-silver-dim focus:ring-offset-2 focus:ring-offset-background"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label={isPlaying ? 'Pausar música' : 'Reanudar música'}
    >
      <motion.div
        className="absolute inset-0 rounded-full border border-silver/30"
        animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
        transition={isPlaying ? { duration: 8, repeat: Infinity, ease: 'linear' } : { duration: 0 }}
      />
      <motion.div
        className="absolute inset-1 rounded-full border border-silver/10"
        animate={isPlaying ? { rotate: -360 } : { rotate: 0 }}
        transition={isPlaying ? { duration: 6, repeat: Infinity, ease: 'linear' } : { duration: 0 }}
      />

      <div className="relative z-10 text-text-secondary">
        {isPlaying ? (
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        )}
      </div>

      <motion.div
        className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
        animate={{
          backgroundColor: isPlaying ? '#E0E0E0' : '#A8A8A8',
          scale: isPlaying ? [1, 1.3, 1] : 1,
          opacity: isPlaying ? [0.6, 1, 0.6] : 0.5,
        }}
        transition={isPlaying ? { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } : { duration: 0 }}
      />
    </motion.button>
  );
};

export default MusicFloatingButton;