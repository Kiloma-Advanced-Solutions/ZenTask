'use server';

import { Task } from "./TaskContext";

export async function fetchTasks(): Promise<Task[]> {
    throw new Error('Not implemented');
}