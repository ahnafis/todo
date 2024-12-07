import type { Task } from "../domain/entities";

type TaskListProps = {
  data: Task[];
};

export default function TaskList({ data }: TaskListProps) {
  const items = data.map(task => <li key={task.id}>{task.title}</li>);

  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
}
