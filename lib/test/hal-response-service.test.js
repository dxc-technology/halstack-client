import { getType, containsHalResource } from "../src/response/service/hal-response-service";

describe("getType function tests", () => {
  it("Should return the value of content-type if present", () => {
    const headers = { "content-type": "application/json" };
    const result = getType({ headers });
    expect(result).toBe("application/json");
  });

  it("Should return null if content-type is not present", () => {
    const headers = { "content-location": "http://example.com/resource" };
    const result = getType({ headers });
    expect(result).toBeNull();
  });
});

describe("containsHalResource function tests", () => {
  const HAL_JSON = "application/vnd.hal+json";
  const HAL_JSON2 = "application/hal+json";

  it("Should return true if content-type includes application/vnd.hal+json", () => {
    const headers = { "content-type": HAL_JSON };
    const result = containsHalResource({ headers });
    expect(result).toBe(true);
  });

  it("Should return true if content-type includes application/hal+json", () => {
    const headers = { "content-type": HAL_JSON2 };
    const result = containsHalResource({ headers });
    expect(result).toBe(true);
  });

  it("Should return false if content-location does not equal location", () => {
    const headers = {
      "content-location": "http://example.com/resource",
      location: "http://example.com/another-resource",
    };
    const result = containsHalResource({ headers });
    expect(result).toBe(false);
  });

  it("Should return false if headers do not meet any conditions", () => {
    const headers = {
      "content-type": "text/html",
      "content-location": "http://example.com/resource",
      location: "http://example.com/another-resource",
    };
    const result = containsHalResource({ headers });
    expect(result).toBe(false);
  });

  it("Should return false if headers is null", () => {
    const result = containsHalResource();
    expect(result).toBe(false);
  });

  it("Should return false if headers is undefined", () => {
    const result = containsHalResource({});
    expect(result).toBe(false);
  });
});
