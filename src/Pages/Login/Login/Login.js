import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState("");
  const { providerLogin, githubLogin, signIn, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { to: "/" }, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleGithubSignIn = () => {
    githubLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { to: "/" }, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { to: "/" }, { replace: true });
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Your email is not verified. Please verify your email address."
          );
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="lr-form">
      <h4 style={{ color: "green", fontWeight: "bold", marginBottom: "35px" }}>
        Welcome Back
      </h4>
      <Form onSubmit={handleSubmit}>
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
            <span style={{ fontWeight: "bold", fontSize: "20px" }}> Login</span>
          </button>
        </div>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
      <div className="log-mid">
        <p style={{ fontWeight: "bold", marginTop: "10px" }}>
          Don't have an account?Please <Link to="/register">Register Now</Link>
        </p>

        <hr />

        <p
          style={{ fontWeight: "bold", marginTop: "10px", textAlign: "center" }}
        >
          Or Login With
        </p>
      </div>
      <ButtonGroup vertical className="w-100">
        <div className="row w-100">
          <div className="col-6">
            <Button
              onClick={handleGoogleSignIn}
              className="w-100"
              variant="outline-primary"
            >
              {" "}
              <FaGoogle></FaGoogle> Login with Google
            </Button>
          </div>
          <div className="col-6">
            <Button
              onClick={handleGithubSignIn}
              className="w-100"
              variant="outline-dark"
            >
              {" "}
              <FaGithub></FaGithub> Login with Github
            </Button>
          </div>
        </div>
      </ButtonGroup>
    </div>
  );
};

export default Login;
