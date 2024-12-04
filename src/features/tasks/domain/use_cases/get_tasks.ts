import { Command, Repository } from "@/utils/interfaces";
import type { Task } from "../entities";

export default class GetTasks
  implements Command<Partial<Task>, Promise<Task[]>>
{
  constructor(private repository: Repository<Task>) {}
  public execute = this.repository.get;
}
