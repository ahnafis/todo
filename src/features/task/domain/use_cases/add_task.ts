import { Command, Repository } from "@/utils/interfaces";
import type { Task } from "../entities";

export default class AddTask implements Command<Task, Promise<void>> {
  constructor(private repository: Repository<Task>) {}
  public execute = this.repository.add;
}
