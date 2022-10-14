import { Button, Input, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
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
  const errorReg = selector.registerFormError

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secPassword, setSecPassword] = useState<string>('');

  console.log(selector)

  function handleSubmit() {

      event?.preventDefault()
      api.register({name, email, password, secPassword})
        .then((data) => {
          if (data.user) {
            console.log(data)
          dispatch({type: 'auth/registration/success', payload: data.user});
          navigate('/auth/register')
          } else {
          dispatch({type: 'auth/registration/error', payload: data.message}); 
          }
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
    <Container>
    <form onSubmit={handleSubmit}>
      <Typography variant='h5'>Регистрация</Typography>
      <br/>
      <TextField variant='filled' label='Имя' type="text" value={name} onChange={(event) => handleNameChange(event?.target.value)} />
      <TextField variant='filled' label='Электронная почта' type="email" value={email} onChange={(event) => handleEmailChange(event?.target.value)}></TextField>
      <TextField variant='filled' label='Введите пароль' type="password" value={password} onChange={(event) => handlePassChange(event?.target.value)}></TextField>
      <TextField variant='filled' label='Повторите пароль' type="password" value={secPassword} onChange={(event) => handleSecPassChange(event?.target.value)}></TextField>
      <br />
      <Button type="submit">Зарегистрироваться</Button>
    </form>
    <div className='err-form-error'>{errorReg}</div>
    </Container>
  );
}

export default Register;