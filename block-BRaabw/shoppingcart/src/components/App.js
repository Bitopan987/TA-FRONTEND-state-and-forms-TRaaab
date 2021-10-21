import { products } from './data.json';
import Main from './Main';
import Sidebar from './Sidebar';
import Cart from './Cart';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSizes: [],
      cartItems: [],
    };
  }

  handleAddToCart = (p) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.concat(p),
    }));
  };

  handleClick = (size) => {
    if (this.state.selectedSizes.includes(size)) {
      this.setState((prevState) => ({
        selectedSizes: prevState.selectedSizes.filter((s) => s !== size),
      }));
    } else {
      this.setState((prevState) => ({
        selectedSizes: prevState.selectedSizes.concat(size),
      }));
    }
  };
  render() {
    return (
      <>
        <div className="wrapper flex space-between">
          <Sidebar
            products={products}
            selectedSizes={this.state.selectedSizes}
            handleClick={this.handleClick}
          />
          <Main
            products={products}
            selectedSizes={this.state.selectedSizes}
            handleAddToCart={this.handleAddToCart}
          />
          <Cart cartItems={this.state.cartItems} />
        </div>
      </>
    );
  }
}

export default App;
