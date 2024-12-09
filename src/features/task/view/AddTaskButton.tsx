import React from "react";

import { createTask } from "../data/models";
import type { Task } from "../domain/entities";
import { addTask, getTasks } from "../controller";

type AddTaskButtonProps = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function AddTaskButton({ setTasks }: AddTaskButtonProps) {
  function handleClick() {
    // TODO: create a modal or drawer for input.
    const title = prompt("Enter a title for the task") || "";

    const task = createTask({ title });
    setTasks(savedTasks => [...savedTasks, task]);

    // TODO: Refactor this part.
    addTask(task).catch(error => {
      console.log(error);
      getTasks().then(storedTasks => setTasks(storedTasks));
    });
  }

  return <button onClick={handleClick}>Add</button>;
}
