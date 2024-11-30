import type { UniqueId } from "@/types";
import type { Task } from "../../domain/entities";

export default interface ITaskDataSource {
  insert(data: Task): Promise<void>;
  read(filters?: Partial<Task>): Promise<Task[]>;
  update(new_data: Task): Promise<void>;
  delete(id: UniqueId): Promise<void>;
}
