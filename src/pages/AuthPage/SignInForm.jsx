import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputWithError } from "component/InputField";
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

  const handleSignIn = async (user) => {
    const success = await login(user);

    if (success) {
      navigate("/"); // Chuyển hướng đến trang chính
      showNotification("Đăng nhập thành công!", "success"); // Hiển thị thông báo thành công
    } else {
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
