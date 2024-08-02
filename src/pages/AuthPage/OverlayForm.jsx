import React from "react";

const OverlayForm = ({ setIsLoggingIn }) => {
  const activeSignIn = () => {
    setIsLoggingIn(false);
  };

  const activeSignUp = () => {
    setIsLoggingIn(true);
  };

  return (
    <>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us, please login with your personal info.
            </p>
            <button
              type="button"
              className="ghost"
              id="signIn"
              onClick={activeSignIn}
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us.</p>
            <button
              type="button"
              onClick={activeSignUp}
              className="ghost"
              id="signUp"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverlayForm;
