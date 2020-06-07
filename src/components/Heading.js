import React from "react";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";
import ModalExample from "./Modal";

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">Xor-Mart</NavbarBrand>
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
