import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/action";
import ProductsData from "../data/ProductsData"; // Import the products data

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Find the product by ID
    const foundProduct = ProductsData.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(foundProduct);
  }, [id]);

  const handleAddQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  const handleRemoveQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(ADD(product));
    history("/");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-2">
      <section className="container mt-3">
        <div className="iteamsdetails">
          <div>
            <Card
              style={{
                width: "400px",
                height: "580px",
                padding: "10px",
                margin: "10px",
              }}
            >
              <Card.Img
                className="mt-3"
                variant="top"
                src={product.imgUrl}
                style={{ height: "500px", objectFit: "contain" }}
              />
            </Card>
          </div>

          <div className="details">
            <i
              className="fas fa-trash"
              style={{
                color: "red",
                fontSize: 30,
                cursor: "pointer",
                float: "right",
                margin: "10px",
              }}
            ></i>
            <h1>
              <b>{product.productName}</b> <br />
              <span>{product.category}</span>
              <br />
              <p className="mt-3">
                <h4>{product.description}</h4>
              </p>
              <center>
                <b style={{ fontSize: "40px", color: "gray" }}>
                  only $ {product.price}
                </b>
              </center>
              <p>
                <center>
                  <br />
                  <h4>
                    <strong>Quantity</strong>
                    <div
                      className="mt-1 d-flex justify-content-between align-items-center"
                      style={{ width: 100, cursor: "pointer" }}
                    >
                      <span
                        style={{ fontSize: 24 }}
                        onClick={handleRemoveQuantity}
                      >
                        -
                      </span>
                      <span style={{ fontSize: 24 }}>{productQuantity}</span>
                      <span
                        style={{ fontSize: 24 }}
                        onClick={handleAddQuantity}
                      >
                        +
                      </span>
                    </div>
                  </h4>

                  <h4>
                    <strong>Total : </strong>-
                  </h4>
                </center>
              </p>
            </h1>
            <div className="button_div d-flex justify-content-center">
              <Button
                variant="dark"
                className="col-lg-11"
                size="lg"
                onClick={handleAddToCart}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
