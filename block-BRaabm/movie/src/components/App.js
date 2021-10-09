import React from 'react';
import data from './data.json';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
      selectedIndex: null,
      modalClose: false,
    };
  }
  handleClick = (index) => {
    this.setState({
      selectedIndex: index,
      modalClose: false,
    });
  };

  handleMouseOver = (i) => {
    this.setState({
      activeIndex: i,
    });
  };

  handleMouseLeave = (i) => {
    this.setState({
      activeIndex: null,
    });
  };
  render() {
    var array = data.map((movie) => movie);

    return (
      <>
        <div className="container">
          <h1>Movie App</h1>
          <ul className="movielist">
            {array.map((movie, i) => {
              return (
                <li
                  className="movie"
                  key={i}
                  onMouseOver={() => this.handleMouseOver(i)}
                  onMouseLeave={() => this.handleMouseLeave(i)}
                >
                  <div className="flex">
                    <img src={movie.Images[0]} alt={movie.Title} />
                    <div className="center">
                      <h2 className="name">{movie.Title}</h2>
                    </div>
                    <div className="center">
                      <p>{movie.Released}</p>
                    </div>
                  </div>
                  <div className="more-info">
                    <p>More Info</p>
                    {this.state.activeIndex === i ? <p>👇️</p> : ''}
                  </div>
                </li>
              );
            })}
          </ul>
          <section
            className={
              this.state.selectedIndex && !this.state.modalClose
                ? 'btn-close'
                : 'hidden'
            }
          >
            <div className="flex justify-end">
              <button
                className=""
                onClick={() =>
                  this.setState({
                    selectedIndex: null,
                    modalClose: true,
                  })
                }
              >
                Close
              </button>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default App;
