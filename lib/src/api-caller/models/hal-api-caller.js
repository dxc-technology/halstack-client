import HalResponse from "../../response/models/hal-response";
const axios = require('axios');


export function halPatch({ cache, url, body, headers }) {
  return axios({url: url, body: body,  headers: headers, method: "patch" })
  .then(res =>  HalResponse({body: res.data, headers: res.headers, status: res.status})
  );

}

export function halGet({ cache, url, headers }) {
  return axios({url: url,  headers: headers, method: "get" })
  .then(res =>  HalResponse({body: res.data, headers: res.headers, status: res.status})
  );

}

export function halPost({ cache, url, body }) {
  return axios({url: url, body: body,  headers: headers, method: "post" })
  .then(res =>  HalResponse({body: res.data, headers: res.headers, status: res.status})
  );
}

export function halDelete({ cache, url }) {
  return axios({url: url, headers: headers, method: "delete" })
  .then(res =>  HalResponse({body: res.data, headers: res.headers, status: res.status})
  );
}
