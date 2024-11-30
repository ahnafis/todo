import type { UniqueId } from "@/types";
import type { Task } from "../entities";

export default interface ITaskRepository {
  addTask(data: Task): Promise<void>;
  getTasks(filters?: Partial<Task>): Promise<Task[]>;
  updateTask(new_data: Task): Promise<void>;
  deleteTask(id: UniqueId): Promise<void>;
}
