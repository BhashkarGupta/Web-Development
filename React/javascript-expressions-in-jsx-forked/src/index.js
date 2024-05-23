import React from "react";
import ReactDOM from "react-dom";

const fname = "Motu";
const lname = "Deara";
const luckyNumber = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>Your Lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
