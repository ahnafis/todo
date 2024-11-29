import type { UniqueId } from "@/types";
import type { Task } from "../../domain/entities";
import ITaskDataSource from "./ITaskDataSource";

export default class TaskLocalDataSource implements ITaskDataSource {
  private db: Task[];

  constructor(private collection: string) {
    this.collection = collection;

    const raw_data: string = localStorage.getItem(this.collection) || "[]";
    this.db = JSON.parse(raw_data) || [];
  }

  public insert = (data: Task): void => {
    this.db.push(data);
    this.save();
  };

  public read = (filters?: Partial<Task>): Task[] => {
    if (!filters) return this.db;

    return this.db.filter((task) => {
      let key: keyof Partial<Task>;
      for (key in filters) return task[key] === filters[key];
    });
  };

  public update = (new_data: Task): void => {
    const index = this.db.indexOf(new_data);

    if (index > 0) {
      this.db[index] = new_data;
    }

    this.save();
  };

  public delete = (id: UniqueId): void => {
    this.db.forEach((task, index) => {
      if (task.id == id) {
        this.db.splice(index, 1);
      }
    });

    this.save();
  };

  private save = (): void => {
    localStorage.setItem(this.collection, JSON.stringify(this.db));
  };
}
