import React from "react";

import type { Task } from "../domain/entities";
import { getTasks } from "../controller";

import TaskList from "./TaskList";
import AddTaskButton from "./AddTaskButton";

import "./TaskView.css";

export default function TaskView() {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  React.useEffect(() => {
    getTasks()
      .then(data => setTasks(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="task-view">
      <TaskList data={tasks} setTasks={setTasks} />
      <AddTaskButton setTasks={setTasks} />
    </div>
  );
}
