import React from "react";

function App() {
  const [buttonColor, setButtonColor] = React.useState({
    backgroundColor: "white",
  });
  function blackButton() {
    setButtonColor({ backgroundColor: "black" });
  }
  function whiteButton() {
    setButtonColor({ backgroundColor: "white" });
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={buttonColor}
        onMouseOver={blackButton}
        onMouseOut={whiteButton}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
