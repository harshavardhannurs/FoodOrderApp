import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./CartBtn.css";
import Context from "../store/Context";

const CartBtn = (props) => {
  const ctx = useContext(Context);
  const [highlighted, setHighlighted] = useState(false);

  const itemsAmount = ctx.cartItems.reduce((prev, curr) => {
    return prev + Number(curr.amount);
  }, 0);

  useEffect(() => {
    setHighlighted(true);

    const timeout = setTimeout(() => {
      setHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [ctx.finalAmount]);

  return (
    <button
      className="cart-btn"
      onClick={ctx.openCartFn}
      disabled={ctx.cartItems.length === 0 ? true : false}
      style={{
        opacity: ctx.cartItems.length === 0 ? "0.6" : null,
        animation: highlighted && "cart-btn-animation 0.3s ease-in backwards"
      }}
    >
      <span className="cart-icon">
        <FontAwesomeIcon icon={faShoppingCart} />
      </span>
      <span className="cart-text">Cart</span>
      <span className="cart-label">{itemsAmount}</span>
    </button>
  );
};

export default CartBtn;
