import ITaskDataSource from "./ITaskDataSource";
import TaskLocalDataSource from "./local_storage";

// @ts-expect-error Don't mark interfaces as types
export { ITaskDataSource, TaskLocalDataSource };
