import { describe, expect, test } from "vitest";

import { TaskStatus } from "@/features/task/domain/subtypes";

import { createTask } from "@/features/task/data/models";
import { LocalTaskRepository } from "@/features/task/data/repositories";

const TEST_TASK_TABLE = "test_tasks";
const repository = new LocalTaskRepository(TEST_TASK_TABLE);

const addTask = repository.add;
const getTasks = repository.get;
const updateTask = repository.update;
const deleteTask = repository.delete;

const time1 = new Date(2024, 3, 12).getTime();
const time2 = new Date(2024, 3, 22).getTime();

const task1 = createTask({
  title: "Test the Task entity",
  description: "Nothing really here.",
  due_date: time1,
  categories: ["easy", "favorite"],
});

const task2 = createTask({
  title: "Test use cases",
  description: "Hi! Nothing's here",
  due_date: time2,
  categories: ["very easy"],
});

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
    await updateTask(createTask({}));
    expect(await getTasks()).toStrictEqual([task1, task2]);
  });

  test("Should delete all data from the database", async () => {
    await deleteTask(task1.id);
    await deleteTask(task2.id);
    expect(await getTasks()).toStrictEqual([]);
  });
});
