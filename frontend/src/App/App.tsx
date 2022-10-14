import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Main from '../features/homePage/HomePage';
import Login from '../features/auth/Login';
import Register from '../features/auth/Register';
import MainPage from '../features/mainPage/MainPage';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/main" element={<MainPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
