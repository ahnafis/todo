import type { ITaskRepository } from "../../domain/repositories";
import type { ITaskDataSource } from "../sources";

export default class TaskRepository implements ITaskRepository {
  constructor(private data_source: ITaskDataSource) {}

  public addTask = this.data_source.insert;
  public getTasks = this.data_source.read;
  public updateTask = this.data_source.update;
  public deleteTask = this.data_source.delete;
}
