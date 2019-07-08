import req from "node-fetch";

export function halPatch({ cache, url, body, headers }) {}

export function halGet({ cache, url, headers }) {
  return req(url, { headers, method: "get" })
  .then(res => res.json())
  .then(getResp =>
    getResp
  );

}

export function halPost({ cache, url, body }) {}

export function halDelete({ cache, url }) {}
