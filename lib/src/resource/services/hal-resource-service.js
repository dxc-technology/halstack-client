import HALInteraction from "../models/hal-interaction";
import HALItem from "../models/hal-item";
import HALLink from "../models/hal-link";
import HALProperty from "../models/hal-property";
import HALSchemaProperty from "../models/hal-schema-property";

export function composeResource({ body, options } = {}) {
  if (!body && !options) {
    throw new RangeError("body or options parameters are required");
  }
  return { ...body, ...(options && { _options: options }) };
}

export function getLinkByRel({ rel, links }) {
  return (links && links.find(link => link.rel === rel)) || null;
}

export function getItemByNumber({ items, number }) {
  return items[number];
}

export function getItemsByFunction({ items, callback }) {
  return items.filter(callback);
}

export function getItemByFunction({ items, callback }) {
  return items.find(callback);
}

export function getProperty({ properties, key }) {
  return properties.find(property => property.key === key);
}

export function getSchemaProperty({ schemaProperties, key }) {
  return schemaProperties.find(schemaProperty => schemaProperty.key === key);
}

export function getInteractionByRel({ rel, interactions }) {
  return interactions.find(interaction => interaction.rel === rel);
}

export function getInteractionsByMethod({ method, interactions }) {
  return interactions.filter(interaction => interaction.method === method);
}

export function getItems(resp) {
  const respItems =
    (resp._links &&
      resp._links.item &&
      ((Array.isArray(resp._links.item) && resp._links.item) || [resp._links.item])) ||
    [];
  return respItems.map(item => HALItem({ itemObject: item }));
}

export function getLinks(resp) {
  return (
    resp._links &&
    Object.keys(resp._links)
      .filter(key => key !== "item")
      .map(key => HALLink({ linkObject: resp._links[key], rel: key }))
  );
}

export function getInteractions(resp) {
  const respInteractions = (resp._options && resp._options.links) || [];
  return respInteractions.map(interaction => HALInteraction({ interactionObject: interaction }));
}

export function getProperties(resp) {
  return Object.keys(resp)
    .filter(key => key !== "_embedded" && key !== "_options" && key !== "_links")
    .map(key => HALProperty({ key, value: resp[key] }));
}

export function getSchemaProperties(resp) {
  const respProperties = (resp && resp._options && resp._options.properties) || {};
  return Object.keys(respProperties).map(key => HALSchemaProperty({ key, options: resp._options }));
}

export function getTitle(resp) {
  return (resp && resp._options && resp._options.title) || "";
}
