import React from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className="h-full max-h-[1000px] max-w-md w-full bg-[#272526]">
      <Outlet />
    </div>
  );
};
export default Layout;
