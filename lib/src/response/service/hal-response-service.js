const CONTENT_TYPE = "Content-type";

export function getType({ responseHeaders } = {}) {
  return responseHeaders(CONTENT_TYPE) ? responseHeaders(CONTENT_TYPE) : null;
}
