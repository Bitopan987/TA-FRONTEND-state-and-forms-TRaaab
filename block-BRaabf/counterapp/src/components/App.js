import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 5,
      max: 15,
    };
  }

  handleIncrement = () => {
    let { step, max, count } = this.state;
    this.setState({
      count: count + step > max ? count : count + step,
    });
  };

  handleDecrement = () => {
    let { step, max, count } = this.state;
    this.setState({
      count: count + step > max ? count : count - step,
    });
  };
  handleReset = () => {
    this.setState({
      count: 0,
    });
  };
  render() {
    return (
      <>
        <center>
          <div className="app1">
            <h1>Lets build a counter app!</h1>
            <h2>{this.state.count}</h2>
            <div className="step">
              <h3>Steps</h3>
              {[5, 10, 15].map((step) => {
                return (
                  <button
                    onClick={() => {
                      this.setState({ step: step });
                    }}
                    className={this.state.step === step ? 'active-step' : ''}
                  >
                    {step}
                  </button>
                );
              })}
            </div>
            <div className="step">
              <h3>Max</h3>
              {[15, 100, 200].map((max) => {
                return (
                  <button
                    onClick={() => {
                      this.setState({ max: max });
                    }}
                    className={this.state.max === max ? 'active-step' : ''}
                  >
                    {max}
                  </button>
                );
              })}
            </div>
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleDecrement}>Decrement</button>
            <button onClick={this.handleReset}>Reset</button>
          </div>
        </center>
      </>
    );
  }
}

export default App;
