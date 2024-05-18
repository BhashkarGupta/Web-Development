import React from "react";

function Note(prams) {
  return (
    <div className="note">
      <h1>{prams.title}</h1>
      <p>{prams.content}</p>
    </div>
  );
}

export default Note;
