import React from "react";
import "./SingleItem.css";
import Form from "./Form";

const SingleItem = (props) => {
  return (
    <li className="list-item" style={props.style}>
      <div className="item-desc">
        <p className="item-name">{props.name}</p>
        <p className="item-price">Rs.{props.price}/kg</p>
      </div>
      <Form id={props.id} name={props.name} price={props.price} />
    </li>
  );
};

export default SingleItem;
