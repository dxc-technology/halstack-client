import * as resService from "../src/services/hal-resource-service";

describe("compose resource function", () => {
  const body = { foo: "bar" };
  const options = { bar: "foo" };
  const options2 = { bar2: "foo2" };

  it("Returns body if options param is not passed", () => {
    const resource = resService.composeResource({ body });
    expect(resource).toEqual(body);
  });
  it("Returns options parameter as an options property within body", () => {
    const resource = resService.composeResource({ body, options });
    expect(resource).toEqual({ ...body, _options: options });
  });
  it("Overrides existing options", () => {
    const resource = resService.composeResource({ body: { ...body, _options: options2 }, options });
    expect(resource).toEqual({ ...body, _options: options });
  });
  it("Throws an error if there is no body or options", () => {
    expect(() => resService.composeResource({})).toThrow("body or options parameters are required");
  });
});
