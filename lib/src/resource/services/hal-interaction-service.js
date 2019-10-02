import { applyErrorConditions } from "./utils-service";
import HALSchemaProperty from "../models/hal-schema-property";

export function getWarnings({ interactionObject = {} }) {
  const possibleErrors = [
    { if: hasNoMethod(interactionObject), error: "Interaction has no method property." },
    { if: hasNoRel(interactionObject), error: "Interaction has no rel." },
    { if: hasNoHref(interactionObject), error: "Interaction has no href." }
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
