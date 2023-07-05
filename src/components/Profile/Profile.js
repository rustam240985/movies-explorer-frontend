import { useContext, useEffect } from 'react';
import { useFormAndValidation } from '../../utils/hooks/useFormAndValidation';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { AppContext } from '../../contexts/AppContext';

function Profile({ onUpdateProfile }) {
  const { editProfileMessage, setEditProfileMessage, handleLogout } = useContext(AppContext);
  const { name, email } = useContext(CurrentUserContext);
  const { values, errors, handleChange, isValid, resetForm, setIsValid } = useFormAndValidation();

  useEffect(() => {
    setEditProfileMessage({});
    if (values.name === name && values.email === email) {
      setIsValid(false);
    }
  }, [values])

  useEffect(() => {
    resetForm({ ...values, name: name, email: email });
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateProfile(values);
    setIsValid(false);
  }

  return (
    <div className="profile">
      <p className="profile__title">
        Привет, {name}!
      </p>
      <form className="form form-user profile__info" name="form-user" onSubmit={handleSubmit}>
        <label className="form__label form-user__label profile__name">
          <span className="form__caption form-user__caption profile__caption">Имя</span>
          <input className="form__value form-user__value profile__value" type="text" name="name" value={values.name || ''} onChange={handleChange} minLength="2" maxLength="30" pattern="^[A-Za-zА-Яа-яЁё\s\-]+$" required />
          <span className="form__error form-user__error profile__error">{errors.name}</span>
        </label>
        <label className="form__label form-user__label profile__email" style={{ marginBottom: '100px' }}>
          <span className="form__caption form-user__caption profile__caption">E-mail</span>
          <input className="form__value form-user__value profile__value" type="email" name="email" value={values.email || ''} onChange={handleChange} pattern="^[\wа-я\s\d]+@[\wа-я\s\d]+\.[\wа-я\s\d]+$" required />
          <span className="form__error form-user__error profile__error">{errors.email}</span>
        </label>
        <span className={`profile__message ${editProfileMessage.error && !editProfileMessage.success ? 'profile__message_error' : 'profile__message_success'}`}>{editProfileMessage.error || editProfileMessage.success}</span>
        <button className={`profile__edit ${!isValid ? 'profile__edit_disabled' : ''}`} type="submit" disabled={!isValid}>Редактировать</button>
      </form>
      <button className="profile__exit" type="button" onClick={handleLogout}>Выйти из аккаунта</button>
    </div>
  )
}

export default Profile;