import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { RootState } from '../../store';
import Navigation from '../nav/Navigation';

function Main(): JSX.Element {
  const selector = useSelector((globalState: RootState) => globalState.auth);
  return (
    <>
      <Navigation user={selector.user} />
      <Outlet />
    </>
  );
}

export default Main;
