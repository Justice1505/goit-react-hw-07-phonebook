import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhonebook } from "../../Redux/phonebook/phonebook-operations";
import { getFilterList } from "../../Redux/phonebook/phonebook-selectors";
import ContactItem from "./ContactItem";
import s from "./ContactList.module.css";

const ContactsList = () => {
  const filterList = useSelector(getFilterList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhonebook());
  }, [dispatch]);

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
