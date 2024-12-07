import { TASK_COLLECTION } from "../constants";
import { LocalTaskRepository } from "../data/repositories";
import { AddTask, GetTasks } from "../domain/use_cases";

const repository = new LocalTaskRepository(TASK_COLLECTION);

const addTask = new AddTask(repository).execute;
const getTasks = new GetTasks(repository).execute;

export { addTask, getTasks };
