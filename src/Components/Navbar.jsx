import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import publicLinks from "../Constants/link";
import "../Sass/layout/_navbar.scss";
import pic from "../Assets/Images/logo.svg";

function NavbarComponent() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="logo">
          <img src={pic} alt="Lid Africa Safari's logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to={publicLinks.home}>Home</NavLink>
            <NavLink to={publicLinks.aboutUs}>About us</NavLink>
            <Nav.Link to={publicLinks.ourTours}>Our Tours</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <button className="btn btn-success" type="button">
              contact us
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
