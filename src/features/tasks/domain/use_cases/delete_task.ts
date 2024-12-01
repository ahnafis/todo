import type { UniqueId } from "@/types";
import { Command, DataSource } from "@/utils/interfaces";
import type { Task } from "../entities";

export default class DeleteTask implements Command<UniqueId, Promise<void>> {
  constructor(private source: DataSource<Task>) {}
  public execute = this.source.delete;
}
