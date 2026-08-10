import React, { createContext, useContext, useEffect, useState } from 'react';

const ReducedMotionContext = createContext<boolean>(false);

export const useReducedMotion = () => useContext(ReducedMotionContext);

export const ReducedMotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Inicializar el estado con una función para evitar la llamada a setState dentro del efecto
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  return (
    <ReducedMotionContext.Provider value={prefersReduced}>
      {children}
    </ReducedMotionContext.Provider>
  );
};