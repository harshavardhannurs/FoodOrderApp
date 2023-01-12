import React, { useReducer, useState } from "react";
import Description from "./components/Description";
import Header from "./components/Header";
import FoodItems from "./components/FoodItems";
import Cart from "./components/Cart";
import Context from "./store/Context";

const dummyItemsList = [
  {
    id: 0,
    name: "Strawberry",
    price: 320
  },
  {
    id: 1,
    name: "Apples",
    price: 550
  },
  {
    id: 2,
    name: "Tomato",
    price: 25
  },
  {
    id: 3,
    name: "Broccoli",
    price: 180
  }
];

function reducer(state, action) {
  const itemToBeAdded = action.payload;
  console.log("itemToBeAdded", itemToBeAdded);
  const isPresent = state.items.some((item) => {
    return itemToBeAdded.name === item.name;
  });
  const presentIndex = state.items.findIndex((item) => {
    return itemToBeAdded.name === item.name;
  });
  console.log("isPresent", isPresent);
  console.log("presentIndex", presentIndex);

  if (action.type === "ADD_ITEM") {
    if (!isPresent) {
      const totalPrice = +action.payload.amount * action.payload.price;
      const item = {
        name: action.payload.name,
        price: totalPrice,
        amount: String(action.payload.amount),
        id: action.payload.id,
        cost: action.payload.cost
      };
      console.log("Item", item);
      const itemsList = state.items.concat([item]);
      const finalAmount = state.finalAmount + totalPrice;
      return { items: itemsList, finalAmount: finalAmount };
    } else {
      console.log("Item already present");
      const totalPrice =
        state.items[presentIndex].price +
        +action.payload.amount * +action.payload.price;
      const item = {
        name: action.payload.name,
        price: totalPrice,
        amount: String(
          +state.items[presentIndex].amount + +action.payload.amount
        ),
        id: action.payload.id,
        cost: action.payload.cost
      };
      console.log("Item", item);
      const finalAmount =
        state.finalAmount + action.payload.price * action.payload.amount;
      state.items[presentIndex] = item;
      return { items: state.items, finalAmount: finalAmount };
    }
  }

  if (action.type === "INCREMENT") {
    state.items[presentIndex].amount =
      +state.items[presentIndex].amount + action.payload.amount;
    state.items[presentIndex].price += action.payload.cost;
    const finalAmount = state.finalAmount + action.payload.cost;
    console.log(state.items);
    return { items: state.items, finalAmount: finalAmount };
  }

  if (action.type === "DECREMENT") {
    const index = state.items.findIndex((item) => {
      return item.id === action.payload;
    });
    const cost = state.items[index].cost;
    if (state.items[index].amount === 1) {
      const itemsList = state.items.filter((item) => {
        return action.payload !== item.id;
      });
      const finalAmount = state.finalAmount - cost;

      return { items: itemsList, finalAmount: finalAmount };
    }
    state.items[index].amount -= 1;
    state.items[index].price -= cost;
    const finalAmount = state.finalAmount - cost;
    return { items: state.items, finalAmount: finalAmount };
  }
}

const App = () => {
  const [openCart, setOpenCart] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    finalAmount: null
  });

  function addItem(itemObj) {
    console.log(itemObj);
    dispatch({ type: "ADD_ITEM", payload: itemObj });
  }

  const openCartFn = () => {
    setOpenCart((prev) => {
      return !prev;
    });
  };

  function increment(itemObject) {
    console.log(itemObject);
    dispatch({ type: "INCREMENT", payload: itemObject });
  }

  function decrement(id) {
    dispatch({ type: "DECREMENT", payload: id });
  }

  return (
    <Context.Provider
      value={{
        openCartFn: openCartFn,
        addItem: addItem,
        cartItems: state.items,
        finalAmount: state.finalAmount,
        increment: increment,
        decrement: decrement
      }}
    >
      {openCart && <Cart />}
      <Header />
      <Description />
      <FoodItems items={dummyItemsList} />
    </Context.Provider>
  );
};

export default App;
