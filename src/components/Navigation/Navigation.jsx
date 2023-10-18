import { selectIsLoggedIn } from 'components/Redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <div className="flex justify-between">
        <NavLink to="/" className="mr-4 font-bold text-white hover:text-black ">
          Home
        </NavLink>
        {isLoggedIn && (
          <>
            <NavLink
              to="/contacts"
              className="mr-20 font-bold text-white hover:text-black"
            >
              Contacts
            </NavLink>
            <UserMenu />
          </>
        )}

        {!isLoggedIn && (
          <div>
            <NavLink
              to="/register"
              className="mr-2 font-bold text-white hover:text-black"
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="font-bold text-white hover:text-black"
            >
              Login
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};
