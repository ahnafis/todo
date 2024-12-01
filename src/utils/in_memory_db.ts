import type { Entity, UniqueId } from "@/types";

/**
 * An In-Memory database, built on top of Array and provides basic CRUD methods
 * to operate with the data. It is mostly inefficient and only meant for testing
 * purposes, can be called mock database in other words.
 */
export default class InMemoryDB<T extends Entity> {
  private db: T[];

  constructor(data: T[]) {
    this.db = data;
  }

  public insert = async (data: T): Promise<void> => {
    if (await this.exists(data.id)) {
      // TODO: Throw and handle an error instead.
      return console.log("Cannot add same item again.");
    }

    this.db.push(data);
  };

  public read = async (filters?: Partial<T>): Promise<T[]> => {
    if (!filters) return this.db;

    return this.db.filter((data) => {
      let key: keyof Partial<T>;

      // Return if filters matches with any data in the database.
      for (key in filters) return data[key] === filters[key];
    });
  };

  public update = async (new_data: T): Promise<void> => {
    const index = this.db.indexOf(new_data);
    const exists = index > -1;

    // TODO: Throw and handle an error instead.
    if (!exists) return console.log("Not matches found. Nothing to update.");

    this.db[index] = new_data;
  };

  public delete = async (id: UniqueId): Promise<void> => {
    const matches = await this.read({ id } as Partial<T>);
    const index = this.db.indexOf(matches[0]);

    this.db.splice(index, 1);
  };

  private exists = async (id: UniqueId): Promise<boolean> => {
    const matches = await this.read({ id } as Partial<T>);
    return matches.length > 0;
  };
}
