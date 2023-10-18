import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';

export const Layout = () => {
  return (
    <>
      <header class="p-15">
        <Navigation />
      </header>
      <Outlet />
    </>
  );
};
