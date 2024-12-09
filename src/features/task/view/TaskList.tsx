import type { Task } from "../domain/entities";

type TaskListProps = {
  data: Task[];
};

export default function TaskList({ data }: TaskListProps) {
  return (
    <ul>
      {data.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}
