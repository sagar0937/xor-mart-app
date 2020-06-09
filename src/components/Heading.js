import React from "react";
import {
  Navbar,
  NavLink,
  Nav,
  NavItem,
  NavbarBrand,
  Container,
} from "reactstrap";
import ModalExample from "./Modal";

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/"> Xoriant Advertising Portal</NavbarBrand>
        <NavItem className="logout">
          <NavLink href="/">Logout</NavLink>
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
