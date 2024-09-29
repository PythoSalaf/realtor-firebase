import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../Components";

const Layout = () => {
  return (
    <div className="flex w-full flex-col h-screen ">
      <div className="fixed w-full  bg-red-500 py-3">
        <Navbar />
      </div>
      <div className="flex-grow mt-[4rem]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
