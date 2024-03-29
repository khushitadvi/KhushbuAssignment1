import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SIgn_img from "./SIgn_img";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-bootstrap";
import Product from "./Product";

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
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

    const getuserArr = localStorage.getItem("useryoutube");
    console.log(getuserArr);

    const { email, password } = inpval;
    if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/");
          history("/editprofile");
        }
      }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between align-items-center">
          <SIgn_img />
          <div className="left_data mt-3 p-3 " style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign IN</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  style={{ width: "60%" }}
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  style={{ width: "60%" }}
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>
              <button className="btnSignup" onClick={addData} type="submit">
                Submit
              </button>
            </Form>
            <p className="mt-2" style={{ height: "10px", marginLeft: "15%" }}>
              Don't Have an Account
            </p>

            <NavLink
              href="/register"
              style={{ color: "red", marginLeft: "20%" }}
            >
              Sign Up
            </NavLink>
          </div>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
