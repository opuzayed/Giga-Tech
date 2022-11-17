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
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import logo from "../../../assets/brands/courselogo.png";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleTheme = () => {
    let targetDiv = document.body;
    let navDiv = document.getElementsByTagName("nav")[0];
    targetDiv.classList.toggle("darkTheme");

    if (targetDiv.classList.contains("darkTheme")) {
      navDiv.classList.remove("navbar-light", "bg-light");
      navDiv.classList.add("navbar-dark", "bg-dark");
    } else {
      navDiv.classList.remove("navbar-dark", "bg-dark");
      navDiv.classList.add("navbar-light", "bg-light");
    }
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
        <img src={logo} alt="" />
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
              <div className="me-2 text-decoration-none" onClick={handleTheme}>
                Change Theme
              </div>
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
                  {/* <span className="me-4 text-dark pe-none text-decoration-none">
                    {user?.displayName}
                  </span> */}
                  <Button
                    className="me-2 text-decoration-none"
                    onClick={handleLogOut}
                  >
                    Log out
                  </Button>
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
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={
                    <Tooltip id="tooltip-1">{user?.displayName}</Tooltip>
                  }
                >
                  <Image
                    style={{ height: "30px" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                </OverlayTrigger>
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
