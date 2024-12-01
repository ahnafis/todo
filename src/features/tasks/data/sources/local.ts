import type { UniqueId } from "@/types";
import { InMemoryDB } from "@/utils";
import { DataSource } from "@/utils/interfaces";
import type { Task } from "../../domain/entities";

export default class TaskLocalDataSource implements DataSource<Task> {
  private db: InMemoryDB<Task>;

  constructor(private collection: string) {
    const raw_data: string = localStorage.getItem(this.collection) || "[]";
    const data = JSON.parse(raw_data) || [];

    this.db = new InMemoryDB<Task>(data);
  }

  public add = async (data: Task): Promise<void> => {
    await this.db.insert(data);
    await this.save();
  };

  public get = async (filters?: Partial<Task>): Promise<Task[]> => {
    return await this.db.read(filters);
  };

  public update = async (new_data: Task): Promise<void> => {
    await this.db.update(new_data);
    await this.save();
  };

  public delete = async (id: UniqueId): Promise<void> => {
    await this.db.delete(id);
    await this.save();
  };

  private save = async (): Promise<void> => {
    localStorage.setItem(this.collection, JSON.stringify(this.db));
  };
}
