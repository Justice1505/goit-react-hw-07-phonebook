import React from "react";
import { useSelector } from "react-redux";
import { getFilterList } from "../../Redux/phonebook/phonebook-selectors";
import ContactItem from "./ContactItem";
import s from "./ContactList.module.css";

const ContactsList = () => {
  const filterList = useSelector(getFilterList);

  return (
    <>
      <ul className={s.list}>
        {filterList.map(({ name, number, id }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
