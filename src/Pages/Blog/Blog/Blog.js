import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Blog = () => {
  return (
    <Row xs={1} md={2} className="g-4">
        <Col>
          <Card className='ms-3 mt-3 w-100 h-100'>
            <Card.Body>
              <Card.Title>Q:What is cors?</Card.Title>
              <Card.Text>
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                mechanism that allows a server to indicate any origins (domain,
                scheme, or port) other than its own from which a browser should
                permit loading resources. CORS also relies on a mechanism by
                which browsers make a "preflight" request to the server hosting
                the cross-origin resource, in order to check that the server
                will permit the actual request.In that preflight, the browser
                sends headers that indicate the HTTP method and headers that
                will be used in the actual request.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card className='me-3 mt-3 w-100 h-100'>
            <Card.Body>
              <Card.Title>Q:Why are using firebase?What other options do you have to implement authentication?</Card.Title>
              <Card.Text>
              The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card className='ms-3 w-100 h-100'>
            <Card.Body>
              <Card.Title>Q:How does private route work?</Card.Title>
              <Card.Text>
              The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card className='me-3 w-100 h-100'>
            <Card.Body>
              <Card.Title>Q:What is node?How does node work?</Card.Title>
              <Card.Text>
              Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
};

export default Blog;
