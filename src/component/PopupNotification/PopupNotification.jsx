import React, { useEffect } from "react";
import "./popup-notification.scss";
import { useNotification } from "context/NotificationContext";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
} from "react-icons/fa";

const PopupNotification = () => {
  const { notification, hideNotification } = useNotification();

  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => {
        hideNotification();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification, hideNotification]);

  let icon;
  switch (notification.type) {
    case "success":
      icon = <FaCheckCircle />;
      break;
    case "error":
      icon = <FaExclamationCircle />;
      break;
    case "info":
    default:
      icon = <FaInfoCircle />;
      break;
  }

  if (!notification.message) return null;

  return (
    <>
      <div
        className={`toast active  ${
          notification.message ? "active" : ""
        } toast-${notification.type}`}
      >
        <div className="toast-content">
          {icon}
          <div className="message">
            <span className="text text-2">
              {notification.message} {notification.message}
              {notification.message}
              {notification.message}
            </span>
          </div>
        </div>
        <i className="fa-solid fa-xmark close" onClick={hideNotification}></i>

        <div className="progress active"></div>
      </div>
    </>
  );
};

export default PopupNotification;
