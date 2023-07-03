import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormAndValidation } from '../../utils/hooks/useFormAndValidation';
import { useEffect } from 'react';
import { AMOUNT_CARDS_DESKTOP, AMOUNT_CARDS_MOBILE, WIDTH_MOBILE } from '../../utils/constants';

function SearchForm({ onSearch, onSearchShort, setTotalShow, searchValue, isChecked, required }) {

  const { values, errors, handleChange, isValid, setIsValid, resetForm, setErrors } = useFormAndValidation();

  useEffect(() => {
    if (searchValue) {
      resetForm({ ...values, entity: searchValue });
      setIsValid(true);
    }
  }, [])

  function handleSearchMovies(e) {
    e.preventDefault();
    if (isValid) {
      onSearch(values.entity);
      if (window.innerWidth < WIDTH_MOBILE) {
        setTotalShow(AMOUNT_CARDS_MOBILE);
      } else {
        setTotalShow(AMOUNT_CARDS_DESKTOP);
      }
    } else if (!values.entity && !isValid) {
      setErrors({ ...errors, entity: true });
      return;
    }
  }


  return (
    <section className="search" aria-label="Поиск фильма">
      <form className="search__form" onSubmit={handleSearchMovies} name="search" noValidate>
        <span className={`search__error ${!isValid ? 'search__error_active' : ''}`}>Нужно ввести ключевое слово</span>
        <input
          value={values.entity || ''}
          className="search__input"
          type="text" placeholder="Фильм"
          name="entity"
          onChange={handleChange}
          required={required}
        />
        <button className="search__btn" type="submit">Поиск</button>
      </form>
      <FilterCheckbox onSearchShort={onSearchShort} isChecked={isChecked} isValid={isValid} values={values} onSearch={onSearch} setTotalShow={setTotalShow} errors={errors} setErrors={setErrors} />
    </section>
  )
}

export default SearchForm;