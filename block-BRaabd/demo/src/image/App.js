import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'basketball',
    };
  }
  render() {
    let labels = ['basketball', 'pubg', 'tiger', 'phone', 'laptop', 'cricket'];
    return (
      <>
        <div className="container">
          <div className="btn-div">
            {labels.map((label) => {
              return (
                <button
                  key={label}
                  className={this.state.active === label ? 'active' : ''}
                  onClick={() => {
                    this.setState({
                      active: label,
                    });
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <div className="img-div">
            <img
              alt={this.state.active}
              src={`./images/${this.state.active}.jpg`}
            ></img>
          </div>
        </div>
      </>
    );
  }
}

export default App;
