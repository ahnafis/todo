import { createUid } from "@/utils";

import type { Task } from "../../domain/entities";
import { TaskStatus } from "../../domain/subtypes";

export default class TaskModel {
  readonly data: Task;

  constructor(data: Partial<Task>) {
    const DEFAULT_TASK_PRIORITY = 1;

    this.data = {
      id: data.id || createUid(),

      title: data.title || "",
      description: data.description || "",

      // TODO : Use datetime
      creation_date: data.creation_date || 0,
      due_date: data.due_date || 0,

      status: data.status || TaskStatus.TODO,
      priority: data.priority || DEFAULT_TASK_PRIORITY,
      categories: data.categories || [],
    };
  }
}
