import React from 'react';
import data from './data.json';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalOpen: false,
    };
  }
  render() {
    var array = data.map((movie) => movie);
    return (
      <>
        <div className="container">
          <h1>Movie App</h1>
          <ul className="movielist">
            {array.map((movie) => {
              return (
                <li key={movie.title}>
                  <img src={movie.Images[0]} alt={movie.Title} />
                  <h2>{movie.Title}</h2>
                  <p>{movie.Released}</p>
                  <a href="#go">
                    <button onClick={() => this.handleModal(movie)}>
                      More Info
                    </button>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
