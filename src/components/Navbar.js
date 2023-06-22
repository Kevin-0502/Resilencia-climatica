import React, { useState } from 'react';
import './Navbar.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { Link } from "react-router-dom";

function TopBar() {

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
    <div>
        <Navbar 
        color='dark'
        >
            <NavbarBrand href="/" className="me-auto"><p className='udb'>UDB</p></NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="me-1" style={{backgroundColor:'#D5D5D5'}}/>
            <Collapse isOpen={!collapsed} navbar>
            <Nav navbar >
                <NavItem><Link to="/" className='navi'>Home</Link></NavItem>
                <NavItem><Link to="/charts" className='navi'>Charts</Link></NavItem>
                <NavItem><Link to="/contact" className='navi'>Contact</Link></NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    </div>
    );
}

export default TopBar;