import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { API_URL } from "../../config/api_url"
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/sharedComponents/MainScreen/MainScreen";
import Loading from "../../components/sharedComponents/Loading/Loading";
import "./LoginScreen.css";
import ErrorMessage from "../../components/sharedComponents/ErrorMessage/ErrorMessage";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const notify = () => toast("logged-in successfully");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        Headers: {
          "content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        `${API_URL}/users/login`,
        {
          email,
          password,
        },
        config
      );
      console.log(data);

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      notify();
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <MainScreen title="LOGIN to your account">
      <ToastContainer />
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ?{" "}
            <Link style={{ color: "blue" }} to="/register">
              Register Here
            </Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default LoginScreen;
