# Halstack Client for JavaScript

Halstack Client for JavaScript enables developers to easily work with hypermedia-based APIs in a declarative manner. It offers a set of functionalities to facilitate the navigation between hypermedia resources and get access to their properties dynamically, based on the [HAL](https://datatracker.ietf.org/doc/html/draft-kelly-json-hal) and [JSON Hyper-Schema](https://json-schema.org/draft/2019-09/json-schema-hypermedia.html) draft specifications, as well as [DXC API guidelines](https://developer.dxc.com/apis) and HAL extensions.

This SDK is released as a client-agnostic library that can be used both in browser applications (such as Vanilla JS, React or Angular applications) or backend applications (NodeJS applications). As such, it is distributed as UMD.

## Structure of this repository

This repository contains two software assets:
1. The Halstack Client library: [./lib](./lib). Documentation of the npm module is maintained in the [README](./lib/README.md) file in that folder.
2. A example apps that use the local copy of the Halstack Client library: [./example](./example)

## Develop

In the first place, clone this repository.

```bash
git clone https://github.com/dxc-technology/dxc-halstack-client.git
```

As stated before, local development is broken into two parts.

First, within the `lib` folder, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

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
