import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {

  return (
    <form className="filter-form">
      <label className="filter-form__label" tabIndex="0">
        <input className="filter-form__checkbox" type="checkbox" defaultChecked />
        Короткометражки
      </label>
    </form>
  )
}

export default FilterCheckbox;