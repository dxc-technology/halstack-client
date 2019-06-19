import { applyErrorConditions } from "./utils-service";

export function getWarnings(link = {}) {
  const possibleErrors = [
    { if: isRelInvalid(link), error: "Rel value is invalid" },
    { if: isHrefIncorrect(link), error: "Href must be defined and must be a string" }
  ];
  return applyErrorConditions(possibleErrors);
}

export function isRelInvalid(link) {
  return !link.rel || typeof link.rel !== "string";
}

export function isHrefIncorrect(link) {
  return !link.linkObject || !link.linkObject.href || typeof link.linkObject.href !== "string";
}
