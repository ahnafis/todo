import type { UniqueId } from "@/types";
import { Command } from "@/utils/interfaces";

import type { ITaskRepository } from "../repositories";

export default class DeleteTask implements Command<UniqueId, void> {
  constructor(private repository: ITaskRepository) {}

  execute(id: UniqueId): void {
    this.repository.deleteTask(id);
  }
}
