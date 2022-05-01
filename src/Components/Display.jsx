import React from "react";
import AnsDisplay from "./AnsDisplay";
import "./input.css";

let answer = "";
const Display = (props) => {
  return (
    <>
      <input
        className="input"
        type="text"
        value={props.data}
        onChange={(e) => props.setData(e.target.value)}
        onClick={result(props.data)}
        readOnly
      />
      <br />
      <br />
      <AnsDisplay answer={answer} />
    </>
  );
};

const result = (data) => {
  console.log("Data in the result function : ", data);
  if (data == "") answer = "";
  if (data.charAt(data.length - 1) == "=") {
    data = data.slice(0, -1);
    try {
      answer = eval(data);
    } catch (e) {
      console.log("This is catch block");
      answer = "Invalid Expression";
      alert("The expression is invalid");
    }
    console.log(answer);
  }
};
export default Display;
