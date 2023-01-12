import React from "react";
import CardUI from "../UI/CardUI";
import SingleItem from "./SingleItem";

const FoodItems = (props) => {
  return (
    <CardUI>
      <div className="items-container">
        {props.items.map((item, index) => {
          if (index === props.items.length - 1) {
            const style = { borderBottom: "none" };
            return (
              <SingleItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                style={style}
              />
            );
          }
          return (
            <SingleItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </CardUI>
  );
};

export default FoodItems;
