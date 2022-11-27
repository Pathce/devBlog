import React from "react";
import capitalize from "capitalize";

const Btn = (): JSX.Element => {
  return (
    <button onClick={() => {
      alert(capitalize("aaaa"));
    }}>
      {"Button"}
    </button>
  )
}

export default Btn;