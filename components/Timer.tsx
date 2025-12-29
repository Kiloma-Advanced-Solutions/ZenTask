'use client';

import { useEffect, useState } from 'react';

interface TimerProps {
  running: boolean;
}

export default function Timer({ running }: TimerProps) {
  const formatMMSS = (totalSeconds: number) => {
    const mm = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const ss = String(totalSeconds % 60).padStart(2, '0');
    return `${mm}:${ss}`;
  };

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!running) return;

    const id = window.setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => {
      window.clearInterval(id);
      setSeconds(0);
    };
  }, [running]);

  return <div>{formatMMSS(seconds)}</div>;
} 