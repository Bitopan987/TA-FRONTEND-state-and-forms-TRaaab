import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  close = () => {
    this.setState({ isOpen: false });
  };
  open = () => {
    this.setState({ isOpen: true });
  };
  render() {
    const { isOpen } = this.state;
    if (!isOpen) {
      return <ClosedCart open={this.open} />;
    }
    return (
      <>
        <aside className="cart">
          <div onClick={this.close} className="close-btn">
            X
          </div>
          <div className="cart-body">
            <div className="cart-heading">
              <div className="card-icon"></div>
              <span className="item-count">4</span>
            </div>
            <h2>Cart</h2>
          </div>
          {this.props.cartItems.map((item) => {
            return <CartItem {...item} />;
          })}
          <div className="cart-checkout">
            <div>
              <p>SUBTOTAL</p>
              <p>$ 199.00</p>
            </div>
            <button>CHECKOUT</button>
          </div>
        </aside>
      </>
    );
  }
}

function ClosedCart(props) {
  return (
    <div className="close-cart">
      <span onClick={props.open} className="open-btn"></span>
      <div className="cart-icon">
        <img alt="cart-icon" src={`/static/products/bag-icon.png`} />
        <span className="item-count">4</span>
      </div>
    </div>
  );
}

export default Cart;
