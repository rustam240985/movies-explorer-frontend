import React, { useEffect, useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onSearchShort, isChecked }) {

  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(isChecked);
  }, [])

  function handleChange(e) {
    setCheck(e.target.checked);
    onSearchShort(e.target.checked)
  }

  return (
    <form className="filter-form" name="short">
      <label className="filter-form__label" tabIndex="0">
        <input className="filter-form__checkbox" type="checkbox" name="timeFilter" onChange={handleChange} checked={check || false} />
        Короткометражки
      </label>
    </form>
  )
}

export default FilterCheckbox;