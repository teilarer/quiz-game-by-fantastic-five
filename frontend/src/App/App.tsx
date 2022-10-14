import { Routes, Route, Outlet } from 'react-router-dom';
import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Home from '../features/homePage/HomePage';
import Login from '../features/auth/Login';
import Register from '../features/auth/Register';
import { RootState } from '../store';
import Navigation from '../features/nav/Navigation';
import HomePage from '../features/homePage/HomePage';
import Main from '../features/mainPage/MainPage'
function App(): JSX.Element {
  // const selector = useSelector((globalState: RootState) => globalState.auth);
  return (
    <>
      <Navigation />
      <Routes>
        {/* <Route element={<Navigation />}> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        {/* </Route> */}
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
