import Login from "./Login";
import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";

import Destinations from "./Destinations";
import DestinationDetails from "./DestinationDetails";
import Reviews from "./reviews";
import Signup from "./Signup";

import Manali from "./Manali";
import Goa from "./Goa";
import Jaipur from "./Jaipur";
import Kerala from "./Kerala";
import Ladakh from "./Ladakh";
import Rishikesh from "./Rishikesh";
import Udaipur from "./Udaipur";
import Varanasi from "./Varanasi";
import Agra from "./Agra";
import Mumbai from "./Mumbai";
import Delhi from "./Delhi";
import Darjeeling from "./Darjeeling";
import Andaman from "./Andaman";
import "./App.css";
import "./effects.css";
import useEffects from "./useEffects";


import ManaliExperience from "./ManaliExperience";
import SolangAdventure from "./SolangAdventure";

/* ================= HOME PAGE ================= */

function Home() {

  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const handleSearch = () => {

    const destination = search.trim().toLowerCase();

    if (destination === "manali") {
      window.location.href = "/destination/Manali";
    }
    else if (destination === "goa") {
      window.location.href = "/destination/Goa";
    }
    else if (destination === "jaipur") {
      window.location.href = "/destination/Jaipur";
    }
    else {
      alert("Destination not found! Try Manali, Goa or Jaipur.");
    }
  };

  /* ================= FAVORITE FUNCTION ================= */

  const toggleFavorite = (name) => {

    setFavorites((previousFavorites) => {

      if (previousFavorites.includes(name)) {

        return previousFavorites.filter(
          (item) => item !== name
        );

      }

      return [...previousFavorites, name];

    });

  };

  return (
    <div>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <Link to="/" className="logo">
          ✈️ TravelMate
        </Link>

        <div className="nav-links">

          <Link to="/" className="nav-item">
            Home
          </Link>

          <Link to="/destinations" className="nav-item">
            Destinations
          </Link>

          <Link to="/reviews" className="nav-item">
            Reviews
          </Link>

          <div className="favorite-count">
            ❤️ {favorites.length}
          </div>

          <Link to="/login" className="login-btn">
  Login
</Link>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <main>

        <section className="hero-section">

          <div className="hero-content">

            <span className="hero-tag">
              EXPLORE • DISCOVER • TRAVEL
            </span>

            <h1>
              Discover Your Perfect
              <span> Destination</span>
            </h1>

            <p>
              Explore amazing destinations, read real traveller reviews
              and get personalized travel recommendations.
            </p>

            {/* SEARCH */}

            <div className="hero-search">

              <span className="search-icon">
                🔍
              </span>

              <input
                type="text"
                placeholder="Where do you want to go?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {

                  if (e.key === "Enter") {
                    handleSearch();
                  }

                }}
              />

              <button onClick={handleSearch}>
                Explore Now →
              </button>

            </div>

          </div>

        </section>


        {/* ================= DESTINATION CARDS ================= */}

        <section
          className="destinations-section"
          id="popular"
        >

          <div className="section-heading">

            

            <h2>
              Explore India's beautiful places
            </h2>

            <p>
              Discover amazing destinations and plan your next journey.
            </p>

          </div>

            <div className="tm-place-carousel-wrap">

  <style>{`
    /* ==============================
       DESTINATION CAROUSEL
    ============================== */

    .tm-place-carousel-wrap {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 14px;
      margin-top: 30px;
    }

    /* LEFT + RIGHT ARROWS */
    .tm-place-arrow {
      flex: 0 0 48px;
      width: 48px;
      height: 48px;
      border: none;
      border-radius: 50%;
      background: white;
      color: #222;
      font-size: 25px;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);

      transition: all 0.25s ease;

      z-index: 5;
    }

    .tm-place-arrow:hover {
      background: #222;
      color: white;
      transform: scale(1.08);
    }


    /* ==============================
       VIEWPORT
    ============================== */

    .tm-place-viewport {
      flex: 1;
      min-width: 0;

      overflow-x: auto;
      overflow-y: hidden;

      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;

      scrollbar-width: none;
    }

    .tm-place-viewport::-webkit-scrollbar {
      display: none;
    }


    /* ==============================
       EACH PAGE
       EXACTLY 4 CARDS
    ============================== */

    .tm-place-track {
      display: flex;
      width: 100%;
    }

    .tm-place-page {
      flex: 0 0 100%;
      width: 100%;

      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));

      gap: 20px;

      scroll-snap-align: start;
    }


    /* ==============================
       CARD
    ============================== */

    .tm-place-card {
      width: 100%;
      min-width: 0;

      background: white;

      border-radius: 18px;
      overflow: hidden;

      box-shadow: 0 7px 22px rgba(0, 0, 0, 0.08);

      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
    }

    .tm-place-card:hover {
      transform: translateY(-5px);

      box-shadow:
        0 12px 28px rgba(0, 0, 0, 0.14);
    }


    /* ==============================
       IMAGE
    ============================== */

    .tm-place-image {
      width: 100%;
      height: 190px;

      object-fit: cover;

      display: block;
    }


    /* ==============================
       CARD CONTENT
    ============================== */

    .tm-place-content {
      padding: 16px;
    }

    .tm-place-location {
      font-size: 12px;
      color: #777;

      margin-bottom: 7px;
    }

    .tm-place-content h3 {
      margin: 0 0 8px;

      font-size: 20px;
      color: #222;
    }

    .tm-place-content p {
      margin: 0 0 15px;

      color: #666;

      font-size: 13px;

      line-height: 1.5;

      min-height: 40px;
    }


    /* ==============================
       VIEW DETAILS BUTTON
    ============================== */

    .tm-place-btn {
      display: inline-block;

      text-decoration: none;

      background: #222;
      color: white;

      padding: 8px 14px;

      border-radius: 8px;

      font-size: 12px;

      transition: 0.25s ease;
    }

    .tm-place-btn:hover {
      background: #444;
    }


    /* ==============================
       TABLET
    ============================== */

    @media (max-width: 1000px) {

      .tm-place-page {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

    }


    /* ==============================
       MOBILE
    ============================== */

    @media (max-width: 600px) {

      .tm-place-carousel-wrap {
        gap: 8px;
      }

      .tm-place-arrow {
        flex: 0 0 40px;

        width: 40px;
        height: 40px;

        font-size: 20px;
      }

      .tm-place-page {
        grid-template-columns: 1fr;
      }

      .tm-place-image {
        height: 220px;
      }

    }
  `}</style>


  {/* ==============================
      LEFT / BACKWARD ARROW
  ============================== */}

  <button
    className="tm-place-arrow"
    aria-label="Previous destinations"
    onClick={() => {

      const slider =
        document.getElementById("tm-place-viewport");

      slider.scrollBy({
        left: -slider.clientWidth,
        behavior: "smooth"
      });

    }}
  >
    ←
  </button>


  {/* ==============================
      CAROUSEL VIEWPORT
  ============================== */}

  <div
    className="tm-place-viewport"
    id="tm-place-viewport"
  >

    <div className="tm-place-track">


      {/* ==============================
          PAGE 1
          4 CARDS
      ============================== */}

      <div className="tm-place-page">

        {/* MANALI */}
        <div className="tm-place-card">

          <img
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
            alt="Manali"
            className="tm-place-image"
          />

          <div className="tm-place-content">

            <div className="tm-place-location">
              📍 Himachal Pradesh
            </div>

            <h3>Manali</h3>

            <p>
              Mountains, snow and beautiful valleys.
            </p>

           <Link to="/manali">View Details</Link>

          </div>

        </div>


        {/* GOA */}
        <div className="tm-place-card">

          <img
            src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
            alt="Goa"
            className="tm-place-image"
          />

          <div className="tm-place-content">

            <div className="tm-place-location">
              📍 Goa, India
            </div>

            <h3>Goa</h3>

            <p>
              Beaches, sunsets and a relaxing vacation.
            </p>

            <Link to="/goa">View Details</Link>

          </div>

        </div>


        {/* JAIPUR */}
        <div className="tm-place-card">

          <img
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
            alt="Jaipur"
            className="tm-place-image"
          />

          <div className="tm-place-content">

            <div className="tm-place-location">
              📍 Rajasthan, India
            </div>

            <h3>Jaipur</h3>

            <p>
              Explore forts, palaces and rich culture.
            </p>

            <Link to="/jaipur">View Details</Link>

          </div>

        </div>


        {/* KERALA */}
        <div className="tm-place-card">

          <img
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80"
            alt="Kerala"
            className="tm-place-image"
          />

          <div className="tm-place-content">

            <div className="tm-place-location">
              📍 Kerala, India
            </div>

            <h3>Kerala</h3>

            <p>
              Backwaters, greenery and peaceful landscapes.
            </p>

           <Link to="/kerala">View Details</Link>
          </div>

        </div>

      </div>


      {/* ==============================
          PAGE 2
          4 CARDS
      ============================== */}

      <div className="tm-place-page">

        {/* LADAKH */}
        <div className="tm-place-card">

          <img
            src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
            alt="Ladakh"
            className="tm-place-image"
          />

          <div className="tm-place-content">

            <div className="tm-place-location">
              📍 Ladakh, India
            </div>

            <h3>Ladakh</h3>

            <p>
              Mountains, lakes and breathtaking adventures.
            </p>

            <Link to="/ladakh">View Details</Link>

          </div>

        </div>


        {/* RISHIKESH */}
        <div className="tm-place-card">

          <img
            src="https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80"
            alt="Rishikesh"
            className="tm-place-image"
          />

          <div className="tm-place-content">

            <div className="tm-place-location">
              📍 Uttarakhand, India
            </div>

            <h3>Rishikesh</h3>

            <p>
              Adventure, rivers and peaceful surroundings.
            </p>

         <Link to="/rishikesh">View Details</Link>

          </div>

        </div>


        {/* UDAIPUR */}
        <div className="tm-place-card">

          <img
            src="https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=800&q=80"
            alt="Udaipur"
            className="tm-place-image"
          />

          <div className="tm-place-content">

            <div className="tm-place-location">
              📍 Rajasthan, India
            </div>

            <h3>Udaipur</h3>

            <p>
              Lakes, palaces and beautiful royal views.
            </p>

            <Link to="/udaipur">View Details</Link>

          </div>

        </div>


        {/* VARANASI */}
        <div className="tm-place-card">

          <img
            src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=800&q=80"
            alt="Varanasi"
            className="tm-place-image"
          />

          <div className="tm-place-content">

            <div className="tm-place-location">
              📍 Uttar Pradesh, India
            </div>

            <h3>Varanasi</h3>

            <p>
              Ancient ghats, temples and rich culture.
            </p>
           <Link to="/varanasi">View Details</Link>

          </div>

        </div>

      </div>


      {/* ==============================
          PAGE 3
          4 CARDS
      ============================== */}

      <div className="tm-place-page">

        {/* AGRA */}
        <div className="tm-place-card">

          <img
            src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
            alt="Agra"
            className="tm-place-image"
          />

          <div className="tm-place-content">

            <div className="tm-place-location">
              📍 Uttar Pradesh, India
            </div>

            <h3>Agra</h3>

            <p>
              Historic monuments and the iconic Taj Mahal.
            </p>

           <Link to="/agra">View Details</Link>

          </div>

        </div>


        {/* MUMBAI */}
        <div className="tm-place-card">

          <img
            src="https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=800&q=80"
            alt="Mumbai"
            className="tm-place-image"
          />

          <div className="tm-place-content">

            <div className="tm-place-location">
              📍 Maharashtra, India
            </div>

            <h3>Mumbai</h3>

            <p>
              The city of dreams, beaches and nightlife.
            </p>

           <Link to="/mumbai">View Details</Link>

          </div>

        </div>


        {/* DELHI */}
        <div className="tm-place-card">

          <img
            src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80"
            alt="Delhi"
            className="tm-place-image"
          />

          <div className="tm-place-content">

            <div className="tm-place-location">
              📍 Delhi, India
            </div>

            <h3>Delhi</h3>

            <p>
              History, monuments, food and modern city life.
            </p>
