import React from "react";

import { createTask } from "../data/models";
import type { Task } from "../domain/entities";
import { addTask } from "../controller";

type AddTaskButtonProps = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function AddTaskButton({ setTasks }: AddTaskButtonProps) {
  function onClick() {
    // TODO: create a modal or drawer for input.
    const title = prompt("Enter a title for the task") || "";
    const task = createTask({ title });

    addTask(task)
      .then(() => {
        setTasks(savedTasks => {
          //   console.log(savedTasks);
          console.trace();
          new Error("Stop");
          return [...savedTasks, task];
        });
      })
      .catch(error => console.log(error));
  }

  return (
    <div>
      <button onClick={onClick}>Add</button>
    </div>
  );
}
