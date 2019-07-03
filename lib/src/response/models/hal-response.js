import * as resService from "../services/hal-resource-service";
import * as respService from "../services/hal-response-service";

function HalResponse({ body, headers }) {
  const resourceRepresentation = resService.composeResource({ body, options });
  const body = body;
  const headers = headers;
  const type = respService.getType({headers});

  return {
    resourceRepresentation,
    body, 
    type,
    headers
  };
}
export default HalResponse;
