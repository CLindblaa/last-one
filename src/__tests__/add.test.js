function add(a, b) {
  return a + b;
}

describe("add", () => {
  it("adds two numbers correctly", () => {
    const expected = 4;
    const result = add(2, 2);
    expect(result).toBe(expected);
  });
});
