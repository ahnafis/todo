import React from "react";

import { getTasks } from "../controller";
import type { Task } from "../domain/entities";

import TaskList from "./TaskList";

export default function TaskView() {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  React.useEffect(() => {
    getTasks()
      .then(data => setTasks(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <TaskList data={tasks} />
    </div>
  );
}
