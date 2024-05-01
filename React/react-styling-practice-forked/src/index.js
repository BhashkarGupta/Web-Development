import React from "react";
import ReactDOM from "react-dom";

const dynamicColor = { color: "black" };

function wishUser() {
  const currentTime = new Date().getHours();

  if (currentTime < 12) {
    dynamicColor.color = "red";
    return "Good Morning!";
  } else if (currentTime < 18) {
    dynamicColor.color = "green";
    return "Good Afternoon!";
  } else {
    dynamicColor.color = "blue";
    return "Good Evening!";
  }
}

ReactDOM.render(
  <div>
    <h1 style={dynamicColor} className="heading">
      {wishUser()}
    </h1>
  </div>,
  document.getElementById("root")
);
