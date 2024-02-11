import React, { useState, useEffect } from "react";
import { Table, Card, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/action";

const ProductDetails = () => {
  const [data, setData] = useState([]);

  console.log("productDetailsData", data);

  const { id } = useParams();
  console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  const getData = useSelector((state) => state.cartReducer.carts);

  console.log(getData);

  const compare = () => {
    let comparedata = getData.filter((e) => {
      console.log(e.id);
      return e.id === id;
    });
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  // add data
  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  const [productQuantity, setQuantityData] = useState(1);

  const addQuantity = () => {
    setQuantityData(productQuantity + 1);
  };

  const removeQuantity = () => {
    if (productQuantity > 0) {
      setQuantityData(productQuantity - 1);
    }
  };

  return (
    <>
      <div className="container mt-2">
        <section className="container mt-3">
          <div className="iteamsdetails">
            {data.map((e) => {
              console.log("image url", e);
              return (
                <>
                  <div>
                    <Card
                      style={{
                        width: "400px",
                        height: "580px",
                        padding: "10px",
                        margin: "10px",
                      }}
                    >
                      <img
                        className="mt-3"
                        variant="top"
                        src={e.imgUrl}
                        alt=""
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
                            <b>{e.productName}</b> <br />
                            <span>Boys' Collection</span>
                            <br />
                            <p className="mt-3">
                              <h4>{e.description}</h4>
                            </p>
                            <center>
                              <b style={{ fontSize: "40px", color: "gray" }}>
                                only $ {e.price}
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
                                    <span
                                      style={{ fontSize: 24 }}
                                      onClick={removeQuantity}
                                    >
                                      -
                                    </span>
                                    <span style={{ fontSize: 24 }}>
                                      {productQuantity}
                                    </span>
                                    <span
                                      style={{ fontSize: 24 }}
                                      onClick={addQuantity}
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
                            >
                              Buy Now
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetails;
