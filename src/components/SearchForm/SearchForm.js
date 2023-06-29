import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormAndValidation } from '../../utils/hooks/useFormAndValidation';
import { useEffect } from 'react';

function SearchForm({ onSearch, onSearchShort, setTotalShow, searchValue, isChecked }) {

  const { values, errors, handleChange, isValid, setIsValid, setErrors, resetForm } = useFormAndValidation();

  useEffect(() => {
    resetForm({ ...values, entity: searchValue })
  }, [])

  function handleSearchMovies(e) {
    e.preventDefault();
    if (!values.entity) {
      setIsValid(false);
      setErrors({ ...errors, entity: true });
      return;
    }
    if (isValid) {
      onSearch(values.entity);
      if (window.innerWidth < 461) {
        setTotalShow(5);
      } else {
        setTotalShow(7);
      }

    }
  }


  return (
    <section className="search" aria-label="Поиск фильма">
      <form className="search__form" onSubmit={handleSearchMovies} name="search" noValidate>
        <span className={`search__error ${errors.entity ? 'search__error_active' : ''}`}>Нужно ввести ключевое слово</span>
        <input
          value={values.entity || ''}
          className="search__input"
          type="text" placeholder="Фильм"
          name="entity"
          onChange={handleChange}
        />
        <button className="search__btn" type="submit">Поиск</button>
      </form>
      <FilterCheckbox onSearchShort={onSearchShort} isChecked={isChecked} />
    </section>
  )
}

export default SearchForm;