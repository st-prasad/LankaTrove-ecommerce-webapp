import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row className="justify-content-center justify-content-md-between">
          {/* Contact Information */}
          <Col md={4}>
            <p className="m-0">trindolk@gmail.com</p>
          </Col>

          {/* Social Media Links */}
          <Col md={4}>
            <div className="social-icons">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer classNamesocial-icon">
                <FaLinkedin />
              </a>
            </div>
          </Col>

          {/* Date */}
          <Col md={4}>
            <p className="m-0">{currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer