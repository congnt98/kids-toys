import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputWithError } from "component/InputField";
import UserAPI from "api/UserAPI";
import { useNotification } from "context/NotificationContext";
import { useUser } from "context/UserContext";

const SignInForm = () => {
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const { login } = useUser();

  const {
    register: registerSignIn,
    handleSubmit: handleSubmitSignIn,
    formState: { errors: errorsSignIn },
  } = useForm();

  const handleSignIn = async (data) => {
    try {
      const user = UserAPI.login(data.email, data.password);
      login(user);
      navigate("/");
      showNotification("Đăng nhập thành công!", "success");
    } catch (error) {
      showNotification(
        "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.",
        "error"
      );
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleSubmitSignIn(handleSignIn)}>
        <h1>Sign In</h1>
        {/* <div className="social-container">
          <Link to="#" className="social">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="#" className="social">
            <i className="fab fa-google-plus-g"></i>
          </Link>
          <Link to="#" className="social">
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div> */}
        <span>or use your account</span>
        <InputWithError
          type="email"
          placeholder="Email"
          {...registerSignIn("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          errors={errorsSignIn}
        />
        <InputWithError
          autoComplete="on"
          type="password"
          placeholder="Password"
          {...registerSignIn("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          errors={errorsSignIn}
        />
        <Link to="#">Forgot your password?</Link>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
