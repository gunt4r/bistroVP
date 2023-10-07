
import classes from "../bucate/CosItem.module.css";
const CartItem = (props) => {
  const price = `$${ Math.abs( props.totalAmount).toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          {props.summary}

          <span className={classes.price}>x {price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>

      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
