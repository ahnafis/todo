import { Command } from "@/utils/interfaces";

import type { Task } from "../entities";
import type { ITaskRepository } from "../repositories";

export default class AddTask implements Command<Task, void> {
  constructor(private repository: ITaskRepository) {}

  execute(data: Task): void {
    this.repository.addTask(data);
  }
}
