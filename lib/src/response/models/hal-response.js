import * as resService from "../../resource/services/hal-resource-service";
import * as respService from "../service/hal-response-service";

function HalResponse({ body, headers }) {
  const type = respService.getType({ headers });

  return {
    headers,
    body,
    resourceRepresentation,
    type,
    getHalResource: () => resService.composeResource(body)
  };
}

export default HalResponse;
