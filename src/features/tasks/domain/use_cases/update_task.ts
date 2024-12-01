import { Command, DataSource } from "@/utils/interfaces";
import type { Task } from "../entities";

export default class UpdateTask implements Command<Task, Promise<void>> {
  constructor(private source: DataSource<Task>) {}
  public execute = this.source.update;
}
