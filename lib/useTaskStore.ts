import { create } from 'zustand';

export interface Task {
  id: number;
  title: string;
  allocatedMinutes: number;
}

interface TaskStore {
  tasks: Task[];
  runningIds: number[];
  toggleTimer: (id: number) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [
    { id: 1, title: 'Blog post', allocatedMinutes: 25 },
    { id: 2, title: 'Code review', allocatedMinutes: 15 },
    { id: 3, title: 'Quick email', allocatedMinutes: 5 }
  ],
  runningIds: [],
  toggleTimer: (id: number) =>
    set((state) => ({
      runningIds: state.runningIds.includes(id)
        ? state.runningIds.filter((runningId) => runningId !== id)
        : [...state.runningIds, id]
    }))
})); 