import { useSyncExternalStore } from 'react';
import { invitation } from './invitation';

export interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const MONTHS: Record<string, number> = {
  enero: 0,
  febrero: 1,
  marzo: 2,
  abril: 3,
  mayo: 4,
  junio: 5,
  julio: 6,
  agosto: 7,
  septiembre: 8,
  octubre: 9,
  noviembre: 10,
  diciembre: 11,
};

const targetDate = new Date(
  invitation.year,
  MONTHS[invitation.month.toLowerCase()] ?? 0,
  invitation.day,
  20,
  30,
  0
).getTime();

const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | null = null;

const calculateCountdown = (): CountdownValue => {
  const distance = Math.max(0, targetDate - Date.now());

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
};

let snapshot = calculateCountdown();

const subscribe = (listener: () => void) => {
  listeners.add(listener);

  if (!timer) {
    timer = setInterval(() => {
      snapshot = calculateCountdown();
      listeners.forEach((currentListener) => currentListener());

      if (targetDate <= Date.now() && timer) {
        clearInterval(timer);
        timer = null;
      }
    }, 1000);
  }

  return () => {
    listeners.delete(listener);

    if (listeners.size === 0 && timer) {
      clearInterval(timer);
      timer = null;
    }
  };
};

const getSnapshot = () => snapshot;

export const useCountdown = () =>
  useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
