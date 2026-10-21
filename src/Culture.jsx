import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Culture() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const categoryKeywords = {
    "Heritage & History": ["Heritage", "History", "Historical", "Royal"],
    "Spiritual Experiences": ["Spiritual", "Temple", "Varanasi", "Ganga"],
    "Art & Performances": ["Art", "Dance", "Music", "Performance"],
    "Handicrafts & Markets": ["Handicraft", "Market", "Craft"],
    "Traditional Food": ["Food", "Cuisine"],
    "Festivals & Events": ["Festival", "Event", "Celebration"],
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
      title: "Varanasi Cultural Heritage Walk",
      location: "Varanasi, Uttar Pradesh",
      rating: "4.8",
      reviews: "1,245",
      price: "₹999",
      category: "Heritage",
      description: "Explore the ancient alleyways of Varanasi, witness the mesmerizing Ganga Aarti, and learn about the profound spiritual history of one of the world's oldest living cities.",
      duration: "3 Hours",
      image:
        "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Jaipur Fort & Palace Tour",
      location: "Jaipur, Rajasthan",
      rating: "4.7",
      reviews: "980",
      price: "₹1,299",
      category: "Royal Heritage",
      description: "Discover the regal architecture of Jaipur, including the majestic Amber Fort, City Palace, and intricate royal courtyards with an expert local historian.",
      duration: "5 Hours",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Amritsar Heritage & Food Walk",
      location: "Amritsar, Punjab",
      rating: "4.8",
      reviews: "1,120",
      price: "₹899",
      category: "Culture & Food",
      description: "Taste authentic Punjabi culinary delights while walking through the historic streets of Amritsar, exploring local bazaars and rich cultural heritage.",
      duration: "4 Hours",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Udaipur Royal Heritage Experience",
      location: "Udaipur, Rajasthan",
      rating: "4.7",
      reviews: "875",
      price: "₹1,499",
      category: "Royal Culture",
      description: "Immerse yourself in the City of Lakes with a royal heritage tour covering grand palaces, traditional art galleries, and scenic boat rides.",
      duration: "4 Hours",
      image:
        "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Agra Mughal Heritage Walk",
      location: "Agra, Uttar Pradesh",
      rating: "4.6",
      reviews: "1,050",
      price: "₹799",
      category: "History",
      description: "Step back into the Mughal era with a guided walkthrough of Agra's historic monuments, architectural marvels, and lesser-known heritage spots.",
      duration: "3.5 Hours",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Delhi Historical & Cultural Tour",
      location: "Delhi",
      rating: "4.7",
      reviews: "1,320",
      price: "₹999",
      category: "Historical",
      description: "Experience the vibrant contrast of Old and New Delhi through iconic landmarks, bustling spice markets, and centuries-old architectural wonders.",
      duration: "6 Hours",
      image:
        "https://images.unsplash.com/photo-1587474261532-687d7a5c5b8d?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const awardExperiences = [
    {
      title: "Golden Temple Spiritual Experience",
      location: "Amritsar",
      rating: "4.9",
      reviews: "2,340",
      price: "₹699",
      description: "Experience divine tranquility at the Golden Temple, participate in community service (sewa), and enjoy the sacred community kitchen experience.",
      duration: "3 Hours",
      image:
        "https://images.unsplash.com/photo-1609947017136-9daf32a9f8e5?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Rajasthan Royal Heritage Tour",
      location: "Jaipur",
      rating: "4.9",
      reviews: "1,890",
      price: "₹1,599",
      description: "A top-rated award-winning journey through Rajasthan's grand palaces, folk music performances, and royal dining experiences.",
      duration: "Full Day",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Varanasi Ganga & Heritage Experience",
      location: "Varanasi",
      rating: "4.8",
      reviews: "2,110",
      price: "₹1,099",
      description: "Witness the spiritual heartbeat of India with a private boat ride along the sacred Ganges ghats and an exclusive evening ritual tour.",
      duration: "4 Hours",
      image:
        "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Agra Mughal Heritage Experience",
      location: "Agra",
      rating: "4.8",
      reviews: "1,760",
      price: "₹899",
      description: "An immersive exploration of Mughal arts, crafts, marble inlay workshops, and breathtaking views of historical monuments.",
      duration: "4 Hours",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const destinations = [
    {
      id: "jaipur",
      name: "Jaipur",
      location: "Rajasthan",
      subtitle: "Royal Palaces & Rajasthani Culture",
      description: "Explore Rajasthan's royal culture, colourful traditions, magnificent forts and historic palaces.",
      history: "Jaipur was founded in 1727 by Maharaja Sawai Jai Singh II, the ruler of Amer.",
      bestTime: "October to March",
      famousFor: "Amber Fort, Hawa Mahal, City Palace and traditional handicrafts.",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "varanasi",
      name: "Varanasi",
      location: "Uttar Pradesh",
      subtitle: "Spirituality, Temples & Ganga Aarti",
      description: "Experience the sacred Ganga ghats, traditional rituals, ancient temples and timeless culture.",
      history: "Varanasi is one of the oldest living cities in the world with deep spiritual significance.",
      bestTime: "October to March",
      famousFor: "Ganga Aarti, Dashashwamedh Ghat, Kashi Vishwanath Temple and silk sarees.",
      image:
        "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "udaipur",
      name: "Udaipur",
      location: "Rajasthan",
      subtitle: "Lakes, Palaces & Royal Heritage",
      description: "Immerse yourself in the City of Lakes with majestic palaces and scenic boat rides.",
      history: "Founded in 1559 by Maharana Udai Singh II as the capital of the Mewar kingdom.",
      bestTime: "September to March",
      famousFor: "Lake Pichola, City Palace, Jag Mandir and boat tours.",
      image:
        "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "amritsar",
      name: "Amritsar",
      location: "Punjab",
      subtitle: "Golden Temple & Punjabi Culture",
      description: "Discover the spiritual heart of Sikhism, vibrant bazaars, and rich Punjabi traditions.",
      history: "Founded in 1577 by the fourth Sikh Guru, Guru Ram Das Ji.",
      bestTime: "October to March",
      famousFor: "Golden Temple, Jallianwala Bagh, Wagah Border and authentic food.",
      image:
        "https://images.unsplash.com/photo-1609947017136-9daf32a9f8e5?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "agra",
      name: "Agra",
      location: "Uttar Pradesh",
      subtitle: "Mughal History & Architecture",
      description: "Explore magnificent Mughal architecture, historic monuments, and UNESCO heritage sites.",
      history: "Served as the capital of the Mughal Empire under several emperors.",
      bestTime: "October to March",
      famousFor: "Taj Mahal, Agra Fort, Fatehpur Sikri and marble inlay work.",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "delhi",
      name: "Delhi",
      location: "National Capital",
      subtitle: "Monuments, Museums & Local Culture",
      description: "Experience historical monuments, bustling street markets, and diverse cultural heritage.",
      history: "Delhi has been continuously inhabited since the 6th century BC, serving as capital for many empires.",
      bestTime: "October to March",
      famousFor: "Red Fort, Qutub Minar, Chandni Chowk street food and museums.",
      image:
        "https://images.unsplash.com/photo-1587474261532-687d7a5c5b8d?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const categories = [
    {
      title: "Heritage & History",
      text: "Explore forts, palaces, monuments and historic streets.",
      icon: "🏰",
    },
    {
      title: "Spiritual Experiences",
      text: "Discover temples, ghats, monasteries and sacred places.",
      icon: "🛕",
    },
    {
      title: "Art & Performances",
      text: "Experience folk music, dance, theatre and traditional art.",
      icon: "🎭",
    },
    {
      title: "Handicrafts & Markets",
      text: "Meet local artisans and explore traditional crafts.",
      icon: "🧵",
    },
    {
      title: "Traditional Food",
      text: "Taste authentic regional dishes and local specialities.",
      icon: "🍛",
    },
    {
      title: "Festivals & Events",
      text: "Experience the colours, traditions and celebrations of India.",
      icon: "🪔",
    },
  ];

  return (
    <div className="culture-page">
      {/* ================= NAVBAR ================= */}
      <nav className="culture-navbar">
        <Link to="/" className="culture-logo">
          ✈️ TravelMate
        </Link>
        <div className="culture-nav-links">
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/reviews">Reviews</Link>
          <button className="culture-login-btn">Login</button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="culture-hero">
        <div className="culture-hero-overlay"></div>
        <div className="culture-hero-content">
          <span className="culture-tag">🌏 TRAVEL BY INTEREST</span>
          <h1>
            Discover the soul of
            <span> India through Culture</span>
          </h1>
          <p>
            Explore India's rich heritage, traditions, architecture, food, art
            and unforgettable cultural experiences.
          </p>
          <div className="culture-hero-buttons">
            <a href="#experiences" className="culture-primary-btn">
              Explore Experiences
            </a>
            <a href="#awards" className="culture-secondary-btn">
              🏆 Travellers' Choice
            </a>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="culture-intro">
        <span>EXPERIENCE MORE THAN A DESTINATION</span>
        <h2>Travel deeper. Experience the culture.</h2>
        <p>
          Culture is more than visiting a famous monument. Meet local
          communities, taste traditional food, explore ancient streets, discover
          local art and understand the stories behind every destination.
        </p>
      </section>

      {/* ================= CULTURAL CATEGORIES ================= */}
      <section className="culture-section">
        <div className="culture-section-heading">
          <div>
            <span>EXPLORE CULTURE</span>
            <h2>Find your kind of cultural experience</h2>
          </div>
        </div>

        <div className="culture-category-grid">
          {categories.map((item) => (
            <button
              type="button"
              className="culture-category-card"
              key={item.title}
              onClick={() => {
                setSelectedCategory(item.title);
                document
                  .getElementById("experiences")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="culture-category-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="culture-explore-arrow">Explore →</span>
            </button>
          ))}
        </div>
      </section>

      {/* ================= TRAVELLERS CHOICE ================= */}
      <section className="culture-awards-section" id="awards">
        <div className="culture-awards-header">
          <div>
            <span>TRAVELLERS' CHOICE</span>
            <h2>Travellers' Choice Awards</h2>
            <p>
              Discover highly rated cultural experiences that travellers love
              exploring.
            </p>
          </div>
          <div className="award-badge">🏆</div>
        </div>

        <div className="culture-experience-grid">
          {awardExperiences.map((item) => (
            <div
              className="culture-experience-card"
              key={item.title}
              onClick={() => setSelectedExperience(item)}
              style={{ cursor: "pointer" }}
            >
              <div className="culture-card-image">
                <img src={item.image} alt={item.title} />
                <span className="award-label">🏆 Travellers' Choice</span>
                <button
                  type="button"
                  className="culture-heart"
                  onClick={(e) => toggleFavorite(item.title, e)}
                >
                  {favorites.includes(item.title) ? "♥" : "♡"}
                </button>
              </div>
              <div className="culture-card-content">
                <span className="culture-card-category">
                  CULTURAL EXPERIENCE
                </span>
                <h3>{item.title}</h3>
                <p className="culture-location">📍 {item.location}</p>
                <div className="culture-rating">
                  <span>★★★★★</span>
                  <b>{item.rating}</b>
                  <small>({item.reviews})</small>
                </div>
                <p className="culture-price">
                  from <strong>{item.price}</strong> per person
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TOP CULTURAL EXPERIENCES ================= */}
      <section className="culture-section" id="experiences">
        <div className="culture-section-heading">
          <div>
            <span>POPULAR EXPERIENCES</span>
            <h2>Explore cultural experiences</h2>
          </div>
          <button
            type="button"
            className="culture-view-all"
            onClick={() => setSelectedCategory("All")}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {selectedCategory === "All" ? "View all →" : `Reset (${selectedCategory}) ↺`}
          </button>
        </div>

        <div className="culture-experience-grid">
          {experiences.filter(matchesCategory).map((item) => (
            <div
              className="culture-experience-card"
              key={item.title}
              onClick={() => setSelectedExperience(item)}
              style={{ cursor: "pointer" }}
            >
              <div className="culture-card-image">
                <img src={item.image} alt={item.title} />
                <span className="culture-image-tag">{item.category}</span>
                <button
                  type="button"
                  className="culture-heart"
                  onClick={(e) => toggleFavorite(item.title, e)}
                >
                  {favorites.includes(item.title) ? "♥" : "♡"}
                </button>
              </div>

              <div className="culture-card-content">
                <h3>{item.title}</h3>
                <p className="culture-location">📍 {item.location}</p>
                <div className="culture-rating">
                  <span>★★★★★</span>
                  <b>{item.rating}</b>
                  <small>({item.reviews})</small>
                </div>
                <p className="culture-price">
                  from <strong>{item.price}</strong> per person
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE DETAIL MODAL ================= */}
      {selectedExperience && (
        <div className="culture-modal-overlay" onClick={() => setSelectedExperience(null)}>
          <div className="culture-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="culture-modal-close"
              onClick={() => setSelectedExperience(null)}
            >
              ✕
            </button>
            <img src={selectedExperience.image} alt={selectedExperience.title} />
            <div className="culture-modal-details">
              <span className="culture-card-category">FEATURED EXPERIENCE</span>
              <h2>{selectedExperience.title}</h2>
              <p className="culture-location">📍 {selectedExperience.location}</p>
              <div className="culture-rating">
                <span>★★★★★</span>
                <b>{selectedExperience.rating}</b>
                <small>({selectedExperience.reviews} reviews)</small>
              </div>
              <p className="culture-modal-desc">{selectedExperience.description}</p>
              <p><strong>Duration:</strong> {selectedExperience.duration || "3-4 Hours"}</p>
              <div className="culture-modal-footer">
                <div>
                  <span style={{ fontSize: "14px", color: "#666" }}>Price</span>
                  <p className="culture-price" style={{ margin: 0 }}>
                    from <strong>{selectedExperience.price}</strong> per person
                  </p>
                </div>
                <button
                  className="culture-book-btn"
                  onClick={() => alert(`Booking initiated for: ${selectedExperience.title}`)}
                >
                  Book Experience Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= DESTINATIONS - CLICKABLE ================= */}
      <section className="culture-destinations">
        <div className="culture-section-heading">
          <div>
            <span>CULTURAL DESTINATIONS</span>
            <h2>Where culture comes alive</h2>
          </div>
        </div>

        <div className="culture-destination-grid">
          {destinations.map((item) => (
            <div
              className="culture-destination-card"
              key={item.id}
              onClick={() => navigate(`/culture/${item.id}`, { state: item })}
              style={{ cursor: "pointer" }}
            >
              <img src={item.image} alt={item.name} />
              <div className="culture-destination-overlay">
                <h3>{item.name}</h3>
                <p>{item.subtitle}</p>
                <span>Explore →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CULTURAL TRAVEL GUIDE ================= */}
      <section className="culture-guide">
        <div className="culture-guide-content">
          <span>TRAVEL SMART</span>
          <h2>Make your cultural journey more meaningful</h2>
          <div className="culture-guide-grid">
            <div>
              <strong>01</strong>
              <h3>Respect local traditions</h3>
              <p>
                Learn basic customs and follow local rules when visiting cultural
                and religious places.
              </p>
            </div>
            <div>
              <strong>02</strong>
              <h3>Try local experiences</h3>
              <p>
                Go beyond tourist attractions and experience local food,
                markets, art and traditions.
              </p>
            </div>
            <div>
              <strong>03</strong>
              <h3>Support local communities</h3>
              <p>
                Choose local guides, artisans and small businesses whenever
                possible.
              </p>
            </div>
            <div>
              <strong>04</strong>
              <h3>Keep an open mind</h3>
              <p>
                Every region has its own traditions, stories and way of life.
                Take time to understand them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="culture-faq">
        <div className="culture-section-heading">
          <div>
            <span>HELPFUL INFORMATION</span>
            <h2>Culture travel FAQs</h2>
          </div>
        </div>

        <div className="culture-faq-list">
          <details>
            <summary>What are the best cultural destinations in India?</summary>
            <p>
              Jaipur, Varanasi, Udaipur, Amritsar, Agra and Delhi offer
              different combinations of heritage, spirituality, architecture,
              food and local traditions.
            </p>
          </details>

          <details>
            <summary>What can I experience on a cultural trip?</summary>
            <p>
              You can explore historical monuments, temples, museums,
              traditional food, local markets, handicrafts, music, dance and
              community experiences.
            </p>
          </details>

          <details>
            <summary>Are cultural experiences suitable for families?</summary>
            <p>
              Many cultural experiences are suitable for families. Always check
              the duration, walking requirements and age restrictions before
              booking.
            </p>
          </details>

          <details>
            <summary>How can I respect local culture while travelling?</summary>
            <p>
              Dress appropriately where required, follow photography rules,
              respect religious customs and avoid disturbing local communities.
            </p>
          </details>

          <details>
            <summary>Can I combine culture with food experiences?</summary>
            <p>
              Yes. Food walks, traditional cooking classes and local markets can
              be combined with heritage and cultural tours.
            </p>
          </details>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="culture-cta">
        <div>
          <span>YOUR NEXT CULTURAL ADVENTURE</span>
          <h2>Discover the stories behind every destination.</h2>
          <p>
            Explore places, meet people, taste traditions and create memories
            that go beyond sightseeing.
          </p>
          <Link to="/destinations">Explore Destinations →</Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="culture-footer">
        <div className="culture-footer-container">
          <div>
            <h3>✈️ TravelMate</h3>
            <p>
              Discover destinations, explore experiences and travel
              differently.
            </p>
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
            <span>Adventure</span>
            <span>Nature</span>
            <span>Food</span>
          </div>

          <div>
            <h4>Connect</h4>
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>Twitter</span>
          </div>
        </div>

        <div className="culture-footer-bottom">
          © 2026 TravelMate. All rights reserved.
        </div>
      </footer>

      {/* ================= PAGE CSS ================= */}
      <style>{`
        button.culture-category-card {
          width: 100%;
          text-align: left;
          font: inherit;
          color: inherit;
          background: white;
          cursor: pointer;
        }

        button.culture-category-card:focus-visible {
          outline: 3px solid #2f6b59;
          outline-offset: 4px;
        }

        * {
          box-sizing: border-box;
        }

        .culture-page {
          background: #ffffff;
          color: #222;
          min-height: 100vh;
        }

        .culture-page a {
          text-decoration: none;
        }

        /* NAVBAR */
        .culture-navbar {
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 60px;
          background: #fff;
          border-bottom: 1px solid #eeeeee;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .culture-logo {
          font-size: 24px;
          font-weight: 700;
          color: #222;
        }

        .culture-nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .culture-nav-links a {
          color: #333;
          font-weight: 500;
        }

        .culture-login-btn {
          border: none;
          background: #111;
          color: #fff;
          padding: 10px 22px;
          border-radius: 8px;
          cursor: pointer;
        }

        /* HERO */
        .culture-hero {
          min-height: 570px;
          position: relative;
          display: flex;
          align-items: center;
          background-image: url("https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&w=1800&q=85");
          background-size: cover;
          background-position: center;
        }

        .culture-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0,0,0,.72),
            rgba(0,0,0,.35),
            rgba(0,0,0,.12)
          );
        }

        .culture-hero-content {
          position: relative;
          max-width: 760px;
          margin-left: 8%;
          color: white;
        }

        .culture-tag {
          font-size: 13px;
          letter-spacing: 2px;
          font-weight: 700;
        }

        .culture-hero h1 {
          font-size: 58px;
          line-height: 1.08;
          margin: 20px 0;
        }

        .culture-hero h1 span {
          display: block;
        }

        .culture-hero p {
          font-size: 18px;
          line-height: 1.7;
          max-width: 650px;
        }

        .culture-hero-buttons {
          display: flex;
          gap: 14px;
          margin-top: 30px;
        }

        .culture-primary-btn,
        .culture-secondary-btn {
          padding: 13px 22px;
          border-radius: 9px;
          font-weight: 600;
        }

        .culture-primary-btn {
          background: white;
          color: #222;
        }

        .culture-secondary-btn {
          border: 1px solid rgba(255,255,255,.7);
          color: white;
        }

        /* INTRO */
        .culture-intro {
          text-align: center;
          max-width: 850px;
          margin: 80px auto 40px;
          padding: 0 25px;
        }

        .culture-intro > span,
        .culture-section-heading span,
        .culture-guide-content > span,
        .culture-faq span,
        .culture-awards-header span {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .culture-intro h2 {
          font-size: 38px;
          margin: 15px 0;
        }

        .culture-intro p {
          color: #666;
          line-height: 1.8;
          font-size: 16px;
        }

        /* COMMON SECTION */
        .culture-section {
          max-width: 1250px;
          margin: 80px auto;
          padding: 0 30px;
        }

        .culture-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          margin-bottom: 30px;
        }

        .culture-section-heading h2,
        .culture-awards-header h2 {
          font-size: 34px;
          margin: 10px 0 0;
        }

        .culture-view-all {
          font-weight: 600;
          cursor: pointer;
        }

        /* CATEGORY */
        .culture-category-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .culture-category-card {
          padding: 30px;
          border: 1px solid #eeeeee;
          border-radius: 16px;
          transition: .25s ease;
        }

        .culture-category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,.08);
        }

        .culture-category-icon {
          font-size: 35px;
          margin-bottom: 18px;
        }

        .culture-category-card h3 {
          margin: 0 0 10px;
          font-size: 20px;
        }

        .culture-category-card p {
          color: #666;
          line-height: 1.6;
          min-height: 50px;
        }

        .culture-explore-arrow {
          display: inline-block;
          margin-top: 12px;
          font-weight: 600;
        }

        /* AWARDS */
        .culture-awards-section {
          background: #f7f4ed;
          padding: 75px max(30px, calc((100% - 1250px) / 2));
        }

        .culture-awards-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 35px;
        }

        .culture-awards-header p {
          color: #666;
        }

        .award-badge {
          font-size: 70px;
        }

        /* EXPERIENCE CARDS */
        .culture-experience-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .culture-experience-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          border: 1px solid #eeeeee;
          transition: transform .2s ease;
        }

        .culture-experience-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .culture-card-image {
          height: 220px;
          position: relative;
          overflow: hidden;
        }

        .culture-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .3s ease;
        }

        .culture-experience-card:hover img {
          transform: scale(1.05);
        }

        .culture-heart {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 38px;
          height: 38px;
          border: none;
          border-radius: 50%;
          background: white;
          font-size: 21px;
          cursor: pointer;
          z-index: 2;
        }

        .award-label,
        .culture-image-tag {
          position: absolute;
          left: 12px;
          bottom: 12px;
          padding: 7px 10px;
          border-radius: 6px;
          background: white;
          font-size: 11px;
          font-weight: 700;
        }

        .culture-card-content {
          padding: 18px;
        }

        .culture-card-category {
          font-size: 10px;
          letter-spacing: 1px;
          font-weight: 700;
          color: #666;
        }

        .culture-card-content h3 {
          font-size: 18px;
          margin: 9px 0;
          line-height: 1.3;
        }

        .culture-location {
          color: #666;
          font-size: 13px;
        }

        .culture-rating {
          display: flex;
          align-items: center;
          gap: 7px;
          margin: 12px 0;
        }

        .culture-rating span {
          letter-spacing: 1px;
          color: #f59e0b;
        }

        .culture-rating small {
          color: #777;
        }

        .culture-price {
          margin: 0;
          color: #555;
        }

        .culture-price strong {
          color: #222;
          font-size: 18px;
        }

        /* MODAL STYLES */
        .culture-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .culture-modal-content {
          background: white;
          max-width: 600px;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          animation: modalFadeIn 0.3s ease;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .culture-modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          background: white;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 18px;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          z-index: 10;
        }

        .culture-modal-content img {
          width: 100%;
          height: 280px;
          object-fit: cover;
        }

        .culture-modal-details {
          padding: 25px;
        }

        .culture-modal-details h2 {
          font-size: 24px;
          margin: 8px 0;
        }

        .culture-modal-desc {
          color: #555;
          line-height: 1.6;
          margin: 15px 0;
        }

        .culture-modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 25px;
          padding-top: 15px;
          border-top: 1px solid #eee;
        }

        .culture-book-btn {
          background: #111;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }

        /* DESTINATIONS */
        .culture-destinations {
          padding: 80px 30px;
          background: #fafafa;
        }

        .culture-destinations > .culture-section-heading {
          max-width: 1250px;
          margin: 0 auto 30px;
        }

        .culture-destination-grid {
          max-width: 1250px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .culture-destination-card {
          height: 300px;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          transition: transform 0.3s ease;
        }

        .culture-destination-card:hover {
          transform: translateY(-5px);
        }

        .culture-destination-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .culture-destination-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: end;
          padding: 25px;
          color: white;
          background: linear-gradient(
            transparent,
            rgba(0,0,0,.8)
          );
        }

        .culture-destination-overlay h3 {
          font-size: 27px;
          margin: 0 0 5px;
        }

        .culture-destination-overlay p {
          margin: 0 0 12px;
        }

        .culture-destination-overlay span {
          font-weight: 600;
        }

        /* GUIDE */
        .culture-guide {
          padding: 80px 30px;
        }

        .culture-guide-content {
          max-width: 1250px;
          margin: auto;
        }

        .culture-guide-content h2 {
          font-size: 35px;
          max-width: 650px;
          margin: 12px 0 35px;
        }

        .culture-guide-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .culture-guide-grid div {
          border-top: 2px solid #222;
          padding-top: 18px;
        }

        .culture-guide-grid strong {
          font-size: 14px;
        }

        .culture-guide-grid h3 {
          font-size: 18px;
        }

        .culture-guide-grid p {
          color: #666;
          line-height: 1.6;
          font-size: 14px;
        }

        /* FAQ */
        .culture-faq {
          max-width: 900px;
          margin: 70px auto;
          padding: 0 25px;
        }

        .culture-faq-list {
          margin-top: 30px;
        }

        .culture-faq details {
          border-bottom: 1px solid #ddd;
          padding: 20px 0;
        }

        .culture-faq summary {
          font-weight: 600;
          cursor: pointer;
          font-size: 17px;
        }

        .culture-faq details p {
          color: #666;
          line-height: 1.7;
          margin-bottom: 0;
        }

        /* CTA */
        .culture-cta {
          margin-top: 80px;
          padding: 80px 30px;
          background: #171717;
          color: white;
          text-align: center;
        }

        .culture-cta > div {
          max-width: 750px;
          margin: auto;
        }

        .culture-cta span {
          font-size: 12px;
          letter-spacing: 2px;
        }

        .culture-cta h2 {
          font-size: 40px;
          margin: 15px 0;
        }

        .culture-cta p {
          color: #ccc;
          line-height: 1.7;
        }

        .culture-cta a {
          display: inline-block;
          margin-top: 20px;
          background: white;
          color: #222;
          padding: 13px 22px;
          border-radius: 8px;
          font-weight: 600;
        }

        /* FOOTER */
        .culture-footer {
          background: #111;
          color: white;
          padding: 55px 30px 20px;
        }

        .culture-footer-container {
          max-width: 1250px;
          margin: auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
        }

        .culture-footer h3 {
          font-size: 22px;
        }

        .culture-footer h4 {
          margin-bottom: 18px;
        }

        .culture-footer p {
          color: #aaa;
          line-height: 1.6;
          max-width: 300px;
        }

        .culture-footer a,
        .culture-footer span {
          display: block;
          color: #aaa;
          margin: 10px 0;
        }

        .culture-footer-bottom {
          max-width: 1250px;
          margin: 40px auto 0;
          padding-top: 20px;
          border-top: 1px solid #333;
          color: #888;
          font-size: 13px;
        }

        /* RESPONSIVE */
        @media (max-width: 1000px) {
          .culture-experience-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .culture-category-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .culture-guide-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .culture-destination-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .culture-navbar {
            padding: 0 20px;
          }

          .culture-nav-links {
            gap: 10px;
          }

          .culture-hero-content {
            margin-left: 25px;
            margin-right: 25px;
          }

          .culture-hero h1 {
            font-size: 40px;
          }

          .culture-category-grid,
          .culture-experience-grid,
          .culture-destination-grid,
          .culture-guide-grid {
            grid-template-columns: 1fr;
          }

          .culture-footer-container {
            grid-template-columns: 1fr 1fr;
          }

          .culture-awards-header {
            align-items: start;
          }

          .award-badge {
            font-size: 45px;
          }
        }
      `}</style>
    </div>
  );
}

export default Culture;