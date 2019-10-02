import React, { Component } from "react";
import { halGet } from "@dxc-technology/halstack-client";

import "./App.css";

class App extends Component {
  state = { resource: null };

  render() {
    return <div className="App">{JSON.stringify(this.state.resource, 4)}</div>;
  }
}

export default App;
