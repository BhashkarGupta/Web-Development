import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

const Note1 = Note("This is Title", "This is Content");

function App(){
    return(
        <div>
            <Header />
            <Note1 />
            <Footer />
        </div>
    );
}

export default App;