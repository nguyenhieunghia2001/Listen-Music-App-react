import React from "react";

import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Layout;
