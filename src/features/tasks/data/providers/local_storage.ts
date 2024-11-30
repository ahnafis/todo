import type { UniqueId } from "@/types";
import type { Task } from "../../domain/entities";
import ITaskDataProvider from "./ITaskDataProvider";
import { LocalStorageClient } from "@/utils";

export default class TaskLocalDataProvider implements ITaskDataProvider {
  private db;

  constructor(collection: string) {
    this.db = new LocalStorageClient<Task>(collection);
  }

  public insert = async (task: Task): Promise<void> => {
    await this.db.insert(task);
  };

  public read = async (filters?: Partial<Task>): Promise<Task[]> => {
    return await this.db.read(filters);
  };

  public update = async (new_task: Task): Promise<void> => {
    await this.db.update(new_task);
  };

  public delete = async (id: UniqueId): Promise<void> => {
    await this.db.delete(id);
  };
}
