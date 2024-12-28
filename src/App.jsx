import "./App.css";
import InputField from "./Components/InputField";
import SociaLogin from "./Components/SociaLogin";

function App() {
  return (
    <>
      <div className="login-container">
        <h2 className="login-title">Log in with</h2>
        <SociaLogin />
        <p className="separator">
          <span>or</span>
        </p>

        <form action="#" className="login-form">
          <InputField type="email" placeholder="Email address" icon="mail" />
          <InputField type="password" placeholder="Password" icon="lock" />
          <a href="#" className="forgot-pass-link">
            Forgot Password
          </a>
          <button className="login-button">Log In</button>
        </form>
        <p className="signup-text">
          Don&apos;t have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </>
  );
}

export default App;
