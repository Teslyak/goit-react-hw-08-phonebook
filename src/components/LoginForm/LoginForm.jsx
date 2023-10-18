import { logining } from 'components/Redux/auth/operatoins';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logining({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="mt-5 pl-4">
      <label htmlFor="email" className="flex flex=col font-bold">
        Email:
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="mt-2  p-2  border-solid h-10 "
        placeholder="email"
        style={{
          width: '200px',
          border: '1px solid silver',
          borderRadius: '4px',
        }}
      />

      <label htmlFor="password" className="flex flex=col font-bold mt-3 ">
        Password:{' '}
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        className="mt-2  h-10  border-solid p-1"
        style={{
          width: '200px',
          border: '1px solid silver',
          borderRadius: '4px',
        }}
      />

      <button
        type="submit"
        className="flex flex=col mt-3 text-white font-bold  p-1  justify-center "
        style={{
          backgroundColor: 'rgb(14 165 233)',
          width: '80px',
          borderRadius: '4px',
          boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        }}
      >
        Log In
      </button>
    </form>
  );
};
