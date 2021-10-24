import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getAllContacts } from '../Redux/phonebook/phonebook-operations';
import { getContacts } from '../Redux/phonebook/phonebook-selectors';
import ContactList from './contactList/ContactList';
import ContactForm from './contatctForm/ContactForm';
import Filter from './filter/Filter';
import s from './App.css';

const App = () => {
  const dispatch = useDispatch(getContacts);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [getAllContacts]);

  return (
    <div className="block">
      <h1 className={s.title}>Phonebook</h1>

      <ContactForm />

      <h2 className={s.title}>Contacts</h2>

      <Filter />

      <ContactList />
    </div>
  );
};

export default App;
