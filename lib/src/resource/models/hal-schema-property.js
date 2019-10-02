function HALSchemaProperty({ key, options }) {
  return {
    key,
    metadata: (options && options.properties && options.properties[key]) || undefined,
    required: (options && options.required && options.required.find(prop => prop === key) && true) || false
  };
}

export default HALSchemaProperty;
