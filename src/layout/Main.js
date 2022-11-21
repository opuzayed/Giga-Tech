import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import "../../src/assets/style.css";

const Main = () => {
  let location = useLocation();
  let rightCol;
  console.log(location.pathname);
  if (
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/blog" ||
    location.pathname === "/questions"
  ) {
    rightCol = "";
    console.log(rightCol);
  } else {
    rightCol = <LeftSideNav />;
  }

  return (
    <div>
      <Header></Header>
      <Container className="mt-5">
        <Row>
          <Col lg="9">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">{rightCol}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
