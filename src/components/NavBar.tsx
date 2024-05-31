import { Navbar, Container } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';

const NavBar = () => {
    const { isAuthenticated, user } = useAuth0();
    return (
      <Navbar bg="secondary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              src="../src/images/bear.jpg" 
              height="50"
              className="d-inline-block align-top"
              alt="Bear Logo"
            />
            <span className="ms-2" style={{ color: 'pink' }}>Soy Candle NYC</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: 'pink' }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tasks" style={{ color: 'pink' }}>Orders</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/task/new" style={{ color: 'pink' }}>Create an Order</a>
              </li>
            </ul>
            <ul className="navbar-nav">
              {isAuthenticated ? (
                <li className="nav-item">
                  <a className="nav-link" href="/profile">Signed in as: {user?.name}</a>
                </li>
              ) : (
                <>
<li className="nav-item">
                  <LoginButton />
                </li>
                <li className="nav-item">
                  <RegisterButton />
                </li>
                </>
              )}
              {isAuthenticated && <LogoutButton />}
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default NavBar;