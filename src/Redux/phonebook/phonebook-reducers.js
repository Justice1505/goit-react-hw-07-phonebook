import { createReducer } from "@reduxjs/toolkit";
import actions from "./phonebook-actions";
import { combineReducers } from "redux";

const itemsReducer = createReducer([], {
  [actions.addToPhonebookSuccess]: (store, { payload }) => {
    const newContact = { ...payload };
    store.push(newContact);
  },
  [actions.getPhonebookContactsSuccess]: (_, { payload }) => payload,
  [actions.removeFromPhonebookSuccess]: (store, { payload }) => {
    const idx = store.findIndex(({ id }) => id === payload);
    store.splice(idx, 1);
  },
});

const filterReducer = createReducer("", {
  [actions.filterPhonebook]: (_, { payload }) => payload,
});

const error = createReducer("", {
  [actions.getPhonebookContactsError]: (_, { payload }) => payload,
  [actions.addToPhonebookError]: (_, { payload }) => payload,
  [actions.removeFromPhonebookError]: (_, { payload }) => payload,
  [actions.getPhonebookContactsRequest]: () => "",
  [actions.addToPhonebookRequest]: () => "",
  [actions.removeFromPhonebookRequest]: () => "",
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  error,
});