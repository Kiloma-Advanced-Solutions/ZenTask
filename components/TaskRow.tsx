'use client';

import { Task, useTaskStore } from '@/lib/useTaskStore';
import Timer from './Timer';
import styles from './TaskRow.module.css';

interface TaskRowProps {
  task: Task;
}

export default function TaskRow({ task }: TaskRowProps) {
  const { runningIds, toggleTimer } = useTaskStore();
  const isRunning = runningIds.includes(task.id);

  return (
    <div className={styles.taskRow}>
      <div className={styles.taskInfo}>
        <h3 className={styles.taskTitle}>{task.title}</h3>
        <p className={styles.allocatedTime}>{task.allocatedMinutes} minutes allocated</p>
      </div>
      
      <div className={styles.buttonSection}>
        <Timer running={isRunning} />
        <button 
          className={`${styles.toggleButton} ${isRunning ? styles.stopButton : styles.startButton}`}
          onClick={() => toggleTimer(task.id)}
          aria-label={isRunning ? `Stop timer for ${task.title}` : `Start timer for ${task.title}`}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  );
} 