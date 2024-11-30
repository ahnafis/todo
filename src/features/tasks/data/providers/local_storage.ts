import type { UniqueId } from "@/types";
import type { Task } from "../../domain/entities";
import ITaskDataProvider from "./ITaskDataProvider";
import { LocalStorageClient } from "@/utils";

export default class TaskLocalDataProvider implements ITaskDataProvider {
  private db;

  constructor(collection: string) {
    this.db = new LocalStorageClient<Task>(collection);
  }

  public insert = async (data: Task): Promise<void> => {
    await this.db.insert(data);
  };

  public read = async (filters?: Partial<Task>): Promise<Task[]> => {
    return await this.db.read(filters);
  };

  public update = async (new_data: Task): Promise<void> => {
    await this.db.update(new_data);
  };

  public delete = async (id: UniqueId): Promise<void> => {
    await this.db.delete(id);
  };
}
