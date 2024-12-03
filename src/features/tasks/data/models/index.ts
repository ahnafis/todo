import { createUid } from "@/utils";

import type { Task } from "../../domain/entities";
import { TaskStatus } from "../../domain/subtypes";

export function createTask(data: Partial<Task>): Task {
  const current_time = Date.now();
  const one_day = 1000 * 60 * 60 * 24; // In milliseconds

  const DEFAULT_TITLE = "Untitled";
  const DEFAULT_DUE_DATE = current_time + one_day;
  const DEFAULT_TASK_PRIORITY = 1;

  return {
    id: data.id || createUid(),
    creation_date: data.creation_date || current_time,

    title: data.title || DEFAULT_TITLE,
    description: data.description || "",

    due_date: data.due_date || DEFAULT_DUE_DATE,
    status: data.status || TaskStatus.TODO,
    priority: data.priority || DEFAULT_TASK_PRIORITY,
    categories: data.categories || [],
  };
}
