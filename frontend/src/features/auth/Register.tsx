import React, { useState} from 'react';
import * as api from './api'

function Register(): JSX.Element {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [secPassword, setSecPassword] = useState<string>('');

    function handleSubmit() {
      event?.preventDefault()
      api.register({name, email, password, secPassword})
        .then((user) => console.log(user))
    }

    function handleNameChange(name: string) {
        setName(name)
    }

    function handleEmailChange(email: string) {
        setEmail(email)
    }

    function handlePassChange(pass: string) {
        setPassword(pass)
    }

    function handleSecPassChange(pass: string) {
        setSecPassword(pass)
    }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Регистрация</h4>
      <br />
      <input placeholder='Имя' type="text" value={name} onChange={(event) => handleNameChange(event?.target.value)} />
      <br />
      <input placeholder='Электронная почта' type="email" value={email} onChange={(event) => handleEmailChange(event?.target.value)}></input>
      <br />
      <input placeholder='Введите пароль' type="password" value={password} onChange={(event) => handlePassChange(event?.target.value)}></input>
      <br />
      <input placeholder='Повторите пароль' type="password" value={secPassword} onChange={(event) => handleSecPassChange(event?.target.value)}></input>
      <br />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

export default Register;