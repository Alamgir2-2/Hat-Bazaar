import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import './orders.css';
import { deleteShoppingCart, removeFromDb } from "../../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();

  const [cart, setCart] = useState(savedCart);
  console.log(savedCart);

  const hanldeRemoveFromCart = (id) => {
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  }

  const hanldeClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  }

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem 
          key={product.id} 
          product={product}
          hanldeRemoveFromCart = {hanldeRemoveFromCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart 
        cart={cart}
        hanldeClearCart = {hanldeClearCart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
