import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../Redux/phonebook/phonebook-operations';
import s from './ContactList.module.css';
import { getVisibleContacts } from '../../Redux/phonebook/phonebook-selectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const findContact = useSelector(getVisibleContacts);

  return (
    <ul>
      {findContact &&
        findContact.map(contact => {
          return (
            <li className={s.item} key={contact.id}>
              <span className={s.span}>{contact.name}:</span>
              &nbsp;
              <span className={s.span}>{contact.number}</span>
              <button
                className={s.btn}
                type="button"
                id={contact.id}
                onClick={() => dispatch(removeContact(contact.id))}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
