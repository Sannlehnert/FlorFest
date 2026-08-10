import React, { useMemo } from 'react';
import Sparkle from './Sparkle';
import Reflection from './Reflection';

interface SparkleSystemProps {
  className?: string;
  count?: number;
  reflections?: number;
}

const SparkleSystem: React.FC<SparkleSystemProps> = ({
  className = '',
  count = 3,
  reflections = 1,
}) => {
  const sparkles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      size: 1 + Math.random() * 2,
      opacity: 0.2 + Math.random() * 0.2,
      duration: 3 + Math.random() * 3,
      delay: Math.random() * 2,
    }));
  }, [count]);

  const reflectionItems = useMemo(() => {
    return Array.from({ length: reflections }, () => ({
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      size: 20 + Math.random() * 30,
      opacity: 0.02 + Math.random() * 0.02,
      duration: 8 + Math.random() * 4,
      delay: Math.random() * 2,
      blur: 15 + Math.random() * 15,
    }));
  }, [reflections]);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
      role="presentation"
    >
      {sparkles.map((s, i) => (
        <Sparkle
          key={`sparkle-${i}`}
          className={`top-[${s.y}%] left-[${s.x}%] will-change-transform will-change-opacity`}
          size={s.size}
          opacity={s.opacity}
          duration={s.duration}
          delay={s.delay}
        />
      ))}
      {reflectionItems.map((r, i) => (
        <Reflection
          key={`reflection-${i}`}
          className={`top-[${r.y}%] left-[${r.x}%] -translate-x-1/2 -translate-y-1/2 will-change-transform will-change-opacity`}
          size={r.size}
          opacity={r.opacity}
          duration={r.duration}
          delay={r.delay}
          blur={r.blur}
        />
      ))}
    </div>
  );
};

export default SparkleSystem;