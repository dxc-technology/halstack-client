import { applyErrorConditions } from "./utils-service";
import HALSchemaProperty from "../models/hal-schema-property";

export function getWarnings(interaction = {}) {
  const possibleErrors = [
    { if: hasNoMethod(interaction), error: "Interaction has no method property." },
    { if: hasNoRel(interaction), error: "Interaction has no method rel." },
    { if: hasNoHref(interaction), error: "Interaction has no href." }
  ];
  return applyErrorConditions(possibleErrors);
}

export function hasNoMethod(interaction) {
  return !interaction.method || typeof interaction.method !== "string";
}

export function hasNoRel(interaction) {
  return !interaction.rel || typeof interaction.rel !== "string";
}

export function hasNoHref(interaction) {
  return !interaction.href || typeof interaction.href !== "string";
}

export function getSchemaProperties(schema) {
  return (
    (schema &&
      schema.properties &&
      Object.keys(schema.properties).map(prop => HALSchemaProperty({ key: prop, options: schema }))) ||
    []
  );
}

