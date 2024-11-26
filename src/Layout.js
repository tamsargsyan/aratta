import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
