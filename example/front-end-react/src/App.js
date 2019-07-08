import React, { Component } from "react";
import {halGet} from "@dxc-technology/halstack-client"

import "./App.css";

class App extends Component {
  state = { actions: [] };

  render() {
    return (
      <div className="App">
        {this.state.actions.map(action => {
          return <div>{action.method}</div>;
        })}
      </div>
    );
  }

  componentDidMount() {

    //TEST
    const response = halGet({ url:
      "https://apig.everest.dxchub.com/evsit/omni-prospect-services/omni/service/prospects",
    headers: { profileid: 12345, userName: "Agent@csc.com" }
   });

   void(0);
    
  }
}

export default App;
