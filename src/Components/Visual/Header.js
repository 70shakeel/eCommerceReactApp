import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { auth } from "../Firebase/Utils";

const Header = (props) => {
  const { currentUser } = props;
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" style={{ "padding-left": "20px" }}>
          Your Online Store
        </NavbarBrand>

        {currentUser && (
          <Nav className="ml-auto" navbar style={{ float: "right" }}>
            <NavItem>
              <NavLink onClick={() => auth.signOut()} href="/">
                LogOut
              </NavLink>
            </NavItem>
          </Nav>
        )}
        {!currentUser && (
          <Nav className="ml-auto" navbar style={{ float: "right" }}>
            <NavItem>
              <NavLink href="/registration/">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login/">Login</NavLink>
            </NavItem>
          </Nav>
        )}
      </Navbar>
    </div>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
