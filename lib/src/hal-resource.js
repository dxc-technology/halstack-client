const getPropertiesFromSchema = (schema = {}) => {
  const propertiesNode = schema.properties || {};
  return Object.keys(propertiesNode).map((key) => ({ ...propertiesNode[key], key }));
};

const getRequiredFromSchema = (schema = {}) => schema.required || [];

const addSchemaProperty = (propertyObject, schema) => {
  schema[propertyObject.key] = propertyObject.schema;
};
const addRequiredProperty = (property, required) => {
  property = Array.isArray(property) ? property : [property];
  required = [...new Set([...(required || []), ...property])]
};


const getInteractionHelpers = (interaction) => {
  const getSchemaProperties = () => getPropertiesFromSchema(interaction.schema);
  const getSchemaProperty = (key) => getSchemaProperties().find((property) => property.key === key);
  const hasProperty = (key) => Boolean(getSchemaProperty(key));
  const getRequiredProperties = () => getRequiredFromSchema(interaction.schema);
  const isPropertyRequired = (key) => getRequiredProperties().includes(key);
  const addSchemaProperties = (propertiesAray) => {
    interaction.schema = interaction.schema || {};
    interaction.schema.properties = interaction.schema.properties || {};
    propertiesAray.forEach((prop) => addSchemaProperty(prop, interaction.schema.properties));
  };
  const addRequiredProperties = (propertiesAray) => {
    interaction.required =  [...new Set([...(interaction.required || []), ...propertiesAray])]
  };

  return {
    getSchemaProperties,
    getSchemaProperty,
    hasProperty,
    getRequiredProperties,
    isPropertyRequired,
    addSchemaProperties,
    addSchemaProperty,
    addRequiredProperty,
    addRequiredProperties
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
    Object.keys(resourceRepresentation?._options?.properties || {})
      .filter((key) => key !== "_embedded" && key !== "_options" && key !== "_links")
      .map((key) => ({ key, value: resourceRepresentation[key], ...getPropertyHelpers(key) }));

  const getProperty = (key) => getProperties().find((property) => property.key === key);


  const requiredParam = (param) => {
    const requiredParamError = new Error(`Required parameter, "${param}" is missing.`);
    throw requiredParamError;
  };

  const addLink = (link = requiredParam("href")) => {
    createLinksSection();
    let { rel, ...linkWithoutRel } = link;
    rel ? (resourceRepresentation._links[rel] = linkWithoutRel) : requiredParam("rel");
  };

  const addLinks = (links = []) => {
    links.forEach((link) => {
      addLink(link);
    });
  };

  const addItem = (item = {}) => {
    item.href || requiredParam("href");
    createItemsArray();
    resourceRepresentation._links.item.push(item);
  };

  const addItems = (itemsArray = []) => {
    createItemsArray();
    itemsArray.forEach((item) => {
      addItem(item);
    });
  };

  const addProperty = (property) => {
    if (property.key !== "_links" && property.key !== "_options" && property.key !== "_embedded") {
      property.key || requiredParam("key");
      property.value || property.value === 0 || property.value === "" || requiredParam("value");
      resourceRepresentation[property.key] = property.value;
    }
  };
  const addProperties = (propertiesAray = []) => {
    propertiesAray.forEach((prop) => {
      addProperty(prop);
    });
  };

  const addOptionsProperties = (propertiesAray) => {
    createOptionsPropertiesSection();
    propertiesAray.forEach((prop) => addSchemaProperty(prop, resourceRepresentation._options.properties));
  };

  const addOptionsProperty = (propertyObject) => {
    createOptionsPropertiesSection();
    addSchemaProperty(propertyObject, resourceRepresentation._options.properties);
  };

  const addTitle = (title) => {
    createOptionsSection();
    resourceRepresentation._options.title = title;
  };

  const addInteraction = (interaction) => {
    createInteractionsSection();
    interaction.rel || requiredParam("rel");
    interaction.href || requiredParam("href");
    resourceRepresentation._options.links.push(interaction);
  };

  const addRequiredProperties = (requiredProperties) => {
    createOptionsSection();
    resourceRepresentation._options.required = [...new Set([...(resourceRepresentation._options.required || []), ...requiredProperties])]
  };
  const addRequiredProperty = (property) => {
    createOptionsSection();
    property = Array.isArray(property) ? property : [property];
    resourceRepresentation._options.required = [...new Set([...(resourceRepresentation._options.required || []), ...property])]
  };

  const addOptions = (options = {}) => {
    createOptionsSection();
    options.links.forEach((item) => {
      addInteraction(item);
    });
    addOptionsProperties(Array.isArray(options.properties) ? options.properties : [options.properties]);
    addTitle(options.title);
    addRequiredProperties(options.required);
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

  const createEmbeddedSection = () => {
    resourceRepresentation._embedded = resourceRepresentation._embedded || {};
  };

  const createItemsArray = () => {
    createLinksSection();
    resourceRepresentation._links.item = resourceRepresentation._links.item || [];
  };

  const addEmbeddedResource = (resource) => {
    createEmbeddedSection();
    //TODO
  }

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

    addLink,
    addLinks,
    addItem,
    addItems,
    addProperty,
    addProperties,

    addOptionsProperties,
    addOptionsProperty,
    addTitle,
    addInteraction,
    addOptions,

    addRequiredProperties,
    addRequiredProperty,
    
    //addEmbeddedResource,
  };
};

export default HalResource;
