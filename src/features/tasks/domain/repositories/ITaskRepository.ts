import type { UniqueId } from "@/types";
import type { Task } from "../entities";

export default interface ITaskRepository {
  addTask(data: Task): void;
  getTasks(filters?: Partial<Task>): Task[];
  updateTask(new_data: Task): void;
  deleteTask(id: UniqueId): void;
}
