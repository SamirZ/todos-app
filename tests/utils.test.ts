import { add } from "../src/utils";

describe("add function", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("adds 2 + 2 to equal 4", () => {
    expect(add(2, 2)).toBe(4);
  });
});
