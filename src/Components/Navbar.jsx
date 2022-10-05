import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
            <NavLink to={publicLinks.ourTours}>Our Tours</NavLink>
          </Nav>
          <Nav className="ms-auto">
            <button className="btn btn-success" type="button">
              <NavLink to={publicLinks.contactUs}>contact us</NavLink>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
