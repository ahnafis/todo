import type { UniqueId } from "@/types";
import { Command } from "@/utils/interfaces";

import type { ITaskRepository } from "../repositories";

export default class DeleteTask implements Command<UniqueId, Promise<void>> {
  constructor(private repository: ITaskRepository) {}
  public execute = this.repository.deleteTask;
}
