import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      fontSize: '16',
    };
  }
  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };
  handleFontSize = (event) => {
    this.setState({
      fontSize: event.target.value,
    });
  };

  render() {
    let fonts = [
      'Roboto',
      'Poppins',
      'Open Sans',
      'Georama',
      'Noto Sans JP',
      'Oswald',
      'Style Script',
      'Palette Mosaic',
      'Merriweather',
      'Crimson Pro',
    ];
    let size = this.state.fontSize + 'px';
    return (
      <>
        <div className="main">
          <div className="user-input">
            <input
              value={this.state.inputText}
              onChange={this.handleChange}
              type="text"
              placeholder="type something"
            />
            <input
              className="slider"
              value={this.state.fontSize}
              type="range"
              min="16"
              max="100"
              onChange={this.handleFontSize}
            />
          </div>
          <section>
            <ul className="fonts">
              {fonts.map((font) => (
                <div className="flex-50 display-box" key={font}>
                  <h2>{font}</h2>
                  <div>
                    <h2 style={{ fontFamily: font, fontSize: size }}>
                      {this.state.inputText}
                    </h2>
                  </div>
                </div>
              ))}
            </ul>
          </section>
        </div>
      </>
    );
  }
}

export default App;
