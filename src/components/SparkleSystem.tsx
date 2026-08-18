import React, { useMemo } from 'react';
import Sparkle from './Sparkle';
import Reflection from './Reflection';

const seededValue = (index: number, salt: number) => {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
};

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
    return Array.from({ length: count }, (_, index) => ({
      x: 10 + seededValue(index, 1) * 80,
      y: 10 + seededValue(index, 2) * 80,
      size: 1 + seededValue(index, 3) * 2,
      opacity: 0.2 + seededValue(index, 4) * 0.2,
      duration: 3 + seededValue(index, 5) * 3,
      delay: seededValue(index, 6) * 2,
    }));
  }, [count]);

  const reflectionItems = useMemo(() => {
    return Array.from({ length: reflections }, (_, index) => ({
      x: 10 + seededValue(index, 7) * 80,
      y: 10 + seededValue(index, 8) * 80,
      size: 20 + seededValue(index, 9) * 30,
      opacity: 0.02 + seededValue(index, 10) * 0.02,
      duration: 8 + seededValue(index, 11) * 4,
      delay: seededValue(index, 12) * 2,
      blur: 15 + seededValue(index, 13) * 15,
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
          className="will-change-transform will-change-opacity"
          style={{ top: `${s.y}%`, left: `${s.x}%` }}
          size={s.size}
          opacity={s.opacity}
          duration={s.duration}
          delay={s.delay}
        />
      ))}
      {reflectionItems.map((r, i) => (
        <Reflection
          key={`reflection-${i}`}
          className="-translate-x-1/2 -translate-y-1/2 will-change-transform will-change-opacity"
          style={{ top: `${r.y}%`, left: `${r.x}%` }}
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
