import type { Entity, TimeStamp } from "@/types";

import { TaskStatus } from "../subtypes";

type Task = Entity & {
  title: string;
  description: string;
  due_date: TimeStamp;
  status: TaskStatus;
  priority: number;
  categories: string[];
};

export default Task;
