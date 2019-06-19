import * as resService from "../services/hal-resource-service";

function HalResource({ body, options }) {
  const resourceRepresentation = resService.composeResource({ body, options });
  const interactions = resService.getInteractions(resourceRepresentation);
  const links = resService.getLinks(resourceRepresentation);
  const items = resService.getItems(resourceRepresentation);
  const properties = resService.getProperties(resourceRepresentation);
  const schemaProperties = resService.getSchemaProperties(resourceRepresentation);

  return {
    resourceRepresentation,
    interactions,
    items,
    links,
    properties,
    schemaProperties,
    getInteractionByRel: rel => resService.getInteractionByRel({ rel, interactions }),
    getInteractionsByMethod: method => resService.getInteractionsByMethod({ method, interactions }),
    getItemByFunction: callback => resService.getItemByFunction({ callback, items }),
    getItemByNumber: number => resService.getItemByNumber({ number, items }),
    getItemsByFunction: callback => resService.getItemsByFunction({ callback, items }),
    getLinkByRel: rel => resService.getLinkByRel({ rel, links }),
    getProperty: key => resService.getProperty({ key, properties }),
    getSchemaProperty: key => resService.getSchemaProperty({ key, schemaProperties }),
    href: resService.getInteractionByRel({ rel: "self", interactions }),
    title: resService.getTitle(resourceRepresentation)
  };
}
export default HalResource;
