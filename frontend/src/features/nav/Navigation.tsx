import { Tabs, Tab } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { applyMiddleware } from 'redux';
import { RootState } from '../../store';
import style from './nav.module.css';
import '@fontsource/roboto/100.css';

export default function Navigation({}): JSX.Element {
  const selector = useSelector((globalState: RootState) => globalState.auth);
  return (
    <div className={style.navbar}>
      <Tabs
        // value={value}
        // onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {!selector.user ? (
          <>
            <Tab value="Main Page" label="Main Page" href="/" />
            <Tab
              value="Registration"
              label="Registration"
              href="/auth/register"
            />
            <Tab value="Login" label="Login" href="/auth/login" />
          </>
        ) : (
          <>
            <Tab value="Main Page" label="Main Page" href="/" />
            <h5>
              Приветствую,
              {selector?.user.name}, ваш счёт {selector?.user.score}
            </h5>
            <Tab value="Logout" label="Logout" href="/logout" />
          </>
        )}
      </Tabs>
    </div>
  );
}
