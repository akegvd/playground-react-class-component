// read more https://reactjs.org/docs/handling-events.html
// https://reactjs.org/docs/faq-functions.html
import React, { Component } from "react";
import "./styles.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "jhaaa"
    };
  }

  render() {
    return (
      <button onClick={() => this.props.onClick(!this.props.value)}>
        {this.props.value ? "true" : "false"}
      </button>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Click the button to change the state. ",
      buttonValue: true
    };
  }

  handleClickButton(newValue, e) {
    console.log(this, newValue, e);
    // this.setState((prevState) => ({
    //   buttonValue: !prevState.buttonValue
    // }));
    this.setState({
      buttonValue: newValue
    });
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.msg}</p>
        <br />
        <Button
          value={this.state.buttonValue}
          onClick={(newValue) => {
            this.handleClickButton(newValue);
          }}
          // for `function` need to .bind(this), otherwise this will be component
          // onClick={this.handleClickButton.bind(this)}
        />
      </div>
    );
  }
}

export default App;
