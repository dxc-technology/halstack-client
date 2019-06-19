import * as linkService from "../src/services/hal-link-service";

describe("warnings array creation", () => {
  it("Includes Rel is undefined if rel is not defined", () => {
    const resource = linkService.getWarnings({rel: "restaes"});
    expect(resource).not.toContain("Rel is undefined");
  });
});
