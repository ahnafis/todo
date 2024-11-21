import { Command } from "@/utils/interfaces";

import type { Task } from "../entities";
import type { ITaskRepository } from "../repositories";

export default class UpdateTask implements Command<Task, void> {
  constructor(private repository: ITaskRepository) {}

  execute(new_data: Task): void {
    this.repository.updateTask(new_data);
  }
}
