import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

/* ================= PAGES ================= */

import Login from "./Login";
import Destinations from "./Destinations";
import DestinationDetails from "./DestinationDetails";
import Reviews from "./reviews";
import Signup from "./Signup";

import Manali from "./Manali";
import Manalli from "./Manalli";

import Goa from "./Goa";
import Jaipur from "./Jaipur";

import KeralaBackwaters from "./KeralaBackwaters";

import Ladakh from "./Ladakh";
import Rishikesh from "./Rishikesh";
import Udaipur from "./Udaipur";
import Varanasi from "./Varanasi";
import Agra from "./Agra";
import Mumbai from "./Mumbai";
import Delhi from "./Delhi";
import Darjeeling from "./Darjeeling";
import Andaman from "./Andaman";


/* ================= EXPERIENCES ================= */

import ManaliExperience from "./ManaliExperience";
import SolangAdventure from "./SolangAdventure";
import HadimbaOldManali from "./HadimbaOldManali";
import BeasRiver from "./BeasRiver";
import ManaliForestTrail from "./ManaliForestTrail";
import RohtangPassAdventure from "./RohtangPassAdventure";

/* ================= INTERESTS ================= */

import Culture from "./Culture";
import Water from "./Water";
import Adventure from "./Adventure";
import Nature from "./Nature";
import Food from "./Food";

/* ================= ICONIC ================= */

import IconicPlace from "./IconicPlace";
import TajMahal from "./TajMahal";
import GatewayOfIndia from "./GatewayOfIndia";
import VaranasiGhats from "./VaranasiGhats";

/* ================= CSS ================= */

import "./App.css";
import "./effects.css";
import useEffects from "./useEffects";
/* ================= HOTELS ================= */
import Hotels from "./Hotels";
/* ================= Restaurants ================= */
import Restaurants from "./Restaurants";
import Forums from "./Forums";
import PlanWithAI from "./PlanWithAI";
import CultureDetails from "./CultureDetails";
import WaterDetail from "./WaterDetail";
import NatureDetail from "./NatureDetail";
import AdventureDetail from "./Adventuredetail";
import FoodDetail from "./Fooddetail";
/* =========================================================
   HOME PAGE
========================================================= */

