import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
      <Container>
        <Navbar.Brand href="#home"><img className='logo-netflix-header' src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link ><Link to="/catalogo" style={{color: '#FFF',textDecoration: 'none'}}>Home</Link></Nav.Link>
            <Nav.Link href="#features">Filmes</Nav.Link>
            <Nav.Link href="#pricing">Séries</Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ação</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Comédia
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Terror</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><img className='imagem-perfil-header' src='https://i.pinimg.com/474x/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6--vini-cata.jpg'></img></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Vitor
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

