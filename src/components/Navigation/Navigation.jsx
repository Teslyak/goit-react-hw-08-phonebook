import { selectIsLoggedIn } from 'components/Redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      {isLoggedIn && (
        <div>
          <NavLink to="/contacts">Contacts</NavLink>
          <UserMenu />
        </div>
      )}

      {!isLoggedIn && (
        <div>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
    </div>
  );
};
