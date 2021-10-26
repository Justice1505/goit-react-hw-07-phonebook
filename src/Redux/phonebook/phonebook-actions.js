import { createAction } from "@reduxjs/toolkit";

const getPhonebookContactsRequest = createAction("phonebook/get");
const getPhonebookContactsSuccess = createAction("phonebook/getSuccess");
const getPhonebookContactsError = createAction("phonebook/geterror");

const addToPhonebookRequest = createAction("phonebook/add");
const addToPhonebookSuccess = createAction("phonebook/addSuccess");
const addToPhonebookError = createAction("phonebook/addError");

const removeFromPhonebookRequest = createAction("phonebook/remove");
const removeFromPhonebookSuccess = createAction("phonebook/removeSuccess");
const removeFromPhonebookError = createAction("phonebook/removeError");

const filterPhonebook = createAction("phonebok/filter");

export default {
  addToPhonebookRequest,
  addToPhonebookSuccess,
  addToPhonebookError,

  removeFromPhonebookRequest,
  removeFromPhonebookSuccess,
  removeFromPhonebookError,

  getPhonebookContactsRequest,
  getPhonebookContactsSuccess,
  getPhonebookContactsError,

  filterPhonebook,
};
