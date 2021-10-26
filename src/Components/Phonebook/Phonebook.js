import styles from "./Phonebook.module.css";
import ContactsList from "../contactList/ContactList";
import FormMain from "../../Components/contatctForm/ContactForm";
import Filter from "../filter/Filter";

const Phonebook = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.Title}>Phonebook</h2>
      <FormMain />
      <h2 className={styles.Title}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Phonebook;
