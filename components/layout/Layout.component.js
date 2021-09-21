import Navbar from "../navbar/Navbar.component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Layout = ({ children, user }) => {
  return (
    <div>
      <Navbar user={user} />
      <ToastContainer />
      {children}
    </div>
  );
};

export default Layout;
