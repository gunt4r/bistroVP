import styles from "./BucataItemForm.module.css";
import Input from "./Input.js";
import { useState, useRef } from "react";
const BucataForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const inputAmount = amountInputRef.current.value;
    if (
      inputAmount.trim().length === 0 ||
      +inputAmount < 1 ||
      +inputAmount > 10
    ) {
      setIsAmountValid(false);
      return;
    }
    

    props.addToCos(+inputAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Cantitate"
        input={{
          id: props.id,
          type: "text",
          min: 1,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button type="submit">Adaugă</button>
      {!isAmountValid && <p>Introdu de la 1 până la 10</p>}
    </form>
  );
};

export default BucataForm;
