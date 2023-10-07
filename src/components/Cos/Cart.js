import React from "react";
import Modal from "./Modal.js";
import styles from "./Cos.module.css";
import Context from "../../store/Context.js";
import { useContext } from "react";
import CartItem from "./CartItem.js";
const Cart = (props) => {
  const context = useContext(Context);

  const totalAmount = `$ ${Math.abs(context.totalAmount).toFixed(2)}`;

  const removeItemFromCart = (id) => {
    context.removeItem(id);
  };

  const addItemToCart = (item) => {
    context.addItem({...item,amount:1});
  };

  const haveLength = context.items.length > 0;
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {context.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addItemToCart.bind(null,item)}
          onRemove={removeItemFromCart.bind(null,item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onClick}>
      <div>
        <ul className={styles["cart-items"]}>{cartItems}</ul>
        <div className={styles.total}>
          <span>Total</span>
          <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onClick}>
            Termină
          </button>
          {haveLength && <button className={styles.button}>Comandă</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
