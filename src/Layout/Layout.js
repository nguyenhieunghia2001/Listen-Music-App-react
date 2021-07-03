import React from "react";

import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

export default function ({ children }) {
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
}
