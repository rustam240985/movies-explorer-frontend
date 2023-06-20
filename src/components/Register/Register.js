import FormTemplate from "../FormTemplate/FormTemplate";
import Input from "../Input/Input";

function Register() {

  return (
    <FormTemplate nameForm="register" title="Добро пожаловать!" buttonText="Зарегистрироваться" askText="Уже зарегистрированы?" linkText="Войти" linkTo={'/signin'}>
      <Input fieldtitle="Имя" name="name" type="text" placeholder="Введите ваше имя" required />
      <Input fieldtitle="E-mail" type="email" name="email" placeholder="Введите email" required />
      <Input fieldtitle="Пароль" type="password" name="password" placeholder="Введите пароль" required />
    </FormTemplate>
  )
}

export default Register;