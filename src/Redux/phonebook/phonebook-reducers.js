import { createReducer } from "@reduxjs/toolkit";
import {
  addToPhonebook,
  removeFromPhonebook,
  filterPhonebook,
} from "./phonebook-actions";
import { generate } from "shortid";
import { combineReducers } from "redux";

const itemsReducer = createReducer([], {
  [addToPhonebook]: (store, { payload }) => {
    const newContact = { ...payload, id: generate() };
    store.push(newContact);
  },
  [removeFromPhonebook]: (store, { payload }) => {
    const idx = store.findIndex(({ id }) => id === payload);
    store.splice(idx, 1);
  },
});

const filterReducer = createReducer("", {
  [filterPhonebook]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});