import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.removeModal} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content} message={props.message}/>
      <footer className={classes.action}>
        <Button onClick={props.removeModal}>Close</Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop removeModal={props.removeModal} />,
        document.getElementById("backdrop-root")
      )}
      
      {ReactDom.createPortal(
        <ModalOverlay
          title = {props.title}
          message = {props.message}
          removeModal = {props.removeModal}
        />, document.getElementById("overlay-root")
      )}

      
    </>
  );
};

export default Modal;
