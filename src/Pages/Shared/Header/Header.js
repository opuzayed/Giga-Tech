import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Button from "react-bootstrap/Button";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <img
          src={process.env.PUBLIC_URL + "/assets/brands/logo.png"}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        <Navbar.Brand>
          {" "}
          <Link style={{ textDecoration: "none" }} to="/">
            GigaTech
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <>
              <Link className="me-3" style={{ textDecoration: "none" }} to="/">
                Courses
              </Link>
              <Link
                className="me-3"
                style={{ textDecoration: "none" }}
                to="/questions"
              >
                FAQ
              </Link>
              <Link
                className="me-3"
                style={{ textDecoration: "none" }}
                to="/blog"
              >
                Blog
              </Link>
            </>
          </Nav>
          <Nav>
            <>
              {user?.uid ? (
                <>
                  <Link
                    className="me-3 text-dark pe-none text-decoration-none"
                    to="#"
                  >
                    {user?.displayName}
                  </Link>
                  <Link
                    className="me-3 text-decoration-none"
                    onClick={handleLogOut}
                  >
                    Log out
                  </Link>
                </>
              ) : (
                <>
                  <Link className="me-3 text-decoration-none" to="/login">
                    Login
                  </Link>
                  <Link className="me-3 text-decoration-none" to="/register">
                    Register
                  </Link>
                </>
              )}
            </>
            <Link to="/profile">
              {user?.photoURL ? (
                <Image
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
