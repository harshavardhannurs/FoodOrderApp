import React from "react";

const Context = React.createContext({
  openCartFn: () => {},
  addItem: () => {},
  cartItems: [],
  finalAmount: "",
  increment: (item) => {},
  decrement: () => {}
});

export default Context;
