import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbars() {
  return (
    <div className="sticky-top">
      <Navbar  style={{ background: "#FCFFE7", fontSize: "25px" }} expand="lg">
        <Container fluid>
          <Navbar.Brand
            style={{ maxHeight: "150px", paddingLeft: "50px" }}
            href="#"
          >
            <img alt="logo" src="'./assest/WhatsApp Image 2023-03-02 at 21.47.06.jpg"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "150px", paddingLeft: "50vw" }}
              navbarScroll
            >
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link style={{ paddingLeft: "50px" }} href="#Contact">
                Contact Us
              </Nav.Link>
              <Nav.Link style={{ paddingLeft: "50px" }} href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
