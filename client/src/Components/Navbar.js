import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const signOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Forum">Forum</Nav.Link>
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <Button
                variant="info"
                size="sm"
                onClick={() => {
                  handleLogout();
                  signOut();
                }}
              >
                Logout
              </Button>
            ) : (
              <div>
                <Button variant="info" size="sm" onClick={handleLogin}>
                  Login
                </Button>
                <Button variant="info" size="sm" onClick={handleLogout}>
                  Signup
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
