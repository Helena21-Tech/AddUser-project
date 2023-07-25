import React from "react";
import styles from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
} 
const Modal = (props) => {
  return <Card className={styles.modal}>
        <div className={styles.header}>
          <h2>Invalid input</h2>
        </div>
        <div className={styles.content}>{props.message}</div>
        <div className={styles.actions}>
          <Button action="button" onClick={props.onClick} >Okay</Button>
        </div>
      </Card>
} 
      
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(<Modal message= {props.message} onClick={props.onClick} />, document.getElementById("modal"))}
    </React.Fragment>
  )
}

export default ErrorModal;