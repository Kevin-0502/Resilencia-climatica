import React, { useState } from 'react';
import './Navbar.css'
import {
    Navbar,
    NavbarBrand,
    NavItem,
    Nav,
    Collapse,
    NavbarToggler,
    NavLink
} from 'reactstrap';
import udb from '../UDB.png'
import ieee from '../IEEE.png'

function TopBar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
    <div >
        <Navbar color="dark" dark expand="md">
                <NavbarBrand href="#">
                <img
                    alt='UDB'
                    src={udb}
                    style={{
                    height: 70,
                    width: 70
                    }}
                />
                </NavbarBrand>
                <NavbarBrand href="#">
                <img
                    alt='IEEE'
                    src={ieee}
                    style={{
                    height: 70,
                    width: 120
                    }}
                />
                </NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className='navi'>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem className='navi'>
                            <NavLink href="/charts">Charts</NavLink>
                        </NavItem>
                        <NavItem className='navi'>
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
    </div>
    );
}

export default TopBar;