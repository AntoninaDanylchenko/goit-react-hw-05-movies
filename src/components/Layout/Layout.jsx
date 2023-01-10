import { Outlet } from 'react-router-dom';
import Appbar from 'components/Appbar';

const Layout = () => {
  return (
    <>
      <Appbar />
      <Outlet />
    </>
  );
};
export default Layout;
