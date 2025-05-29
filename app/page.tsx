'use client';

import { useTaskStore } from '@/lib/useTaskStore';
import TaskRow from '@/components/TaskRow';
import styles from './page.module.css';

export default function Home() {
  const { tasks } = useTaskStore();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Zen Task</h1>
          <p className={styles.subtitle}>Focus on one task at a time</p>
        </header>

        <div className={styles.taskList}>
          {tasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </div>
      </div>
    </main>
  );
}
