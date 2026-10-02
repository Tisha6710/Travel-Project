import React from "react";

function RohtangPassAdventure() {
  return (
    <div className="experience-detail-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          TravelMate
        </div>

        <div className="nav-links">

          <a href="/">
            Home
          </a>

          <a href="/destinations">
            Destinations
          </a>

          <a href="/reviews">
            Reviews
          </a>

          <button className="login-btn">
            Login
          </button>

        </div>

      </nav>


      {/* ================= MAIN EXPERIENCE ================= */}

      <div className="experience-detail-container">

        <div className="experience-detail-image">

          <img
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85"
            alt="Rohtang Pass mountain adventure"
          />

        </div>


        <div className="experience-detail-content">

          <span className="experience-category">
            MOUNTAIN ADVENTURE
          </span>

          <h1>
            Rohtang Pass mountain adventure
          </h1>

          <p className="experience-location">
            📍 Rohtang Pass, Himachal Pradesh
          </p>


          <div className="experience-detail-rating">

            <span>
              ★★★★★
            </span>

            <b>
              4.7
            </b>

            <small>
              (2,130 reviews)
            </small>

          </div>


          <p className="experience-detail-price">
            from <strong>₹2,499</strong> per person
          </p>


          <p className="experience-description">
            Experience the breathtaking beauty of Rohtang Pass with
            snow-covered mountains, spectacular Himalayan landscapes and
            exciting outdoor activities. Enjoy an unforgettable mountain
            adventure from Manali.
          </p>


          <button className="book-experience-btn">
            Book Now
          </button>

        </div>

      </div>


      {/* ================= ABOUT ================= */}

      <div className="experience-about">

        <h2>
          About this experience
        </h2>

        <p>
          Rohtang Pass is one of the most popular mountain experiences
          around Manali. Enjoy spectacular views of the Himalayas,
          beautiful valleys and snow-covered landscapes while exploring
          this scenic mountain destination.
        </p>


        {/* ================= HIGHLIGHTS ================= */}

        <div className="experience-highlights">

          <div>

            <h3>
              ❄️ Snow Experience
            </h3>

            <p>
              Enjoy the beautiful snow-covered landscapes and refreshing
              mountain environment.
            </p>

          </div>


          <div>

            <h3>
              🏔️ Himalayan Views
            </h3>

            <p>
              Experience spectacular panoramic views of the surrounding
              Himalayan mountains.
            </p>

          </div>


          <div>

            <h3>
              🚙 Mountain Adventure
            </h3>

            <p>
              Explore the scenic mountain roads and enjoy an exciting
              outdoor adventure from Manali.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default RohtangPassAdventure;