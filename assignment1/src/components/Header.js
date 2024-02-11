import React, { useState } from "react";
import { Navbar, Nav, Container, Table, NavLink } from "react-bootstrap";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { useSelector } from "react-redux";

const Header = () => {
  const getData = useSelector((state) => state.cartReducer.carts);

  console.log(getData);

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
            badgeContent={getData.length}
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
          {getData.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th> Photos</th>
                    <th> Product name </th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((e) => {
                    return (
                      <tr>
                        <td>
                          <NavLink href={`/productDetails/${e.id}`}>
                            <img
                              src={e.imgUrl}
                              style={{
                                width: "5rem",
                                height: "5rem",
                                objectFit: "contain",
                              }}
                            ></img>
                          </NavLink>
                        </td>
                        <td>
                          <p>{e.productName}</p>
                          <p>Price : ${e.price}</p>
                          <p>Quantity : {e.qnty}</p>
                          <p
                            style={{
                              color: "red",
                              cursor: "pointer",
                              fontSize: 20,
                            }}
                          >
                            <i className="fas fa-trash smalltrash"></i>
                          </p>
                        </td>
                        <td
                          className="mt-5"
                          style={{
                            color: "red",
                            cursor: "pointer",
                            fontSize: 20,
                          }}
                        >
                          <i className="fas fa-trash largetrash"></i>
                        </td>
                      </tr>
                    );
                  })}
                  <p className="text-center">Total: $300</p>
                </tbody>
              </Table>
            </div>
          ) : (
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
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
