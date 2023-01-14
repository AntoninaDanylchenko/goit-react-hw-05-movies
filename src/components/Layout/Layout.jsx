import { Outlet } from 'react-router-dom';
import Appbar from 'components/Appbar';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <Appbar />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
