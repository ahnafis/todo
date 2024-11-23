export type UniqueId = number;
export type TimeStamp = number;

/**
 * Types and interfaces are not the same thing. Therefore, all the entities
 * should be types.
 * See more: https://stackoverflow.com/questions/37233735
 */
export type Entity = {
  readonly id: UniqueId;
  readonly creation_date: TimeStamp;
};

/**
 * Omit keys of Entity type (e.g. id, creation_date) from entities that are
 * derived from Entity type.
 */
export type NonEntity<T> = Omit<T, keyof Entity>;
