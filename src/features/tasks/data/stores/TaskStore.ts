import type { ITaskStore } from "../../domain/stores";
import type { ITaskDataProvider } from "../providers";

export default class TaskStore implements ITaskStore {
  constructor(private provider: ITaskDataProvider) {}

  public addTask = this.provider.insert;
  public getTasks = this.provider.read;
  public updateTask = this.provider.update;
  public deleteTask = this.provider.delete;
}
