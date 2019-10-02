import { applyErrorConditions } from "./utils-service";

export function getWarnings({ itemObject = {} }) {
  const possibleErrors = [{ if: hasNoHref(itemObject), error: "Interaction has no href." }];
  return applyErrorConditions(possibleErrors);
}

export function hasNoHref(itemObject) {
  return !itemObject.href || typeof itemObject.href !== "string";
}
