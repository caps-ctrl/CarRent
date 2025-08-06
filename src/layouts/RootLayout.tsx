import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar></Navbar>
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
