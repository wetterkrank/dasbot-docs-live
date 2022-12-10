import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";

const App = () => (
  <>
    <Outlet />
    <Footer />
  </>
);

export default App;
