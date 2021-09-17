import Navbar from "../navbar/Navbar.component";

const Layout = ({ children, user }) => {
  return (
    <div>
      <Navbar user={user} />
      {children}
    </div>
  );
};

export default Layout;
