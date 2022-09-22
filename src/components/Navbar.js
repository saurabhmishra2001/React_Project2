import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Navbae.css'

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='brand'>SAURABH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <nav className="tabs">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About </a></li>
                <li><a href="/">contact </a></li>
                <li><a href="/">Portfolio</a></li>
            </ul>

    </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;