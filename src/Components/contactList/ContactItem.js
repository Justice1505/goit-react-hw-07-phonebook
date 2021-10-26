import React from "react";
import { useDispatch } from "react-redux";
import { removeFromPhonebook } from "../../Redux/phonebook/phonebook-operations";
import s from "./ContactList.module.css";

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const removeFromContact = () => {
    dispatch(removeFromPhonebook(id));
  };
  return (
    <li className={s.item}>
      <p className={s.span}>
        {name} {number}
      </p>
      <button className={s.btn} type="button" onClick={removeFromContact}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
