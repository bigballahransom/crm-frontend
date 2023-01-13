import React from 'react'
import {Navbar, Nav, NavbarBrand, NavLink} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <Navbar
    collapseOnSelect
    variant='dark'
    bg='dark'
    expand='md'
    >
        <NavbarBrand>
            <img src={logo} alt="Qube" width="100px"/>
        </NavbarBrand>
        <NavbarToggle aria-controls='basic-navbar-nav'/>
        <NavbarCollapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
                <NavLink href='/dashboard'>Dashboard</NavLink>
                <NavLink href='/dashboard'>Tickets</NavLink>
                <NavLink href='/dashboard'>Logout</NavLink>
            </Nav>
        </NavbarCollapse>
    </Navbar>
  )
}

export default Header