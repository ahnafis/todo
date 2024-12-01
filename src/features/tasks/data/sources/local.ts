import type { UniqueId } from "@/types";
import type { Task } from "../../domain/entities";
import { LocalStorageClient } from "@/utils";
import { DataSource } from "@/utils/interfaces";

export default class TaskLocalDataSource implements DataSource<Task> {
  private db;

  constructor(collection: string) {
    this.db = new LocalStorageClient<Task>(collection);
  }

  public add = async (data: Task): Promise<void> => {
    await this.db.add(data);
  };

  public get = async (filters?: Partial<Task>): Promise<Task[]> => {
    return await this.db.get(filters);
  };

  public update = async (new_data: Task): Promise<void> => {
    await this.db.update(new_data);
  };

  public delete = async (id: UniqueId): Promise<void> => {
    await this.db.delete(id);
  };
}
