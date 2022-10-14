import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../nav/Navigation';

function HomePage(): JSX.Element {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default HomePage;
