import React from "react";
import ContactCard from "../ContactCard/ConcactCard";
import "./contactlist.css";

const ContactList = (props) => {
  console.log(props, "props in contact list");
  return (
    <div className="contactList">
      {props.contacts.map((item, index) => (
        <ContactCard
          key={index + "contact"}
          contact={item}
          index={index}
          deleteContact={props.deleteContact}
          updateContact={props.updateContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
