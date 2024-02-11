import React, { useState } from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
              href="/products"
              className="text-decoration-none text-light mx-3"
            >
              Product
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
          <Badge
            badgeContent={4}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{
              width: "20rem",
              height: "4rem",
              padding: 10,
              position: "relative",
            }}
          >
            <i
              className="fas fa-close smallclose"
              onClick={handleClose}
              style={{
                position: "absolute",
                top: 2,
                right: 20,
                fontSize: 20,
                cursor: "pointer",
              }}
            ></i>
            <p style={{ fontSize: 20 }}>Your Cart Is Empty</p>
            <img
              src="./cart.gif"
              alt=""
              className="emptycart_img"
              style={{ width: "5rem", padding: 10 }}
            ></img>
          </div>
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
