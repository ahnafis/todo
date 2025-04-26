import React from "react";

import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { addTask, getTasks } from "../controller";
import { createTask } from "../data/models";
import type { Task } from "../domain/entities";

import "./AddTaskButton.css";

type AddTaskButtonProps = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function AddTaskButton({ setTasks }: AddTaskButtonProps) {
  function handleClick() {
    // TODO: create a modal or drawer for input.
    const title = prompt("Enter a title for the task");
    if (title === null) {
      return;
    }

    const task = createTask({ title: title || "" });
    setTasks(savedTasks => [...savedTasks, task]);

    // TODO: Refactor this part.
    addTask(task).catch(error => {
      console.log(error);
      getTasks().then(storedTasks => setTasks(storedTasks));
    });
  }

  return (
    <button className="add-button" onClick={handleClick}>
      <FontAwesomeIcon icon={faAdd} />
    </button>
  );
}
