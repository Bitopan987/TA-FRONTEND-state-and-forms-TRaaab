import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }
  handleChange = (event) => {
    this.setState({ message: event.target.value });
  };
  render() {
    return (
      <>
        <div className="main">
          <div className="user-input">
            <input
              value={this.state.message}
              onChange={this.handleChange}
              type="text"
              placeholder="type something"
            />
          </div>
          <ul className="fonts">
            <li className="font">
              <h2>{this.state.message}</h2>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default App;
