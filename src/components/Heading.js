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
import ModalExample from "./Modal";
import "font-awesome/css/font-awesome.min.css";

export const Heading = (props) => {
  let username = localStorage.getItem("username");
  function logOut() {
    localStorage.getItem("username");
    localStorage.removeItem("username");
    // window.location.href="http://localhost:3000"
    return props.name.push("/");
    //return  <Redirect to='/' />
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
          <NavLink className="d-none d-lg-block welcome-user-text" >
            Welcome  {username}
          </NavLink>
         
        </NavItem>
        <Nav>
          {/* <NavItem>
            <Link className="btn btn-primary" to="/add">Add User</Link>
          </NavItem> */}
          <NavItem>
            <ModalExample />
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
