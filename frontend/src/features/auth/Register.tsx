import { userInfo } from 'os';
import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import * as api from './api'

function Register(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((globalState: RootState) => globalState.auth)

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secPassword, setSecPassword] = useState<string>('');

  console.log(selector)
  
  function handleSubmit() {

      event?.preventDefault()
      api.register({name, email, password, secPassword})
        .then((user) => {
          dispatch({type: 'auth/registration/success', payload: user});
          // navigate('/auth/register')
        })
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
      {selector.user && <div>{selector.user.name}</div>}
    </form>
  );
}

export default Register;