import BucataForm from "./BucataForm";
import classes from "./CosItem.module.css";
import { useContext } from "react";
import Context from "../../store/Context";
const CosItem = (props) => {
  const price = `$${Math.abs(props.price).toFixed(2)}`;

  const cosContext = useContext(Context);

  const addToCosItem = (amount) => {
    cosContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          {props.summary}
{/* 
          <span className={classes.amount}>x {props.amount}</span> */}
        </div>
        <span className={classes.price}>{price}</span>
      </div>
      {<BucataForm addToCos={addToCosItem} id={props.id} />}
    </li>
  );
};

export default CosItem;
