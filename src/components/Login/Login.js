import { useEffect } from "react";
import { useFormAndValidation } from "../../utils/hooks/useFormAndValidation";
import FormTemplate from "../FormTemplate/FormTemplate";
import Input from "../Input/Input";

function Login({ onLogin }) {

  const { values, errors, handleChange, isValid, resetForm } = useFormAndValidation();

  useEffect(() => {
    resetForm();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  }

  return (
    <FormTemplate nameForm="register" title="Рады видеть!" buttonText="Войти" askText="Ещё не зарегистрированы?" linkText="Регистрация" linkTo={'/signup'} disabled={!isValid} onSubmit={handleSubmit}>
      <Input fieldtitle="E-mail" type="email" name="email" pattern="^[\wа-я\s\d]+@[\wа-я\s\d]+\.[\wа-я\s\d]+$" placeholder="Введите email" onChange={handleChange} value={values.email || ''} error={errors.email} required />
      <Input fieldtitle="Пароль" type="password" name="password" placeholder="Введите пароль" onChange={handleChange} value={values.password || ''} error={errors.password} required />
    </FormTemplate>
  )
}

export default Login;