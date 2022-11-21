import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        navigate(from, { to: "/" }, { replace: true });
        handleUpdateUserProfile(name, photoURL);
        // handleEmailVerification();
        // toast.success("Please verify your email address.");
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="lr-form">
      <h4 style={{ color: "green", fontWeight: "bold" }}>Hello Learners,</h4>
      <p style={{ fontWeight: "bold", fontSize: "15px", marginBottom: "35px" }}>
        Register now to learn more
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control name="name" type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <div class="d-grid gap-2">
          <button class="btn btn-primary py-1" type="submit">
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              Register
            </span>
          </button>
        </div>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
      <p style={{ fontWeight: "bold", marginTop: "10px" }}>
        Already have an account?Please <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
