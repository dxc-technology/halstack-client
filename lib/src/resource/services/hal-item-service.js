import { applyErrorConditions } from "./utils-service";

export function getWarnings(link = {}) {
  const possibleErrors = [{ if: hasNoHref(link), error: "Interaction has no href." }];
  return applyErrorConditions(possibleErrors);
}

export function hasNoHref(interaction) {
  return !interaction.href || typeof interaction.href !== "string";
}
