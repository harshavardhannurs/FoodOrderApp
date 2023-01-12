import React from "react";
import "./Header.css";
import CartBtn from "./CartBtn";

const Header = () => {
  return (
    <header className="header">
      <div className="brand-name">ReactFoods</div>
      <CartBtn />
    </header>
  );
};

export default Header;
