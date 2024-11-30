import { Command } from "@/utils/interfaces";

import type { Task } from "../entities";
import type { ITaskStore } from "../stores";

export default class GetTasks
  implements Command<Partial<Task>, Promise<Task[]>>
{
  constructor(private store: ITaskStore) {}
  public execute = this.store.get;
}
