import * as React from 'react';
import './style.css';

export default function App() {
  const initialObject = {
    index: 0,
    name: null,
    age: null,
    phoneNumber: null,
  };
  const [contacts, setContacts] = React.useState([{ ...initialObject }]);

  const handleAdd = () => {
    initialObject.index = contacts.length;
    const abc = [...contacts, initialObject];
    setContacts(abc);
  };

  const handleOnChange = (e, index) => {
    const { id, value } = e.target;
    const updateContact = contacts;
    updateContact[index][id] = value;
    setContacts(updateContact);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {contacts.map((contact) => {
        const { index, name, age, phoneNumber } = contact;
        return (
          <div
            key={index}
            style={{
              margin: '20px',
              border: '2px solid black',
              padding: '30px',
            }}
          >
            <label htmlFor="name">Contact Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => handleOnChange(e, index)}
              id="name"
            />
            <br />
            <br />
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              value={age}
              onChange={(e) => handleOnChange(e, index)}
              id="age"
            />
            <br />
            <br />
            <label htmlFor="phoneNumber">Phone Number: </label>
            <input
              type="number"
              value={phoneNumber}
              onChange={(e) => handleOnChange(e, index)}
              id="phoneNumber"
            />
          </div>
        );
      })}
      <br />
      <button type="button" name="add" onClick={handleAdd}>
        Add Contact
      </button>
    </div>
  );
}
