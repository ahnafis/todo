import { Command } from "@/utils/interfaces";

import type { Task } from "../entities";
import type { ITaskRepository } from "../repositories";

export default class GetTasks
  implements Command<Partial<Task>, Promise<Task[]>>
{
  constructor(private repository: ITaskRepository) {}
  public execute = this.repository.getTasks;
}
