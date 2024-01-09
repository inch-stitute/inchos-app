import { describe, expect, test } from "bun:test";
import { squared } from "code";

describe("code", () => {
  test("squared works", () => {
    expect(squared(2)).toBe(4);
  });
});
