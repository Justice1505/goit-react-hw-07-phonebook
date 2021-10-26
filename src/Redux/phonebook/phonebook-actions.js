import { createAction } from "@reduxjs/toolkit";

export const addToPhonebook = createAction("phonebook/add");

export const removeFromPhonebook = createAction("phonebook/remove");

export const filterPhonebook = createAction("phonebok/filter");
