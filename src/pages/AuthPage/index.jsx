/**
 * todo
 * 1. create ui
 * 2. validate form using react-hook-form
 * 3. post user (useMutation, check data null => create context notification, show message)
 */

import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import OverlayForm from "./OverlayForm";

const AuthPage = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  return (
    <div className="auth-page">
      <div
        className={`container ${isLoggingIn ? "right-panel-active" : ""}`}
        id="container"
      >
        <SignUpForm />
        <SignInForm />
        <OverlayForm setIsLoggingIn={setIsLoggingIn} />
      </div>
    </div>
  );
};

export default AuthPage;
