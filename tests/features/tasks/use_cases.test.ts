import { describe, expect, test } from "vitest";

import type { Task } from "@/features/tasks/domain/entities";
import { TaskStatus } from "@/features/tasks/domain/subtypes";
import { TaskModel } from "@/features/tasks/data/models";

import { TaskRepository } from "@/features/tasks/data/repositories";
import { TaskLocalDataSource } from "@/features/tasks/data/sources";

import {
  AddTask,
  DeleteTask,
  GetTasks,
  UpdateTask,
} from "@/features/tasks/domain/use_cases";

const TEST_TASK_TABLE = "test_tasks";
const task_data_provider = new TaskLocalDataSource(TEST_TASK_TABLE);
const task_repository = new TaskRepository(task_data_provider);

const add_task = new AddTask(task_repository);
const get_tasks = new GetTasks(task_repository);
const update_task = new UpdateTask(task_repository);
const delete_task = new DeleteTask(task_repository);

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
  test("Should add task to the database", () => {
    add_task.execute(task1);
    add_task.execute(task2);
    expect(get_tasks.execute()).toStrictEqual([task1, task2]);
  });

  test("Should fetch tasks from the database", () => {
    expect(get_tasks.execute()).toStrictEqual([task1, task2]);
  });

  test("Should fetch specified task from the database", () => {
    expect(get_tasks.execute({ title: "Test use cases" })).toStrictEqual([
      task2,
    ]);
  });

  test("Should update data into the database", () => {
    task1.status = TaskStatus.DONE;
    task1.priority = 100;

    update_task.execute(task1);
    expect(get_tasks.execute()).toStrictEqual([task1, task2]);
  });

  test("Should delete all data from the database", () => {
    delete_task.execute(task1.id);
    delete_task.execute(task2.id);
    expect(get_tasks.execute()).toStrictEqual([]);
  });
});
