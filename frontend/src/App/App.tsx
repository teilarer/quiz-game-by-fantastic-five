import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Home from '../features/homePage/HomePage';
import Login from '../features/auth/Login';
import Register from '../features/auth/Register';
import MainPage from '../features/mainPage/MainPage';
import { RootState } from '../store';
import Navigation from '../features/nav/Navigation';
import HomePage from '../features/homePage/HomePage';

function App(): JSX.Element {
  // const selector = useSelector((globalState: RootState) => globalState.auth);
  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
