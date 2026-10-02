import React from "react";

function ManaliForestTrail() {
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

        {/* Image */}

        <div className="experience-detail-image">

          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85"
            alt="Manali nature and forest trail"
          />

        </div>


        {/* Content */}

        <div className="experience-detail-content">

          <span className="experience-category">
            NATURE & ADVENTURE
          </span>

          <h1>
            Manali nature and forest trail
          </h1>

          <p className="experience-location">
            📍 Manali, Himachal Pradesh
          </p>


          <div className="experience-detail-rating">

            <span>
              ★★★★★
            </span>

            <b>
              4.8
            </b>

            <small>
              (1,540 reviews)
            </small>

          </div>


          <p className="experience-detail-price">
            from <strong>₹1,200</strong> per person
          </p>


          <p className="experience-description">
            Explore the peaceful forests of Manali on a refreshing nature
            trail surrounded by pine trees, mountain views and fresh
            Himalayan air. This experience is perfect for travellers who
            want to enjoy Manali away from the crowded tourist spots.
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
          Discover the natural beauty of Manali through a relaxing forest
          trail. Walk through peaceful pine forests, enjoy scenic mountain
          views and experience the calm atmosphere of the Himalayas.
          The trail is suitable for travellers who enjoy nature, walking
          and outdoor experiences.
        </p>


        {/* ================= HIGHLIGHTS ================= */}

        <div className="experience-highlights">

          <div>

            <h3>
              🌲 Pine Forests
            </h3>

            <p>
              Walk through beautiful pine forests and enjoy the peaceful
              natural surroundings.
            </p>

          </div>


          <div>

            <h3>
              🏔️ Mountain Views
            </h3>

            <p>
              Enjoy scenic views of the Himalayan mountains throughout
              the trail.
            </p>

          </div>


          <div>

            <h3>
              🥾 Nature Walk
            </h3>

            <p>
              Experience a refreshing outdoor walk surrounded by fresh
              mountain air and greenery.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ManaliForestTrail;