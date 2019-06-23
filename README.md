# Halstack Client for JavaScript

Halstack Client for JavaScript enables developers to easily work with hypermedia-based APIs programmatically. It offers a set of functionalities to facilitate the navigation between hypermedia resources and get access to their properties dynamically, based on the JSON:API and JSON Hyperschema specifications.

This SDK is released as a client-agnostic library that can be used in many different types of consumers: browser applications (such as React Applications in combination with Halstack Browser) or backend applications (node.js applications or AWS Lambdas).

## Installation

```sh
npm install --save @diaas/api-sdk
```

### Use in Node.js

```js
// require from the dependency the modules you need
const { halNavigator, halResource } = require("@diaas/api-sdk");
```

### Use in browsers

```js
// require from the dependency the modules you need
import { halNavigator, halResource } from "@diaas/api-sdk";
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

### halNavigator

The purpose of this module is facilitating the navigation between resources using hyperlinks. This factory function expects a JSON object with the following properties as a parameter:

| Name         | Type             | Default | Description                                                                                                                                              |
| :----------- | :--------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`        | `string`         | None    | URL of the resource from which the navigation should start.                                                                                              |
| `urlPromise` | `promise:string` | None    | Promise that will resolve into a string with the URL of the resource from which the navigation should start. Use in case the url is still not available. |
| `headers`    | `JSON Object`    | None    | Contains an object with the headers to be sent to every request to the API.                                                                              |

It returns an object with the halNavigator prototype.

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

### halNavigator

| Name                  | Type                    | Description                                                                                                                                                                                                                                                                                                                           |
| :-------------------- | :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `getHALResource`      | `function`              | Receives a callback function as a parameter. It will execute that function passing the halResource object as a parameter, once this resource is fetched.                                                                                                                                                                              |
| `fetchLink`           | `function:halNavigator` | Receives a string with a rel name as a first parameter and returns a halNavigator object for the link with that rel. Accepts a second parameter with a callback function that will be executed once this link is fetched, passing its corresponding halResource object as a parameter.                                                |
| `fetchItemByNumber`   | `function:halNavigator` | Receives as a first parameter position number of the item within the items array, and returns a halNavigator object for that item. Accepts a second parameter with a callback function that will be executed once this item is fetched, passing its corresponding halResource object as a parameter.                                  |
| `fetchItemByFunction` | `function:halNavigator` | Receives a filtering function as a first parameter, and returns a halNavigator object for the first item that passes the test implemented by the provided function. Accepts a second parameter with a callback function that will be executed once this item is fetched, passing its corresponding halResource object as a parameter. |

## Develop

In the first place, clone this repository.

```bash
git clone https://github.dxc.com/DIaaS/diaas-hal-ui.git
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
