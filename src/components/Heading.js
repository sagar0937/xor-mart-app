import React from "react";
//import { Link , Redirect } from 'react-router-dom';
import {
  Navbar,
  NavLink,
  Nav,
  NavItem,
  NavbarBrand,
  Container,
} from "reactstrap";
import ModalExample from "./AddProduct";
import "font-awesome/css/font-awesome.min.css";

export const Heading = (props) => {
  let username = localStorage.getItem("username");
  function logOut() {
    localStorage.getItem("username");
    localStorage.removeItem("username");
    return props.name.push("/");
  }
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/" className="nav-brand-title">
          {" "}
          Xoriant Advertising Portal
        </NavbarBrand>
        <NavItem className="logout">
          <NavLink className="d-none d-lg-block" onClick={logOut}>
            Logout
          </NavLink>
          <NavLink className="d-lg-none" onClick={logOut}>
            <i className="fa fa-sign-out" aria-hidden="true"></i>
          </NavLink>
        </NavItem>
        <NavItem className="welcome-user">
          <NavLink className="d-none d-lg-block welcome-user-text">
            Welcome <span className="username-text-color">{username}</span>
          </NavLink>
        </NavItem>
        <Nav>
          <NavItem>
            <ModalExample />
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
