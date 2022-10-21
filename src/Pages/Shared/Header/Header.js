import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const { user, googeSignOut } = useContext(AuthContext);

  // Google sign out
  const handleSignOut = () => {
    googeSignOut()
      .then(() => {
        console.log("Sign out successfull");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Navbar
      collapseOnSelect
      className="mb-3"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">Dragon news</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All news</Nav.Link>
            <Nav.Link href="#pricing">Latest</Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav />
          </div>
          <Nav>
            <div>
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <Link to="/profile" className="mx-2">
                    {user?.photoURL ? (
                      <img
                        src={user?.photoURL}
                        style={{ height: "30px" }}
                        className="rounded-pill"
                        alt=""
                      />
                    ) : (
                      <FaRegUser className="h3" />
                    )}
                  </Link>
                  <button onClick={handleSignOut}>Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="me-3">
                    <button>Login</button>
                  </Link>
                  <Link to="/register">
                    <button>Register</button>
                  </Link>
                </>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
