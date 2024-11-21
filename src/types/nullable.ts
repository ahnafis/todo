export type Nullable<T> = T | null | undefined;

// Make the values T[K] of type T Nullable.
export type DeepNullable<T> = {
  [K in keyof T]: Nullable<T[K]>;
};
