import React from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";
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
