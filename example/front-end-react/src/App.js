import React, { Component } from "react";
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
  }
}

export default App;
