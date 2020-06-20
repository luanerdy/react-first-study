import React, { useState } from 'react';
import PeopleList from './components/PeopleList.js';
import AddPersonForm from './components/AddPersonForm.js';

export function ContactManager(props) {

  const [contacts, setContacts] = useState(props.data);

  const myStyle = {
    div: {
      margin: "20vh 20vh",
      backgroundColor: "#EFFD5F",
      padding: "20px",
      width: "256px",
      borderRadius: "30px"
    }
  }

  function addPerson(name) {

    setContacts([...contacts, name]);
  }

  const el = (
    <div style={myStyle.div}>
      <h1>Contacts Manager</h1>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );

  return el;
}

export const contacts = ["Luan Menezes", "Duda Morais", "Bruce Wayne"];

