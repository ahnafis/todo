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

  public insert = async (data: Task): Promise<void> => {
    this.db.push(data);
    this.save();
  };

  public read = async (filters?: Partial<Task>): Promise<Task[]> => {
    if (!filters) return this.db;

    return this.db.filter((task) => {
      let key: keyof Partial<Task>;
      for (key in filters) return task[key] === filters[key];
    });
  };

  public update = async (new_data: Task): Promise<void> => {
    const index = this.db.indexOf(new_data);

    if (index > 0) {
      this.db[index] = new_data;
    }

    this.save();
  };

  public delete = async (id: UniqueId): Promise<void> => {
    this.db.forEach((task, index) => {
      if (task.id == id) {
        this.db.splice(index, 1);
      }
    });

    this.save();
  };

  private save = async (): Promise<void> => {
    localStorage.setItem(this.collection, JSON.stringify(this.db));
  };
}
