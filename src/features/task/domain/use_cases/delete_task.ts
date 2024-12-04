import type { UniqueId } from "@/types";
import { Command, Repository } from "@/utils/interfaces";
import type { Task } from "../entities";

export default class DeleteTask implements Command<UniqueId, Promise<void>> {
  constructor(private repository: Repository<Task>) {}
  public execute = this.repository.delete;
}
