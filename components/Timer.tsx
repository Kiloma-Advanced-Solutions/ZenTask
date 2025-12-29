'use client';

import { useEffect, useState } from 'react';

interface TimerProps {
  running: boolean;
}

export default function Timer({ running }: TimerProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  return <div></div>;
} 