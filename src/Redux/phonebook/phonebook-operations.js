import api from "../../Services/Api";
import actions from "./phonebook-actions";

export const getPhonebook = () => {
  const getContacts = async (dispatch) => {
    dispatch(actions.getPhonebookContactsRequest());

    try {
      const data = await api.getAllContacts();
      dispatch(actions.getPhonebookContactsSuccess(data));
    } catch (error) {
      dispatch(actions.getPhonebookContactsError(error));
    }
  };
  return getContacts;
};

export const addToPhonebook = (newContact) => {
  const addContacts = async (dispatch) => {
    dispatch(actions.addToPhonebookRequest());

    try {
      const data = await api.addNewContact(newContact);
      dispatch(actions.addToPhonebookSuccess(data));
    } catch (error) {
      dispatch(actions.addToPhonebookError(error));
    }
  };
  return addContacts;
};

export const removeFromPhonebook = (id) => async (dispatch) => {
  dispatch(actions.removeFromPhonebookRequest());

  try {
    const data = await api.removeContact(id);
    dispatch(actions.removeFromPhonebookSuccess(data));
  } catch (error) {
    dispatch(actions.removeFromPhonebookError(error));
  }
};

export default {
  getPhonebook,
  addToPhonebook,
  removeFromPhonebook,
};
