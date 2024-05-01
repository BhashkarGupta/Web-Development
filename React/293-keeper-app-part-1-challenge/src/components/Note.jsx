import React from "react";

// const title = "Title";
// const content = "Content";

function Note({title = "Title", content = "Content"}){
    return(
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
}

export default Note;