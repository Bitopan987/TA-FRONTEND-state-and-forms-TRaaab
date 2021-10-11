import React from 'react';
import Tags from './Tags.js';
class App extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="title">
            <h1>Our Menu</h1>
          </div>
          <Tags />
        </div>
      </>
    );
  }
}

export default App;
