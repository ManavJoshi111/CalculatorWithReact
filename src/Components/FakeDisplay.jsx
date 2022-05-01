import React from "react";
import { useState } from "react";

const FakeDisplay = () => {
  const [Data, setData] = useState("");
  return (
    <>
      <textarea name="" id="" cols="30" rows="10" value={Data}></textarea>
      <input
        type="button"
        onClick={(e) => setData(e.target.value)}
        value="This is value"
        readOnly
      ></input>
      <input
        type="button"
        onClick={(e) => setData(e.target.value)}
        value="This is value Manav"
        readOnly
      ></input>
      <input
        type="button"
        onClick={(e) => setData(e.target.value)}
        value="This is value Prachi"
        readOnly
      ></input>
      <input
        type="button"
        onClick={(e) => setData(e.target.value)}
        value="This is value Tina"
        readOnly
      ></input>
    </>
  );
};

export default FakeDisplay;
