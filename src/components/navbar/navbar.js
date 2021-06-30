import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import avartar from '../../logo.svg'
import logo from '../../images/logo.png'
import './navbar.css'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><img src={logo} alt="" height="35px" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className="justify-content-end">
                    <Nav className="mr-auto" navbar >
                        <NavItem>
                            <div className="navCircle">
                                <FontAwesomeIcon className="navIcon" icon="cog" />
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="navCircle">
                                <img src={avartar} alt="" />
                            </div>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;