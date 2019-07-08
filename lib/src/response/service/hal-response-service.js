const CONTENT_TYPE = "content-type";

export function getType({ headers } = {}) {
  return headers[CONTENT_TYPE] ? headers[CONTENT_TYPE] : null;
}
