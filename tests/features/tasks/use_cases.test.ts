import { describe, expect, test } from "vitest";

import type { Task } from "@/features/tasks/domain/entities";
import { TaskStatus } from "@/features/tasks/domain/subtypes";
import { TaskModel } from "@/features/tasks/data/models";

import { TaskStore } from "@/features/tasks/data/stores";
import { TaskLocalDataProvider } from "@/features/tasks/data/providers";

import {
  AddTask,
  DeleteTask,
  GetTasks,
  UpdateTask,
} from "@/features/tasks/domain/use_cases";

const TEST_TASK_TABLE = "test_tasks";
const task_data_source = new TaskLocalDataProvider(TEST_TASK_TABLE);
const task_store = new TaskStore(task_data_source);

const addTask = new AddTask(task_store).execute;
const getTasks = new GetTasks(task_store).execute;
const updateTask = new UpdateTask(task_store).execute;
const deleteTask = new DeleteTask(task_store).execute;

const time1 = new Date(2024, 3, 12).getTime();
const time2 = new Date(2024, 3, 22).getTime();

const task1: Task = new TaskModel({
  title: "Test the Task entity",
  description: "Nothing really here.",
  due_date: time1,
  categories: ["easy", "favorite"],
}).data;

const task2: Task = new TaskModel({
  title: "Test use cases",
  description: "Hi! Nothing's here",
  due_date: time2,
  categories: ["very easy"],
}).data;

describe("Use case tests", () => {
  test("Should add task to the database", async () => {
    await addTask(task1);
    await addTask(task2);
    expect(await getTasks()).toStrictEqual([task1, task2]);
  });

  test("Should avoid adding same task again", async () => {
    await addTask(task2);
    expect(await getTasks()).toStrictEqual([task1, task2]);
  });

  test("Should fetch tasks from the database", async () => {
    expect(await getTasks()).toStrictEqual([task1, task2]);
  });

  test("Should fetch specified task from the database", async () => {
    expect(await getTasks({ title: task2.title })).toStrictEqual([task2]);
  });

  test("Should update data into the database", async () => {
    const task1_backup = Object.freeze({ ...task1 });
    task1.status = TaskStatus.DONE;
    task1.priority = 100;

    await updateTask(task1);
    expect(await getTasks()).toStrictEqual([task1, task2]);
    expect(await getTasks()).not.toStrictEqual([task1_backup, task2]);
  });

  test("Should avoid updating non-existing data into the database", async () => {
    await updateTask(new TaskModel({}).data);
    expect(await getTasks()).toStrictEqual([task1, task2]);
  });

  test("Should delete all data from the database", async () => {
    await deleteTask(task1.id);
    await deleteTask(task2.id);
    expect(await getTasks()).toStrictEqual([]);
  });
});
