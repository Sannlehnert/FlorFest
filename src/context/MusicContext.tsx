import React, { createContext, useContext, useRef, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { invitation } from '../data/invitation';

interface MusicContextType {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  progress: number;
  title: string;
  artist: string;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  seekTo: (time: number) => void;
  isReady: boolean;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) throw new Error('useMusic must be used within MusicProvider');
  return context;
};

interface MusicProviderProps {
  children: ReactNode;
}

export const MusicProvider: React.FC<MusicProviderProps> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [title] = useState(invitation.music.title);
  const [artist] = useState(invitation.music.artist);

  useEffect(() => {
    const audio = new Audio(invitation.music.src);
    audio.loop = true;
    audio.volume = 0.7;
    audio.preload = 'metadata'; // ✅ SOLO METADATOS, NO CARGA COMPLETA
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsReady(true);
    };
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.currentTime / audio.duration);
    };
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = (e: Event) => {
      console.error('Error loading audio:', e);
      setIsReady(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.warn('Play error:', err));
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const seekTo = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(time, duration);
    }
  };

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        currentTime,
        duration,
        progress,
        title,
        artist,
        play,
        pause,
        togglePlay,
        seekTo,
        isReady,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};