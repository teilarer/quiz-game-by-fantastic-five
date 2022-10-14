import React from 'react';
import { Outlet } from 'react-router-dom';

function HomePage(): JSX.Element {
  return (
    <Outlet />
  );
}

export default HomePage;
