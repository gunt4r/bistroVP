import Header from "./components/Header/header";
import BucataList from "./components/bucate/BucataList";
import Cart from "./components/Cos/Cart.js";
import React, { useState } from "react";

function App() {
  const [VisibleCart, setVisibleCart] = useState(false);

  const showCartHandler = () => {
    setVisibleCart(true);
  };

  const hideCartHandler = () => {
    setVisibleCart(false);
  };

  return (
    <React.Fragment>
      {VisibleCart && <Cart onClick={hideCartHandler} />}
      <Header changeCartVisibility={showCartHandler} />
      <BucataList />
    </React.Fragment>
  );
}

export default App;
