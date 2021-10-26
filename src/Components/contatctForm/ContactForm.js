import React, { useRef } from "react";
import { generate } from "shortid";
import { useState } from "react";
import s from "./ContactForm.module.css";
import FormData from "../Phonebook/formData";
import { useSelector, useDispatch } from "react-redux";
import { addToPhonebook } from "../../Redux/phonebook/phonebook-actions";

const ContactForm = () => {
  const contacts = useSelector((store) => store.items);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputIdRef = useRef(generate());
  const numberInputIdRef = useRef(generate());

  const addToContact = () => {
    const isAvailableName = contacts.find((contact) => contact.name === name);
    const isAvailableNumber = contacts.find(
      (contact) => contact.number === number
    );
    if (isAvailableName) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (isAvailableNumber) {
      alert(`${number} is already in contacts`);
      return;
    }
    const action = addToPhonebook({ name, number });
    dispatch(action);
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToContact();
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label} htmlFor={nameInputIdRef.current}>
            Name:
            <input
              {...FormData.name}
              className={s.input}
              required
              value={name}
              onChange={changeName}
              id={nameInputIdRef.current}
            />
          </label>
          <label className={s.label} htmlFor={numberInputIdRef.current}>
            Number:
            <input
              {...FormData.number}
              className={s.input}
              required
              value={number}
              onChange={changeNumber}
              id={numberInputIdRef.current}
            />
          </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
    </form>
  );
};

export default ContactForm;
