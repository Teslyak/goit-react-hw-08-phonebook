import { logOut } from 'components/Redux/auth/operatoins';
import { selectUser } from 'components/Redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="flex ">
      <p className="mr-10  font-bold text-orange ">{`Welcome, ${user.email}`}</p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className=" font-bold text-white  hover:text-black"
      >
        Logout
      </button>
    </div>
  );
};
