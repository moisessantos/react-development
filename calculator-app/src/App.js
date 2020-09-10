import React, { Component } from 'react';

import Result from './components/Result';
import { KeyPad } from './components';
import { ClickContext } from './ClickContext';

class App extends Component {
  constructor(){
      super();

      this.state = {
          result: ""
      }
  }

  onClick = button => {
      if(button === "="){
          this.calculate();
      } else if(button === "C"){
            this.reset();
      } else if(button === "CE"){
          this.backspace();
      } else {
          this.setState({ result: this.state.result + button });
      }
  };

  reset = () => {
    this.setState({ result: "" });
  };

  calculate = () => {
      let { result } = this.state;
      result = this.state.result.includes('--') ? result.replace('--','+') : result;

      try {
          this.setState({
              // eslint-disable-next-line
              result: eval(result) + ""
          })
      } catch (e) {
          this.setState({
              result: "error"
          })
      }
  };

  backspace = () => {
      this.setState({
          result: this.state.result.slice(0, -1)
      })
  };

  render() {
      return (
          <div>
              <div className="calculator-body">
                  <h1>Simple Calculator</h1>
                  <Result>{this.state.result}</Result>
                  <ClickContext.Provider value={this.onClick}>
                    <KeyPad />
                  </ClickContext.Provider>
              </div>
          </div>
      );
  }
}

export default App;