import type { UniqueId } from "@/types";
import type { Task } from "../../domain/entities";
import ITaskDataSource from "./ITaskDataSource";

export default class TaskLocalDataSource implements ITaskDataSource {
  private db: Task[];

  constructor(private collection: string) {
    const raw_data: string = localStorage.getItem(this.collection) || "[]";
    this.db = JSON.parse(raw_data) || [];
  }

  public insert = async (data: Task): Promise<void> => {
    if (await this.exists(data.id)) {
      // TODO: Throw and handle an error instead.
      return console.log("Cannot add same item agian.");
    }

    this.db.push(data);
    await this.save();
  };

  public read = async (filters?: Partial<Task>): Promise<Task[]> => {
    if (!filters) return this.db;

    return this.db.filter((task) => {
      let key: keyof Partial<Task>;

      // Return if filters matches with any data in the database.
      for (key in filters) return task[key] === filters[key];
    });
  };

  public update = async (new_data: Task): Promise<void> => {
    const index = this.db.indexOf(new_data);
    const exists = index > -1;

    // TODO: Throw and handle an error instead.
    if (!exists) return console.log("Not matches found. Nothing to update.");

    this.db[index] = new_data;
    await this.save();
  };

  public delete = async (id: UniqueId): Promise<void> => {
    const matches = await this.read({ id });
    const index = this.db.indexOf(matches[0]);

    this.db.splice(index, 1);
    await this.save();
  };

  private exists = async (id: UniqueId): Promise<boolean> => {
    const matches = await this.read({ id });
    return matches.length > 0;
  };

  private save = async (): Promise<void> => {
    localStorage.setItem(this.collection, JSON.stringify(this.db));
  };
}
