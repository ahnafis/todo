import { TASK_COLLECTION } from "./constants";
import { LocalTaskRepository } from "./data/repositories";

const repository = new LocalTaskRepository(TASK_COLLECTION);

const addTask = repository.add;
const getTasks = repository.get;
const updateTask = repository.update;
const deleteTask = repository.delete;

export { addTask, deleteTask, getTasks, updateTask };
