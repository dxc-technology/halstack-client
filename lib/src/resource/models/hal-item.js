import { getWarnings } from "../services/hal-item-service";

function HALItem({ itemObject = {} }) {
  const warnings = getWarnings({ itemObject });
  return {
    ...itemObject,
    warnings
  };
}

export default HALItem;
