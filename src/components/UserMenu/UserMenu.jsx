import { logOut } from 'components/Redux/auth/operatoins';
import { selectUser } from 'components/Redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div class="flex space-x-10">
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
