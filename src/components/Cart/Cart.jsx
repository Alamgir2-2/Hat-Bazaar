import React from "react";

const Cart = ({cart}) => {

  // const cart = props.cart; ...1
  // const {cart} = props; .... 2

  return (
    <div>
      <h4>Order Summery</h4>
      <p>Selected Items: {cart.length}</p>
    </div>
  );
};

export default Cart;
