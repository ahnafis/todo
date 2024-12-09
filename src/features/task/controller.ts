import { TASK_COLLECTION } from "./constants";
import { LocalTaskRepository } from "./data/repositories";
import { AddTask, DeleteTask, GetTasks, UpdateTask } from "./domain/use_cases";

const repository = new LocalTaskRepository(TASK_COLLECTION);

const addTask = new AddTask(repository).execute;
const getTasks = new GetTasks(repository).execute;
const updateTask = new UpdateTask(repository).execute;
const deleteTask = new DeleteTask(repository).execute;

export { addTask, deleteTask, getTasks, updateTask };
