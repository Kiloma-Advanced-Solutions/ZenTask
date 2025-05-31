'use client';

import { Task } from '@/lib/TaskContext';
import Timer from './Timer';
import styles from './TaskRow.module.css';

interface TaskRowProps {
  task: Task;
  isRunning: boolean;
  onToggleTimer: () => void;
}

export default function TaskRow({ task, isRunning, onToggleTimer }: TaskRowProps) {
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
          onClick={onToggleTimer}
          aria-label={isRunning ? `Stop timer for ${task.title}` : `Start timer for ${task.title}`}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  );
} 