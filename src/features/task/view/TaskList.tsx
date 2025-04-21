import type { Task } from "../domain/entities";
import TaskListItem from "./TaskListItem";

type TaskListProps = {
  data: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function TaskList({ data, setTasks }: TaskListProps) {
  return (
    <ul>
      {data.map(task => (
        <TaskListItem key={task.id} data={task} setTasks={setTasks} />
      ))}
    </ul>
  );
}
