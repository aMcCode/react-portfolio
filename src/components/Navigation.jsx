import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css'

const Navigation = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="white-text" href="/">Home</Nav.Link>
            <Nav.Link className="white-text" href="/aboutMe">About</Nav.Link>
            <Nav.Link className="white-text" href="/myWork">My Work</Nav.Link>
            <Nav.Link className="white-text" href="/contactMe">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Navigation;