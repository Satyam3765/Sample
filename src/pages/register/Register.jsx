import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { useEffect } from "react";
import logo from "../../assets/home_cinema.svg";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import axios from "axios";

var inc = 0;
const Registers = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phoneNo: "",
    createPassword: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    var Current;
    localStorage.removeItem("loginData");
    Current = inc;
    console.log("Inc", inc);
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const showForm = (e) => {
    e.preventDefault();
    inc++;

    let num = Math.floor(Math.random() * 20) + 1;
    const newRecord = { ...userRegistration, id: inc };
    const config = {
      method: "post",
      url: "http://localhost:3002/posts/",
      headers: {
        "Content-Type": "application/json",
      },

      data: JSON.stringify(newRecord),
    };
    const datas = JSON.stringify(userRegistration);
    const data = axios(config);
    data
      .then((res) => {
        console.log("axios", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Row className="reg">
      <Col className="imga" md={6}>
        <img src={logo} className="img" />
      </Col>
      <Col>
        <div className="row">
          <form className="col-md-9" action="" onSubmit={showForm}>
            <div className="form-group mt-5">
              <label>Enter Name</label>
              <input
                type="text"
                onChange={handleInput}
                value={userRegistration.username}
                name="username"
                id="username"
                placeholder="Name"
                className="form-control"
              />
            </div>

            <div className="form-group mt-5">
              <label>Enter Email</label>
              <input
                type="text"
                onChange={handleInput}
                value={userRegistration.email}
                name="email"
                id="email"
                placeholder="Email Address"
                className="form-control"
              />
            </div>
            <div className="form-group mt-5">
              <label>Enter PhoneNo</label>
              <input
                type="text"
                onChange={handleInput}
                value={userRegistration.phoneNo}
                name="phoneNo"
                id="phoneNo"
                placeholder="PhoneNo"
                className="form-control"
              />
            </div>

            <div className="form-group mt-5">
              <label>Create Password</label>
              <input
                type="text"
                onChange={handleInput}
                value={userRegistration.createPassword}
                name="createPassword"
                id="createPassword"
                placeholder="Create Password"
                className="form-control"
              />
            </div>
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary mt-4"
            />
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="login btn btn-danger"
            >
              Sign in
            </button>
          </form>
        </div>
      </Col>
    </Row>
  );
};
export default Registers;
