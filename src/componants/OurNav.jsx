import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function OurNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/login" className="fw-bold fs-5 mx-3">Login</NavLink>
            <NavLink to="/home" className="fw-bold fs-5  mx-3">Home</NavLink>
            <NavLink to="/posts" className="fw-bold fs-5 mx-3">Posts</NavLink>
            <NavLink to="/profile" className="fw-bold fs-5  mx-3">Profile</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
