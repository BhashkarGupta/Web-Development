import React from "react";
import Card from "./Card";
import Contacts from "../contacts";

function App(props) {
  let contactList = [];
  Contacts.forEach((contact, index) => {
    contactList.push(
      <Card
        key={index} // key could not be used as input to tap into as this is required by react, if you need it, create another attribute with different name than key and pass the same value as key
        contactName={contact.name}
        imageSource={contact.imgURL}
        imageName={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
      />
    );
  });
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contactList}
    </div>
  );
}

export default App;
