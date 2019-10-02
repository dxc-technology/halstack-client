import { getWarnings, getSchemaProperties } from "../services/hal-interaction-service";

function HALInteraction({ interactionObject }) {
  const warnings = getWarnings({ interactionObject });
  return {
    ...interactionObject,
    schemaProperties: getSchemaProperties(interactionObject.schema),
    warnings
  };
}

export default HALInteraction;
