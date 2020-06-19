const getPropertiesFromSchema = (schema = {}) => {
  const propertiesNode = schema.properties || {};
  return Object.keys(propertiesNode).map((key) => ({ ...propertiesNode[key], key }));
};

const getRequiredFromSchema = (schema = {}) => schema.required || [];

const getInteractionHelpers = (interaction) => {
  const getSchemaProperties = () => getPropertiesFromSchema(interaction.schema);
  const getSchemaProperty = (key) => getSchemaProperties().find((property) => property.key === key);
  const hasProperty = (key) => Boolean(getSchemaProperty(key));
  const getRequiredProperties = () => getRequiredFromSchema(interaction.schema);
  const isPropertyRequired = (key) => getRequiredProperties().includes(key);

  return {
    getSchemaProperties,
    getSchemaProperty,
    hasProperty,
    getRequiredProperties,
    isPropertyRequired,
  };
};

const HalResource = (existingRepresentation) => {
  const resourceRepresentation = existingRepresentation || {};

  const getTitle = () => resourceRepresentation?._options?.title || "";

  const getInteractions = () =>
    (resourceRepresentation?._options?.links || []).map((interaction) => ({
      ...interaction,
      ...getInteractionHelpers(interaction),
    }));

  const getInteraction = (rel) => getInteractions().find((link) => link.rel === rel);

  const getItems = () => {
    const itemNode = resourceRepresentation?._links?.item || [];
    return Array.isArray(itemNode) ? itemNode : [itemNode];
  };

  const getItem = (index = 0) => getItems()[index];

  const getLinks = () => {
    const linksNode = resourceRepresentation?._links || {};
    return Object.keys(linksNode)
      .filter((key) => key !== "item")
      .map((key) => ({ ...linksNode[key], rel: key }));
  };

  const getLink = (rel) => getLinks().find((link) => link.rel === rel);

  const getSchemaProperties = () => getPropertiesFromSchema(resourceRepresentation?._options);

  const getSchemaProperty = (key) => getSchemaProperties().find((property) => property.key === key);

  const getRequiredProperties = () => getRequiredFromSchema(resourceRepresentation?._options);

  const isPropertyRequired = (key) => getRequiredProperties().includes(key);

  const getPropertyHelpers = (property) => {
    const isRequired = () => isPropertyRequired(property);
    const getSchema = () => getSchemaProperty(property);
    const existsInInteraction = (rel) => Boolean(getInteraction(rel)?.hasProperty(property));

    return {
      isRequired,
      getSchema,
      existsInInteraction,
    };
  };

  const getProperties = () =>
    Object.keys(resourceRepresentation)
      .filter((key) => key !== "_embedded" && key !== "_options" && key !== "_links")
      .map((key) => ({ key, value: resourceRepresentation[key], ...getPropertyHelpers(key) }));

  const getProperty = (key) => getProperties().find((property) => property.key === key);

  const requiredParam = (param) => {
    const requiredParamError = new Error(`Required parameter, "${param}" is missing.`);
    throw requiredParamError;
  };

  const addLink = ({ rel = requiredParam("rel"), name, href = requiredParam("href"), title } = {}) => {
    createLinksSection();
    resourceRepresentation._links[rel] = {
      ...(name && { name }),
      ...(href && { href }),
      ...(title && { title }),
    };
  };

  const addItem = ({ summary, name, href = requiredParam("href"), title } = {}) => {
    createItemsArray();
    resourceRepresentation._links.item.push({
      ...(summary && { summary }),
      ...(name && { name }),
      ...(href && { href }),
      ...(title && { title }),
    });
  };

  const addItems = (itemsArray) => {
    itemsArray.forEach((item) => {
      addItem(item);
    });
  };

  const addProperties = (propertiesObject) => {
    Object.keys(propertiesObject).forEach((key) => {
      if (key !== "_links" && key !== "_options") {
        resourceRepresentation[key] = propertiesObject[key];
      }
    });
  };

  const addPropertiesSchema = (propertiesObject) => {
    createOptionsPropertiesSection();
    resourceRepresentation._options.properties = {
      ...resourceRepresentation._options.properties,
      ...propertiesObject,
    };
  };

  const addTitle = (title) => {
    createOptionsSection();
    resourceRepresentation._options.title = title;
  };

  const addInteraction = ({
    method = requiredParam("method"),
    rel = requiredParam("rel"),
    mediaType,
    href = requiredParam("href"),
    title,
    schema,
  }) => {
    createInteractionsSection();
    resourceRepresentation._options.links.push({
      ...(method && { method }),
      ...(rel && { rel }),
      ...(mediaType && { mediaType }),
      ...(href && { href }),
      ...(title && { title }),
      ...(schema && { schema }),
    });
  };

  const addRequired = (required) => {
    createOptionsSection();
    resourceRepresentation._options.required = required || [];
  };

  const addOptions = ({ links, properties, title, required }) => {
    createOptionsSection();
    links.forEach((item) => {
      addInteraction(item);
    });
    addPropertiesSchema(properties);
    addTitle(title);
    addRequired(required);
  };
  // *************************************************************************************** //

  const createOptionsSection = () => {
    resourceRepresentation._options = resourceRepresentation._options || {};
  };

  const createOptionsPropertiesSection = () => {
    createOptionsSection();
    resourceRepresentation._options.properties = resourceRepresentation._options.properties || {};
  };

  const createInteractionsSection = () => {
    createOptionsSection();
    resourceRepresentation._options.links = resourceRepresentation._options.links || [];
  };

  const createLinksSection = () => {
    resourceRepresentation._links = resourceRepresentation._links || {};
  };

  const createItemsArray = () => {
    createLinksSection();
    resourceRepresentation._links.item = resourceRepresentation._links.item || [];
  };

  return {
    resourceRepresentation,
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
    isPropertyRequired,

    addLink,
    addItem,
    addItems,
    addProperties,

    addPropertiesSchema,
    addTitle,
    addInteraction,
    addOptions,
  };
};

export default HalResource;
