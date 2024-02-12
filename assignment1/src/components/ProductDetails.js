import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/action";
import ProductsData from "../data/ProductsData"; // Import the products data
import product1 from "../assets/1.jpg";
import product2 from "../assets/2.jpg";
import product3 from "../assets/3.jpg";
import product4 from "../assets/4.jpg";
import product5 from "../assets/5.jpg";
import product6 from "../assets/6.jpg";
import product7 from "../assets/7.jpg";
import product8 from "../assets/8.jpg";
import product9 from "../assets/9.jpg";
import product10 from "../assets/10.jpg";
import product11 from "../assets/11.jpg";
import product12 from "../assets/12.jpg";
import product13 from "../assets/13.jpg";
import product14 from "../assets/14.jpg";
import product15 from "../assets/15.jpg";
import product16 from "../assets/16.jpg";

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
                src={
                  product.imgUrl == "1.jpg"
                    ? product1
                    : product.imgUrl == "2.jpg"
                    ? product2
                    : product.imgUrl == "3.jpg"
                    ? product3
                    : product.imgUrl == "4.jpg"
                    ? product4
                    : product.imgUrl == "5.jpg"
                    ? product5
                    : product.imgUrl == "6.jpg"
                    ? product6
                    : product.imgUrl == "7.jpg"
                    ? product7
                    : product.imgUrl == "8.jpg"
                    ? product8
                    : product.imgUrl == "9.jpg"
                    ? product9
                    : product.imgUrl == "10.jpg"
                    ? product10
                    : product.imgUrl == "11.jpg"
                    ? product11
                    : product.imgUrl == "12.jpg"
                    ? product12
                    : product.imgUrl == "13.jpg"
                    ? product13
                    : product.imgUrl == "14.jpg"
                    ? product14
                    : product.imgUrl == "15.jpg"
                    ? product15
                    : product16
                }
                style={{ height: "500px", objectFit: "contain" }}
              />
            </Card>
          </div>

          <div>
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
