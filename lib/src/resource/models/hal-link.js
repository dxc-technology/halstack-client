import { getWarnings } from "../services/hal-link-service";

function HALLink({ linkObject = {}, rel = "" }) {
  const warnings = getWarnings({ linkObject });
  return {
    ...linkObject,
    rel,
    warnings
  };
}

export default HALLink;
