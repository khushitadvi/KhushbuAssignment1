import React from "react";
import { Table, Card, Button } from "react-bootstrap";

const ProductDetails = () => {
  return (
    <>
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
                  src={"1.jpg"}
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
              <Table>
                <tr>
                  <td>
                    <h1>
                      <b>Boys' Dinosaur Print T-Shirt</b> <br />
                      <span>Boys' Collection</span>
                      <br />
                      <p className="mt-3">
                        <h4>
                          Crewneck tee featuring large-scale dinosaur print
                        </h4>
                      </p>
                      <center>
                        <b style={{ fontSize: "40px", color: "gray" }}>
                          only $ 14.99
                        </b>
                      </center>
                      <p>
                        <center>
                          <br />
                          <h4>
                            <strong>Quntity </strong>
                            <div
                              className="mt-1 d-flex justify-content-between align-items-center"
                              style={{ width: 100, cursor: "pointer" }}
                            >
                              <span style={{ fontSize: 24 }}>-</span>
                              <span style={{ fontSize: 24 }}>1</span>
                              <span style={{ fontSize: 24 }}>+</span>
                            </div>
                          </h4>

                          <h4>
                            <strong>Total : </strong>44.55
                          </h4>
                        </center>
                      </p>
                    </h1>
                    <div className="button_div d-flex justify-content-center">
                      <Button variant="dark" className="col-lg-11" size="lg">
                        Buy Now
                      </Button>
                    </div>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetails;
