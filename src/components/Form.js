import React, { useContext, useRef } from "react";
import Context from "../store/Context";
import "./Form.css";

const Form = (props) => {
  const ref = useRef();
  const ctx = useContext(Context);

  function handleClick(event) {
    event.preventDefault();
    const itemSubmitted = {
      name: props.name,
      price: props.price,
      amount: ref.current.value,
      id: props.id,
      cost: props.price
    };
    ctx.addItem(itemSubmitted);
  }

  return (
    <form className="item-form">
      <div>
        <span>Amount: </span>
        <input
          type="number"
          step="1"
          min="1"
          max="5"
          defaultValue="1"
          ref={ref}
        />
      </div>
      <button onClick={handleClick}>Add +</button>
    </form>
  );
};

export default Form;
