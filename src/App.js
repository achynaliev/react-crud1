import "./App.css";
import { useState } from "react";
import ContactAdd from "./components/ContactAdd/ContactAdd.jsx";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContact] = useState([]);
  function addContact(cont) {
    console.log(cont);

    let contactsArr = [...contacts, cont];
    setContact(contactsArr);
  }

  function updateContact(cont, index) {
    console.log(cont, index);
    let contactsArr = [...contacts];
    contactsArr.splice(index, 1, cont);
    setContact(contactsArr);
  }

  function deleteContact(index) {
    console.log(index);
    let contactsArr = [...contacts];
    contactsArr.splice(index, 1);
    setContact(contactsArr);
  }
  return (
    <div className="App">
      <ContactAdd addContact={addContact} />
      <ContactList
        contacts={contacts}
        updateContact={updateContact}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
