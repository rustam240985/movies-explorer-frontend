import FormTemplate from "../FormTemplate/FormTemplate";
import Input from "../Input/Input";

function Login() {

  return (
    <FormTemplate nameForm="register" title="Рады видеть!" buttonText="Войти" askText="Ещё не зарегистрированы?" linkText="Регистрация" linkTo={'/signup'}>
      <Input fieldtitle="E-mail" type="email" name="email" placeholder="Введите email" required />
      <Input fieldtitle="Пароль" type="password" name="password" placeholder="Введите пароль" required />
    </FormTemplate>
  )
}

export default Login;