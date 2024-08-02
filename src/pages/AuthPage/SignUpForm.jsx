import React from "react";
import { useForm } from "react-hook-form";
import { InputWithError } from "component/InputField";
import { Link, useNavigate } from "react-router-dom";
import { generateUniqueId } from "utils/stringUtils";
import UserAPI from "api/UserAPI";
import { useNotification } from "context/NotificationContext";
import { useMutation } from "@tanstack/react-query";

const SignUpForm = () => {
  const { showNotification } = useNotification();
  const navigate = useNavigate();

  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: errorsSignUp },
    watch: watchSignUp,
  } = useForm();

  const password = watchSignUp("password", "");

  const userPostData = useMutation({
    mutationFn: UserAPI.postUser,
    onSuccess: (res) => {
      showNotification("Tạo tài khoản thành công!", "success");
      navigate("/user");
    },
    onError: (err) => {
      showNotification(
        "Đã xảy ra lỗi khi tạo tài khoản. Vui lòng thử lại.",
        "error"
      );
    },
  });

  const handleSignUp = async (data) => {
    const newId = generateUniqueId();

    const user = {
      id: newId,
      name: data.name,
      email: data.email,
      password: data.password,
    };

    const userExistsByName = await UserAPI.checkUserByName(user.name);
    const userExistsById = await UserAPI.checkUserByID(user.id);

    if (userExistsByName) {
      showNotification("Người dùng với tên này đã tồn tại", "error");
      return;
    }

    if (userExistsById) {
      showNotification("Người dùng với id này đã tồn tại", "error");
      return;
    }

    userPostData.mutate(user);
  };
  return (
    <>
      <div className="form-container sign-up-container">
        <form onSubmit={handleSubmitSignUp(handleSignUp)}>
          <h1>Create Account</h1>
          <div className="social-container">
            <Link to="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </Link>
            <Link to="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
          <span>or use your email for registration</span>
          <InputWithError
            type="text"
            placeholder="Name"
            {...registerSignUp("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            errors={errorsSignUp}
          />

          <InputWithError
            type="email"
            {...registerSignUp("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
            errors={errorsSignUp}
          />

          <InputWithError
            type="password"
            autoComplete="on"
            {...registerSignUp("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
              },
            })}
            placeholder="Password"
            errors={errorsSignUp}
          />

          <InputWithError
            type="password"
            autoComplete="on"
            placeholder="Confirm Password"
            {...registerSignUp("ConfirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "The passwords do not match",
            })}
            errors={errorsSignUp}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
