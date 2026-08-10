import React, { useState } from 'react';

interface PolaroidProps {
  src: string;
  alt: string;
  rotation?: number;
  scale?: number;
  offsetX?: number;
  offsetY?: number;
  className?: string;
  index?: number;
  shadowIntensity?: 'light' | 'medium' | 'strong';
  onLoad?: () => void;
  priority?: boolean;
}

const polaroidVariants = {
  rotations: [-3, -2, 0, 2, 3, -1, 1, 4],
  offsetsX: [-4, 0, 4, -3, 3, -5, 5, -2, 2],
  offsetsY: [-8, -4, 0, 4, 8, -6, 6, -2, 2],
  scales: [0.95, 1, 1.02, 0.98, 1.04],
};

const Polaroid: React.FC<PolaroidProps> = ({
  src,
  alt,
  rotation,
  scale,
  offsetX,
  offsetY,
  className = '',
  index = 0,
  shadowIntensity = 'medium',
  onLoad,
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const finalRotation =
    rotation !== undefined
      ? rotation
      : polaroidVariants.rotations[index % polaroidVariants.rotations.length];

  const finalScale = scale !== undefined ? scale : 1;

  const finalOffsetX =
    offsetX !== undefined
      ? offsetX
      : polaroidVariants.offsetsX[index % polaroidVariants.offsetsX.length];

  const finalOffsetY =
    offsetY !== undefined
      ? offsetY
      : polaroidVariants.offsetsY[index % polaroidVariants.offsetsY.length];

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <div
      className={`relative ${className}`}
      style={{
        transform: `translate(${finalOffsetX}px, ${finalOffsetY}px) scale(${finalScale})`,
      }}
    >
      <div
        className="relative bg-white p-1.5 rounded-sm"
        style={{
          boxShadow:
            shadowIntensity === 'strong'
              ? '0 8px 32px rgba(0,0,0,0.6)'
              : shadowIntensity === 'medium'
                ? '0 4px 20px rgba(0,0,0,0.45)'
                : '0 2px 12px rgba(0,0,0,0.35)',
          transform: `rotate(${finalRotation}deg)`,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <div className="relative aspect-3/4 overflow-hidden bg-background-card">
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'low'}
            onLoad={handleLoad}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (!src.includes('placeholder-fallback')) {
                target.src = '/images/placeholder-fallback.jpg';
              } else {
                target.src = '/images/placeholder-fallback.jpg';
              }
            }}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-background-card animate-pulse" />
          )}
          <div className="absolute inset-0 pointer-events-none border border-white/10" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none rounded-sm"
          style={{
            boxShadow: 'inset 0 0 30px rgba(0,0,0,0.08)',
            transform: `rotate(${finalRotation}deg)`,
          }}
        />
      </div>
    </div>
  );
};

export default Polaroid;