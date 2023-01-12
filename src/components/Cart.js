import React, { useContext } from "react";
import Context from "../store/Context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(Context);
  return (
    <Modal>
      {ctx.cartItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            cost={item.cost}
          />
        );
      })}
    </Modal>
  );
};

export default Cart;
