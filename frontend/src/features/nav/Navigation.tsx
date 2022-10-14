import { Tabs, Tab } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import style from './nav.module.css';
import '@fontsource/roboto/100.css';

export default function Navigation({}): JSX.Element {
  const selector = useSelector((globalState: RootState) => globalState.auth);
  return (
    <div className={style.navbar}>
      <Tabs
        value="Main"
        // onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        ...{!selector.user ? (
          [
            <Tab key="main" value="Main Page" label="Главная" href="/" />,
            <Tab
              key="register"
              value="Registration"
              label="Регистрация"
              href="/auth/register"
            />,
            <Tab key="login" value="Login" label="Войти" href="/auth/login" />
          ]
        ) : (
          [
            <Tab key="main" value="Main Page" label="Главная" href="/" />,
            <><Tab key="logout" value="Logout" label="Выйти" href="/logout" /><h5>
              Приветствую,
              {selector?.user.name}, ваш счёт {selector?.user.score}
                                                                              </h5>
            </>,
          ]
        )}
      </Tabs>
    </div>
  );
}
