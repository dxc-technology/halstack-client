import React, { Component } from "react";
import { halNavigator } from "@diaas/api-sdk";
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
    const navigator = halNavigator({
      url:
        "https://apig.everest.dxchub.com/evsit/omni-prospect-services/omni/service/prospects",
      headers: { profileid: 12345, userName: "Agent@csc.com" }
    });

    navigator
      .fetchItemByNumber(1)
      .fetchLink("prospect:prospect-risk")
      .getHALResource(halResource => {
        this.setState(() => ({
          actions: halResource.actions
        }));
      });
  }
}

export default App;
