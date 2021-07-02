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
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SingProvider from "./context/SingContext";
import ProfilePage from "./pages/Profile/profile";

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

const test = () => <h2>nghiadx</h2>;
const test2 = () => <h2>nghiadx2</h2>;
function App() {
  return (
    <SingProvider>
      <Router>
        
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/profile" exact component={ProfilePage} />
        </Switch>
      </Router>
    </SingProvider>
  );
}

export default App;
