import * as resService from "../../resource/services/hal-resource-service";
import * as respService from "../service/hal-response-service";

function HalResponse({ body, headers, status }) {
  const type = respService.getType({ headers });
  const halResource = resService.composeResource({body: body});
  const containsHalRespource = resService.containsHalResource;
  return {
    headers,
    body,
    status,
    type,
    halResource,
    containsHalRespource
  };
}

export default HalResponse;
