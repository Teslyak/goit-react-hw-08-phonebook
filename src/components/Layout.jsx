import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';

export const Layout = () => {
  return (
    <>
      <header className="bg-sky-500 p-4 drop-shadow-lg ">
        <Navigation />
      </header>
      <Outlet />
    </>
  );
};
