import type { UniqueId } from "@/types";
import type { Task } from "../entities";

export default interface ITaskStore {
  add(data: Task): Promise<void>;
  get(filters?: Partial<Task>): Promise<Task[]>;
  update(new_data: Task): Promise<void>;
  delete(id: UniqueId): Promise<void>;
}
