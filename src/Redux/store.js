import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./phonebook/phonebook-reducers";

const store = configureStore({
  reducer: contactsReducer,
});

export default store;
