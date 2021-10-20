import React from 'react';

function CartItem(props) {
  return (
    <>
      <div className="cart-item">
        <img alt="" src={`/static/products/${props.sku}_2.jpg`} />
        <div className="card-item-details">
          <p className="card-item-name">{props.title}</p>
          <p>
            {props.availableSizes[0]} | {props.style}
          </p>
          <p>quantity:1</p>
        </div>
        <div className="cart-price">
          <p className="cart-cross">x</p>
          <p className="price">{`${props.currencyFormat + props.price}`}</p>
        </div>
      </div>
    </>
  );
}

export default CartItem;
