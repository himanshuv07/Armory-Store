import React, { useState } from "react";
import "../Style/Login.css";
import Google from "../assets/Google.png";
import { ImCross } from "react-icons/im";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleCloseBtn = () => {
    setIsLoginVisible(false);
  };

  return (
    <>
      {isLoginVisible && (
        <>
          <div className="background-blur"></div>
          <div className="login-form">
            <section id="log-in-sign-up-form">
              <article className="sub-sign-up">
                {isSignUp ? (
                  // Signup Form
                  <form className="sign-up-form">
                    <div className="closeBtn" onClick={handleCloseBtn}>
                      <ImCross />
                    </div>
                    <h1>Sign Up</h1>
                    <hr />
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      required
                    />

                    <span className="already-have-account">
                      Already an User?{" "}
                      <b className="btn-log-in" onClick={toggleForm}>
                        Log In
                      </b>
                    </span>

                    <button type="submit" className="login-btn">
                      Sign Up
                    </button>
                  </form>
                ) : (
                  // Login Form
                  <form className="log-in-form">
                    <div className="closeBtn" onClick={handleCloseBtn}>
                      <ImCross />
                    </div>
                    <h1>Log In</h1>
                    <hr />
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter Username"
                      required
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      required
                    />

                    <span className="create-account">
                      Don't have an account?{" "}
                      <b className="btn-sign-up" onClick={toggleForm}>
                        Sign Up
                      </b>
                    </span>

                    <button type="submit" className="login-btn">
                      Log In
                    </button>
                  </form>
                )}

                {/* Google Link  */}
                <br />
                <div className="Or-container">
                  <p>Or</p>
                  <button className="google-btn">
                    <a href="https://www.google.com">
                      <img src={Google} alt="#" />
                      <p>Sign in with Google</p>
                    </a>
                  </button>
                </div>
              </article>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
