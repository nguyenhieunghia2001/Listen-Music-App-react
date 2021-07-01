import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCog,
  faHeart,
  faRedo,
  faStepBackward,
  faPause,
  faPlay,
  faStepForward,
  faRandom,
  faAd,
} from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import HomePage from "./pages/Home/HomePage";
import SingProvider from "./context/SingContext";

library.add(
  fab,
  faCog,
  faHeart,
  faRedo,
  faStepBackward,
  faPause,
  faPlay,
  faStepForward,
  faRandom,
  faAd
);

function App() {
  return (
    <SingProvider>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <HomePage />
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </SingProvider>
  );
}

export default App;
