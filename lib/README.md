# Halstack Client for JavaScript

Halstack Client for JavaScript enables developers to easily work with hypermedia-based APIs in a declarative manner. It offers a set of functionalities to facilitate the navigation between hypermedia resources and get access to their properties dynamically, based on the [HAL](https://datatracker.ietf.org/doc/html/draft-kelly-json-hal) and [JSON Hyper-Schema](https://json-schema.org/draft/2019-09/json-schema-hypermedia.html) draft specifications, as well as [DXC API guidelines](https://developer.dxc.com/apis) and HAL extensions.

This SDK is released as a client-agnostic library that can be used both in browser applications (such as Vanilla JS, React or Angular applications) or backend applications (NodeJS applications). As such, it is distributed as UMD.

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
  HalApiCaller,
} = require("@dxc-technology/halstack-client");
```

### Use in browsers

```js
// require from the dependency the modules you need
import {
  HalResource,
  HalResponse,
  HalApiCaller,
} from "@dxc-technology/halstack-client";
```

## HalResource Factory

The purpose of this module is facilitating the access to the information of a given resource. This factory function receives a JSON object with the HAL Resource Representation as a parameter.

It returns a [HalResource Object](#halresource-object), encapsulating the original HAL Resource Representation and including a set of functions that will allow you to access the data from the resource in a declarative manner, without having to fully understand the details of how HAL resource representation is structured.

The `HalResource` can also be used to help developers to create a compliant `HalResource` representation to be included in a Hal response, exposing functions to add different sections that typically can be found in a resource.

### HalResource Object

| Name                     | Type                       | Description                                                                                                                                                                                                                         |
| :----------------------- | :------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resourceRepresentation` | `Object`                   | The whole resource representation.                                                                                                                                                                                                  |
| `getTitle`               | `()=>String`               | Returns the resource title. Taken from `\_options.title`.                                                                                                                                                                           |
| `getInteractions`        | `()=>HalInteraction[]`     | Returns an array of [HalInteraction](#halinteraction-object) objects. Taken from the `\_options.links` array.                                                                                                                       |
| `getInteraction`         | `(String)=>HalInteraction` | Receives a string with the `rel` of the interaction. Returns the [HalInteraction](#halinteraction-object) object.                                                                                                                   |
| `getItems`               | `()=>Object[]`             | Returns an array of the original item link objects. Taken from the `\_links.item` array.                                                                                                                                            |
| `getItem`                | `(Number)=>Object`         | Receives the index of the item. Returns the item object.                                                                                                                                                                            |
| `getLinks`               | `()=>Object[]`             | Returns an array of the original link objects (adding the `rel`), ignoring `item` link. Taken from the `\_links` object.                                                                                                            |
| `getLink`                | `(String)=>Object`         | Receives a string with the `rel` of the link. Returns the link object (adding the `rel`).                                                                                                                                           |
| `getProperties`          | `()=>Object[]`             | Returns an array of [HalProperty](#halproperty-object) objects. Taken from the resource root level properties.                                                                                                                      |
| `getProperty`            | `(String)=>Object`         | Receives a string with the key of the property. Returns the [HalProperty](#halproperty-object) object.                                                                                                                              |
| `getRequiredProperties`  | `()=>String[]`             | Returns an array with the required properties key. Taken from the `\_options.required` array.                                                                                                                                       |
| `isPropertyRequired`     | `(String)=>Bool`           | Receives the key of a property. Returns true if it exists within the `\_options.required` array.                                                                                                                                    |
| `getSchemaProperties`    | `()=>Object[]`             | Returns an array of the original schema objects for properties (adding `key`). Taken from the `\_options.properties` object.                                                                                                        |
| `getSchemaProperty`      | `(String)=>Object`         | Receives the key of a property. Returns the property's schema object (adding `key`) if exists within `\_options.properties` object.                                                                                                 |
| `addLink`                | `(Object)=>void`           | Receives an object as parameter. This object can contain the usual link properties as { `rel`, `name`, `href`, `title` } where `rel` and `href` are required. The `object` will be added to the `\links` section using `rel` as key |
| `addLinks`               | `(Object)=>void`           | Receives an object as parameter. This object can contain the usual link properties as { `rel`, `name`, `href`, `title` } where `rel` and `href` are required. The object will be added to the `\links` section using `rel` as key   |
| `addTitle`               | `(String)=>void`           | Assign the parameter received to the resource title in `\_options`.title                                                                                                                                                            |
| `addItem`                | `(Object)=>void`           | Add the object received as parameter as a resource `\_link` item                                                                                                                                                                    |
| `addItems`               | `(Object[])=>void`         | Add every object in the list received as parameter as a resource `\_link` item.                                                                                                                                                     |
| `addProperties`          | `(Object)=>void`           | Add the key:values found in the object received as parameter as resource properties.                                                                                                                                                |
| `addOptionsProperties`   | `(Object)=>void`           | Add every property received in parameter as property under the `\_options.properties` section                                                                                                                                       |
| `addOptionsProperty`     | `(Object)=>void`           | Add the property ({key: schema}) received in parameter as property under the `\_options.properties` section                                                                                                                         |
| `addInteraction`         | `(Object)=>void`           | Add the object received as parameter (`{rel: Interaction}`) under the `options.link` section                                                                                                                                        |
| `addOptions`             | `(Object)=>void`           | It receives an object as parameter and add interactions , properties, required and title if those sections are found as object keys.                                                                                                |

### HalInteraction Object

Includes the existing attributes of the original interaction object. It provides the following additional helper functions:

| Name                    | Type               | Description                                                                                                                                          |
| :---------------------- | :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getRequiredProperties` | `()=>String[]`     | Returns an array with the required properties key. Taken from the "schema.required" array of the interaction.                                        |
| `isPropertyRequired`    | `(String)=>Bool`   | Receives the key of a property. Returns true if it exists within the "schema.required" array of the interaction.                                     |
| `getSchemaProperties`   | `()=>Object[]`     | Returns an array of the original schema objects for properties (adding `key`). Taken from the `\schema.properties` object of the interaction.        |
| `getSchemaProperty`     | `(String)=>Object` | Receives the key of a property. Returns the property's schema object (adding `key`) if exists within `\schema.properties` object of the interaction. |
| `hasProperty`           | `(String)=>Bool`   | Receives the key of a property. Returns true if it exists within the `\schema.properties` object of the interaction.                                 |

### HalProperty Object

| Name                  | Type             | Description                                                                                                                                       |
| :-------------------- | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| `isRequired`          | `()=>Bool`       | Returns true if the property exists within the `\_options.required` array.                                                                        |
| `existsInInteraction` | `(String)=>Bool` | Receives a string with the `rel` of an interaction. Returns true if the property exists within the "schema.properties" object of the interaction. |
| `getSchema`           | `()=>Object`     | Returns the property's schema object (adding `key`) if exists within `\_options.properties` object.                                               |

## HalResponse Factory

The purpose of this module is facilitating the access to the information returned inside an API response. This factory function accepts an object with the following attributes as a parameter:

| Name      | Type     | Description                                                                                                                                        |
| :-------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| `body`    | `Object` | The message-body is the data bytes transmitted associated with a http response.                                                                    |
| `headers` | `Object` | Contains the http headers which provide information about the server and about further access to the resource identified by the Request-URI.       |
| `status`  | `Number` | Status codes are issued by a server in response to a client's request made to the server. It includes codes from IETF Request for Comments (RFCs). |

It returns [HalResponse Object](#halresponse-object).

### HalResponse Object

| Name                  | Type          | Description                                                                                        |
| :-------------------- | :------------ | :------------------------------------------------------------------------------------------------- |
| `body`                | `JSON Object` | Response message-body                                                                              |
| `headers`             | `JSON Object` | Http headers                                                                                       |
| `status`              | `Number`      | Https response code                                                                                |
| `type`                | `String`      | Response format. Example: application/JSON                                                         |
| `halResource`         | `HalResource` | [HalResource Object](#halresource-object) composed using the information provided inside the body. |
| `containsHalResource` | `Bool`        | True if the content of the response is a HAL resource.                                             |

## HalApiCaller Module

This module is a HTTP client which takes care of handing out parsed `HalResponses`. It exports the following functions:

| Name               | Type                            | Description                                                                                                                     |
| :----------------- | :------------------------------ | :------------------------------------------------------------------------------------------------------------------------------ |
| `setGlobalHeaders` | `function`                      | Receives a headers object that will be used for all http requests done with this module.                                        |
| `get`              | `function:Promise(HalResponse)` | Receives a `{ url, headers }` object as a parameter. Returns a promise and will pass a HalResponse object to the handler.       |
| `options`          | `function:Promise(HalResponse)` | Receives a `{ url, headers }` object as a parameter. Returns a promise and will pass a HalResponse object to the handler.       |
| `patch`            | `function:Promise(HalResponse)` | Receives a `{ url, body, headers }` object as a parameter. Returns a promise and will pass a HalResponse object to the handler. |
| `post`             | `function:Promise(HalResponse)` | Receives a `{ url, body, headers }` object as a parameter. Returns a promise and will pass a HalResponse object to the handler. |
| `put`              | `function:Promise(HalResponse)` | Receives a `{ url, body, headers }` object as a parameter. Returns a promise and will pass a HalResponse object to the handler. |
| `del`              | `function:Promise(HalResponse)` | Receives a `{ url, headers }` object as a parameter. Returns a promise and will pass a `HalResponse` object to the handler.     |


# License

See Halstack Client License [here](./LICENSE)

## To Do

See our [issues](https://github.com/dxc-technology/halstack-client/issues)