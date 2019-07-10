# Halstack Client for JavaScript

Halstack Client for JavaScript enables developers to easily work with hypermedia-based APIs programmatically. It offers a set of functionalities to facilitate the navigation between hypermedia resources and get access to their properties dynamically, based on the JSON:API and JSON Hyperschema specifications.

This SDK is released as a client-agnostic library that can be used in many different types of consumers: browser applications (such as React Applications in combination with Halstack Browser) or backend applications (node.js applications or AWS Lambdas).

## Installation

```sh
npm install --save @dxc-technology/halstack-client
```

### Use in Node.js

```js
// require from the dependency the modules you need
const { halNavigator, halResource } = require("@dxc-technology/halstack-client");
```

### Use in browsers

```js
// require from the dependency the modules you need
import { halNavigator, halResource } from "@dxc-technology/halstack-client";
```

## Modules

### halResource

The purpose of this module is facilitating the access to the information of a given resource. This factory function expects a JSON object with the following properties as a parameter:

| Name      | Type          | Default | Description                                                                                                                                   |
| :-------- | :------------ | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `body`    | `JSON Object` | None    | Full resource representation. If \_options is missing, the response of the OPTIONS request can be passed in the "options" property.           |
| `options` | `JSON Object` | None    | Contains the options part of a resource representation. It will override the "\_options" property of the "body" object, in case it's defined. |

This factory function will throw custom exceptions in case the resource representation passed as a parameter is not correctly formed.
And it returns an object with the halResource prototype.

### halResponse

The purpose of this module is exposing the information returned inside a API response. This response can be HAL or not.


 Name      | Type          | Default | Description                                                                                                                                   |
| :-------- | :------------ | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `body`    | `JSON Object` | None    | The message-body is the data bytes transmitted assoiciated with a http response.
| `headers` | `JSON Object` | None    | Contains the http headers which provide information about the server and about further access to the resource identified by the Request-URI.|
| `status` | `number` | None    |  Status codes are issued by a server in response to a client's request made to the server. It includes codes from IETF Request for Comments (RFCs).|





## Prototypes

### halResource

| Name                  | Type                        | Description                                                                                                                    |
| :-------------------- | :-------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `href`                | `string`                    | Resource URL. Taken from the "self" link.                                                                                      |
| `title`               | `string`                    | Resource title. Taken from "\_options.title".                                                                                  |
| `properties`          | `property[]`                | Array with a property object per existing property in the resource representation.                                             |
| `propertiesMetadata`  | `propertyMetadata[]`        | Array with a propertyMetadata object per existing property in the resource options.                                            |
| `links`               | `link[]`                    | Array with a link object per existing link in the "\_links" property, ignoring "item".                                         |
| `items`               | `item[]`                    | Array with an item object per existing item in the "\_links.item" array.                                                       |
| `actions`             | `action[]`                  | Array with an action object per existing element in the "\_options.link" array.                                                |
| `getProperty`         | `function:property`         | Receives a string as a parameter with the property key. Returns a property object matching that key.                           |
| `getPropertyMetadata` | `function:propertyMetadata` | Receives a string as a parameter with the property key. Returns a propertyMetadata object matching that key.                   |
| `getLinkByRel`        | `function:link`             | Receives a string as a parameter with the link rel. Returns a link object matching that key.                                   |
| `getItemByNumber`     | `function:item`             | Receives a number as a parameter with the position of the item in the items array. Returns the item object in that position.   |
| `getItemsByFunction`  | `function:item`             | Receives a filtering function. Returns an array with the item objects that pass the test implemented by the provided function. |
| `getItemByFunction`   | `function:item`             | Receives a filtering function. Returns the first item object that passes the test implemented by the provided function.        |
| `getActionByRel`      | `function:action`           | Receives a string as a parameter with the action rel. Returns the action object matching that key.                             |
| `getActionsByMethod`  | `function:action`           | Receives a string as a parameter with the action method. Returns the an array with the action objects matching that method.    |

### halResponse

| Name    | Type     | Description            |
| :------ | :------- | :--------------------- |
| `body`   | `JSON Object` | Response message-body  |
| `headers` | `JSON Object`    | Http headers |
| `status` | `number`    | Https response code |
| `type` | `String`    | Response format. Example: application/json|
| `halResource` | `halResource` | HalResource composed using the information provided inside the http response.  |

### property

| Name    | Type     | Description            |
| :------ | :------- | :--------------------- |
| `key`   | `string` | Name of the property.  |
| `value` | `any`    | Value of the property. |

### propertyMetadata

| Name       | Type          | Description                         |
| :--------- | :------------ | :---------------------------------- |
| `key`      | `string`      | Name of the property.               |
| `metadata` | `JSON Object` | Value of the property.              |
| `required` | `boolean`     | `true` if the property is required. |

### link

| Name   | Type     | Description           |
| :----- | :------- | :-------------------- |
| `rel`  | `string` | Rel name of the link. |
| `href` | `string` | URL of the link.      |

### item

| Name      | Type          | Description          |
| :-------- | :------------ | :------------------- |
| `href`    | `string`      | URL of the link.     |
| `summary` | `JSON Object` | Summary of the item. |

### action

| Name                 | Type                 | Description                                                                      |
| :------------------- | :------------------- | :------------------------------------------------------------------------------- |
| `rel`                | `string`             | Rel name of the action.                                                          |
| `title`              | `string`             | Title of the action.                                                             |
| `method`             | `string`             | Method of the action.                                                            |
| `href`               | `string`             | URL of the action.                                                               |
| `schema`             | `JSON Object`        | Full schema of the action.                                                       |
| `propertiesMetadata` | `propertyMetadata[]` | Array with a propertyMetadata object per existing property in the action schema. |



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
