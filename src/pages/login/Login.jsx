import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { useEffect } from "react";
import logo from "../../assets/home_cinema.svg";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import axios from "axios";
let flag = false;
let flagPassword = false;
let flagPasswordCheck = false;
const dataReg = [];
let flagCheck = false;

const Logins = () => {
  const navigate = useNavigate();

  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...LoginData, [name]: value });
    console.log(LoginData);
    console.log(LoginData.password);
    document.getElementById("email").style.color = "black";
    document.getElementById("createPassword").style.color = "black";
  };

  const showForm = (e) => {
    e.preventDefault();

    var i = 0;

    console.log(LoginData.password);

    const config = {
      method: "get",
      url: "http://localhost:3002/posts/",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = axios(config);
    data
      .then((res) => {
        console.log("axios data", res.data);

        console.log("axios Length", res.data.length);
        res.data.forEach((item, index) => {
          if (item.email == LoginData.email) {
            flag = true;
            flagCheck = true;
            console.log("You have entered correct email");
            if (item.createPassword == LoginData.password) {
              flagPassword = true;
              flagPasswordCheck = true;
              console.log("You have entered correct Password");

              localStorage.setItem("loginData", true);

              let credentials = {
                name: item.username,
                email: item.email,
                password: item.createPassword,
              };

              let data2 = JSON.stringify(credentials);
              localStorage.setItem("userData", data2);
            }
          }

          if (flagCheck == false) {
            flag = false;
          }
          if (flagPasswordCheck == false) {
            flagPassword = false;
          }

          if (i == res.data.length - 1) {
            if (flag == false) {
              console.log("you have entered incorrect email");
              document.getElementById("email").value =
                "You have entered incorrect email";
              document.getElementById("email").style.color = "red";
            }
            if (flagPassword == false) {
              console.log("you have entered incorrect Password");
              document.getElementById("createPassword").value =
                "You have entered incorrect password";
              document.getElementById("createPassword").style.color = "red";
            }
            if (flag == true && flagPassword == true) {
              flag = false;
              flagCheck = false;
              flagPassword = false;
              flagPasswordCheck = false;
              navigate("/home");
            }

            flag = false;
            flagCheck = false;
            flagPassword = false;
            flagPasswordCheck = false;
          }

          i++;
        });
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
          <form className="col-md-9" onSubmit={showForm}>
            <div className="form-group mt-5">
              <label>Enter Email</label>
              <input
                type="text"
                name="email"
                onChange={handleInput}
                value={LoginData.email}
                id="email"
                placeholder="Email Address"
                className="form-control"
              />
            </div>

            <div className="form-group mt-5">
              <label>Enter Password</label>
              <input
                type="text"
                onChange={handleInput}
                value={LoginData.password}
                name="password"
                id="createPassword"
                placeholder="Create Password"
                className="form-control"
              />
            </div>
            <input type="submit" className="btn btn-primary mt-4" />
          </form>
        </div>
      </Col>
    </Row>
  );
};
export default Logins;
