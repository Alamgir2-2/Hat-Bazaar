import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = ({ cart, hanldeClearCart, children }) => {
  // const cart = props.cart; ...1
  // const {cart} = props; .... 2

  console.log(cart);

  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if (product.quantity === 0) {
    //   product.quantity = 1;
    // }
    // product.quantity = product.quantity || 1;

    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }

  const tax = (total * 7) / 100;
  const grandTotal = total + totalShipping + tax;

  return (
    <div className="cart">
      <h4>Order Summery</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Prce: ${total}</p>
      <p>Total Shipping Price: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
      <button onClick={hanldeClearCart} className="btn-clear-cart"><span>Clear Cart</span> <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
