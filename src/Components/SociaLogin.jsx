import React from "react";

const SociaLogin = () => {
  return (
    <div className="social-login">
      <button className="social-login-btn">
        <img
          src="../src/assets/google.svg"
          alt="google"
          className="social-icon"
        />
        Google
      </button>
      <button className="social-login-btn">
        <img
          src="../src/assets/apple.svg"
          alt="apple"
          className="social-icon"
        />
        Apple
      </button>
    </div>
  );
};

export default SociaLogin;
