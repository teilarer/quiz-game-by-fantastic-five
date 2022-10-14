import { Button, Container } from '@mui/material';
import { useNavigate, Outlet } from 'react-router-dom';
import style from './home.module.css';

function HomePage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <Container maxWidth="sm" />
      <h2 className={style.h2}>Добро пожаловать в игру!</h2>
      {/* <h6 className={style.h6} href="/auth/login">Войдите</h6>
      <h6 className={style.h6}>Или</h6>
      <h6 className={style.h6} href="/auth/register">Зарегистрируйтесь</h6> */}
      <div className={style.asdf}>
      <Button className={style.button} onClick={() => navigate('/auth/login')}>Войдите</Button>
      <h6 className={style.h6}>или</h6>
      <Button className={style.button} onClick={() => navigate('/auth/register')}>Зарегистрируйтесь</Button>

      </div>
    </>
  );
}
 
export default HomePage;
