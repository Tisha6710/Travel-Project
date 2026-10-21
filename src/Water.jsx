import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Water() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const categoryKeywords = {
    "Scuba Diving": ["Scuba", "Diving"],
    "Snorkeling": ["Snorkeling", "Coral"],
    "River Rafting": ["Rafting", "River"],
    "Beach Experiences": ["Beach", "Island", "Lakshadweep", "Gokarna"],
    "Cruises & Sailing": ["Cruise", "Sailing", "Sunset"],
    "Kayaking": ["Kayaking"],
  };

  const toggleFavorite = (title, e) => {
    e.stopPropagation();
    setFavorites((previous) =>
      previous.includes(title)
        ? previous.filter((item) => item !== title)
        : [...previous, title]
    );
  };

  const matchesCategory = (item) => {
    if (selectedCategory === "All") return true;
    const keywords = categoryKeywords[selectedCategory] || [];
    return keywords.some((keyword) =>
      `${item.title} ${item.category || ""} ${item.location}`
        .toLowerCase()
        .includes(keyword.toLowerCase())
    );
  };

  const experiences = [
    {
      title: "Goa Scuba Diving Experience",
      location: "Goa",
      rating: "4.8",
      reviews: "1,245",
      price: "₹2,500",
      category: "Scuba Diving",
      description: "Explore colourful underwater worlds, vibrant coral reefs, and marine life with professional instructors off the coast of Goa.",
      duration: "4 Hours",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Rishikesh River Rafting",
      location: "Rishikesh, Uttarakhand",
      rating: "4.9",
      reviews: "2,130",
      price: "₹1,499",
      category: "River Rafting",
      description: "Take on exciting rapids and experience thrilling river adventures along the holy Ganges river streams.",
      duration: "3-4 Hours",
      image:
        "https://images.unsplash.com/photo-1530866495561-507c2c9a4c91?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Andaman Snorkeling Experience",
      location: "Andaman Islands",
      rating: "4.8",
      reviews: "1,890",
      price: "₹1,499",
      category: "Snorkeling",
      description: "Discover coral reefs and tropical marine life from the crystal-clear surface waters of the Andaman Islands.",
      duration: "3 Hours",
      image:
        "https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Goa Sunset Cruise",
      location: "Goa",
      rating: "4.7",
      reviews: "1,120",
      price: "₹799",
      category: "Cruises & Sailing",
      description: "Enjoy peaceful sunsets, music, dancing, and unforgettable sea views on a scenic evening cruise in Goa.",
      duration: "2 Hours",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Parasailing Adventure",
      location: "Goa",
      rating: "4.7",
      reviews: "2,130",
      price: "₹1,800",
      category: "Beach Experiences",
      description: "Fly high above the coastline and experience an adrenaline-pumping aerial view of the sparkling blue sea.",
      duration: "1 Hour",
      image:
        "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Kayaking in the Andaman Islands",
      location: "Andaman Islands",
      rating: "4.8",
      reviews: "1,540",
      price: "₹1,200",
      category: "Kayaking",
      description: "Paddle through calm waters, emerald rivers, secluded lagoons, and dense mangrove forests.",
      duration: "3 Hours",
      image:
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const awardExperiences = [
    {
      title: "Andaman Scuba Diving Experience",
      location: "Andaman Islands",
      rating: "4.9",
      reviews: "2,450",
      price: "₹2,500",
      description: "An award-winning deep sea diving experience in the pristine waters of Andaman, featuring rich aquatic biodiversity.",
      duration: "4 Hours",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Rishikesh White Water Rafting",
      location: "Rishikesh",
      rating: "4.9",
      reviews: "2,780",
      price: "₹1,499",
      description: "Conquer world-famous grade III and IV rapids in the scenic Himalayan foothills.",
      duration: "4 Hours",
      image:
        "https://images.unsplash.com/photo-1530866495561-507c2c9a4c91?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Goa Sunset Sailing Experience",
      location: "Goa",
      rating: "4.8",
      reviews: "1,960",
      price: "₹999",
      description: "A serene sailing trip across the Goan coastline as the sun sets over the Arabian Sea.",
      duration: "2.5 Hours",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Lakshadweep Island Experience",
      location: "Lakshadweep",
      rating: "4.8",
      reviews: "1,420",
      price: "₹1,999",
      description: "Explore untouched coral atolls, turquoise lagoons, and white-sand beaches in India's exotic island territory.",
      duration: "Full Day",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const destinations = [
    {
      id: "goa",
      name: "Goa",
      location: "Konkan Coast",
      subtitle: "Beaches, Water Sports & Cruises",
      description: "Famous for its endless stretches of golden beaches, vibrant beach shacks, and water sports.",
      history: "Goa's unique coastal culture is heavily influenced by centuries of Portuguese heritage.",
      bestTime: "November to February",
      famousFor: "Water sports, beach parties, seafood, and sunset cruises.",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "andaman",
      name: "Andaman",
      location: "Bay of Bengal",
      subtitle: "Coral Reefs, Diving & Island Adventures",
      description: "A tropical paradise featuring pristine white sand beaches and some of the world's best diving spots.",
      history: "Home to ancient indigenous tribes and historically significant landmarks like Cellular Jail.",
      bestTime: "October to May",
      famousFor: "Radhanagar Beach, scuba diving, and bioluminescence tours.",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "rishikesh",
      name: "Rishikesh",
      location: "Uttarakhand",
      subtitle: "River Rafting & Ganga Adventures",
      description: "The Yoga Capital of the World, offering thrilling white water rafting and spiritual serenity.",
      history: "Situated along the foothills of the Himalayas beside the holy river Ganges.",
      bestTime: "September to June",
      famousFor: "White water rafting, cliff jumping, yoga retreats, and evening Aarti.",
      image:
        "https://images.unsplash.com/photo-1530866495561-507c2c9a4c91?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "lakshadweep",
      name: "Lakshadweep",
      location: "Arabian Sea",
      subtitle: "Pristine Beaches & Marine Life",
      description: "An archipelago of breathtaking coral islands known for isolation, peace, and marine beauty.",
      history: "Strategically located ancient maritime trade routes between India, the Middle East, and Africa.",
      bestTime: "October to April",
      famousFor: "Agatti Island, lagoons, snorkeling, and turtle nesting sites.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "kerala",
      name: "Kerala",
      location: "Southern India",
      subtitle: "Backwaters, Beaches & Houseboats",
      description: "God's Own Country, featuring calm backwaters, palm-fringed canals, and coastal shores.",
      history: "A historical spice-trading hub attracting merchants from Greece, Rome, and China.",
      bestTime: "September to March",
      famousFor: "Alleppey houseboats, Kovalam beach, and Ayurvedic wellness tours.",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "gokarna",
      name: "Gokarna",
      location: "Karnataka",
      subtitle: "Peaceful Beaches & Coastal Escapes",
      description: "A temple town turned laid-back coastal paradise with pristine, less-crowded beaches.",
      history: "A sacred pilgrimage site that transformed into a tranquil haven for beach lovers and backpackers.",
      bestTime: "October to March",
      famousFor: "Om Beach, Kudle Beach, cliff trekking, and relaxed vibes.",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const categories = [
    {
      title: "Scuba Diving",
      text: "Explore colourful underwater worlds and marine life.",
      icon: "🤿",
    },
    {
      title: "Snorkeling",
      text: "Discover coral reefs and tropical marine life from the surface.",
      icon: "🐠",
    },
    {
      title: "River Rafting",
      text: "Take on exciting rapids and experience thrilling river adventures.",
      icon: "🚣",
    },
    {
      title: "Beach Experiences",
      text: "Relax on beautiful beaches, islands and coastal destinations.",
      icon: "🏖️",
    },
    {
      title: "Cruises & Sailing",
      text: "Enjoy peaceful sunsets, cruises and unforgettable sea views.",
      icon: "⛵",
    },
    {
      title: "Kayaking",
      text: "Paddle through calm waters, rivers, lagoons and mangroves.",
      icon: "🛶",
    },
  ];

  return (
    <div className="water-page">

      {/* ================= NAVBAR ================= */}
      <nav className="water-navbar">
        <Link to="/" className="water-logo">
          ✈️ TravelMate
        </Link>
        <div className="water-nav-links">
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/reviews">Reviews</Link>
          <button className="water-login-btn">Login</button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="water-hero">
        <div className="water-hero-overlay"></div>
        <div className="water-hero-content">
          <span className="water-tag">🌊 TRAVEL BY INTEREST</span>
          <h1>
            Dive into your next
            <span> water adventure</span>
          </h1>
          <p>
            From thrilling river adventures and scuba diving to peaceful
            beaches, cruises and island escapes — discover experiences
            that take you closer to the water.
          </p>
          <div className="water-hero-buttons">
            <a href="#experiences" className="water-primary-btn">
              Explore Experiences
            </a>
            <a href="#awards" className="water-secondary-btn">
              🏆 Travellers' Choice
            </a>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="water-intro">
        <span>MAKE A SPLASH</span>
        <h2>Find your perfect water experience</h2>
        <p>
          Whether you love adrenaline-filled water sports, peaceful
          beaches or exploring underwater worlds, discover experiences
          designed for every kind of traveller.
        </p>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="water-section">
        <div className="water-section-heading">
          <div>
            <span>EXPLORE WATER</span>
            <h2>What kind of water experience are you looking for?</h2>
          </div>
        </div>

        <div className="water-category-grid">
          {categories.map((item) => (
            <button
              type="button"
              className={`water-category-card ${selectedCategory === item.title ? "active" : ""}`}
              key={item.title}
              onClick={() => {
                setSelectedCategory(item.title);
                document.getElementById("experiences")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="water-category-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span>{selectedCategory === item.title ? "Selected ✓" : "Explore →"}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ================= TRAVELLERS CHOICE ================= */}
      <section className="water-awards-section" id="awards">
        <div className="water-awards-header">
          <div>
            <span>TRAVELLERS' CHOICE</span>
            <h2>Travellers' Choice Awards</h2>
            <p>Discover highly rated water experiences loved by travellers.</p>
          </div>
          <div className="water-award-badge">🏆</div>
        </div>

        <div className="water-experience-grid">
          {awardExperiences.map((item) => (
            <div
              className="water-experience-card"
              key={item.title}
              onClick={() => setSelectedExperience(item)}
              style={{ cursor: "pointer" }}
            >
              <div className="water-card-image">
                <img src={item.image} alt={item.title} />
                <span className="water-award-label">🏆 Travellers' Choice</span>
                <button
                  type="button"
                  className="water-heart"
                  onClick={(e) => toggleFavorite(item.title, e)}
                >
                  {favorites.includes(item.title) ? "♥" : "♡"}
                </button>
              </div>
              <div className="water-card-content">
                <span className="water-card-category">WATER EXPERIENCE</span>
                <h3>{item.title}</h3>
                <p className="water-location">📍 {item.location}</p>
                <div className="water-rating">
                  <span>★★★★★</span>
                  <b>{item.rating}</b>
                  <small>({item.reviews})</small>
                </div>
                <p className="water-price">
                  from <strong>{item.price}</strong> per person
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= POPULAR EXPERIENCES ================= */}
      <section className="water-section" id="experiences">
        <div className="water-section-heading">
          <div>
            <span>POPULAR EXPERIENCES</span>
            <h2>
              {selectedCategory === "All" ? "Explore water adventures" : `Adventures in ${selectedCategory}`}
            </h2>
          </div>
          <button
            type="button"
            className="water-view-all"
            onClick={() => setSelectedCategory("All")}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#0284c7" }}
          >
            {selectedCategory === "All" ? "View all →" : `Reset (${selectedCategory}) ↺`}
          </button>
        </div>

        <div className="water-experience-grid">
          {experiences.filter(matchesCategory).map((item) => (
            <div
              className="water-experience-card"
              key={item.title}
              onClick={() => setSelectedExperience(item)}
              style={{ cursor: "pointer" }}
            >
              <div className="water-card-image">
                <img src={item.image} alt={item.title} />
                <span className="water-image-tag">{item.category}</span>
                <button
                  type="button"
                  className="water-heart"
                  onClick={(e) => toggleFavorite(item.title, e)}
                >
                  {favorites.includes(item.title) ? "♥" : "♡"}
                </button>
              </div>
              <div className="water-card-content">
                <h3>{item.title}</h3>
                <p className="water-location">📍 {item.location}</p>
                <div className="water-rating">
                  <span>★★★★★</span>
                  <b>{item.rating}</b>
                  <small>({item.reviews})</small>
                </div>
                <p className="water-price">
                  from <strong>{item.price}</strong> per person
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE DETAIL MODAL ================= */}
      {selectedExperience && (
        <div className="water-modal-overlay" onClick={() => setSelectedExperience(null)}>
          <div className="water-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="water-modal-close" onClick={() => setSelectedExperience(null)}>✕</button>
            <img src={selectedExperience.image} alt={selectedExperience.title} />
            <div className="water-modal-details">
              <span className="water-card-category">WATER ADVENTURE</span>
              <h2>{selectedExperience.title}</h2>
              <p className="water-location">📍 {selectedExperience.location}</p>
              <div className="water-rating">
                <span>★★★★★</span>
                <b>{selectedExperience.rating}</b>
                <small>({selectedExperience.reviews} reviews)</small>
              </div>
              <p className="water-modal-desc">{selectedExperience.description}</p>
              <p><strong>Duration:</strong> {selectedExperience.duration || "3-4 Hours"}</p>
              <div className="water-modal-footer">
                <div>
                  <span style={{ fontSize: "14px", color: "#666" }}>Price</span>
                  <p className="water-price" style={{ margin: 0 }}>
                    from <strong>{selectedExperience.price}</strong> per person
                  </p>
                </div>
                <button
                  className="water-book-btn"
                  onClick={() => alert(`Booking initiated for: ${selectedExperience.title}`)}
                >
                  Book Adventure Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= DESTINATIONS - CLICKABLE ================= */}
      <section className="water-destinations">
        <div className="water-section-heading">
          <div>
            <span>WATER DESTINATIONS</span>
            <h2>Where the water meets adventure</h2>
          </div>
        </div>

        <div className="water-destination-grid">
          {destinations.map((item) => (
            <div
              className="water-destination-card"
              key={item.id}
              onClick={() => navigate(`/water/${item.id}`, { state: item })}
              style={{ cursor: "pointer" }}
            >
              <img src={item.image} alt={item.name} />
              <div className="water-destination-overlay">
                <h3>{item.name}</h3>
                <p>{item.subtitle}</p>
                <span>Explore →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WATER ACTIVITIES ================= */}
      <section className="water-guide">
        <div className="water-guide-content">
          <span>PLAN YOUR ADVENTURE</span>
          <h2>Choose the experience that matches your travel style</h2>
          <div className="water-guide-grid">
            <div>
              <strong>01</strong>
              <h3>For adventure lovers</h3>
              <p>Try river rafting, parasailing, kayaking and other exciting water sports.</p>
            </div>
            <div>
              <strong>02</strong>
              <h3>For beach lovers</h3>
              <p>Relax on beautiful beaches, watch sunsets and enjoy peaceful coastal escapes.</p>
            </div>
            <div>
              <strong>03</strong>
              <h3>For explorers</h3>
              <p>Discover coral reefs, marine life and underwater ecosystems through diving and snorkeling.</p>
            </div>
            <div>
              <strong>04</strong>
              <h3>For slow travellers</h3>
              <p>Enjoy cruises, houseboats, backwaters and peaceful waterside experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SAFETY ================= */}
      <section className="water-safety">
        <div className="water-safety-content">
          <div className="water-safety-text">
            <span>TRAVEL SMART</span>
            <h2>Stay safe while enjoying the water</h2>
            <p>Water adventures are exciting, but choosing the right equipment and following safety instructions is important.</p>
          </div>
          <div className="water-safety-grid">
            <div>
              <span>🦺</span>
              <h3>Use safety equipment</h3>
              <p>Always use life jackets and other required safety gear.</p>
            </div>
            <div>
              <span>🌦️</span>
              <h3>Check conditions</h3>
              <p>Check weather and water conditions before activities.</p>
            </div>
            <div>
              <span>👨‍🏫</span>
              <h3>Follow your guide</h3>
              <p>Listen carefully to professional instructors and guides.</p>
            </div>
            <div>
              <span>💧</span>
              <h3>Stay hydrated</h3>
              <p>Carry enough drinking water, especially during outdoor activities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="water-faq">
        <div className="water-section-heading">
          <div>
            <span>HELPFUL INFORMATION</span>
            <h2>Water travel FAQs</h2>
          </div>
        </div>
        <div className="water-faq-list">
          <details>
            <summary>Which destinations are popular for water activities?</summary>
            <p>Goa, Andaman, Rishikesh, Kerala and Lakshadweep offer wonderful water experiences.</p>
          </details>
          <details>
            <summary>Is scuba diving suitable for beginners?</summary>
            <p>Many destinations offer introductory experiences for beginners with trained professionals.</p>
          </details>
          <details>
            <summary>What should I carry for a water activity?</summary>
            <p>Carry comfortable clothes, sunscreen, and water-resistant accessories.</p>
          </details>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="water-cta">
        <div>
          <span>YOUR NEXT WATER ADVENTURE</span>
          <h2>Make your next trip a splash-worthy experience.</h2>
          <p>Discover beaches, islands, rivers, underwater worlds and unforgettable water adventures.</p>
          <Link to="/destinations">Explore Destinations →</Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="water-footer">
        <div className="water-footer-container">
          <div>
            <h3>✈️ TravelMate</h3>
            <p>Discover destinations, explore experiences and plan unforgettable journeys.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link to="/">Home</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/reviews">Reviews</Link>
          </div>
          <div>
            <h4>Interests</h4>
            <span>Culture</span>
            <span>Water</span>
            <span>Adventure</span>
          </div>
          <div>
            <h4>Connect</h4>
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>Twitter</span>
          </div>
        </div>
        <div className="water-footer-bottom">
          © 2026 TravelMate. All rights reserved.
        </div>
      </footer>

      {/* ================= CSS ================= */}
      <style>{`
        button.water-category-card {
          width: 100%;
          text-align: left;
          font: inherit;
          color: inherit;
          background: white;
          cursor: pointer;
        }
        * { box-sizing: border-box; }
        .water-page { min-height: 100vh; background: #fff; color: #222; font-family: Arial, sans-serif; }
        .water-page a { text-decoration: none; }
        
        /* NAVBAR */
        .water-navbar { height: 76px; display: flex; align-items: center; justify-content: space-between; padding: 0 60px; background: #fff; border-bottom: 1px solid #eee; position: sticky; top: 0; z-index: 100; }
        .water-logo { font-size: 24px; font-weight: 700; color: #222; }
        .water-nav-links { display: flex; align-items: center; gap: 28px; }
        .water-nav-links a { color: #333; font-weight: 500; }
        .water-login-btn { border: none; background: #111; color: white; padding: 10px 22px; border-radius: 8px; cursor: pointer; }

        /* HERO */
        .water-hero { min-height: 570px; position: relative; display: flex; align-items: center; background-image: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85"); background-size: cover; background-position: center; }
        .water-hero-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(0,0,0,.7), rgba(0,0,0,.32)); }
        .water-hero-content { position: relative; max-width: 760px; margin-left: 8%; color: white; }
        .water-tag { font-size: 13px; letter-spacing: 2px; font-weight: 700; }
        .water-hero h1 { font-size: 58px; line-height: 1.08; margin: 20px 0; }
        .water-hero h1 span { display: block; }
        .water-hero p { max-width: 650px; font-size: 18px; line-height: 1.7; }
        .water-hero-buttons { display: flex; gap: 14px; margin-top: 30px; }
        .water-primary-btn, .water-secondary-btn { padding: 13px 22px; border-radius: 9px; font-weight: 600; }
        .water-primary-btn { background: white; color: #222; }
        .water-secondary-btn { color: white; border: 1px solid rgba(255,255,255,.7); }

        /* INTRO */
        .water-intro { max-width: 850px; margin: 80px auto 40px; padding: 0 25px; text-align: center; }
        .water-intro > span, .water-section-heading span, .water-guide-content > span, .water-safety-text > span, .water-faq span, .water-awards-header span { font-size: 12px; font-weight: 700; letter-spacing: 2px; color: #0284c7; }
        .water-intro h2 { font-size: 38px; margin: 15px 0; }
        .water-intro p { color: #666; line-height: 1.8; }

        /* SECTIONS */
        .water-section { max-width: 1250px; margin: 80px auto; padding: 0 30px; }
        .water-section-heading { display: flex; justify-content: space-between; align-items: end; margin-bottom: 30px; }
        .water-section-heading h2, .water-awards-header h2 { font-size: 34px; margin: 10px 0 0; }

        /* CATEGORIES */
        .water-category-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .water-category-card { padding: 30px; border: 1px solid #eee; border-radius: 16px; transition: .25s ease; }
        .water-category-card:hover { transform: translateY(-5px); box-shadow: 0 12px 30px rgba(0,0,0,.08); }
        .water-category-card.active { border: 2px solid #0284c7; background: #f0f9ff; }
        .water-category-icon { font-size: 35px; margin-bottom: 18px; }
        .water-category-card h3 { margin: 0 0 10px; font-size: 20px; }
        .water-category-card p { color: #666; line-height: 1.6; min-height: 50px; }
        .water-category-card span { font-weight: 600; color: #0284c7; }

        /* AWARDS */
        .water-awards-section { background: #eef8fa; padding: 75px max(30px, calc((100% - 1250px) / 2)); }
        .water-awards-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 35px; }
        .water-award-badge { font-size: 70px; }

        /* CARDS */
        .water-experience-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; }
        .water-experience-card { background: white; border-radius: 15px; overflow: hidden; border: 1px solid #eee; transition: transform .2s ease; }
        .water-experience-card:hover { transform: translateY(-4px); box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
        .water-card-image { height: 220px; position: relative; overflow: hidden; }
        .water-card-image img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .3s ease; }
        .water-experience-card:hover img { transform: scale(1.05); }
        .water-heart { position: absolute; top: 14px; right: 14px; width: 38px; height: 38px; border: none; border-radius: 50%; background: white; font-size: 21px; cursor: pointer; z-index: 2; }
        .water-award-label, .water-image-tag { position: absolute; left: 12px; bottom: 12px; padding: 7px 10px; border-radius: 6px; background: white; font-size: 11px; font-weight: 700; }
        .water-card-content { padding: 18px; }
        .water-card-category { font-size: 10px; letter-spacing: 1px; font-weight: 700; color: #666; }
        .water-card-content h3 { font-size: 18px; margin: 9px 0; line-height: 1.3; }
        .water-location { color: #666; font-size: 13px; }
        .water-rating { display: flex; align-items: center; gap: 7px; margin: 12px 0; color: #f59e0b; }
        .water-rating b { color: #222; }
        .water-rating small { color: #777; }
        .water-price strong { color: #222; font-size: 18px; }

        /* MODAL */
        .water-modal-overlay { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.6); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 20px; }
        .water-modal-content { background: white; max-width: 600px; width: 100%; border-radius: 16px; overflow: hidden; position: relative; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
        .water-modal-close { position: absolute; top: 15px; right: 15px; background: white; border: none; width: 36px; height: 36px; border-radius: 50%; font-size: 18px; cursor: pointer; z-index: 10; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .water-modal-content img { width: 100%; height: 280px; object-fit: cover; }
        .water-modal-details { padding: 25px; }
        .water-modal-details h2 { font-size: 24px; margin: 8px 0; }
        .water-modal-desc { color: #555; line-height: 1.6; margin: 15px 0; }
        .water-modal-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; }
        .water-book-btn { background: #0284c7; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; }

        /* DESTINATIONS */
        .water-destinations { padding: 80px 30px; background: #fafafa; }
        .water-destination-grid { max-width: 1250px; margin: auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .water-destination-card { height: 300px; border-radius: 16px; overflow: hidden; position: relative; transition: transform 0.3s ease; }
        .water-destination-card:hover { transform: translateY(-5px); }
        .water-destination-card img { width: 100%; height: 100%; object-fit: cover; }
        .water-destination-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: end; padding: 25px; color: white; background: linear-gradient(transparent, rgba(0,0,0,.8)); }
        .water-destination-overlay h3 { font-size: 27px; margin: 0 0 5px; }
        .water-destination-overlay p { margin: 0 0 12px; }
        .water-destination-overlay span { font-weight: 600; color: #38bdf8; }

        /* GUIDE */
        .water-guide { padding: 80px 30px; }
        .water-guide-content { max-width: 1250px; margin: auto; }
        .water-guide-content h2 { max-width: 650px; font-size: 35px; margin: 12px 0 35px; }
        .water-guide-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 25px; }
        .water-guide-grid div { border-top: 2px solid #222; padding-top: 18px; }
        .water-guide-grid h3 { font-size: 18px; }
        .water-guide-grid p { color: #666; line-height: 1.6; font-size: 14px; }

        /* SAFETY */
        .water-safety { padding: 80px 30px; background: #f5fbfc; }
        .water-safety-content { max-width: 1250px; margin: auto; }
        .water-safety-text { max-width: 700px; margin-bottom: 35px; }
        .water-safety-text h2 { font-size: 35px; margin: 12px 0; }
        .water-safety-text p { color: #666; line-height: 1.7; }
        .water-safety-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .water-safety-grid div { background: white; padding: 25px; border-radius: 14px; }
        .water-safety-grid span { font-size: 28px; }
        .water-safety-grid h3 { font-size: 17px; }
        .water-safety-grid p { color: #666; line-height: 1.5; font-size: 14px; }

        /* FAQ */
        .water-faq { max-width: 900px; margin: 70px auto; padding: 0 25px; }
        .water-faq details { border-bottom: 1px solid #ddd; padding: 20px 0; }
        .water-faq summary { font-weight: 600; cursor: pointer; font-size: 17px; }
        .water-faq details p { color: #666; line-height: 1.7; }

        /* CTA */
        .water-cta { margin-top: 80px; padding: 80px 30px; background: #111; color: white; text-align: center; }
        .water-cta a { display: inline-block; margin-top: 20px; background: white; color: #222; padding: 13px 22px; border-radius: 8px; font-weight: 600; }

        /* FOOTER */
        .water-footer { background: #111; color: white; padding: 55px 30px 20px; }
        .water-footer-container { max-width: 1250px; margin: auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 50px; }
        .water-footer-bottom { max-width: 1250px; margin: 40px auto 0; padding-top: 20px; border-top: 1px solid #333; color: #888; font-size: 13px; }

        @media (max-width: 1000px) {
          .water-experience-grid, .water-category-grid, .water-guide-grid, .water-safety-grid, .water-destination-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 700px) {
          .water-category-grid, .water-experience-grid, .water-destination-grid, .water-guide-grid, .water-safety-grid { grid-template-columns: 1fr; }
          .water-footer-container { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

    </div>
  );
}

export default Water;