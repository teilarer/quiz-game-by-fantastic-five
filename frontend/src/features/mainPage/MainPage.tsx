import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyMiddleware } from 'redux';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ThemeComponent from '../themeComponent/ThemeComponent';
import * as api from '../themeComponent/api';
import Theme from '../themeComponent/types/Theme';
import './MainPage.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  // display: 'flex',
  // flexDirection: 'column',
  color: theme.palette.text.secondary,
}));


function MainPage(): JSX.Element {
  const dispatch = useDispatch();
   const selector = useSelector((globalState: any) => globalState.themesState);
   const { themes } = selector;
   console.log(themes);

   useEffect(() => {
    api.getThemes()
     .then((themeses) => dispatch({ type: '/themes/loaded', payload: themeses }));
   }, []);

  return (
    <Stack direction="row">
      <div className="stack">
    {
        themes.map((theme: Theme) => (
          <Item key={theme.id}> <ThemeComponent theme={theme} /></Item>
)

        )
      }
      </div>
    </Stack>
  );
}

export default MainPage;
