# Halstack Client for JavaScript

Halstack Client for JavaScript enables developers to easily work with hypermedia-based APIs programmatically. It offers a set of functionalities to facilitate the navigation between hypermedia resources and get access to their properties dynamically, based on the JSON:API and JSON Hyperschema specifications.

This SDK is released as a client-agnostic library that can be used in many different types of consumers: browser applications (such as React Applications in combination with Halstack Browser) or backend applications (node.js applications or AWS Lambdas).

## Installation

```sh
npm install @dxc-technology/halstack-client
```

### Use in Node.js

```js
// require from the dependency the modules you need
const {
  HalResource,
  HalResponse,
  HalApiCaller
} = require("@dxc-technology/halstack-client");
```

### Use in browsers

```js
// require from the dependency the modules you need
import {
  HalResource,
  HalResponse,
  HalApiCaller
} from "@dxc-technology/halstack-client";
```

## Modules

### HalResource

The purpose of this module is facilitating the access to the information of a given resource. This factory function expects a JSON object with the following properties as a parameter:

| Name      | Type          | Default | Description                                                                                                                                   |
| :-------- | :------------ | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `body`    | `JSON Object` | None    | Full resource representation. If \_options is missing, the response of the OPTIONS request can be passed in the "options" property.           |
| `options` | `JSON Object` | None    | Contains the options part of a resource representation. It will override the "\_options" property of the "body" object, in case it's defined. |

Returns HalResource object.
Throws custom exceptions in case the resource representation passed as a parameter is not correctly formed.

### HalResponse

The purpose of this module is exposing the information returned inside an API response. This response can contain a HAL resource or not.

| Name      | Type          | Default | Description                                                                                                                                        |
| :-------- | :------------ | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| `body`    | `JSON Object` | None    | The message-body is the data bytes transmitted assoiciated with a http response.                                                                   |
| `headers` | `JSON Object` | None    | Contains the http headers which provide information about the server and about further access to the resource identified by the Request-URI.       |
| `status`  | `number`      | None    | Status codes are issued by a server in response to a client's request made to the server. It includes codes from IETF Request for Comments (RFCs). |

Returns HalResponse object.

### HalApiCaller

This module is a http client which takes care of handing out parsed HalResponses.

| Name      | Type          | Default | Description                                                                                            |
| :-------- | :------------ | :------ | :----------------------------------------------------------------------------------------------------- |
| `headers` | `JSON Object` | None    | Contains the global http headers to be included on every request made using the returned HalApiCaller. |

Returns HalApiCaller object.

## Prototypes

### HalResource

| Name                     | Type                      | Description                                                                                                                      |
| :----------------------- | :------------------------ | :------------------------------------------------------------------------------------------------------------------------------- |
| `resourceRepresentation` | `object`                  | The whole resource representation.                                                                                               |
| `href`                   | `string`                  | Resource URL. Taken from the "self" link.                                                                                        |
| `title`                  | `string`                  | Resource title. Taken from "\_options.title".                                                                                    |
| `interactions`           | `Interactions[]`          | Array with an Interaction object per existing element in the "\_options.link" array.                                             |
| `items`                  | `Item[]`                  | Array with an Item object per existing item in the "\_links.item" array.                                                         |
| `links`                  | `Link[]`                  | Array with a Link object per existing link in the "\_links" property, ignoring "item".                                           |
| `properties`             | `Property[]`              | Array with a Property object per existing property in the resource representation.                                               |
| `schemaProperties`       | `SchemaProperty[]`        | Array with a SchemaProperty object per existing property in the resource options.                                                |
| `getProperty`            | `function:Property`       | Receives a string as a parameter with the property key. Returns a Property object matching that key.                             |
| `getSchemaProperty`      | `function:SchemaProperty` | Receives a string as a parameter with the property key. Returns a SchemaProperty object matching that key.                       |
| `getLinkByRel`           | `function:Link`           | Receives a string as a parameter with the link rel. Returns a Link object matching that key.                                     |
| `getItemByNumber`        | `function:Item`           | Receives a number as a parameter with the position of the item in the items array. Returns the Item object in that position.     |
| `getItemsByFunction`     | `function:Item`           | Receives a filtering function. Returns an array with the Item objects that pass the test implemented by the provided function.   |
| `getItemByFunction`      | `function:Item`           | Receives a filtering function. Returns the first Item object that passes the test implemented by the provided function.          |
| `getActionByRel`         | `function:Interaction`    | Receives a string as a parameter with the action rel. Returns the Interaction object matching that key.                          |
| `getActionsByMethod`     | `function:Interaction`    | Receives a string as a parameter with the action method. Returns the an array with the Interaction objects matching that method. |

