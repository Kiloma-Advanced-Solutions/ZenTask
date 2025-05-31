'use client';

import { useState } from 'react';
import { Task } from '@/lib/TaskContext';
import TaskRow from '@/components/TaskRow';
import styles from './page.module.css';

export default function Home() {
  const [tasks] = useState<Task[]>([
    { id: 1, title: 'Blog post', allocatedMinutes: 1 },
    { id: 2, title: 'Code review', allocatedMinutes: 15 },
    { id: 3, title: 'Quick email', allocatedMinutes: 5 }
  ]);

  const [runningIds, setRunningIds] = useState<number[]>([]);

  const toggleTimer = (id: number) => {
    setRunningIds(prev => 
      prev.includes(id)
        ? prev.filter(runningId => runningId !== id)
        : [...prev, id]
    );
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Zen Task</h1>
          <p className={styles.subtitle}>Focus on one task at a time</p>
        </header>

        <div className={styles.taskList}>
          {tasks.map((task) => (
            <TaskRow 
              key={task.id} 
              task={task} 
              isRunning={runningIds.includes(task.id)}
              onToggleTimer={() => toggleTimer(task.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
