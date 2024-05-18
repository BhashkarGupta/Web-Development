import React from "react";

let capturedTime = [];

function CapturedTime() {
  capturedTime.push(getCurrentTime());
  return capturedTime.map((time) => {
    <h2>{time}</h2>;
  });
}

function getCurrentTime() {
  let time = new Date().toLocaleTimeString();
  return time;
}

function App() {
  let [currentTime, update] = React.useState(getCurrentTime());

  function updateTime() {
    update(getCurrentTime());
  }
  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <CapturedTime />
      <button onClick={CapturedTime}>Capture Time</button>
    </div>
  );
}

export default App;
