import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useMusic } from '../context/MusicContext';
import { DURATION, EASING } from '../animations/variants';

const MusicPlayer: React.FC = () => {
  const {
    isPlaying,
    currentTime,
    duration,
    progress,
    title,
    artist,
    togglePlay,
    seekTo,
    isReady,
  } = useMusic();

  const controls = useAnimation();

  React.useEffect(() => {
    if (isPlaying) {
      controls.start({ opacity: [1, 0.3, 1], transition: { duration: 1.5, repeat: Infinity } });
    } else {
      controls.stop();
      controls.set({ opacity: 1 });
    }
  }, [isPlaying, controls]);

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isReady || duration === 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * duration;
    seekTo(newTime);
  };

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: DURATION.NORMAL, ease: EASING.OUT }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-background-card/95 backdrop-blur-md border-t border-white/5 px-3 py-2 md:px-5 md:py-3 safe-bottom"
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
    >
      <div className="max-w-3xl mx-auto flex items-center gap-2 sm:gap-3 md:gap-5">
        <motion.button
          whileHover={{ scale: 1.06, backgroundColor: 'rgba(255,255,255,0.05)' }}
          whileTap={{ scale: 0.92 }}
          onClick={togglePlay}
          disabled={!isReady}
          className="w-9 h-9 sm:w-10 sm:h-10 min-h-10 sm:min-h-11 min-w-10 sm:min-w-11 flex items-center justify-center rounded-full border border-silver-dim text-text-secondary transition-colors duration-200 disabled:opacity-30 shrink-0 focus:outline-none focus:ring-2 focus:ring-silver-dim focus:ring-offset-2 focus:ring-offset-background-card"
          aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
        >
          {isPlaying ? (
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </motion.button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <p className="body-semibold text-text-primary truncate text-xs sm:text-sm md:text-base">
              {title}
            </p>
            {isPlaying && (
              <motion.span
                animate={controls}
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-silver rounded-full shrink-0"
              />
            )}
          </div>
          <p className="body-small text-text-muted truncate text-[10px] sm:text-xs">{artist}</p>
        </div>

        <div className="hidden sm:flex items-center gap-2 md:gap-3 flex-1 max-w-xs">
          <span className="body-tiny text-text-muted w-8 sm:w-9 text-right tabular-nums">
            {formatTime(currentTime)}
          </span>
          <div
            className="relative flex-1 h-1 bg-white/10 rounded-full cursor-pointer group touch-manipulation focus:outline-none focus:ring-1 focus:ring-silver-dim"
            onClick={handleProgressClick}
            role="slider"
            aria-label="Progreso de la canción"
            aria-valuenow={progress * 100}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="absolute top-0 left-0 h-full bg-silver/60 rounded-full transition-all duration-150 ease-linear"
              style={{ width: `${progress * 100}%` }}
            />
            <div
              className="absolute top-1/2 left-0 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-silver -translate-y-1/2 rounded-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"
              style={{ left: `${progress * 100}%` }}
            />
          </div>
          <span className="body-tiny text-text-muted w-8 sm:w-9 tabular-nums">
            {formatTime(duration)}
          </span>
        </div>

        <div className="sm:hidden flex flex-col items-end gap-1">
          <span className="body-tiny text-text-muted tabular-nums text-[10px]">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
          <div
            className="w-12 sm:w-16 h-1 bg-white/10 rounded-full cursor-pointer touch-manipulation"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-silver/60 rounded-full transition-all duration-150 ease-linear"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;