import type { UniqueId } from "@/types";
import { Command } from "@/utils/interfaces";

import type { ITaskStore } from "../stores";

export default class DeleteTask implements Command<UniqueId, Promise<void>> {
  constructor(private store: ITaskStore) {}
  public execute = this.store.deleteTask;
}
