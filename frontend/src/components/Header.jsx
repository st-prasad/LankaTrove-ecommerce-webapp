//import navbar, nav, container from react bootstrap and fashoppingcart, fauser from react-icons/fa
// eslint-disable-next-line no-unused-vars
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import { FaCog, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/assets/logo.jpg";

const Header = () => {
  return (
    <header className="header-background">
      <Navbar expand="md">
        <Container>
          {/* Brand */}

          {/* <Link to="/">
          <img src={logo} alt="logo" border="0" width="50" height="50" />
          </Link>
          <Navbar.Brand as={Link} to="/">
            Your Brand
          </Navbar.Brand> */}

          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" border="0" width="50" height="50" />
            Your Brand
          </Navbar.Brand>

          {/* Hamburger menu button for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navbar links and menu */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/cart">
                <FaShoppingCart /> cart
              </Nav.Link>
              {/* Login */}
              <Nav.Link as={Link} to="/login">
                <FaUser /> login
              </Nav.Link>


              {/* <NavDropdown
                title={
                  <span>
                    <FaCog /> Settings
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}

            </Nav>

          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
