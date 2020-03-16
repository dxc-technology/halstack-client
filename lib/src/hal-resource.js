const getPropertiesFromSchema = (schema = {}) => {
  const propertiesNode = schema.properties || {};
  return Object.keys(propertiesNode).map(key => ({ ...propertiesNode[key], key }));
};

const getRequiredFromSchema = (schema = {}) => schema.required || [];

const getInteractionHelpers = interaction => {
  const getSchemaProperties = () => getPropertiesFromSchema(interaction.schema);
  const getSchemaProperty = key => getSchemaProperties().find(property => property.key === key);
  const hasProperty = key => Boolean(getSchemaProperty(key));
  const getRequiredProperties = () => getRequiredFromSchema(interaction.schema);
  const isPropertyRequired = key => getRequiredProperties().includes(key);

  return {
    getSchemaProperties,
    getSchemaProperty,
    hasProperty,
    getRequiredProperties,
    isPropertyRequired
  };
};

const HalResource = existingRepresentation => {
  const res = existingRepresentation || {};

  const getTitle = () => res?._options?.title || "";

  const getInteractions = () =>
    (res?._options?.links || []).map(interaction => ({
      ...interaction,
      ...getInteractionHelpers(interaction)
    }));

  const getInteraction = rel => getInteractions().find(link => link.rel === rel);

  const getItems = () => {
    const itemNode = res?._links?.item || [];
    return Array.isArray(itemNode) ? itemNode : [itemNode];
  };

  const getItem = (index = 0) => getItems()[index];

  const getLinks = () => {
    const linksNode = res?._links || {};
    return Object.keys(linksNode)
      .filter(key => key !== "item")
      .map(key => ({ ...linksNode[key], rel: key }));
  };

  const getLink = rel => getLinks().find(link => link.rel === rel);

  const getSchemaProperties = () => getPropertiesFromSchema(res?._options);

  const getSchemaProperty = key => getSchemaProperties().find(property => property.key === key);

  const getRequiredProperties = () => getRequiredFromSchema(res?._options);

  const isPropertyRequired = key => getRequiredProperties().includes(key);

  const getPropertyHelpers = property => {
    const isRequired = () => isPropertyRequired(property);
    const getSchema = () => getSchemaProperty(property);
    const existsInInteraction = rel => Boolean(getInteraction(rel)?.hasProperty(property));

    return {
      isRequired,
      getSchema,
      existsInInteraction
    };
  };

  const getProperties = () =>
    Object.keys(res)
      .filter(key => key !== "_embedded" && key !== "_options" && key !== "_links")
      .map(key => ({ key, value: res[key], ...getPropertyHelpers(key) }));

  const getProperty = key => getProperties().find(property => property.key === key);

  return {
    resourceRepresentation: res,
    getTitle,
    getInteractions,
    getInteraction,
    getItems,
    getItem,
    getLinks,
    getLink,
    getProperties,
    getProperty,
    getSchemaProperties,
    getSchemaProperty,
    getRequiredProperties,
    isPropertyRequired
  };
};
export default HalResource;
