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

export const Heading = (props) => {
  function logOut(){
   localStorage.getItem('username');
    localStorage.removeItem('username')
   // window.location.href="http://localhost:3000"
   return props.name.push('/')
    //return  <Redirect to='/' />
  }
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/"> Xoriant Advertising Portal</NavbarBrand>
        <NavItem className="logout">
          <NavLink  onClick={logOut}>Logout</NavLink>
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
