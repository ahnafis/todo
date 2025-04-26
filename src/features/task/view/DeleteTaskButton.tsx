import React from "react";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { Task } from "../domain/entities";
import type { UniqueId } from "@/types";

import { deleteTask, getTasks } from "../controller";

import "./DeleteTaskButton.css";

type DeleteTaskButtonProps = {
  selected_tasks: UniqueId[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function DeleteTaskButton({
  selected_tasks,
  setTasks,
}: DeleteTaskButtonProps) {
  function handleClick() {
    setTasks(savedTasks =>
      savedTasks.filter(task => !selected_tasks.includes(task.id)),
    );

    selected_tasks.forEach(task_id => {
      deleteTask(task_id).catch(error => {
        console.log(error);
        getTasks().then(storedTasks => setTasks(storedTasks));
      });
    });
  }

  return (
    <button className="delete-button" onClick={handleClick}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}
