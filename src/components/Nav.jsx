import React from "react";
import Img from "../assets/img/Marvel_Logo.svg"
import { Navbar, Container } from "react-bootstrap/";

const Nav = () => {
  return (
    <Navbar className="nav" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={Img}
            width="60"
            height="auto"
            className="d-inline-block align-top"
          />
          {" "}
          Marvel Movies
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Nav;
