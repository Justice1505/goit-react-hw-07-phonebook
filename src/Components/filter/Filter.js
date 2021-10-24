import React from 'react';

import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { findContact } from '../../Redux/phonebook/phonebook-actions';
import { getFilter } from '../../Redux/phonebook/phonebook-selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;

    dispatch(findContact(value));
  };

  return (
    <label className={s.label}>
      Find contacts by name:
      <input
        className={s.filterInput}
        name="filter"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;

