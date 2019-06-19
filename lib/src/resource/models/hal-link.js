import { getWarnings } from "../services/hal-link-service";

function HALLink({ linkObject = {}, rel = "" }) {
  const warnings = getWarnings({ linkObject, rel });
  return {
    ...linkObject,
    rel,
    warnings
  };
}

export default HALLink;