<Link to="/delhi">View Details</Link>

          </div>

        </div>


        {/* DARJEELING */}
        <div className="tm-place-card">

          <img
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
            alt="Darjeeling"
            className="tm-place-image"
          />

          <div className="tm-place-content">

            <div className="tm-place-location">
              📍 West Bengal, India
            </div>

            <h3>Darjeeling</h3>

            <p>
              Tea gardens, hills and stunning mountain views.
            </p>

           <Link to="/darjeeling">View Details</Link>

          </div>

        </div>

      </div>


      {/* ==============================
          PAGE 4
          3 CARDS
      ============================== */}

      <div className="tm-place-page">

        {/* ANDAMAN */}
        <div className="tm-place-card">

          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
            alt="Andaman"
            className="tm-place-image"
          />

          <div className="tm-place-content">

            <div className="tm-place-location">
              📍 Andaman & Nicobar
            </div>

            <h3>Andaman</h3>

            <p>
              Crystal-clear water, beaches and island adventures.
            </p>

           <Link to="/andaman">View Details</Link>
          </div>

        </div>


        {/* AMRITSAR */}
        <div className="tm-place-card">

          <img
            src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80"
            alt="Amritsar"
            className="tm-place-image"
          />

          <div className="tm-place-content">

            <div className="tm-place-location">
              📍 Punjab, India
            </div>

            <h3>Amritsar</h3>

            <p>
              Golden Temple, culture and delicious food.
            </p>

            <Link
              to="/destination/Amritsar"
              className="tm-place-btn"
            >
              View Details
            </Link>

          </div>

        </div>


        {/* MYSORE */}
        <div className="tm-place-card">

          <img
            src="https://images.unsplash.com/photo-1600100397608-f010c1f0c2c5?auto=format&fit=crop&w=800&q=80"
            alt="Mysore"
            className="tm-place-image"
          />

          <div className="tm-place-content">

            <div className="tm-place-location">
              📍 Karnataka, India
            </div>

            <h3>Mysore</h3>

            <p>
              Palaces, heritage and beautiful architecture.
            </p>

            <Link
              to="/destination/Mysore"
              className="tm-place-btn"
            >
              View Details
            </Link>

          </div>

        </div>

      </div>

    </div>

  </div>


  {/* ==============================
      RIGHT / FORWARD ARROW
  ============================== */}

  <button
    className="tm-place-arrow"
    aria-label="Next destinations"
    onClick={() => {

      const slider =
        document.getElementById("tm-place-viewport");

      slider.scrollBy({
        left: slider.clientWidth,
        behavior: "smooth"
      });

    }}
  >
    →
  </button>

