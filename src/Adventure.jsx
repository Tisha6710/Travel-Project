import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Adventure() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const categoryKeywords = {
    "Trekking": ["Trek", "Hiking", "Himalayan", "Peak"],
    "Paragliding": ["Paragliding", "Flying"],
    "Rafting": ["Rafting", "River"],
    "Camping": ["Camping", "Stars", "Kasol"],
    "Scuba Diving": ["Diving", "Scuba", "Andaman"],
    "Safari": ["Safari", "Desert", "Jaisalmer"],
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
      `${item.title} ${item.location || ""} ${item.category || ""}`
        .toLowerCase()
        .includes(keyword.toLowerCase())
    );
  };

  const experiences = [
    {
      title: "Paragliding in Manali",
      location: "Manali, Himachal Pradesh",
      rating: "4.8",
      reviews: "1,245",
      price: "₹1,500",
      category: "Paragliding",
      description: "Fly above beautiful valleys and experience the ultimate thrill of the skies in Manali.",
      duration: "1 Hour",
      image:
        "https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "River Rafting in Rishikesh",
      location: "Rishikesh, Uttarakhand",
      rating: "4.9",
      reviews: "2,130",
      price: "₹1,499",
      category: "Rafting",
      description: "Take on exciting rapids and enjoy unforgettable river adventures along the holy Ganges.",
      duration: "3-4 Hours",
      image:
        "https://images.unsplash.com/photo-1530866495561-507c2c9a4c91?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Himalayan Trekking Experience",
      location: "Himachal Pradesh",
      rating: "4.8",
      reviews: "1,540",
      price: "₹1,200",
      category: "Trekking",
      description: "Explore mountain trails, hidden valleys, and breathtaking Himalayan landscapes.",
      duration: "Full Day",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Scuba Diving Adventure",
      location: "Andaman Islands",
      rating: "4.9",
      reviews: "1,890",
      price: "₹2,500",
      category: "Scuba Diving",
      description: "Discover underwater worlds, vibrant coral reefs, and exotic marine life.",
      duration: "4 Hours",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Desert Safari Experience",
      location: "Jaisalmer, Rajasthan",
      rating: "4.7",
      reviews: "1,120",
      price: "₹1,799",
      category: "Safari",
      description: "Explore wild golden landscapes, enjoy camel rides, and experience the Thar desert.",
      duration: "Overnight / 1 Day",
      image:
        "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Camping Under the Stars",
      location: "Kasol, Himachal Pradesh",
      rating: "4.8",
      reviews: "980",
      price: "₹999",
      category: "Camping",
      description: "Spend a peaceful night under the open starry sky surrounded by lush nature and mountains.",
      duration: "Overnight",
      image:
        "https://images.unsplash.com/photo-1478827536114-da961b7e6a3a?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const awardExperiences = [
    {
      title: "Himalayan Trekking Adventure",
      location: "Himachal Pradesh",
      rating: "4.9",
      reviews: "2,450",
      price: "₹1,999",
      description: "An award-winning mountain expedition through scenic Himalayan passes and rugged trails.",
      duration: "2 Days",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Rishikesh White Water Rafting",
      location: "Rishikesh",
      rating: "4.9",
      reviews: "2,780",
      price: "₹1,499",
      description: "Conquer world-class river rapids with certified safety guides in Rishikesh.",
      duration: "4 Hours",
      image:
        "https://images.unsplash.com/photo-1530866495561-507c2c9a4c91?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Manali Paragliding Experience",
      location: "Manali",
      rating: "4.8",
      reviews: "1,960",
      price: "₹1,500",
      description: "Glide through the open skies with spectacular aerial views of snow-capped mountains.",
      duration: "1 Hour",
      image:
        "https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Andaman Diving Adventure",
      location: "Andaman Islands",
      rating: "4.8",
      reviews: "1,420",
      price: "₹2,500",
      description: "Dive deep into the pristine blue waters of the Andaman sea with expert instructors.",
      duration: "4 Hours",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const categories = [
    {
      title: "Trekking",
      text: "Explore mountain trails, valleys and breathtaking Himalayan landscapes.",
      icon: "🥾",
    },
    {
      title: "Paragliding",
      text: "Fly above beautiful valleys and experience the thrill of the skies.",
      icon: "🪂",
    },
    {
      title: "Rafting",
      text: "Take on exciting rapids and enjoy unforgettable river adventures.",
      icon: "🚣",
    },
    {
      title: "Camping",
      text: "Spend a night under the stars surrounded by nature.",
      icon: "🏕️",
    },
    {
      title: "Scuba Diving",
      text: "Discover underwater worlds, coral reefs and marine life.",
      icon: "🤿",
    },
    {
      title: "Safari",
      text: "Explore wild landscapes and discover India's diverse wildlife.",
      icon: "🦁",
    },
  ];

  const destinations = [
    {
      id: "manali",
      name: "Manali",
      location: "Himachal Pradesh",
      subtitle: "Trekking, Paragliding & Snow Adventures",
      description: "A high-altitude Himalayan resort town known for its cool climate and snow-capped mountains.",
      history: "Historically an ancient trading post on the route to Ladakh and Central Asia.",
      bestTime: "October to June",
      famousFor: "Solang Valley, paragliding, trekking, and snow activities.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "rishikesh",
      name: "Rishikesh",
      location: "Uttarakhand",
      subtitle: "Rafting, Bungee Jumping & Adventure",
      description: "The Yoga Capital of the World, offering extreme adventure sports on the holy Ganges.",
      history: "A sacred pilgrimage site that transformed into India's premier outdoor adventure hub.",
      bestTime: "September to May",
      famousFor: "White water rafting, bungee jumping, and cliff jumping.",
      image:
        "https://images.unsplash.com/photo-1530866495561-507c2c9a4c91?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "ladakh",
      name: "Ladakh",
      location: "Himalayas",
      subtitle: "Mountain Roads, Trekking & Camping",
      description: "A rugged high-altitude region offering extreme trekking, mountain passes, and motorcycle expeditions.",
      history: "An ancient kingdom positioned at the crossroads of major Asian trade routes.",
      bestTime: "June to September",
      famousFor: "High-altitude treks, Pangong lake camping, and mountain passes.",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "andaman",
      name: "Andaman",
      location: "Bay of Bengal",
      subtitle: "Diving, Snorkeling & Island Adventures",
      description: "Tropical island chain featuring crystal-clear waters and premier scuba diving locations.",
      history: "Home to ancient tribal communities and historical landmarks from the colonial era.",
      bestTime: "October to May",
      famousFor: "Scuba diving, sea walking, and water sports.",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "jaisalmer",
      name: "Jaisalmer",
      location: "Rajasthan",
      subtitle: "Desert Safari & Dune Adventures",
      description: "The Golden City set in the heart of the Thar Desert, famous for camel and jeep safaris.",
      history: "Founded in 1156 AD, serving as a strategic desert trading post.",
      bestTime: "October to March",
      famousFor: "Sam sand dunes, overnight desert camping, and quad biking.",
      image:
        "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "meghalaya",
      name: "Meghalaya",
      location: "Northeast India",
      subtitle: "Trekking, Caves & Waterfalls",
      description: "The Abode of Clouds, offering deep cave explorations, living root bridge treks, and waterfalls.",
      history: "An ecologically rich hilly state known for unique indigenous traditions and heavy rainfall.",
      bestTime: "October to April",
      famousFor: "Caving, root bridge treks, and canyon exploration.",
      image:
        "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <div className="adventure-page">

      {/* ================= NAVBAR ================= */}
      <nav className="adventure-navbar">
        <Link to="/" className="adventure-logo">
          ✈️ TravelMate
        </Link>
        <div className="adventure-nav-links">
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/reviews">Reviews</Link>
          <button className="adventure-login-btn">Login</button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="adventure-hero">
        <div className="adventure-hero-overlay"></div>
        <div className="adventure-hero-content">
          <span className="adventure-tag">🏔️ TRAVEL BY INTEREST</span>
          <h1>
            Find your next
            <span> great adventure</span>
          </h1>
          <p>
            From Himalayan treks and thrilling rafting to paragliding,
            camping and underwater adventures — discover experiences
            made for adventure seekers.
          </p>
          <div className="adventure-hero-buttons">
            <a href="#experiences" className="adventure-primary-btn">
              Explore Adventures
            </a>
            <a href="#awards" className="adventure-secondary-btn">
              🏆 Travellers' Choice
            </a>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="adventure-intro">
        <span>ADVENTURE AWAITS</span>
        <h2>Choose your kind of adventure</h2>
        <p>
          Whether you want to climb mountains, fly through the sky,
          explore underwater worlds or sleep under the stars,
          discover an experience that matches your adventurous side.
        </p>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="adventure-section">
        <div className="adventure-section-heading">
          <div>
            <span>EXPLORE ADVENTURES</span>
            <h2>What kind of adventure are you looking for?</h2>
          </div>
        </div>

        <div className="adventure-category-grid">
          {categories.map((item) => (
            <button
              type="button"
              className={`adventure-category-card ${selectedCategory === item.title ? "active" : ""}`}
              key={item.title}
              onClick={() => {
                setSelectedCategory(item.title);
                document.getElementById("experiences")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                border: selectedCategory === item.title ? "2px solid #ea580c" : "1px solid #eee",
                background: selectedCategory === item.title ? "#fff7ed" : "#fafafa",
                cursor: "pointer",
                textAlign: "left"
              }}
            >
              <div className="adventure-category-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span style={{ color: "#ea580c", fontWeight: 600 }}>
                {selectedCategory === item.title ? "Selected ✓" : "Explore →"}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ================= TRAVELLERS CHOICE ================= */}
      <section className="adventure-awards-section" id="awards">
        <div className="adventure-awards-header">
          <div>
            <span>TRAVELLERS' CHOICE</span>
            <h2>Travellers' Choice Awards</h2>
            <p>Discover highly rated adventure experiences loved by travellers.</p>
          </div>
          <div className="adventure-award-badge">🏆</div>
        </div>

        <div className="adventure-experience-grid">
          {awardExperiences.map((item) => (
            <div
              className="adventure-experience-card"
              key={item.title}
              onClick={() => setSelectedExperience(item)}
              style={{ cursor: "pointer" }}
            >
              <div className="adventure-card-image">
                <img src={item.image} alt={item.title} />
                <span className="adventure-award-label">🏆 Travellers' Choice</span>
                <button
                  type="button"
                  className="adventure-heart"
                  onClick={(e) => toggleFavorite(item.title, e)}
                >
                  {favorites.includes(item.title) ? "♥" : "♡"}
                </button>
              </div>
              <div className="adventure-card-content">
                <span className="adventure-card-category">ADVENTURE EXPERIENCE</span>
                <h3>{item.title}</h3>
                <p className="adventure-location">📍 {item.location}</p>
                <div className="adventure-rating">
                  <span>★★★★★</span>
                  <b>{item.rating}</b>
                  <small>({item.reviews})</small>
                </div>
                <p className="adventure-price">
                  from <strong>{item.price}</strong> per person
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= POPULAR EXPERIENCES ================= */}
      <section className="adventure-section" id="experiences">
        <div className="adventure-section-heading">
          <div>
            <span>POPULAR EXPERIENCES</span>
            <h2>
              {selectedCategory === "All" ? "Explore thrilling adventures" : `Adventures in ${selectedCategory}`}
            </h2>
          </div>
          <button
            type="button"
            className="adventure-view-all"
            onClick={() => setSelectedCategory("All")}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#ea580c", fontWeight: 600 }}
          >
            {selectedCategory === "All" ? "View all →" : `Reset (${selectedCategory}) ↺`}
          </button>
        </div>

        <div className="adventure-experience-grid">
          {experiences.filter(matchesCategory).map((item) => (
            <div
              className="adventure-experience-card"
              key={item.title}
              onClick={() => setSelectedExperience(item)}
              style={{ cursor: "pointer" }}
            >
              <div className="adventure-card-image">
                <img src={item.image} alt={item.title} />
                <span className="adventure-image-tag">{item.category}</span>
                <button
                  type="button"
                  className="adventure-heart"
                  onClick={(e) => toggleFavorite(item.title, e)}
                >
                  {favorites.includes(item.title) ? "♥" : "♡"}
                </button>
              </div>

              <div className="adventure-card-content">
                <h3>{item.title}</h3>
                <p className="adventure-location">📍 {item.location}</p>
                <div className="adventure-rating">
                  <span>★★★★★</span>
                  <b>{item.rating}</b>
                  <small>({item.reviews})</small>
                </div>
                <p className="adventure-price">
                  from <strong>{item.price}</strong> per person
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE DETAIL MODAL ================= */}
      {selectedExperience && (
        <div className="adventure-modal-overlay" onClick={() => setSelectedExperience(null)}>
          <div className="adventure-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="adventure-modal-close" onClick={() => setSelectedExperience(null)}>✕</button>
            <img src={selectedExperience.image} alt={selectedExperience.title} />
            <div className="adventure-modal-details">
              <span className="adventure-card-category">ADVENTURE EXPERIENCE</span>
              <h2>{selectedExperience.title}</h2>
              <p className="adventure-location">📍 {selectedExperience.location}</p>
              <div className="adventure-rating">
                <span>★★★★★</span>
                <b>{selectedExperience.rating}</b>
                <small>({selectedExperience.reviews} reviews)</small>
              </div>
              <p className="adventure-modal-desc">{selectedExperience.description}</p>
              <p><strong>Duration:</strong> {selectedExperience.duration || "3-4 Hours"}</p>
              <div className="adventure-modal-footer">
                <div>
                  <span style={{ fontSize: "14px", color: "#666" }}>Price</span>
                  <p className="adventure-price" style={{ margin: 0 }}>
                    from <strong>{selectedExperience.price}</strong> per person
                  </p>
                </div>
                <button
                  className="adventure-book-btn"
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
      <section className="adventure-destinations">
        <div className="adventure-section-heading">
          <div>
            <span>ADVENTURE DESTINATIONS</span>
            <h2>Where your next adventure begins</h2>
          </div>
        </div>

        <div className="adventure-destination-grid">
          {destinations.map((item) => (
            <div
              className="adventure-destination-card"
              key={item.id}
              onClick={() => navigate(`/adventure/${item.id}`, { state: item })}
              style={{ cursor: "pointer" }}
            >
              <img src={item.image} alt={item.name} />
              <div className="adventure-destination-overlay">
                <h3>{item.name}</h3>
                <p>{item.subtitle}</p>
                <span style={{ color: "#fdba74" }}>Explore →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="adventure-footer">
        <div className="adventure-footer-container">
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
            <Link to="/culture">Culture</Link>
            <Link to="/water">Water</Link>
            <Link to="/nature">Nature</Link>
          </div>
          <div>
            <h4>Connect</h4>
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>Twitter</span>
          </div>
        </div>
        <div className="adventure-footer-bottom">
          © 2026 TravelMate. All rights reserved.
        </div>
      </footer>

      {/* ================= CSS ================= */}
      <style>{`
        button.adventure-category-card {
          width: 100%;
          text-align: left;
          font: inherit;
          color: inherit;
          background: white;
          cursor: pointer;
        }

        * { box-sizing: border-box; }
        .adventure-page { min-height: 100vh; background: #fff; color: #222; font-family: Arial, sans-serif; }
        .adventure-page a { text-decoration: none; }
        
        /* NAVBAR */
        .adventure-navbar { height: 76px; display: flex; align-items: center; justify-content: space-between; padding: 0 60px; background: #fff; border-bottom: 1px solid #eee; position: sticky; top: 0; z-index: 100; }
        .adventure-logo { font-size: 24px; font-weight: 700; color: #222; }
        .adventure-nav-links { display: flex; align-items: center; gap: 28px; }
        .adventure-nav-links a { color: #333; font-weight: 500; }
        .adventure-login-btn { border: none; background: #111; color: white; padding: 10px 22px; border-radius: 8px; cursor: pointer; }

        /* HERO */
        .adventure-hero { min-height: 570px; position: relative; display: flex; align-items: center; background-image: url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85"); background-size: cover; background-position: center; }
        .adventure-hero-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(0,0,0,.72), rgba(0,0,0,.35)); }
        .adventure-hero-content { position: relative; max-width: 760px; margin-left: 8%; color: white; }
        .adventure-tag { font-size: 13px; letter-spacing: 2px; font-weight: 700; color: #fdba74; }
        .adventure-hero h1 { font-size: 58px; line-height: 1.08; margin: 20px 0; }
        .adventure-hero h1 span { display: block; }
        .adventure-hero p { max-width: 650px; font-size: 18px; line-height: 1.7; }
        .adventure-hero-buttons { display: flex; gap: 14px; margin-top: 30px; }
        .adventure-primary-btn, .adventure-secondary-btn { padding: 13px 22px; border-radius: 9px; font-weight: 600; }
        .adventure-primary-btn { background: white; color: #222; }
        .adventure-secondary-btn { color: white; border: 1px solid rgba(255,255,255,.7); }

        /* INTRO */
        .adventure-intro { max-width: 850px; margin: 80px auto 40px; padding: 0 25px; text-align: center; }
        .adventure-intro > span, .adventure-section-heading span, .adventure-awards-header span { font-size: 12px; font-weight: 700; letter-spacing: 2px; color: #ea580c; }
        .adventure-intro h2 { font-size: 38px; margin: 15px 0; }
        .adventure-intro p { color: #666; line-height: 1.8; }

        /* SECTIONS */
        .adventure-section { max-width: 1250px; margin: 80px auto; padding: 0 30px; }
        .adventure-section-heading { display: flex; justify-content: space-between; align-items: end; margin-bottom: 30px; }
        .adventure-section-heading h2, .adventure-awards-header h2 { font-size: 34px; margin: 10px 0 0; }

        /* CATEGORIES */
        .adventure-category-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .adventure-category-card { padding: 30px; border-radius: 16px; transition: .25s ease; }
        .adventure-category-card:hover { transform: translateY(-5px); box-shadow: 0 12px 30px rgba(0,0,0,.08); }
        .adventure-category-icon { font-size: 35px; margin-bottom: 18px; }
        .adventure-category-card h3 { margin: 0 0 10px; font-size: 20px; }
        .adventure-category-card p { color: #666; line-height: 1.6; min-height: 50px; margin: 0 0 10px; }

        /* AWARDS */
        .adventure-awards-section { background: #fff7ed; padding: 75px max(30px, calc((100% - 1250px) / 2)); }
        .adventure-awards-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 35px; }
        .adventure-award-badge { font-size: 70px; }

        /* CARDS */
        .adventure-experience-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; }
        .adventure-experience-card { background: white; border-radius: 15px; overflow: hidden; border: 1px solid #eee; transition: transform .2s ease; }
        .adventure-experience-card:hover { transform: translateY(-4px); box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
        .adventure-card-image { height: 220px; position: relative; overflow: hidden; }
        .adventure-card-image img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .3s ease; }
        .adventure-experience-card:hover img { transform: scale(1.05); }
        .adventure-heart { position: absolute; top: 14px; right: 14px; width: 38px; height: 38px; border: none; border-radius: 50%; background: white; font-size: 21px; cursor: pointer; z-index: 2; }
        .adventure-award-label, .adventure-image-tag { position: absolute; left: 12px; bottom: 12px; padding: 7px 10px; border-radius: 6px; background: white; font-size: 11px; font-weight: 700; }
        .adventure-card-content { padding: 18px; }
        .adventure-card-category { font-size: 10px; letter-spacing: 1px; font-weight: 700; color: #666; }
        .adventure-card-content h3 { font-size: 18px; margin: 9px 0; line-height: 1.3; }
        .adventure-location { color: #666; font-size: 13px; }
        .adventure-rating { display: flex; align-items: center; gap: 7px; margin: 12px 0; color: #f59e0b; }
        .adventure-rating b { color: #222; }
        .adventure-rating small { color: #777; }
        .adventure-price strong { color: #222; font-size: 18px; }

        /* MODAL */
        .adventure-modal-overlay { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.6); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 20px; }
        .adventure-modal-content { background: white; max-width: 600px; width: 100%; border-radius: 16px; overflow: hidden; position: relative; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
        .adventure-modal-close { position: absolute; top: 15px; right: 15px; background: white; border: none; width: 36px; height: 36px; border-radius: 50%; font-size: 18px; cursor: pointer; z-index: 10; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .adventure-modal-content img { width: 100%; height: 280px; object-fit: cover; }
        .adventure-modal-details { padding: 25px; }
        .adventure-modal-details h2 { font-size: 24px; margin: 8px 0; }
        .adventure-modal-desc { color: #555; line-height: 1.6; margin: 15px 0; }
        .adventure-modal-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; }
        .adventure-book-btn { background: #ea580c; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; }

        /* DESTINATIONS */
        .adventure-destinations { padding: 80px 30px; background: #fafafa; }
        .adventure-destination-grid { max-width: 1250px; margin: auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .adventure-destination-card { height: 300px; border-radius: 16px; overflow: hidden; position: relative; transition: transform 0.3s ease; }
        .adventure-destination-card:hover { transform: translateY(-5px); }
        .adventure-destination-card img { width: 100%; height: 100%; object-fit: cover; }
        .adventure-destination-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: end; padding: 25px; color: white; background: linear-gradient(transparent, rgba(0,0,0,.8)); }
        .adventure-destination-overlay h3 { font-size: 27px; margin: 0 0 5px; }
        .adventure-destination-overlay p { margin: 0 0 12px; }

        /* FOOTER */
        .adventure-footer { background: #111; color: white; padding: 55px 30px 20px; }
        .adventure-footer-container { max-width: 1250px; margin: auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 50px; }
        .adventure-footer-bottom { max-width: 1250px; margin: 40px auto 0; padding-top: 20px; border-top: 1px solid #333; color: #888; font-size: 13px; }

        @media (max-width: 1000px) {
          .adventure-experience-grid, .adventure-category-grid, .adventure-destination-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 700px) {
          .adventure-category-grid, .adventure-experience-grid, .adventure-destination-grid { grid-template-columns: 1fr; }
          .adventure-navbar { padding: 0 20px; }
        }
      `}</style>
    </div>
  );
}

export default Adventure;