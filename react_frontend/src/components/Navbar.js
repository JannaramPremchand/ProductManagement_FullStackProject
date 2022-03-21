import { Link } from "react-router-dom";
import React from 'react';
import {  Nav, Navbar } from "react-bootstrap";

const NavbarMenu = () => {
    return (
    
        
    <Navbar bg="light" expand="lg">
         <Navbar.Brand href="#home">
      <img
        src="/logo1.png"
        width="100rem"
        height="100rem"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Link className="nav-students" to="/">Products</Link>
          <Link className="nav-students" to="/addprdt">Add Products</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
    );
};

export default NavbarMenu;