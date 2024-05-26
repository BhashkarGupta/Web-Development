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

  const [name, updatedName] = React.useState("");
  function updateName(event) {
    updatedName(event.target.value);
  }
  const [userName, updatedUserName] = React.useState("");
  function updateUserName() {
    updatedUserName(name);
  }

  return (
    <div className="container">
      <h1>Hello {userName}</h1>
      <input
        name="userName"
        onChange={updateName}
        value={name}
        type="text"
        placeholder="What's your name?"
      />
      <button
        onClick={updateUserName}
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
