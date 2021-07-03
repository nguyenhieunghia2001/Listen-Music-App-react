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
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SingProvider from "./context/SingContext";
import ProfilePage from "./pages/Profile/profile";
import Layout from "./Layout/Layout";

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
  faAd,
  faCoffee
);

function App() {
  return (
    <SingProvider>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/profile" exact component={ProfilePage} />
          </Switch>
        </Layout>
      </Router>
    </SingProvider>
  );
}

export default App;
