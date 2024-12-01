import { Command, DataSource } from "@/utils/interfaces";
import type { Task } from "../entities";

export default class GetTasks
  implements Command<Partial<Task>, Promise<Task[]>>
{
  constructor(private source: DataSource<Task>) {}
  public execute = this.source.get;
}
