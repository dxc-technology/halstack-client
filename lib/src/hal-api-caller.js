import axios from "axios";
import HalResponse from "./response/models/hal-response";

let globalheaders = {};

const setGlobalHeaders = (headers) => {
  globalheaders = headers;
};

const patch = ({ url, body, headers }) =>
  axios({
    url,
    data: body,
    headers: { ...globalheaders, ...headers },
    method: "patch",
  }).then((res) => HalResponse({ body: res.data, headers: res.headers, status: res.status }));

const get = ({ url, headers }) =>
  axios({
    url,
    headers: { ...globalheaders, ...headers },
    method: "get",
  }).then((res) => HalResponse({ body: res.data, headers: res.headers, status: res.status }));

const post = ({ url, headers, body }) =>
  axios({
    url,
    data: body,
    headers: { ...globalheaders, ...headers },
    method: "post",
  }).then((res) => HalResponse({ body: res.data, headers: res.headers, status: res.status }));

const put = ({ url, headers, body }) =>
  axios({
    url,
    data: body,
    headers: { ...globalheaders, ...headers },
    method: "put",
  }).then((res) => HalResponse({ body: res.data, headers: res.headers, status: res.status }));

const del = ({ url, headers }) =>
  axios({
    url,
    headers: { ...globalheaders, ...headers },
    method: "delete",
  }).then((res) => HalResponse({ body: res.data, headers: res.headers, status: res.status }));

const options = ({ url, headers }) =>
  axios({
    url,
    headers: { ...globalheaders, ...headers },
    method: "options",
  }).then((res) => HalResponse({ body: {_options: res.data}, headers: res.headers, status: res.status }));

export default { setGlobalHeaders, patch, get, post, put, del, options };