</div>
          

          






        </section>


        {/* =================================================
           MANALI EXPERIENCES
        ================================================= */}

        <section
          className="experiences-section"
          id="experiences"
        >

          <div className="experiences-heading">

            <h2>
              Explore experiences near Manali
            </h2>

            <p>
              Can't-miss picks for your next mountain adventure
            </p>

          </div>


          <div className="experiences-grid">


            {/* ================= EXPERIENCE 1 ================= */}

            <Link
              to="/experience/manali-sightseeing"
              className="experience-card large-experience experience-card-link"
            >

              <div className="experience-image-wrapper">

                <img
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=85"
                  alt="Manali Mountains"
                />

                <button
                  type="button"
                  className={`heart-btn ${
                    favorites.includes("Manali Sightseeing")
                      ? "liked"
                      : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite("Manali Sightseeing");
                  }}
                >
                  {favorites.includes("Manali Sightseeing")
                    ? "♥"
                    : "♡"}
                </button>

              </div>

              <div className="experience-content">

                <h3>
                  The best of Manali sightseeing tour
                </h3>

                <div className="rating">

                  <span>
                    ★★★★★
                  </span>

                  <b>
                    4.8
                  </b>

                  <small>
                    (124)
                  </small>

                </div>

                <p className="experience-price">
                  from <strong>₹2,499</strong> per person
                </p>

              </div>

            </Link>


            {/* ================= EXPERIENCE 2 ================= */}

            

<Link
  to="/experience/solang-adventure"
  className="experience-card experience-card-link"
>

  <div className="experience-image-wrapper">

    <img
      src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=900&q=85"
      alt="Solang Valley"
    />

    <button
      type="button"
      className={`heart-btn ${
        favorites.includes("Solang Valley")
          ? "liked"
          : ""
      }`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite("Solang Valley");
      }}
    >
      {favorites.includes("Solang Valley")
        ? "♥"
        : "♡"}
    </button>

  </div>

  <div className="experience-content">

    <h3>
      Solang Valley adventure experience
    </h3>

    <div className="rating">

      <span>
        ★★★★★
      </span>

      <b>
        4.7
      </b>

      <small>
        (98)
      </small>

    </div>

    <p className="experience-price">
      from <strong>₹1,899</strong> per person
    </p>

  </div>

</Link>

            


            {/* ================= EXPERIENCE 3 ================= */}

            <div className="experience-card">

              <div className="experience-image-wrapper">

                <img
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85"
                  alt="Hadimba Temple"
                />

                <button
                  className={`heart-btn ${
                    favorites.includes("Hadimba Temple")
                      ? "liked"
                      : ""
                  }`}
                  onClick={() =>
                    toggleFavorite("Hadimba Temple")
                  }
                >
                  {favorites.includes("Hadimba Temple")
                    ? "♥"
                    : "♡"}
                </button>

              </div>

              <div className="experience-content">

                <h3>
                  Hadimba Temple and Old Manali walk
                </h3>

                <div className="rating">

                  <span>
                    ★★★★★
                  </span>

                  <b>
                    4.9
                  </b>

                  <small>
                    (156)
                  </small>

                </div>

                <p className="experience-price">
                  from <strong>₹999</strong> per person
                </p>

              </div>

            </div>


            {/* ================= EXPERIENCE 4 ================= */}

            <div className="experience-card">

              <div className="experience-image-wrapper">

                <img
                  src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85"
                  alt="Beas River"
                />

                <button
                  className={`heart-btn ${
                    favorites.includes("Beas River")
                      ? "liked"
                      : ""
                  }`}
                  onClick={() =>
                    toggleFavorite("Beas River")
                  }
                >
                  {favorites.includes("Beas River")
                    ? "♥"
                    : "♡"}
                </button>

              </div>

              <div className="experience-content">

                <h3>
                  Relaxing Beas River experience
                </h3>

                <div className="rating">

                  <span>
                    ★★★★★
                  </span>

                  <b>
                    4.6
                  </b>

                  <small>
                    (87)
                  </small>

                </div>

                <p className="experience-price">
                  from <strong>₹799</strong> per person
                </p>

              </div>

            </div>


            {/* ================= EXPERIENCE 5 ================= */}

            <div className="experience-card">

              <div className="experience-image-wrapper">

                <img
                  src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85"
                  alt="Manali Nature"
                />

                <button
                  className={`heart-btn ${
                    favorites.includes("Manali Nature Trail")
                      ? "liked"
                      : ""
                  }`}
                  onClick={() =>
                    toggleFavorite("Manali Nature Trail")
                  }
                >
                  {favorites.includes("Manali Nature Trail")
                    ? "♥"
                    : "♡"}
                </button>

              </div>

              <div className="experience-content">

                <h3>
                  Manali nature and forest trail
                </h3>

                <div className="rating">

                  <span>
                    ★★★★★
                  </span>

                  <b>
                    4.8
                  </b>

                  <small>
                    (73)
                  </small>

                </div>

                <p className="experience-price">
                  from <strong>₹1,299</strong> per person
                </p>

              </div>

            </div>


            {/* ================= EXPERIENCE 6 ================= */}

            <div className="experience-card">

              <div className="experience-image-wrapper">

                <img
                  src="https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=900&q=85"
                  alt="Rohtang Pass"
                />

                <button
                  className={`heart-btn ${
                    favorites.includes("Rohtang Pass")
                      ? "liked"
                      : ""
                  }`}
                  onClick={() =>
                    toggleFavorite("Rohtang Pass")
                  }
                >
                  {favorites.includes("Rohtang Pass")
                    ? "♥"
                    : "♡"}
                </button>

              </div>

              <div className="experience-content">

                <h3>
                  Rohtang Pass mountain adventure
                </h3>

                <div className="rating">

                  <span>
                    ★★★★★
                  </span>

                  <b>
                    4.9
                  </b>

                  <small>
                    (211)
                  </small>

                </div>

                <p className="experience-price">
                  from <strong>₹2,999</strong> per person
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
           INTEREST SECTION
        ================================================= */}

        <section
          className="interest-section"
          id="interests"
        >

          <div className="interest-heading">

            <h2>
              Find things to do by interest
            </h2>

            <p>
              Whatever you're into, we've got it
            </p>

          </div>


          <div className="interest-grid">


            {/* CULTURE */}

            <div className="interest-card large">

              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85"
                alt="Culture"
              />

              <div className="interest-overlay"></div>

              <h3>
                Culture
              </h3>

            </div>


            {/* WATER */}

            <div className="interest-card">

              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"
                alt="Water"
              />

              <div className="interest-overlay"></div>

              <h3>
                Water
              </h3>

            </div>


            {/* ADVENTURE */}

            <div className="interest-card">

              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=85"
                alt="Adventure"
              />

              <div className="interest-overlay"></div>

              <h3>
                Adventure
              </h3>

            </div>


            {/* NATURE */}

            <div className="interest-card">

              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85"
                alt="Nature"
              />

              <div className="interest-overlay"></div>

              <h3>
                Nature
              </h3>

            </div>


            {/* FOOD */}

            <div className="interest-card">

              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85"
                alt="Food"
              />

              <div className="interest-overlay"></div>

              <h3>
                Food
              </h3>

            </div>

          </div>

        </section>
        {/* ICONIC PLACES SECTION */}
<section className="iconic-section">
  <div className="iconic-header">
    <h2>Iconic places you need to see</h2>

    <button className="iconic-arrow">
      →
    </button>
  </div>

  <div className="iconic-cards">

    <div className="iconic-card">
      <img
        src="https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=800&q=80"
        alt="Rome, Italy"
      />
      <div className="iconic-overlay"></div>
      <h3>Rome, Italy</h3>
    </div>

    <div className="iconic-card">
      <img
        src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
        alt="Paris, France"
      />
      <div className="iconic-overlay"></div>
      <h3>Paris, France</h3>
    </div>

    <div className="iconic-card">
      <img
        src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80"
        alt="Las Vegas, NV"
      />
      <div className="iconic-overlay"></div>
      <h3>Las Vegas, NV</h3>
    </div>

    <div className="iconic-card">
      <img
        src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
        alt="London, UK"
      />
      <div className="iconic-overlay"></div>
      <h3>London, UK</h3>
    </div>

  </div>
</section>



        {/* =================================================
           TRAVEL CTA
        ================================================= */}

        <section className="travel-cta">

          <div className="travel-cta-content">

            <span className="cta-tag">
              ✈️ YOUR NEXT ADVENTURE AWAITS
            </span>

            <h2>
              Ready to explore
              <span> something amazing?</span>
            </h2>

            <p>
              Discover beautiful places, read real traveller
              experiences and find your perfect destination.
            </p>

            <Link to="/destinations">
              <button className="cta-button">
                Explore Destinations →
              </button>
            </Link>

          </div>
          

        </section>
        


        {/* =================================================
           FOOTER
        ================================================= */}

        <footer className="footer">

          <div className="footer-container">


            {/* BRAND */}

            <div className="footer-brand">

              <Link
                to="/"
                className="footer-logo"
              >
                ✈️ TravelMate
              </Link>

              <p>
                Discover destinations, explore experiences
                and plan unforgettable journeys.
              </p>

            </div>


            {/* EXPLORE */}

            <div className="footer-column">

              <h3>
                Explore
              </h3>

              <Link to="/">
                Home
              </Link>

              <Link to="/destinations">
                Destinations
              </Link>

              <Link to="/reviews">
                Reviews
              </Link>

            </div>


            {/* TRAVELMATE */}

            <div className="footer-column">

              <h3>
                TravelMate
              </h3>

              <a href="#popular">
                Popular Destinations
              </a>

              <a href="#experiences">
                Experiences
              </a>

              <a href="#interests">
                Travel Interests
              </a>

            </div>


            {/* CONNECT */}

            <div className="footer-column">

              <h3>
                Connect
              </h3>

              <div className="social-links">

                <span>
                  Instagram
                </span>

                <span>
                  LinkedIn
                </span>

                <span>
                  Twitter
                </span>

              </div>

            </div>

          </div>


          {/* FOOTER BOTTOM */}

          <div className="footer-bottom">

            <p>
              © 2026 TravelMate. All rights reserved.
            </p>

            <p>
              Made with ❤️ for travellers
            </p>

          </div>

        </footer>

      </main>

    </div>
  );
}


/* =========================================================
   APP ROUTES
========================================================= */

/* =========================================================
   APP ROUTES
========================================================= */

function App() {

  useEffects();

  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/destinations"
        element={<Destinations />}
      />
      <Route path="/manali" element={<Manali />} />
      <Route path="/goa" element={<Goa />} />
      <Route path="/jaipur" element={<Jaipur />} />
      <Route path="/kerala" element={<Kerala />} />
      <Route path="/ladakh" element={<Ladakh />} />
      <Route path="/rishikesh" element={<Rishikesh />} />
      <Route path="/udaipur" element={<Udaipur />} />
      <Route path="/varanasi" element={<Varanasi />} />
      <Route path="/agra" element={<Agra />} />
      <Route path="/mumbai" element={<Mumbai />} />
      <Route path="/delhi" element={<Delhi />} />
      <Route path="/darjeeling" element={<Darjeeling />} />
      <Route path="/andaman" element={<Andaman />} />
      <Route
  path="/experience/manali-sightseeing"
  element={<ManaliExperience />}
/>
<Route
  path="/experience/solang-adventure"
  element={<SolangAdventure />}
/>
      <Route
        path="/destination/:name"
        element={<DestinationDetails />}
      />

      <Route
        path="/reviews"
        element={<Reviews />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

    </Routes>
  );
}



export default App;