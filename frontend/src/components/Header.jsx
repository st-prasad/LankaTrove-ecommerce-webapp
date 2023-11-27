//import navbar, nav, container from react bootstrap and fashoppingcart, fauser from react-icons/fa
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FaCog, FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '/assets/logo.jpg'

const Header = () => {
  return (
    <header className='header-background'>
         <Navbar expand="md">
      <Container>
        {/* Brand */}
        <img src={logo} alt="logo" border="0" width="50" height="50" />
        <Navbar.Brand href="#home">Your Brand</Navbar.Brand>

        {/* Hamburger menu button for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar links and menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <FaShoppingCart /> Home
            </Nav.Link>
            <Nav.Link href="#profile">
              <FaUser /> Profile
            </Nav.Link>
            <NavDropdown title={<span><FaCog /> Settings</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Login Button */}
          <Button variant="outline-info">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}
export default Header