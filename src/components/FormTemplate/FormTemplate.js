import { Link } from "react-router-dom";
import "./FormTemplate.css"

function FormTemplate({ nameForm, title, buttonText, askText, linkText, linkTo, children }) {

  return (
    <div className="page-form">
      <Link className="logo page-form__logo" to={'/'}></Link>
      <p className="page-form__title">{title}</p>
      <form className={`form ${nameForm}`} name={nameForm}>
        {children}
        <button className="form__btn" type="submit">{buttonText}</button>
      </form>
      <div className="page-form__ask">
        <span>{askText}</span>
        <Link className="page-form__link" to={linkTo} tabIndex={0}>{linkText}</Link>
      </div>
    </div>
  )
}

export default FormTemplate;