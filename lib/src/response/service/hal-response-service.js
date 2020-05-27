// Header names
const CONTENT_TYPE = "content-type";
const CONTENT_LOCATION = "content-location";
const LOCATION = "location";

// Media Types
const HAL_JSON = "application/vnd.hal+json";

export function getType({ headers } = {}) {
  return headers[CONTENT_TYPE] ? headers[CONTENT_TYPE] : null;
}

export function containsHalResource({ headers } = {}) {
  return headers[CONTENT_TYPE].includes(HAL_JSON)
    ? true
    : headers[CONTENT_LOCATION] && headers[LOCATION] && headers[CONTENT_LOCATION] === headers[LOCATION];
}
