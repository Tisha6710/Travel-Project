import React from "react";

function BeasRiver() {
  return (
    <div className="experience-detail-page">

      <nav className="navbar">
        <div className="logo">TravelMate</div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/destinations">Destinations</a>
          <a href="/reviews">Reviews</a>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      <div className="experience-detail-container">

        <div className="experience-detail-image">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"
            alt="Beas River"
          />
        </div>

        <div className="experience-detail-content">

          <span className="experience-category">
            NATURE EXPERIENCE
          </span>

          <h1>
            Relaxing Beas River experience
          </h1>

          <p className="experience-location">
            📍 Manali, Himachal Pradesh
          </p>

          <div className="experience-detail-rating">
            <span>★★★★★</span>
            <b>4.7</b>
            <small>(1,120 reviews)</small>
          </div>

          <p className="experience-detail-price">
            from <strong>₹499</strong> per person
          </p>

          <p className="experience-description">
            Enjoy a peaceful experience beside the beautiful Beas River.
            Relax in nature, enjoy the scenic mountain views and spend
            quality time away from the busy city life.
          </p>

          <button className="book-experience-btn">
            Book Now
          </button>

        </div>
      </div>

      <div className="experience-about">

        <h2>About this experience</h2>

        <p>
          The Beas River experience is perfect for travellers looking for
          a calm and refreshing escape in Manali. Enjoy the sound of
          flowing water, fresh mountain air and beautiful surroundings.
        </p>

        <div className="experience-highlights">

          <div>
            <h3>🌊 Riverside Views</h3>
            <p>
              Enjoy beautiful views of the Beas River surrounded by
              mountains.
            </p>
          </div>

          <div>
            <h3>📸 Scenic Experience</h3>
            <p>
              Capture peaceful landscapes and memorable moments.
            </p>
          </div>

          <div>
            <h3>🌿 Relaxing Environment</h3>
            <p>
              Spend relaxing time in the peaceful natural surroundings.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default BeasRiver;