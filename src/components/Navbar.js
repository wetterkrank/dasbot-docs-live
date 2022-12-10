import { Link } from "react-router-dom";

import DasbotLogo from "./DasbotLogo";

const Navbar = () => (
  <nav className="navbar navbar-expand-sm navbar-light bg-light">
    <Link to={`/`} className="navbar-brand">
      <DasbotLogo height="100px" />
    </Link>
  </nav>
);

export default Navbar;
