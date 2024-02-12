import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SIgn_img from "./SIgn_img";
import { Nav, NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    console.log(e.target.value);

    const { value, name } = e.target;
    console.log(value, name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, date, password, phoneNumber, address } = inpval;

    if (name === "") {
      toast.error(" name field is required!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email field is required", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("please enter valid email addres", {
        position: "top-center",
      });
    } else if (date === "") {
      toast.error("date field is required", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is required", {
        position: "top-center",
      });
    } else if (address === "") {
      toast.error("address field is required!", {
        position: "top-center",
      });
    } else {
      console.log("data added succesfully");
      history("/");
      localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <>
      <div className="container mt-3" style={{ display: "flex" }}>
        <SIgn_img />
        <div style={{ width: "100%" }}>
          <h3 style={{ marginLeft: "20%" }}>Sign Up</h3>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={getdata}
                placeholder="Enter Your Name"
                style={{ width: "60%" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={getdata}
                placeholder="Enter email"
                style={{ width: "60%" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <input
                onChange={getdata}
                name="date"
                className="form-control"
                type="date"
                style={{ width: "60%" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <input
                type="password"
                name="password"
                onChange={getdata}
                className="form-control"
                placeholder="Password"
                style={{ width: "60%" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <input
                type="phonenumber"
                name="phoneNumber"
                className="form-control"
                onChange={getdata}
                placeholder="Phone number"
                style={{ width: "60%" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <input
                type="text"
                name="address"
                className="form-control"
                onChange={getdata}
                placeholder="Enter Your Address"
                style={{ width: "60%" }}
              />
            </Form.Group>
            <button className="btnSignup" onClick={addData} type="submit">
              Submit
            </button>
          </Form>

          <p className="mt-2" style={{ height: "10px", marginLeft: "10%" }}>
            Already Have an Account
          </p>

          <NavLink href="/login" style={{ color: "red", marginLeft: "20%" }}>
            SignIn
          </NavLink>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
