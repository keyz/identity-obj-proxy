import idObj, { foo, bar } from ".."

describe("idObj", () => {
  it("should return the key as a string", () => {
    expect(foo).toBe("foo")
  })
  it("should support dot notation", () => {
    expect(bar).toBe("bar")
  })
  it("should support bracket notation", () => {
    expect(idObj[1]).toBe("1")
  })
})
