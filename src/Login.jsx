import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    alert("Login successful! 🎉");

  };

  return (

    <div className="login-page">

      {/* BACK TO HOME */}

      <Link to="/" className="login-back">
        ← Back to TravelMate
      </Link>


      <div className="login-container">


        {/* LEFT SIDE */}

        <div className="login-info">

          <span className="login-tag">
            ✈️ WELCOME BACK
          </span>

          <h1>
            Your next
            <span> adventure</span>
            starts here.
          </h1>

          <p>
            Login to explore destinations, save your favourite
            experiences and discover travel recommendations
            made for you.
          </p>


          <div className="login-features">

            <div>
              <span>🌍</span>
              <p>
                Discover amazing destinations
              </p>
            </div>

            <div>
              <span>❤️</span>
              <p>
                Save your favourite experiences
              </p>
            </div>

            <div>
              <span>⭐</span>
              <p>
                Share your travel experiences
              </p>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="login-card">

          <div className="login-card-header">

            <div className="login-icon">
              ✈️
            </div>

            <h2>
              Welcome Back
            </h2>

            <p>
              Login to your TravelMate account
            </p>

          </div>


          <form onSubmit={handleLogin}>


            {/* EMAIL */}

            <div className="login-field">

              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>


            {/* PASSWORD */}

            <div className="login-field">

              <label>
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>


            {/* FORGOT PASSWORD */}

            <div className="login-options">

              <label>

                <input
                  type="checkbox"
                />

                Remember me

              </label>


              <button
                type="button"
                className="forgot-btn"
                onClick={() =>
                  alert("Password reset feature coming soon!")
                }
              >
                Forgot Password?
              </button>

            </div>


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-submit"
            >
              Login to TravelMate →
            </button>


          </form>


          {/* SIGNUP */}

          <div className="signup-text">

            Don't have an account?

           <Link to="/signup">
  Create Account
</Link>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Login;