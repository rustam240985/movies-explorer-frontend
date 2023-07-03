import React, { useEffect, useState } from 'react';
import './FilterCheckbox.css';
import { AMOUNT_CARDS_DESKTOP, AMOUNT_CARDS_MOBILE, WIDTH_MOBILE } from '../../utils/constants';

function FilterCheckbox({ onSearchShort, isChecked, isValid, onSearch, values, errors, setTotalShow, setErrors }) {

  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(isChecked);
  }, [])

  function handleChange(e) {
    setCheck(e.target.checked);
    onSearchShort(e.target.checked);
    if (window.innerWidth < WIDTH_MOBILE) {
      setTotalShow(AMOUNT_CARDS_MOBILE);
    } else {
      setTotalShow(AMOUNT_CARDS_DESKTOP);
    }


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