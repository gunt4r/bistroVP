import Context from "./Context.js";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existCartIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    const existCart = state.items[existCartIndex];

    let updatedItem;
    let updatedItems;

    if (existCart) {
      updatedItem = {
        ...existCart,
        amount: existCart.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existCartIndex] = updatedItem;
    } else {
      updatedItem = {
        ...action.item,
      };
      updatedItems = state.items.concat(updatedItem);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {

    const existCartIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    const existingCartItem = state.items[existCartIndex];

    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existCartIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};
const CosContextProvider = (props) => {
  const [cosState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item: item,
    });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const ContextValue = {
    items: cosState.items,
    totalAmount: cosState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
  );
};

export default CosContextProvider;
