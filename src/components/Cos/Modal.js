import React from "react";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onClick}>
        </div>
    )
}

const WindowModal = (props) => {
    return (
        <div className={styles.modal} >
            <div className={styles.content}>{props.children}</div>
            </div>
    )
}

const Modal = (props) => {
   

    return (
    <React.Fragment>
        <Backdrop onClick={props.onClick} />
        <WindowModal>{props.children}</WindowModal>
    </React.Fragment>
    );
};

export default Modal;
