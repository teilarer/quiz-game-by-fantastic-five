import React from 'react';
import * as api from './api'

function Login(): JSX.Element {
  return (
    <form>
      <h4>Авторизация</h4>
      <br />
      <input placeholder='Электронная почта' type="email"></input>
      <br />
      <input placeholder='Введите пароль' type="password"></input>
      <br />
      <button type="submit">Войти</button>
    </form>
  );
}

export default Login;