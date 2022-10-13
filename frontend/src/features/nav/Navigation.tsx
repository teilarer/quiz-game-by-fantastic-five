import { Tabs, Tab } from '@mui/material';

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
    <Tab value="Main Page" label="Main Page" />
    <Tab value="Registration" label="Registration" />
    <Tab value="Login" label="Login" />
    </>
    ) : (
        <>
        <Tab value="Main Page" label="Main Page" />
        <h3>
        Приветствую,
                {user.name}
                , ваш счёт
                {' '}
                {user.score}
        </h3>
        <Tab value="Logout" label="Logout" />
        </>
        )
    }
    </Tabs>
    </nav>
    )}
