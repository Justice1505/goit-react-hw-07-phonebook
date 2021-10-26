import React from "react";
import s from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filterPhonebook } from "../../Redux/phonebook/phonebook-actions";
import { getFilter } from "../../Redux/phonebook/phonebook-selectors";

const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onChange = ({ target }) => {
    dispatch(filterPhonebook(target.value));
  };
  return (
    <label className={s.label}>Find contact by name:
      <input
        className={s.input}
        onChange={onChange}
        value={filter}
        type="text"
        name="filter"
      />
    </label>

  );
};

export default Filter;

