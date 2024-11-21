import { Command } from "@/utils/interfaces";

import type { Task } from "../entities";
import type { ITaskRepository } from "../repositories";

export default class GetTasks implements Command<Partial<Task>, Task[]> {
  constructor(private repository: ITaskRepository) {}

  execute(filter?: Partial<Task>): Task[] {
    return this.repository.getTasks(filter);
  }
}