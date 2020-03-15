import HalResource from "../../hal-resource";
import { containsHalResource, getType } from "../service/hal-response-service";

function HalResponse({ body, headers, status }) {
  return {
    headers,
    body,
    status,
    type: getType({ headers }),
    halResource: HalResource({ body }),
    containsHalResource: containsHalResource({ headers })
  };
}

export default HalResponse;
