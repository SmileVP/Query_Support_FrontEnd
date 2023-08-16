import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Navigation() {
  let navigate = useNavigate();
  return (
    //  <--Navigation details-->
    <div className="navigation container-fluid">
      <Navbar bg="#0E1630" expand="lg">
        <Container fluid>
          <Navbar.Brand style={{ color: "white", fontSize: "2em" }}>
            <span className="color-green">Q</span>uery Support
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "10em", gap: "3em", color: "red" }}
              navbarScroll
            >
              <Button
                variant="success"
                onClick={() => navigate("/customer-login")}
              >
                Login
              </Button>
              <Button
                variant="warning"
                className="btn btn-outline-dark"
                onClick={() => navigate("/customer-sign-up")}
              >
                Sign Up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
