import axios from "axios";
import HalResponse from "../../response/models/hal-response";

const HalApiCaller = apiCallerConf => {
  const globalheaders = apiCallerConf.headers;
  return {
    patch: ({ url, body, headers }) =>
      axios({ url, body, headers: { ...globalheaders, ...headers }, method: "patch" }).then(res =>
        HalResponse({ body: res.data, headers: res.headers, status: res.status })
      ),

    get: ({ url, headers }) =>
      axios({ url, headers: { ...globalheaders, ...headers }, method: "get" }).then(res =>
        HalResponse({ body: res.data, headers: res.headers, status: res.status })
      ),

    post: ({ url, headers, body }) =>
      axios({ url, body, headers: { ...globalheaders, ...headers }, method: "post" }).then(res =>
        HalResponse({ body: res.data, headers: res.headers, status: res.status })
      ),

    delete: ({ url, headers }) =>
      axios({ url, headers: { ...globalheaders, ...headers }, method: "delete" }).then(res =>
        HalResponse({ body: res.data, headers: res.headers, status: res.status })
      )
  };
};

export default HalApiCaller;
