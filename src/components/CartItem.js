import React, { useContext } from "react";
import Context from "../store/Context";

const CartItem = (props) => {
  const ctx = useContext(Context);

  function increment(item) {
    ctx.increment(item);
  }

  function decrement(id) {
    ctx.decrement(props.id);
  }

  return (
    <li>
      <div className="cart-item-desc">
        <span className="cart-item-name">{props.name}</span>
        <span className="cart-item-amount">X {props.amount}kg</span>
      </div>
      <div className="cart-item-cost">
        <button
          className="plus-btn"
          onClick={increment.bind(null, {
            name: props.name,
            price: props.price,
            amount: 1,
            cost: props.cost
          })}
        >
          +
        </button>
        <button className="minus-btn" onClick={decrement}>
          -
        </button>
        <span className="cart-item-price">Rs.{props.price}</span>
      </div>
    </li>
  );
};

export default CartItem;
