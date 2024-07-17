


//

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Your Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" exact={ "true"} activeclassname="active">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/blogs" activeclassname="active">Blogs</Nav.Link>
            {/* Add more navigation links as needed */}
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <>
                <Nav.Link as={NavLink} to="/profile" activeclassname="active">Profile</Nav.Link>
                <Button variant="outline-light" onClick={onLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Button variant="outline-light" as={Link} to="/login">Login</Button>
                <Button variant="outline-light" as={Link} to="/register">Register</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
