import HalResponse from "../src/response/models/hal-response";
import respService from "../src/services/hal-response-service";

describe("compose resource function", () => {
  const body1 = { foo: "bar" };
  const headers1 = { 'Content-type': "application/json" };
  const headersMap = new Map();
  headersMap.set('Content-Type', 'text/xml');

  resp1 = new HalResponse({body1, headers1});
  

  it("Checks if the Content-type is correctly returned executing getType function", () => {
    expect(respService.getType({headers1})).toEqual("application/json");
  });


});
