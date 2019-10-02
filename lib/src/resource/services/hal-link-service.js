import { applyErrorConditions } from "./utils-service";

export function getWarnings({ linkObject = {} }) {
  const possibleErrors = [{ if: hasNoHref(linkObject), error: "Link has no href." }];
  return applyErrorConditions(possibleErrors);
}

export function hasNoHref(link) {
  return !link.href || typeof link.href !== "string";
}
