import type { Task } from "../domain/entities";
import DeleteTaskButton from "./DeleteTaskButton";

type TaskListProps = {
  data: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function TaskList({ data, setTasks }: TaskListProps) {
  return (
    <ul>
      {data.map(task => (
        <li key={task.id}>
          <span>{task.title}</span>
          <span>
            <DeleteTaskButton selected_tasks={[task.id]} setTasks={setTasks} />
          </span>
        </li>
      ))}
    </ul>
  );
}
