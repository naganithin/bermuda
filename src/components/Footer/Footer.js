/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="#">
              Bermuda
            </NavLink>
          </NavItem>
          
        </Nav>
        
      </Container>
    </footer>
  );
}

export default Footer;
