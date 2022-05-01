import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <input
      type="button"
      className="btn"
      value={props.name}
      onClick={() => props.onClick(props.name)}
    ></input>
  );
};

export default Button;
