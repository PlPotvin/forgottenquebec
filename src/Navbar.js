import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="shadow fixed-top"
      style={{ backgroundColor: "#212F45" }}
    >
      <Container>
        <img src="./img/logo.png" style={{ height: "40px" }} alt="Logo" />
        <Navbar.Brand href="#home"> Forgotten Quebec</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#">Locations</Nav.Link>
            <Nav.Link href="#">Map</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
