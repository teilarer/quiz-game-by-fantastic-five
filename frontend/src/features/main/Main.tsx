import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../nav/Navigation';

function Main(): JSX.Element {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default Main;
