import css from './UserMenu.module.css';
import user from '../../images/avatar.jpg';
import unknownUser from '../../images/unknown.png';
import { logoutOperation } from 'redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail, selectUserName } from 'redux/auth/auth-selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  const userName = useSelector(selectUserName);

  const handleLogout = () => {
    dispatch(logoutOperation());
  };

  return (
    <aside className={css.sidebar}>
      <div className={css.wrapper}>
        {userName === 'Guest' ? (
          <img className={css.avatar} src={unknownUser} alt="avatar" />
        ) : (
          <img className={css.avatar} src={user} alt="avatar" />
        )}

        <p className={css.name}>{userName}</p>

        {userEmail !== '' && <p className={css.email}>{userEmail}</p>}
        {userName !== 'Guest' && (
          <button onClick={handleLogout} className={css.button} type="button">
            Logout
          </button>
        )}
      </div>
    </aside>
  );
};
