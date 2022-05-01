import React from "react";
import "./input.css";
const AnsDisplay = (props) => {
  return (
    <input
      className="input"
      value={props.answer}
      placeholder="Answer"
      readOnly
    ></input>
  );
};

export default AnsDisplay;
