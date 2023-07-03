import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Errormodal.css";
const Errormodal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>{props.title}</header>
        <p className={classes.content}>{props.message}</p>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Errormodal;
