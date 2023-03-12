import { Outlet } from 'react-router';

const Container = () => {
  return (
    <div className="h-full w-full sm:max-w-[500px] m-auto text-white bg-gray-dark font-PyeongChang font-normal">
      <Outlet />
    </div>
  );
};
export default Container;
