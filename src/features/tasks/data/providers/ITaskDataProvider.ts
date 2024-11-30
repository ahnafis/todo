import type { UniqueId } from "@/types";
import type { Task } from "../../domain/entities";

export default interface ITaskDataProvider {
  insert(task: Task): Promise<void>;
  read(filters?: Partial<Task>): Promise<Task[]>;
  update(new_task: Task): Promise<void>;
  delete(id: UniqueId): Promise<void>;
}
