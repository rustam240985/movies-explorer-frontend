import { useEffect } from "react";
import { useFormAndValidation } from "../../utils/hooks/useFormAndValidation";
import FormTemplate from "../FormTemplate/FormTemplate";
import Input from "../Input/Input";
import { PATTERN_NAME } from "../../utils/constants";

function Register({ onRegister }) {
  const { values, errors, handleChange, isValid, resetForm, setErrors } = useFormAndValidation();

  useEffect(() => {
    console.log('register')
    resetForm();
  }, [])

  useEffect(() => {
    if (errors.name) {
      setErrors({ ...errors, name: 'Имя может содержать латиницу, кириллицу, пробел или дефис' })
    }
  }, [errors.name])

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  }


  return (
    <FormTemplate nameForm="register" title="Добро пожаловать!" buttonText="Зарегистрироваться" askText="Уже зарегистрированы?" linkText="Войти" linkTo={'/signin'} disabled={!isValid} onSubmit={handleSubmit}>
      <Input fieldtitle="Имя" name="name" type="text" placeholder="Введите ваше имя" pattern="^[A-Za-zА-Яа-яЁё\s\-]+$" onChange={handleChange} value={values.name || ''} error={errors.name} minLength="2" maxLength="30" required />
      <Input fieldtitle="E-mail" type="email" name="email" pattern="^[\wа-я\s\d]+@[\wа-я\s\d]+\.[\wа-я\s\d]+$" placeholder="Введите email" onChange={handleChange} value={values.email || ''} error={errors.email} required />
      <Input fieldtitle="Пароль" type="password" name="password" placeholder="Введите пароль" onChange={handleChange} value={values.password || ''} error={errors.password} required />
    </FormTemplate>
  )
}

export default Register;