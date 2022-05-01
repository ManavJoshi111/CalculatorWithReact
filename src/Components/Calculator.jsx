import React from "react";
import "./Calculator.css";
import Button from "./Button";
import { useState } from "react";
import Display from "./Display";

const Calculator = () => {
  const [Data, setData] = useState("");
  return (
    <>
      <h2 className="title">Calculator</h2>
      <center>
        <br />
        <Display data={Data} setData={setData} />
        <div className="btncontainer">
          <Button name="+" onClick={() => setData(Data + "+")}></Button>
          <Button name="-" onClick={() => setData(Data + "-")}></Button>
          <Button name="AC" onClick={() => setData("")}></Button>
          <Button name="." onClick={() => setData(Data + ".")}></Button>
          <Button name="/" onClick={() => setData(Data + "/")}></Button>
          <Button name="X" onClick={() => setData(Data + "*")}></Button>
          <Button name="1" onClick={() => setData(Data + "1")}></Button>
          <Button name="2" onClick={() => setData(Data + "2")}></Button>
          <Button name="3" onClick={() => setData(Data + "3")}></Button>
          <Button name="4" onClick={() => setData(Data + "4")}></Button>
          <Button name="5" onClick={() => setData(Data + "5")}></Button>
          <Button name="6" onClick={() => setData(Data + "6")}></Button>
          <Button name="7" onClick={() => setData(Data + "7")}></Button>
          <Button name="8" onClick={() => setData(Data + "8")}></Button>
          <Button name="9" onClick={() => setData(Data + "9")}></Button>
          <Button name="0" onClick={() => setData(Data + "0")}></Button>
          <Button name="00" onClick={() => setData(Data + "00")}></Button>
          <Button name="=" onClick={() => setData(Data + "=")}></Button>
        </div>
      </center>
    </>
  );
};

export default Calculator;
