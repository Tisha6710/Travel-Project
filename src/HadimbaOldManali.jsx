import React from "react";

function HadimbaOldManali() {
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
            src="https://images.unsplash.com/photo-1609920658906-8223bd289001?auto=format&fit=crop&w=1200&q=85"
            alt="Hadimba Temple and Old Manali"
          />
        </div>

        <div className="experience-detail-content">

          <span className="experience-category">
            CULTURAL EXPERIENCE
          </span>

          <h1>
            Hadimba Temple and Old Manali walk
          </h1>

          <p className="experience-location">
            📍 Manali, Himachal Pradesh
          </p>

          <div className="experience-detail-rating">
            <span>★★★★★</span>
            <b>4.6</b>
            <small>(764 reviews)</small>
          </div>

          <p className="experience-detail-price">
            from <strong>₹699</strong> per person
          </p>

          <p className="experience-description">
            Explore the peaceful Hadimba Temple and discover the charming
            streets, cafés and local culture of Old Manali on a relaxing
            walking experience.
          </p>

          <button className="book-experience-btn">
            Book Now
          </button>

        </div>

      </div>

      <div className="experience-about">

        <h2>About this experience</h2>

        <p>
          Enjoy a cultural and scenic walk through some of Manali's most
          popular places. Visit the historic Hadimba Temple surrounded by
          beautiful cedar forests and then explore the lively atmosphere of
          Old Manali.
        </p>

        <div className="experience-highlights">

          <div>
            <h3>🏛️ Hadimba Temple</h3>
            <p>Explore the historic temple and its peaceful surroundings.</p>
          </div>

          <div>
            <h3>🚶 Old Manali Walk</h3>
            <p>Walk through local streets, cafés and traditional shops.</p>
          </div>

          <div>
            <h3>🌲 Nature</h3>
            <p>Enjoy beautiful cedar forests and mountain surroundings.</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default HadimbaOldManali;
