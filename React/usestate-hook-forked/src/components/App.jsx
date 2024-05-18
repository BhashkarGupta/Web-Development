import React from "react";

function App() {
  let [Count, setCount] = React.useState(0);
  function increase() {
    setCount(Count + 1);
  }
  function decrease() {
    setCount(Count - 1);
  }
  return (
    <div className="container">
      <h1>{Count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
