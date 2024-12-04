import type { Entity, UniqueId } from "@/types";

export default interface Repository<T extends Entity> {
  add(data: T): Promise<void>;
  get(filters?: Partial<T>): Promise<T[]>;
  update(new_data: T): Promise<void>;
  delete(id: UniqueId): Promise<void>;
}
