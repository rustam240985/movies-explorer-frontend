import { Link } from "react-router-dom";
import "./FormTemplate.css"
import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";

function FormTemplate({ nameForm, title, buttonText, askText, linkText, linkTo, children, disabled, onSubmit }) {

  const { isErrorAuth, setErrorAuth } = useContext(AppContext);

  useEffect(() => {
    setErrorAuth(false)
  }, [])

  return (
    <div className="page-form">
      <Link className="logo page-form__logo" to={'/'}></Link>
      <p className="page-form__title">{title}</p>
      <form className={`form form-template ${nameForm}`} name={nameForm} onSubmit={onSubmit}>
        {children}
        {isErrorAuth ? <span className="form__error">Что-то пошло не так! Попробуйте еще раз.</span> : ''}
        <button className={`form__btn ${disabled ? 'form__btn_disabled' : ''}`} type="submit" disabled={disabled}>{buttonText}</button>
      </form>
      <div className="page-form__ask">
        <span>{askText}</span>
        <Link className="page-form__link" to={linkTo} tabIndex={0}>{linkText}</Link>
      </div>
    </div>
  )
}

export default FormTemplate;