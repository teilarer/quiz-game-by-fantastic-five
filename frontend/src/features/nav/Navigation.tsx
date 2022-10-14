import { Tabs, Tab } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { applyMiddleware } from 'redux';
import { RootState } from '../../store';
import * as api from '../auth/api'

export default function Navigation({ user }):JSX.Element {
  const dispath = useDispatch();
  const selector = useSelector((globalState: RootState) => globalState.auth);
  console.log(selector, 'eto lejit selector');

  function handleLogout() {
    // event.preventDefault();
    api.logout()
    .then(() => { 
      console.log(selector.user)
      dispath({type: 'auth/user/logout'})})
  }
    return (
<nav>
  <Tabs
    // value={value}
    // onChange={handleChange}
    textColor="secondary"
    indicatorColor="secondary"
    aria-label="secondary tabs example"
  >
     {!selector.user ? (
        <>
    <Tab value="Main Page" label="Главная страница" href="/" />
    <Tab value="Registration" label="Регистрация" href="/auth/register" />
    <Tab value="Login" label="Войти" href="/auth/login" />
        </>
    ) : (
        <>
        <Tab value="Main Page" label="Главная страница" href="/" />
        <Tab value="Logout" label="Выйти" href="#" onClick={handleLogout} />
        <h3>
        Приветствую,
                {selector?.user.name}
                , ваш счёт
                {' '}
                {selector?.user.score}
        </h3>
        </>
        )}
  </Tabs>
</nav>
    );
}
