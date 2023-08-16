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
          <Navbar.Brand
            style={{ color: "white", fontSize: "2em" }}
            onClick={() => navigate("/adminHome")}
          >
            <span className="color-green">Query</span>Support - Admin
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "10em", gap: "3em", color: "red" }}
              navbarScroll
            >
              <Nav.Link
                onClick={() => navigate("/getAllQueries")}
                style={{ color: "#808DAD" }}
              >
                AllQueries
              </Nav.Link>

              <Nav.Link
                onClick={() => navigate("/updateStatus")}
                style={{ color: "#808DAD" }}
              >
                UpdateQueryStatus
              </Nav.Link>

              <Button variant="success" onClick={() => navigate("/dashboard")}>
                LogOut
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
