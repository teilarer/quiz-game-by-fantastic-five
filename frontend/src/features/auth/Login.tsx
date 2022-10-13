import React, { useState } from 'react';
import * as api from './api'

function Login(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleSubmit() {
    event?.preventDefault()
    api.login({email, password})
      .then((user) => console.log(user))
  }

  function handleEmailChange(email: string) {
    setEmail(email)
}

  function handlePassChange(pass: string) {
    setPassword(pass)
}

  return (
    <form onSubmit={handleSubmit}>
      <h4>Авторизация</h4>
      <br />
      <input placeholder='Электронная почта' type="email" value={email} onChange={(event) => handleEmailChange(event?.target.value)} ></input>
      <br />
      <input placeholder='Введите пароль' type="password" value={password} onChange={(event) => handlePassChange(event?.target.value)}></input>
      <br />
      <button type="submit">Войти</button>
    </form>
  );
}

export default Login;