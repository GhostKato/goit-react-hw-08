import { useDispatch, useSelector } from 'react-redux'
import s from './UserMenu.module.css'
import { selectUser } from '../../redux/auth/selectors'
import { logOut } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {

  const navigate = useNavigate();

  const handleClick = () => {    
    dispatch(logOut());
    navigate('/')
  };

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  return (
    <div className={s.container}>      
      <p> {user.name}</p>                          
      <button onClick={handleClick} className={s.btn} type='button'>logout</button>
    </div>
  )
}

export default UserMenu