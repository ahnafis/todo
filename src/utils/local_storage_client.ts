import type { Entity, UniqueId } from "@/types";
import { DataSource } from "./interfaces";

export default class LocalStorageClient<T extends Entity>
  implements DataSource<T>
{
  private db: T[];

  constructor(private collection: string) {
    const raw_data: string = localStorage.getItem(this.collection) || "[]";
    this.db = JSON.parse(raw_data) || [];
  }

  public add = async (data: T): Promise<void> => {
    if (await this.exists(data.id)) {
      // TODO: Throw and handle an error instead.
      return console.log("Cannot add same item agian.");
    }

    this.db.push(data);
    await this.save();
  };

  public get = async (filters?: Partial<T>): Promise<T[]> => {
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
    await this.save();
  };

  public delete = async (id: UniqueId): Promise<void> => {
    const matches = await this.get({ id } as Partial<T>);
    const index = this.db.indexOf(matches[0]);

    this.db.splice(index, 1);
    await this.save();
  };

  private exists = async (id: UniqueId): Promise<boolean> => {
    const matches = await this.get({ id } as Partial<T>);
    return matches.length > 0;
  };

  private save = async (): Promise<void> => {
    localStorage.setItem(this.collection, JSON.stringify(this.db));
  };
}
