import React from "react";
import styles from "./Header.module.css";
import image from "./image.jpg"
import Cos from "./Cos.js"
import About from "./About.js"
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h2>VP Bistro</h2>
        <Cos onClick={props.changeCartVisibility}/>
      </header>
      <div className={styles['main-image']} >
        <img src={image} alt="#" />
      </div>
      <div>
        <About />
      </div>
    </React.Fragment>
  );
};
export default Header;
