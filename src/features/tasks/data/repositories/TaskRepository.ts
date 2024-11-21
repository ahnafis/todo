import type { UniqueId } from "@/types";
import type { Task } from "../../domain/entities";
import { ITaskRepository } from "../../domain/repositories";
import { ITaskDataProvider } from "../providers";

export default class TaskRepository implements ITaskRepository {
  constructor(private provider: ITaskDataProvider) {}

  addTask(data: Task): void {
    this.provider.create(data);
  }

  getTasks(filters?: Partial<Task>): Task[] {
    return this.provider.read(filters);
  }

  updateTask(new_data: Task): void {
    this.provider.update(new_data);
  }

  deleteTask(id: UniqueId): void {
    this.provider.delete(id);
  }
}
