import { Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navigation ({user}) {
    return (
<nav>
  <Tabs
    value={value}
    onChange={handleChange}
    textColor="secondary"
    indicatorColor="secondary"
    aria-label="secondary tabs example"
  >
     {!user ? (
        <>
    <Tab value="Main Page" label="Main Page" href="/"/>
    <Tab value="Registration" label="Registration" href="/registration"/>
    <Tab value="Login" label="Login" href="/login"/>
    </>
    ) : (
        <>
        <Tab value="Main Page" label="Main Page" href="/"/>
        <h3>
        Приветствую,
                {user.name}
                , ваш счёт
                {' '}
                {user.score}
        </h3>
        <Tab value="Logout" label="Logout" href="/logout"/>
        </>
        )
    }
    </Tabs>
    </nav>
    )}
