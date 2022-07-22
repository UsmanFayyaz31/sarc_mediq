import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Row,
  FormGroup,
  Label,
  Input,
  Button,
  Form,
  Container,
} from "reactstrap";

const LoginSignup = () => {
  const {
    register: logInRegister,
    handleSubmit: handleLogInSubmit,
    formState: { errors: loginErrors },
  } = useForm({
    mode: "onChange",
  });

  const {
    register: signUpRegister,
    handleSubmit: handleSignUpSubmit,
    formState: { errors: signupErrors },
  } = useForm({
    mode: "onChange",
  });

  const [isSignUpForm, setIsSignUpForm] = useState(false);

  const onLoginSubmit = (data) => {
    console.log("debugging login Form", data);
  };

  const onSignUpSubmit = (data) => {
    console.log("debugging sign up Form", data);
  };

  return (
    <Container>
      <Row className="login-signup-row">
        <div
          style={{
            display: "block",
            width: 550,
            padding: 30,
          }}
        >
          <h2 style={{ textAlign: "center" }}>Login</h2>
          <Form onSubmit={handleLogInSubmit(onLoginSubmit)} id="login-form">
            <FormGroup>
              <Label for="emailField">EMAIL:</Label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter your email"
                {...logInRegister("email", {
                  required: {
                    value: true,
                    message: "You need to enter your email.",
                  },
                })}
              />
              {loginErrors.email && (
                <p className="form-error">{loginErrors.email.message}</p>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="passwordField">PASSWORD:</Label>
              <input
                className="form-control"
                type="password"
                name="password"
                {...logInRegister("password", {
                  required: {
                    value: true,
                    message: "You need to enter your password.",
                  },
                })}
                placeholder="Enter your password"
              />
              {loginErrors.password && (
                <p className="form-error">{loginErrors.password.message}</p>
              )}
            </FormGroup>
            <div style={{ textAlign: "center" }}>
              <Button htmlFor="login-form">Log In</Button>
              <p
                className="create-account-text"
                onClick={() => setIsSignUpForm(!isSignUpForm)}
              >
                <u>Do not have an account? Create an account</u>
              </p>
            </div>
          </Form>
        </div>
      </Row>

      {isSignUpForm && (
        <Row className="login-signup-row">
          <div
            style={{
              display: "block",
              width: 550,
              padding: 30,
            }}
          >
            <h2 style={{ textAlign: "center" }}>Sign up</h2>
            <Form
              onSubmit={handleSignUpSubmit(onSignUpSubmit)}
              id="signup-form"
            >
              <FormGroup>
                <Label for="emailField">EMAIL:</Label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  {...signUpRegister("email", {
                    required: {
                      value: true,
                      message: "You need to enter your email.",
                    },
                  })}
                  placeholder="Enter your email"
                />
                {signupErrors.email && (
                  <p className="form-error">{signupErrors.email.message}</p>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="emailField">FIRST NAME:</Label>
                <input
                  className="form-control"
                  type="text"
                  name="first_name"
                  placeholder="Enter your first name"
                  {...signUpRegister("first_name", {
                    required: {
                      value: true,
                      message: "You need to enter your first name.",
                    },
                  })}
                />
                {signupErrors.first_name && (
                  <p className="form-error">
                    {signupErrors.first_name.message}
                  </p>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="emailField">LAST NAME:</Label>
                <input
                  className="form-control"
                  type="text"
                  name="last_name"
                  placeholder="Enter your last name"
                  {...signUpRegister("last_name", {
                    required: {
                      value: true,
                      message: "You need to enter your last name.",
                    },
                  })}
                />
                {signupErrors.last_name && (
                  <p className="form-error">{signupErrors.last_name.message}</p>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="passwordField">USER NAME:</Label>
                <input
                  className="form-control"
                  type="text"
                  name="user_name"
                  placeholder="Enter your user name"
                  {...signUpRegister("username", {
                    required: {
                      value: true,
                      message: "You need to enter user name.",
                    },
                  })}
                />
                {signupErrors.username && (
                  <p className="form-error">{signupErrors.username.message}</p>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="passwordField">PASSWORD:</Label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  {...signUpRegister("password", {
                    required: {
                      value: true,
                      message: "You need to enter password.",
                    },
                  })}
                />
                {signupErrors.password && (
                  <p className="form-error">{signupErrors.password.message}</p>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="passwordField">RE ENTER PASSWORD:</Label>
                <input
                  className="form-control"
                  type="password"
                  name="reenter_password"
                  placeholder="Enter your password again"
                  {...signUpRegister("password_2", {
                    required: {
                      value: true,
                      message: "You need to enter password again.",
                    },
                  })}
                />
                {signupErrors.password_2 && (
                  <p className="form-error">
                    {signupErrors.password_2.message}
                  </p>
                )}
              </FormGroup>

              <FormGroup>
                <Label>GENDER:</Label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  {...signUpRegister("gender", {
                    required: {
                      value: true,
                      message: "You need to select gender.",
                    },
                  })}
                >
                  <option value="">Open this select menu</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="NB">Non Binary</option>
                  <option value="U">Unisex</option>
                </select>
                {signupErrors.gender && (
                  <p className="form-error">{signupErrors.gender.message}</p>
                )}
              </FormGroup>

              <div style={{ textAlign: "center" }}>
                <Button htmlFor="signup-form">Sign Up</Button>
              </div>
            </Form>
          </div>
        </Row>
      )}
    </Container>
  );
};

export default LoginSignup;
