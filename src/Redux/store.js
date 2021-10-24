import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import phonebookReducer from './phonebook/phonebook-reducers';

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: { contacts: phonebookReducer },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
