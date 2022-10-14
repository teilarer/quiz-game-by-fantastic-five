import { Button, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import * as api from './api'
import './Login.css'

function Login(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((globalState: RootState) => globalState.auth)
  const error = selector.loginFormError

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleSubmit() {
    event?.preventDefault()
    api.login({email, password})
      .then((data) => {
        if (data.user) {
        dispatch({type: 'auth/login/success', payload: data.user})
        navigate('/main')
        }
        else {
          dispatch({type: 'auth/login/error', payload: data.message}); 
        }
      })
  }

  function handleEmailChange(email: string) {
    setEmail(email)
}

  function handlePassChange(pass: string) {
    setPassword(pass)
}

  return (
    <Container>
    <form onSubmit={handleSubmit}>
      <Typography variant='h5'>Авторизация</Typography>
      <br />
      <TextField variant='filled' label='Электронная почта' type={email} value={email} onChange={(event) => handleEmailChange(event?.target.value)} ></TextField>
      <TextField variant='filled' label='Введите пароль' type="password" value={password} onChange={(event) => handlePassChange(event?.target.value)}></TextField>
      <br />
      <Button type="submit">Войти</Button>
    </form>
    <div className='err-form-auth'>{error}</div>
    </Container>
  );
}

export default Login;