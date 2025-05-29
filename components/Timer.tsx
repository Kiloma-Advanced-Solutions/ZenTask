'use client';

import { useEffect, useState } from 'react';

interface TimerProps {
  running: boolean;
}

export default function Timer({ running }: TimerProps) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!running) return;
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const id = setInterval(() => {
      setSeconds(s => {
        const newSeconds = s + 1;
        console.log(newSeconds);
        return newSeconds;
      });
    }, 1000);
    
    // ❌ BUG: missing `return () => clearInterval(id);`
  }, [running]);

  useEffect(() => {
    if (!running) {
      setSeconds(0);
    }
  }, [running]);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <span className={running ? 'timer-running' : 'timer-stopped'}>
      {formatTime(seconds)}
    </span>
  );
} 