import type { ITaskStore } from "../../domain/stores";
import type { ITaskDataProvider } from "../providers";

export default class TaskStore implements ITaskStore {
  constructor(private provider: ITaskDataProvider) {}

  public add = this.provider.insert;
  public get = this.provider.read;
  public update = this.provider.update;
  public delete = this.provider.delete;
}
