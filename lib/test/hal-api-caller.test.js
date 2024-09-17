import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Import the function to be tested
import apicaller from "../src/hal-api-caller";
import optionsResponse from "./mocks/options-response.json";
import getResponse from "./mocks/get-response.json";

describe("options function", () => {
  let mockAxios;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.restore();
  });

  it("should make a successful OPTIONS request and return HalResponse", async () => {
    const url = "https://example.com";
    const headers = { CustomHeader: "CustomValue" };
    const responseData = optionsResponse;
    const responseHeaders = { "Content-Type": "application/json" };

    // Mocking the Axios request and response
    mockAxios.onOptions(url).reply(200, responseData, responseHeaders);

    // Calling the function
    const result = await apicaller.options({ url, headers });

    // Assertions
    expect(result).toBeDefined();
    expect(result.halResource).toBeDefined();
    expect(result.halResource.getTitle()).toEqual("Options available on Quote ID");
  });

  it("should make a successful GET request and return HalResponse", async () => {
    const url = "https://example.com";
    const headers = { CustomHeader: "CustomValue" };
    const responseData = getResponse;
    const responseHeaders = { "Content-Type": "application/json" };

    // Mocking the Axios request and response
    mockAxios.onGet(url).reply(200, responseData, responseHeaders);

    // Calling the function
    const result = await apicaller.get({ url, headers });

    // Assertions
    expect(result).toBeDefined();
    expect(result.halResource).toBeDefined();
    expect(result.halResource.getItems().length).toBe(10);
  });
});
