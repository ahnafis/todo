import type { UniqueId } from "@/types";
import type { Task } from "../../domain/entities";

export default interface ITaskDataSource {
  insert(data: Task): void;
  read(filters?: Partial<Task>): Task[];
  update(new_data: Task): void;
  delete(id: UniqueId): void;
}
