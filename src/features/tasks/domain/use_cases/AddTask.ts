import { Command } from "@/utils/interfaces";

import type { Task } from "../entities";
import type { ITaskStore } from "../stores";

export default class AddTask implements Command<Task, Promise<void>> {
  constructor(private store: ITaskStore) {}
  public execute = this.store.add;
}
