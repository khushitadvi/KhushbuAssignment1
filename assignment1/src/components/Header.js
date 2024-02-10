import React from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import Badge from "@mui/material/Badge";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Shopping App
          </NavLink>
          <Nav className="me-auto">
            <NavLink href="/" className="text-decoration-none text-light mx-3">
              Home
            </NavLink>
            <NavLink
              href="/aboutUs"
              className="text-decoration-none text-light mx-3"
            >
              About Us
            </NavLink>
            <NavLink
              href="/login"
              className="text-decoration-none text-light mx-3"
            >
              Login
            </NavLink>
          </Nav>
          <Badge badgeContent={4} color="primary">
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
