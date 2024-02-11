import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ProductsData from "../data/ProductsData";
import "./style.css";

const Product = () => {
  const [data] = useState(ProductsData);

  const handleClick = () => {
    window.location.href = "./ProductDetails";
  };

  console.log(data);

  return (
    <div className="container mt-3">
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <>
              <Card
                style={{
                  width: "15rem",
                }}
                className="mx-2 mt-4 card_style"
              >
                <Card.Img
                  className="mt-3"
                  variant="top"
                  src={element.imgUrl}
                  style={{ height: "12rem", objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      height: "3rem",
                      objectFit: "contain",
                      marginBottom: "2px",
                    }}
                  >
                    {element.productName}
                  </Card.Title>

                  <Card.Text
                    className="mt-2"
                    style={{ height: "8rem", objectFit: "contain" }}
                  >
                    Description : {element.description}
                    <br />
                    <br />
                    Price : {element.price}
                  </Card.Text>

                  <div className="button_div d-flex justify-content-center">
                    <Button
                      variant="primary"
                      className="col-lg-12"
                      onClick={handleClick}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
