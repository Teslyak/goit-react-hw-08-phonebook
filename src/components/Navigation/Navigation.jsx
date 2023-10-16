import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">PhoneBook</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
      <UserMenu />
    </div>
  );
};
