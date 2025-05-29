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

  // TODO: Candidate should replace console.log with visible mm:ss display
  return null;
} 