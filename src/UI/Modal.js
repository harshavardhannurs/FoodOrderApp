import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import Context from "../store/Context";
import "./Modal.css";

const Backdrop = (props) => {
  const ctx = useContext(Context);
  return <div className="backdrop" onClick={ctx.openCartFn} />;
};

const ModalOverlay = (props) => {
  const ctx = useContext(Context);
  function handleClose() {
    ctx.openCartFn();
  }
  return (
    <div>
      <div className="modal-overlay">
        <h1 className="cart-header">Your Cart</h1>
        {props.children}
        <div className="close-cart">
          <div className="total">
            <span className="total-text">Total amount: </span>
            <span className="total-price">Rs.{ctx.finalAmount}</span>
          </div>
          <div>
            <button onClick={handleClose}>Close</button>
            <button>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlay"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};

export default Modal;
