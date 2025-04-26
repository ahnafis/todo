import type { Task } from "../domain/entities";
import DeleteTaskButton from "./DeleteTaskButton";

type TaskListItemProps = {
  data: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function TaskListItem({
  data: task,
  setTasks,
}: TaskListItemProps) {
  return (
    <li className="task-list-item">
      <span className="task-title">{task.title}</span>
      <span className="task-delete-container">
        <DeleteTaskButton selected_tasks={[task.id]} setTasks={setTasks} />
      </span>
    </li>
  );
}
