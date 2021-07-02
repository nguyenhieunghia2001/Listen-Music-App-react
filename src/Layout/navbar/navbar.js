import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avartar from "../../logo.svg";
import logo from "../../images/logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
     
      <NavbarBrand>
        <Link to="/">
          <img src={logo} alt="" height="35px" />
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className="justify-content-end">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <div className="navCircle">
              <FontAwesomeIcon className="navIcon" icon="cog" />
            </div>
          </NavItem>
          <NavItem>
            <Link to="/profile">
              <div className="navCircle">
                <img src={avartar} alt="" />
              </div>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
