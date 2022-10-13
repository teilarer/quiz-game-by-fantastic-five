import { Tabs, Tab } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function Navigation({ user }):JSX.Element {
  const selector = useSelector((globalState: RootState) => globalState.auth);
  console.log(selector, 'eto lejit selector');
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
    <Tab value="Main Page" label="Main Page" href="/" />
    <Tab value="Registration" label="Registration" href="/auth/register" />
    <Tab value="Login" label="Login" href="/auth/login" />
        </>
    ) : (
        <>
        <Tab value="Main Page" label="Main Page" href="/" />
        <h3>
        Приветствую,
                {selector?.user.name}
                , ваш счёт
                {' '}
                {selector?.user.score}
        </h3>
        <Tab value="Logout" label="Logout" href="/logout" />
        </>
        )}
  </Tabs>
</nav>
    );
}
