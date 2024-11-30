import type { UniqueId } from "@/types";
import type { Task } from "../entities";

export default interface ITaskStore {
  add(task: Task): Promise<void>;
  get(filters?: Partial<Task>): Promise<Task[]>;
  update(new_task: Task): Promise<void>;
  delete(id: UniqueId): Promise<void>;
}