function Home() {

  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [iconicPage, setIconicPage] = useState(0);
  const [showSecondNav, setShowSecondNav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowSecondNav(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  /* =========================================================
     ICONIC PLACES DATA
  ========================================================= */

  const iconicPlaces = [
    {
      name: "Taj Mahal",
      location: "Agra, Uttar Pradesh",
      link: "/taj-mahal",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Gateway of India",
      location: "Mumbai, Maharashtra",
      link: "/gateway-of-india",
      image:
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kerala Backwaters",
      location: "Kerala",
      link: "/kerala",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Varanasi Ghats",
      location: "Uttar Pradesh",
      link: "/varanasi-ghats",
      image:
        "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Manali",
      location: "Himachal Pradesh",
      link: "/manali",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Jaipur",
      location: "Rajasthan",
      link: "/jaipur",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Ladakh",
      location: "Ladakh",
      link: "/ladakh",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Goa",
      location: "Goa",
      link: "/goa",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=85",
    },
  ];


  /* =========================================================
     SEARCH
  ========================================================= */

  const handleSearch = () => {
    const destination = search.trim().toLowerCase();

    if (destination === "taj mahal") {
      window.location.href = "/taj-mahal";
    } else if (
      destination === "gateway of india" ||
      destination === "gateway"
    ) {
      window.location.href = "/gateway-of-india";
    } else if (
      destination === "kerala backwaters" ||
      destination === "kerala"
    ) {
      window.location.href = "/kerala";
    } else if (
      destination === "varanasi ghats" ||
      destination === "varanasi ghat"
    ) {
      window.location.href = "/varanasi-ghats";
    } else if (destination === "manali") {
      window.location.href = "/manali";
    } else if (destination === "goa") {
      window.location.href = "/goa";
    } else if (destination === "jaipur") {
      window.location.href = "/jaipur";
    } else if (destination === "ladakh") {
      window.location.href = "/ladakh";
    } else if (destination === "rishikesh") {
      window.location.href = "/rishikesh";
    } else if (destination === "udaipur") {
      window.location.href = "/udaipur";
    } else if (destination === "varanasi") {
      window.location.href = "/varanasi";
    } else if (destination === "agra") {
      window.location.href = "/agra";
    } else if (destination === "mumbai") {
      window.location.href = "/mumbai";
    } else if (destination === "delhi") {
      window.location.href = "/delhi";
    } else if (destination === "darjeeling") {
      window.location.href = "/darjeeling";
    } else if (destination === "andaman") {
      window.location.href = "/andaman";
    } else {
      alert(
        "Destination not found! Try Manali, Goa, Jaipur, Kerala, Ladakh, Varanasi, Taj Mahal or other destinations."
      );
    }
  };


  /* =========================================================
     FLYING HEART
  ========================================================= */

  const flyHeartToNavbar = (event) => {
    const heartButton = event.currentTarget;
    const favoriteBox = document.querySelector(".favorite-count");

    if (!favoriteBox) return;

    const start = heartButton.getBoundingClientRect();
    const end = favoriteBox.getBoundingClientRect();

    const flyingHeart = document.createElement("span");
    flyingHeart.className = "flying-heart";
    flyingHeart.innerHTML = "♥";

    flyingHeart.style.left = `${start.left + start.width / 2}px`;
    flyingHeart.style.top = `${start.top + start.height / 2}px`;

    document.body.appendChild(flyingHeart);

    requestAnimationFrame(() => {
      flyingHeart.style.left = `${end.left + end.width / 2}px`;
      flyingHeart.style.top = `${end.top + end.height / 2}px`;
      flyingHeart.style.transform = "translate(-50%, -50%) scale(0.4)";
      flyingHeart.style.opacity = "0";
    });

    setTimeout(() => {
      flyingHeart.remove();
    }, 1900);
  };


  /* =========================================================
     FAVORITES
  ========================================================= */

  const toggleFavorite = (name, event) => {
    if (!favorites.includes(name) && event) {
      flyHeartToNavbar(event);
    }

    setFavorites((previousFavorites) => {
      if (previousFavorites.includes(name)) {
        return previousFavorites.filter((item) => item !== name);
      }
      return [...previousFavorites, name];
    });
  };


  /* =========================================================
     HOME JSX
  ========================================================= */

  return (
    <div>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <Link to="/" className="logo">
          ✈️ TravelMate
        </Link>
        <div className="nav-links">
          <Link to="/plan-with-ai">✨ Plan with AI</Link>
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


      <main>
        {showSecondNav && (
          <nav className="secondary-navbar">
            <a href="#experiences">Things to Do</a>
            <Link to="/hotels">Hotels</Link>
            <Link to="/restaurants">Restaurants</Link>
            <Link to="/forums">Forums</Link>
          </nav>
        )}

        {/* ================= HERO ================= */}

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
              Explore amazing destinations, read real traveller reviews and
              get personalized travel recommendations.
            </p>


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

              <button onClick={() => navigate("/plan-with-ai")}>
                ✨ Ask AI
              </button>

              <button onClick={handleSearch}>
                Explore Now →
              </button>
            </div>
          </div>
        </section>
        <button onClick={() => window.location.href = "/destinations"}>
  Explore
</button>


        {/* ================= DESTINATIONS ================= */}

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
              .tm-place-carousel-wrap {
                width: 100%;
                display: flex;
                align-items: center;
                gap: 14px;
                margin-top: 30px;
              }
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
                box-shadow: 0 4px 15px rgba(0,0,0,0.15);
                transition: all 0.25s ease;
                z-index: 5;
              }
              .tm-place-arrow:hover {
                background: #222;
                color: white;
                transform: scale(1.08);
              }
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
              .tm-place-card {
                width: 100%;
                min-width: 0;
                background: white;
                border-radius: 18px;
                overflow: hidden;
                box-shadow: 0 7px 22px rgba(0,0,0,0.08);
                transition: transform 0.25s ease, box-shadow 0.25s ease;
              }
              .tm-place-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 12px 28px rgba(0,0,0,0.14);
              }
              .tm-place-image {
                width: 100%;
                height: 190px;
                object-fit: cover;
                display: block;
              }
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
              @media (max-width: 1000px) {
                .tm-place-page {
                  grid-template-columns: repeat(2, minmax(0, 1fr));
                }
              }
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


            {/* PREVIOUS */}
            <button
              className="tm-place-arrow"
              aria-label="Previous destinations"
              onClick={() => {
                const slider = document.getElementById("tm-place-viewport");
                if (!slider) return;
                slider.scrollBy({
                  left: -slider.clientWidth,
                  behavior: "smooth",
                });
              }}
            >
              ←
            </button>


            {/* VIEWPORT */}
            <div
              className="tm-place-viewport"
              id="tm-place-viewport"
            >
              <div className="tm-place-track">

                {/* PAGE 1 */}
                <div className="tm-place-page">
                  <div className="tm-place-card">
                    <img
                      src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
                      alt="Manali"
                      className="tm-place-image"
                    />
                    <div className="tm-place-content">
                      <div className="tm-place-location">📍 Himachal Pradesh</div>
                      <h3>Manali</h3>
                      <p>Mountains, snow and beautiful valleys.</p>
                      <Link to="/manali" className="tm-place-btn">
                        View Details
                      </Link>
                    </div>
                  </div>

                  <div className="tm-place-card">
                    <img
                      src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
                      alt="Goa"
                      className="tm-place-image"
                    />
                    <div className="tm-place-content">
                      <div className="tm-place-location">📍 Goa, India</div>
                      <h3>Goa</h3>
                      <p>Beaches, sunsets and a relaxing vacation.</p>
                      <Link to="/goa" className="tm-place-btn">
                        View Details
                      </Link>
                    </div>
                  </div>

                  <div className="tm-place-card">
                    <img
                      src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
                      alt="Jaipur"
                      className="tm-place-image"
                    />
                    <div className="tm-place-content">
                      <div className="tm-place-location">📍 Rajasthan, India</div>
                      <h3>Jaipur</h3>
                      <p>Explore forts, palaces and rich culture.</p>
                      <Link to="/jaipur" className="tm-place-btn">
                        View Details
                      </Link>
                    </div>
                  </div>

                  <div className="tm-place-card">
                    <img
                      src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80"
                      alt="Kerala"
                      className="tm-place-image"
                    />
                    <div className="tm-place-content">
                      <div className="tm-place-location">📍 Kerala, India</div>
                      <h3>Kerala</h3>
                      <p>Backwaters, greenery and peaceful landscapes.</p>
                      <Link to="/kerala" className="tm-place-btn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>


                {/* PAGE 2 */}
                <div className="tm-place-page">
                  <div className="tm-place-card">
                    <img
                      src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
                      alt="Ladakh"
                      className="tm-place-image"
                    />
                    <div className="tm-place-content">
                      <div className="tm-place-location">📍 Ladakh, India</div>
                      <h3>Ladakh</h3>
                      <p>Mountains, lakes and breathtaking adventures.</p>
                      <Link to="/ladakh" className="tm-place-btn">
                        View Details
                      </Link>
                    </div>
                  </div>

                  <div className="tm-place-card">
                    <img
                      src="https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80"
                      alt="Rishikesh"
                      className="tm-place-image"
                    />
                    <div className="tm-place-content">
                      <div className="tm-place-location">📍 Uttarakhand, India</div>
                      <h3>Rishikesh</h3>
                      <p>Adventure, rivers and peaceful surroundings.</p>
                      <Link to="/rishikesh" className="tm-place-btn">
                        View Details
                      </Link>
                    </div>
                  </div>

                  <div className="tm-place-card">
                    <img
                      src="https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=800&q=80"
                      alt="Udaipur"
                      className="tm-place-image"
                    />
                    <div className="tm-place-content">
                      <div className="tm-place-location">📍 Rajasthan, India</div>
                      <h3>Udaipur</h3>
                      <p>Lakes, palaces and beautiful royal views.</p>
                      <Link to="/udaipur" className="tm-place-btn">
                        View Details
                      </Link>
                    </div>
                  </div>

                  <div className="tm-place-card">
                    <img
                      src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=800&q=80"
                      alt="Varanasi"
                      className="tm-place-image"
                    />
                    <div className="tm-place-content">
                      <div className="tm-place-location">📍 Uttar Pradesh, India</div>
                      <h3>Varanasi</h3>
                      <p>Ancient ghats, temples and rich culture.</p>
                      <Link to="/varanasi" className="tm-place-btn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>


                {/* PAGE 3 */}
                <div className="tm-place-page">
                  <div className="tm-place-card">
                    <img
                      src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
                      alt="Agra"
                      className="tm-place-image"
                    />
                    <div className="tm-place-content">
                      <div className="tm-place-location">📍 Uttar Pradesh, India</div>
                      <h3>Agra</h3>
                      <p>Historic monuments and the iconic Taj Mahal.</p>
                      <Link to="/agra" className="tm-place-btn">
                        View Details
                      </Link>
                    </div>
                  </div>

                  <div className="tm-place-card">
                    <img
                      src="https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=800&q=80"
                      alt="Mumbai"
                      className="tm-place-image"
                    />
                    <div className="tm-place-content">
                      <div className="tm-place-location">📍 Maharashtra, India</div>
                      <h3>Mumbai</h3>
                      <p>The city of dreams, beaches and nightlife.</p>
                      <Link to="/mumbai" className="tm-place-btn">
                        View Details
                      </Link>
                    </div>
                  </div>

                  <div className="tm-place-card">
                    <img
                      src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80"
                      alt="Delhi"
                      className="tm-place-image"
                    />
                    <div className="tm-place-content">
                      <div className="tm-place-location">📍 Delhi, India</div>
                      <h3>Delhi</h3>
                      <p>History, monuments, food and modern city life.</p>
                      <Link to="/delhi" className="tm-place-btn">
                        View Details
                      </Link>
                    </div>
                  </div>

                  <div className="tm-place-card">
                    <img
                      src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=85"
                      alt="Darjeeling"
                      className="tm-place-image"
                    />
                    <div className="tm-place-content">
                      <div className="tm-place-location">📍 West Bengal, India</div>
                      <h3>Darjeeling</h3>
                      <p>Tea gardens, hills and stunning mountain views.</p>
                      <Link to="/darjeeling" className="tm-place-btn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>


                {/* PAGE 4 */}
                <div className="tm-place-page">
                  <div className="tm-place-card">
                    <img
                      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                      alt="Andaman"
                      className="tm-place-image"
                    />
                    <div className="tm-place-content">
                      <div className="tm-place-location">📍 Andaman & Nicobar</div>
                      <h3>Andaman</h3>
                      <p>Crystal-clear water, beaches and island adventures.</p>
                      <Link to="/andaman" className="tm-place-btn">
                        View Details
                      </Link>
                    </div>
                  </div>

                  <div className="tm-place-card">
                    <img
                      src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=85"
                      alt="Amritsar"
                      className="tm-place-image"
                    />
                    <div className="tm-place-content">
                      <div className="tm-place-location">📍 Punjab, India</div>
                      <h3>Amritsar</h3>
                      <p>Golden Temple, culture and delicious food.</p>
                      <Link to="/destination/Amritsar" className="tm-place-btn">
                        View Details
                      </Link>
                    </div>
                  </div>

                  <div className="tm-place-card">
                    <img
                      src="https://images.unsplash.com/photo-1600100397608-f010c1f0c2c5?auto=format&fit=crop&w=800&q=85"
                      alt="Mysore"
                      className="tm-place-image"
                    />
                    <div className="tm-place-content">
                      <div className="tm-place-location">📍 Karnataka, India</div>
                      <h3>Mysore</h3>
                      <p>Palaces, heritage and beautiful architecture.</p>
                      <Link to="/destination/Mysore" className="tm-place-btn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>


            {/* NEXT */}
            <button
              className="tm-place-arrow"
              aria-label="Next destinations"
              onClick={() => {
                const slider = document.getElementById("tm-place-viewport");
                if (!slider) return;
                slider.scrollBy({
                  left: slider.clientWidth,
                  behavior: "smooth",
                });
              }}
            >
              →
            </button>
          </div>
        </section>


        {/* ================= EXPERIENCES ================= */}

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
                    favorites.includes("Manali Sightseeing") ? "liked" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite("Manali Sightseeing", e);
                  }}
                >
                  {favorites.includes("Manali Sightseeing") ? "♥" : "♡"}
                </button>
              </div>

              <div className="experience-content">
                <h3>The best of Manali sightseeing tour</h3>
                <div className="rating">
                  <span>★★★★★</span>
                  <b>4.8</b>
                  <small>(124)</small>
                </div>
                <p className="experience-price">
                  from <strong>₹2,499</strong> per person
                </p>
              </div>
            </Link>


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
                    favorites.includes("Solang Valley") ? "liked" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite("Solang Valley", e);
                  }}
                >
                  {favorites.includes("Solang Valley") ? "♥" : "♡"}
                </button>
              </div>

              <div className="experience-content">
                <h3>Solang Valley adventure experience</h3>
                <div className="rating">
                  <span>★★★★★</span>
                  <b>4.7</b>
                  <small>(98)</small>
                </div>
                <p className="experience-price">
                  from <strong>₹1,899</strong> per person
                </p>
              </div>
            </Link>


            <Link
              to="/experience/hadimba-old-manali"
              className="experience-card experience-card-link"
            >
              <div className="experience-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1609920658906-8223bd289001?auto=format&fit=crop&w=900&q=85"
                  alt="Hadimba Temple and Old Manali"
                />
                <button
                  type="button"
                  className={`heart-btn ${
                    favorites.includes("Hadimba Temple and Old Manali") ? "liked" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite("Hadimba Temple and Old Manali", e);
                  }}
                >
                  {favorites.includes("Hadimba Temple and Old Manali") ? "♥" : "♡"}
                </button>
              </div>

              <div className="experience-content">
                <h3>Hadimba Temple and Old Manali walk</h3>
                <div className="rating">
                  <span>★★★★★</span>
                  <b>4.6</b>
                  <small>(764)</small>
                </div>
                <p className="experience-price">
                  from <strong>₹699</strong> per person
                </p>
              </div>
            </Link>


            <Link
              to="/experience/beas-river"
              className="experience-card experience-card-link"
            >
              <div className="experience-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85"
                  alt="Relaxing Beas River experience"
                />
                <button
                  type="button"
                  className={`heart-btn ${
                    favorites.includes("Relaxing Beas River experience") ? "liked" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite("Relaxing Beas River experience", e);
                  }}
                >
                  {favorites.includes("Relaxing Beas River experience") ? "♥" : "♡"}
                </button>
              </div>

              <div className="experience-content">
                <h3>Relaxing Beas River experience</h3>
                <div className="rating">
                  <span>★★★★★</span>
                  <b>4.7</b>
                  <small>(1,120)</small>
                </div>
                <p className="experience-price">
                  from <strong>₹499</strong> per person
                </p>
              </div>
            </Link>


            <Link
              to="/experience/manali-forest-trail"
              className="experience-card experience-card-link"
            >
              <div className="experience-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85"
                  alt="Manali nature and forest trail"
                />
                <button
                  type="button"
                  className={`heart-btn ${
                    favorites.includes("Manali nature and forest trail") ? "liked" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite("Manali nature and forest trail", e);
                  }}
                >
                  {favorites.includes("Manali nature and forest trail") ? "♥" : "♡"}
                </button>
              </div>

              <div className="experience-content">
                <h3>Manali nature and forest trail</h3>
                <div className="rating">
                  <span>★★★★★</span>
                  <b>4.8</b>
                  <small>(1,540)</small>
                </div>
                <p className="experience-price">
                  from <strong>₹1,200</strong> per person
                </p>
              </div>
            </Link>


            <Link
              to="/experience/rohtang-pass-adventure"
              className="experience-card experience-card-link"
            >
              <div className="experience-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=85"
                  alt="Rohtang Pass mountain adventure"
                />
                <button
                  type="button"
                  className={`heart-btn ${
                    favorites.includes("Rohtang Pass mountain adventure") ? "liked" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite("Rohtang Pass mountain adventure", e);
                  }}
                >
                  {favorites.includes("Rohtang Pass mountain adventure") ? "♥" : "♡"}
                </button>
              </div>

              <div className="experience-content">
                <h3>Rohtang Pass mountain adventure</h3>
                <div className="rating">
                  <span>★★★★★</span>
                  <b>4.7</b>
                  <small>(2,130)</small>
                </div>
                <p className="experience-price">
                  from <strong>₹2,499</strong> per person
                </p>
              </div>
            </Link>
          </div>
        </section>


        {/* ================= INTERESTS ================= */}

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
            <Link to="/culture" className="interest-card large">
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85"
                alt="Culture"
              />
              <div className="interest-overlay"></div>
              <h3>Culture</h3>
            </Link>

            <Link to="/water" className="interest-card">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"
                alt="Water"
              />
              <div className="interest-overlay"></div>
              <h3>Water</h3>
            </Link>

            <Link to="/adventure" className="interest-card">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85"
                alt="Adventure"
              />
              <div className="interest-overlay"></div>
              <h3>Adventure</h3>
            </Link>

            <Link to="/nature" className="interest-card">
              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85"
                alt="Nature"
              />
              <div className="interest-overlay"></div>
              <h3>Nature</h3>
            </Link>

            <Link to="/food" className="interest-card">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85"
                alt="Food"
              />
              <div className="interest-overlay"></div>
              <h3>Food</h3>
            </Link>
          </div>
        </section>


        {/* ================= ICONIC PLACES ================= */}

        <section className="iconic-section">
          <div className="iconic-heading">
            <p>ICONIC PLACES</p>
            <h2>Iconic places you need to see</h2>
            <span>Discover some of India's most unforgettable destinations.</span>
          </div>


          <div className="iconic-carousel">
            <button
              className="iconic-arrow left"
              onClick={() => {
                setIconicPage(iconicPage === 0 ? 1 : 0);
              }}
            >
              ←
            </button>


            <div className="iconic-grid">
              {iconicPlaces
                .slice(iconicPage * 4, iconicPage * 4 + 4)
                .map((place) => (
                  <Link
                    to={place.link}
                    className="iconic-card"
                    key={place.name}
                  >
                    <img
                      src={place.image}
                      alt={place.name}
                    />
                    <div className="iconic-overlay"></div>
                    <div className="iconic-content">
                      <h3>{place.name}</h3>
                      <p>{place.location}</p>
                    </div>
                  </Link>
                ))}
            </div>


            <button
              className="iconic-arrow right"
              onClick={() => {
                setIconicPage(iconicPage === 0 ? 1 : 0);
              }}
            >
              →
            </button>
          </div>
        </section>


        {/* ================= CTA ================= */}

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
              Discover beautiful places, explore unforgettable
              experiences and find your perfect destination.
            </p>
            <Link
              to="/destinations"
              className="cta-button"
            >
              Explore Destinations →
            </Link>
          </div>
        </section>


        {/* ================= FOOTER ================= */}

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                ✈️ TravelMate
              </Link>
              <p>
                Your travel companion for discovering beautiful
                destinations, memorable experiences and
                unforgettable journeys.
              </p>
              <div className="footer-trust">
                🌍 Explore India &nbsp; • &nbsp; ✨ Travel Better
              </div>
            </div>

            <div className="footer-column">
              <h3>Explore</h3>
              <Link to="/">Home</Link>
              <Link to="/destinations">Destinations</Link>
              <Link to="/reviews">Reviews</Link>
              <a href="#experiences">Experiences</a>
            </div>

            <div className="footer-column">
              <h3>Discover</h3>
              <a href="#popular">Popular Destinations</a>
              <a href="#interests">Travel Interests</a>
              <a href="#experiences">Things to Do</a>
              <a href="#interests">Food & Culture</a>
            </div>

            <div className="footer-column">
              <h3>TravelMate</h3>
              <a href="#interests">Adventure</a>
              <a href="#interests">Nature</a>
              <a href="#interests">Water</a>
              <a href="#interests">Food</a>
            </div>

            <div className="footer-column">
              <h3>Connect</h3>
              <div className="social-links">
                <span>Instagram</span>
                <span>LinkedIn</span>
                <span>Twitter</span>
              </div>
              <p className="footer-connect-text">
                Follow us for travel inspiration,
                tips and new destinations.
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 TravelMate. All rights reserved.</p>
            <div className="footer-bottom-links">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Made with ❤️ for travellers</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}


