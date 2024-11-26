import type { UniqueId } from "@/types";
import type { Task } from "../../domain/entities";

import { ITaskRepository } from "../../domain/repositories";
import { ITaskDataSource } from "../sources";

export default class TaskRepository implements ITaskRepository {
  constructor(private data_source: ITaskDataSource) {}

  addTask(data: Task): void {
    this.data_source.insert(data);
  }

  getTasks(filters?: Partial<Task>): Task[] {
    return this.data_source.read(filters);
  }

  updateTask(new_data: Task): void {
    this.data_source.update(new_data);
  }

  deleteTask(id: UniqueId): void {
    this.data_source.delete(id);
  }
}
