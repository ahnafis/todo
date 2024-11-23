import { ITaskDataProvider } from "@/features/tasks/data/providers";
import type { Task } from "@/features/tasks/domain/entities";
import type { UniqueId } from "@/types";

export class MockTaskDataProvider implements ITaskDataProvider {
  private db: Task[];

  constructor() {
    this.db = [];
  }

  create(data: Task): void {
    this.db.push(data);
  }

  read(filters?: Partial<Task>): Task[] {
    if (!filters) return this.db;

    return this.db.filter((task) => {
      let key: keyof Partial<Task>;
      for (key in filters) return task[key] === filters[key];
    });
  }

  update(new_data: Task): void {
    const index = this.db.indexOf(new_data);

    if (index > 0) {
      this.db[index] = new_data;
    }
  }

  delete(id: UniqueId): void {
    this.db.forEach((task, index) => {
      if (task.id == id) {
        this.db.splice(index, 1);
      }
    });
  }
}
