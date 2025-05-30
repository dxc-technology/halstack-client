import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import apicaller from "../src/hal-api-caller";
import optionsResponse from "./mocks/options-response.json";
import getResponse from "./mocks/get-response.json";

describe("Apicaller functions test ", () => {
  let mockAxios;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.restore();
  });

  it("Should make a successful OPTIONS request and return HalResponse", async () => {
    const url = "https://example.com";
    const headers = { CustomHeader: "CustomValue" };
    const responseData = optionsResponse;
    const responseHeaders = { "Content-Type": "application/json" };

    mockAxios.onOptions(url).reply(200, responseData, responseHeaders);

    const result = await apicaller.options({ url, headers });

    expect(result).toBeDefined();
    expect(result.halResource).toBeDefined();
    expect(result.halResource.getTitle()).toEqual("Options available on Quote ID");
  });

  it("Should make a successful GET request and return HalResponse", async () => {
    const url = "https://example.com";
    const headers = { CustomHeader: "CustomValue" };
    const responseData = getResponse;
    const responseHeaders = { "Content-Type": "application/json" };

    mockAxios.onGet(url).reply(200, responseData, responseHeaders);

    const result = await apicaller.get({ url, headers });

    expect(result).toBeDefined();
    expect(result.halResource).toBeDefined();
    expect(result.halResource.getItems().length).toBe(10);
  });

  it("Should make a successful PATCH request", async () => {
    const url = "https://example.com";
    const body = { data: "updatedData" };
    const headers = { CustomHeader: "CustomValue" };
    const responseData = { success: true };
    const responseHeaders = { "Content-Type": "application/json" };

    mockAxios.onPatch(url).reply(200, responseData, responseHeaders);

    const result = await apicaller.patch({ url, body, headers });

    expect(result).toBeDefined();
    expect(result.status).toBe(200);
    expect(result.body).toEqual(responseData);
  });

  it("Should handle PATCH request failure", async () => {
    const url = "https://example.com";
    const body = { data: "updatedData" };
    const headers = { CustomHeader: "CustomValue" };

    mockAxios.onPatch(url).reply(500);

    await expect(apicaller.patch({ url, body, headers })).rejects.toThrow("Request failed with status code 500");
  });

  it("Should make a successful POST request", async () => {
    const url = "https://example.com";
    const body = { name: "New Resource" };
    const headers = { CustomHeader: "CustomValue" };
    const responseData = { id: 1 };
    const responseHeaders = { "Content-Type": "application/json" };

    mockAxios.onPost(url).reply(201, responseData, responseHeaders);

    const result = await apicaller.post({ url, body, headers });

    expect(result).toBeDefined();
    expect(result.status).toBe(201);
    expect(result.body).toEqual(responseData);
  });

  it("Should handle POST request failure", async () => {
    const url = "https://example.com";
    const body = { name: "New Resource" };
    const headers = { CustomHeader: "CustomValue" };

    mockAxios.onPost(url).reply(404);

    await expect(apicaller.post({ url, body, headers })).rejects.toThrow("Request failed with status code 404");
  });

  it("Should make a successful PUT request", async () => {
    const url = "https://example.com";
    const body = { name: "Updated Resource" };
    const headers = { CustomHeader: "CustomValue" };
    const responseData = { success: true };
    const responseHeaders = { "Content-Type": "application/json" };

    mockAxios.onPut(url).reply(200, responseData, responseHeaders);

    const result = await apicaller.put({ url, body, headers });

    expect(result).toBeDefined();
    expect(result.status).toBe(200);
    expect(result.body).toEqual(responseData);
  });

  it("Should make a successful DELETE request", async () => {
    const url = "https://example.com";
    const headers = { CustomHeader: "CustomValue" };
    const responseData = { success: true };
    const responseHeaders = { "Content-Type": "application/json" };

    mockAxios.onDelete(url).reply(204, responseData, responseHeaders);

    const result = await apicaller.del({ url, headers });

    expect(result).toBeDefined();
    expect(result.status).toBe(204);
    expect(result.body).toEqual(responseData);
  });

  it("Should handle DELETE request failure", async () => {
    const url = "https://example.com";
    const headers = { CustomHeader: "CustomValue" };

    mockAxios.onDelete(url).reply(403);

    await expect(apicaller.del({ url, headers })).rejects.toThrow("Request failed with status code 403");
  });

  it("Should handle OPTIONS request failure", async () => {
    const url = "https://example.com";
    const headers = { CustomHeader: "CustomValue" };

    mockAxios.onOptions(url).reply(500);

    await expect(apicaller.options({ url, headers })).rejects.toThrow("Request failed with status code 500");
  });
});
