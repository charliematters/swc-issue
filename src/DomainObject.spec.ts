import DomainObject from "./DomainObject";

describe("DomainObject", () => {
  it("creates a domain object", () => {
    const object = new DomainObject();
    expect(object.foo).toBe(null);
    expect(object.bar).toBe(null);
  });

  it("creates a domain object with data", () => {
    const object = new DomainObject({ foo: "foo", bar: "bar" });
    expect(object.foo).toBe("foo");
    expect(object.bar).toBe("bar");
  });
});
