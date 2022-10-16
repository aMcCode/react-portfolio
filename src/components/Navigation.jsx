import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image }from "react-bootstrap";
import '../index.css'
import logo_bw from '../assets/portfolio_imgs/logo_bw.png'

const Navigation = () => {
  return (
    <Navbar bg='dark' expand="lg" variant='dark' >
      <Container>
        <Navbar.Brand href="/"><Image className="heroImg" align="center" src={logo_bw} width={125} height={50} /></Navbar.Brand>
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