/* =========================================================
   APP ROUTES
========================================================= */

function App() {
  useEffects();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/manali" element={<Manali />} />
      <Route path="/manalli" element={<Manalli />} />
      <Route path="/goa" element={<Goa />} />
      <Route path="/jaipur" element={<Jaipur />} />
      <Route path="/kerala" element={<KeralaBackwaters />} />
      <Route path="/ladakh" element={<Ladakh />} />
      <Route path="/rishikesh" element={<Rishikesh />} />
      <Route path="/udaipur" element={<Udaipur />} />
      <Route path="/varanasi" element={<Varanasi />} />
      <Route path="/varanasi-ghats" element={<VaranasiGhats />} />
      <Route path="/agra" element={<Agra />} />
      <Route path="/mumbai" element={<Mumbai />} />
      <Route path="/delhi" element={<Delhi />} />
      <Route path="/darjeeling" element={<Darjeeling />} />
      <Route path="/andaman" element={<Andaman />} />

      <Route path="/destination/:name" element={<DestinationDetails />} />

      <Route path="/experience/manali-sightseeing" element={<ManaliExperience />} />
      <Route path="/experience/solang-adventure/*" element={<SolangAdventure />} />
      <Route path="/experience/hadimba-old-manali" element={<HadimbaOldManali />} />
      <Route path="/experience/beas-river" element={<BeasRiver />} />
      <Route path="/experience/manali-forest-trail" element={<ManaliForestTrail />} />
      <Route path="/experience/rohtang-pass-adventure" element={<RohtangPassAdventure />} />

      <Route path="/culture" element={<Culture />} />
      <Route path="/water" element={<Water />} />
      <Route path="/adventure" element={<Adventure />} />
      <Route path="/nature" element={<Nature />} />
      <Route path="/food" element={<Food />} />

      <Route path="/iconic/:slug" element={<IconicPlace />} />
      <Route path="/taj-mahal" element={<TajMahal />} />
      <Route path="/gateway-of-india" element={<GatewayOfIndia />} />
      
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/forums" element={<Forums />} />
      <Route path="/plan-with-ai" element={<PlanWithAI />} />
      <Route
  path="/culture/:slug"
  element={<CultureDetails />}
/>
<Route path="/water/:id" element={<WaterDetail />} />
<Route path="/nature/:id" element={<NatureDetail />} />
<Route path="/adventure/:id" element={<AdventureDetail />} />
<Route path="/food/:id" element={<FoodDetail />} />
    </Routes>
  );
}

export default App;