### HalResponse

| Name          | Type          | Description                                                                   |
| :------------ | :------------ | :---------------------------------------------------------------------------- |
| `body`        | `JSON Object` | Response message-body                                                         |
| `headers`     | `JSON Object` | Http headers                                                                  |
| `status`      | `number`      | Https response code                                                           |
| `type`        | `String`      | Response format. Example: application/json                                    |
| `halResource` | `HalResource` | HalResource composed using the information provided inside the http response. |

### HalApiCaller

| Name     | Type                            | Description                                                                                                                   |
| :------- | :------------------------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| `get`    | `function:Promise(HalResponse)` | Receives a { url, headers } object as a parameter. Returns a promise and will pass a HalResponse object to the handler.       |
| `patch`  | `function:Promise(HalResponse)` | Receives a { url, body, headers } object as a parameter. Returns a promise and will pass a HalResponse object to the handler. |
| `post`   | `function:Promise(HalResponse)` | Receives a { url, body, headers } object as a parameter. Returns a promise and will pass a HalResponse object to the handler. |
| `delete` | `function:Promise(HalResponse)` | Receives a { url, headers } object as a parameter. Returns a promise and will pass a HalResponse object to the handler.       |

### Property

| Name    | Type     | Description            |
| :------ | :------- | :--------------------- |
| `key`   | `string` | Name of the property.  |
| `value` | `any`    | Value of the property. |

### SchemaProperty

| Name       | Type          | Description                         |
| :--------- | :------------ | :---------------------------------- |
| `key`      | `string`      | Name of the property.               |
| `metadata` | `JSON Object` | Value of the property.              |
| `required` | `boolean`     | `true` if the property is required. |

### Link

| Name   | Type     | Description           |
| :----- | :------- | :-------------------- |
| `rel`  | `string` | Rel name of the link. |
| `href` | `string` | URL of the link.      |

### Item

| Name      | Type          | Description          |
| :-------- | :------------ | :------------------- |
| `href`    | `string`      | URL of the link.     |
| `summary` | `JSON Object` | Summary of the item. |

### Interaction

| Name               | Type               | Description                                                                      |
| :----------------- | :----------------- | :------------------------------------------------------------------------------- |
| `rel`              | `string`           | Rel name of the action.                                                          |
| `title`            | `string`           | Title of the action.                                                             |
| `method`           | `string`           | Method of the action.                                                            |
| `href`             | `string`           | URL of the action.                                                               |
| `schema`           | `JSON Object`      | Full schema of the action.                                                       |
| `schemaProperties` | `SchemaProperty[]` | Array with a propertyMetadata object per existing property in the action schema. |

## Develop

In the first place, clone this repository.

```bash
git clone https://github.com/dxc-technology/dxc-halstack-client.git
```

Local development is broken into two parts, related to the lib/example folders.

First, within the lib folder, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
cd lib
npm install
npm start # runs rollup with watch flag
```

The second part will be running the examples linked to the local version of your module.

### React example

```bash
# (in another tab)
cd example/front-end-react
npm install
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your library in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.

### Node example

```bash
# (in another tab)
cd example/node
npm install
npm start # runs node application
```

# License

See Halstack Client License [here](./LICENSE)

## To Do

RESOURCE:

- Is property patchable (Interaction or property)
- Status Report

RESPONSE:

- X-Modified headers
- X-Delete headers
