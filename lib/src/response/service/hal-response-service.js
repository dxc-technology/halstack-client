// Header names
const CONTENT_TYPE = "content-type";
const CONTENT_LOCATION = "content-location";
const LOCATION = "location";

// Media Types
const HAL_JSON = "application/vnd.hal+json";
const HAL_JSON2 = "application/hal+json";

export function getType({ headers } = {}) {
  return headers[CONTENT_TYPE] ? headers[CONTENT_TYPE] : null;
}

export function containsHalResource({ headers } = {}) {
  return headers && headers[CONTENT_TYPE] ? 
    (headers[CONTENT_TYPE].includes(HAL_JSON) || headers[CONTENT_TYPE].includes(HAL_JSON2)) ? 
      true
      : headers[CONTENT_LOCATION] && headers[LOCATION] && headers[CONTENT_LOCATION] === headers[LOCATION]
    : false;
}
