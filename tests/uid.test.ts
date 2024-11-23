import { it, describe, expect } from "vitest";
import { createUid } from "@/utils";

describe("UniqueId validation", () => {
  const id = createUid();

  it("Should not be undefined or null", () => {
    expect(id).not.toBeUndefined();
    expect(id).not.toBeNull();
  });

  it("Should return an integer, greater than 0", () => {
    expect(id).toBeGreaterThan(0);
  });
});
