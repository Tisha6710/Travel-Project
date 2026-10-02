import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {

    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    alert("Account created successfully! 🎉");

    navigate("/login");
  };

  return (

    <div className="signup-page">

      <Link to="/" className="signup-back">
        ← Back to TravelMate
      </Link>


      <div className="signup-container">


        {/* ================= LEFT SECTION ================= */}

        <div className="signup-info">

          <span className="signup-tag">
            ✈️ JOIN TRAVELMATE
          </span>

          <h1>
            Start your
            <span> journey</span>
            with us.
          </h1>

          <p>
            Create your TravelMate account and discover amazing
            destinations, travel experiences and personalized
            recommendations.
          </p>


          <div className="signup-features">

            <div>
              <span>🌍</span>
              <p>
                Explore beautiful destinations
              </p>
            </div>

            <div>
              <span>❤️</span>
              <p>
                Save your favourite places
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


        {/* ================= SIGNUP CARD ================= */}

        <div className="signup-card">


          <div className="signup-card-header">

            <div className="signup-icon">
              ✈️
            </div>

            <h2>
              Create Account
            </h2>

            <p>
              Join TravelMate and start exploring
            </p>

          </div>


          <form onSubmit={handleSignup}>


            {/* NAME */}

            <div className="signup-field">

              <label>
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

            </div>


            {/* EMAIL */}

            <div className="signup-field">

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

            <div className="signup-field">

              <label>
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>


            {/* CONFIRM PASSWORD */}

            <div className="signup-field">

              <label>
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
              />

            </div>


            {/* CREATE BUTTON */}

            <button
              type="submit"
              className="signup-submit"
            >
              Create Account →
            </button>


          </form>


          {/* LOGIN LINK */}

          <div className="login-text">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </div>


        </div>

      </div>

    </div>

  );
}

export default Signup;