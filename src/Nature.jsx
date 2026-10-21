import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Nature() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const categoryKeywords = {
    "Forest Escapes": ["Forest", "Manali", "Himalayan", "Tree"],
    "Mountain Views": ["Mountain", "Ladakh", "Valley", "View"],
    "Waterfalls": ["Waterfall", "Rishikesh", "Trek"],
    "Wildlife": ["Wildlife", "Safari", "Ranthambore", "Animal"],
    "Lakes & Rivers": ["Backwater", "Kerala", "River", "Lake"],
    "Nature Trails": ["Trail", "Sunrise", "Darjeeling", "Walk"],
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
      `${item.title} ${item.location || item.place || ""} ${item.category || ""}`
        .toLowerCase()
        .includes(keyword.toLowerCase())
    );
  };

  const natureExperiences = [
    {
      title: "Forest & Nature Walk",
      location: "Manali, Himachal Pradesh",
      rating: "4.8",
      reviews: "1,245",
      price: "₹799",
      category: "Forest Escapes",
      description: "Enjoy a tranquil walk through dense pine forests, crisp mountain air, and serene natural trails in Manali.",
      duration: "3 Hours",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Mountain Valley Exploration",
      location: "Ladakh",
      rating: "4.9",
      reviews: "980",
      price: "₹1,499",
      category: "Mountain Views",
      description: "Explore dramatic high-altitude mountain valleys, majestic peaks, and breathtaking landscapes in Ladakh.",
      duration: "Full Day",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Waterfall Nature Trek",
      location: "Rishikesh",
      rating: "4.8",
      reviews: "1,120",
      price: "₹999",
      category: "Waterfalls",
      description: "Trek through lush green hills to discover hidden waterfalls and crystal-clear streams near Rishikesh.",
      duration: "4 Hours",
      image:
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Backwater Nature Experience",
      location: "Kerala",
      rating: "4.7",
      reviews: "875",
      price: "₹1,299",
      category: "Lakes & Rivers",
      description: "Sail through tranquil tropical backwaters surrounded by lush palm groves and vibrant flora in Kerala.",
      duration: "4 Hours",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Wildlife Safari",
      location: "Ranthambore",
      rating: "4.8",
      reviews: "1,540",
      price: "₹1,899",
      category: "Wildlife",
      description: "Experience an adventurous jungle safari to spot wild tigers, leopards, and diverse fauna in Ranthambore.",
      duration: "3.5 Hours",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Sunrise Nature Trail",
      location: "Darjeeling",
      rating: "4.7",
      reviews: "764",
      price: "₹699",
      category: "Nature Trails",
      description: "Witness a breathtaking sunrise over the Himalayan peaks while walking through misty tea gardens.",
      duration: "3 Hours",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const awardExperiences = [
    {
      title: "Himalayan Nature Escape",
      location: "Manali",
      place: "Manali",
      rating: "4.9",
      reviews: "2,100",
      price: "₹1,999",
      description: "An award-winning getaway showcasing the finest alpine beauty, pine forests, and snowy mountain peaks.",
      duration: "Full Day",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Kerala Backwater Retreat",
      location: "Kerala",
      place: "Kerala",
      rating: "4.8",
      reviews: "1,850",
      price: "₹2,499",
      description: "Immerse yourself in nature with a serene backwater stay and eco-friendly village tours.",
      duration: "Full Day",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Wildlife & Forest Safari",
      location: "Rajasthan",
      place: "Rajasthan",
      rating: "4.8",
      reviews: "1,620",
      price: "₹2,299",
      description: "Explore protected wildlife sanctuaries and natural forest reserves in the heart of Rajasthan.",
      duration: "4 Hours",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const natureCategories = [
    "Forest Escapes",
    "Mountain Views",
    "Waterfalls",
    "Wildlife",
    "Lakes & Rivers",
    "Nature Trails",
  ];

  const destinations = [
    {
      id: "manali",
      name: "Manali",
      location: "Himachal Pradesh",
      subtitle: "Pine forests, mountain valleys and peaceful rivers.",
      description: "Pine forests, mountain valleys and peaceful rivers nestled in the Himalayas.",
      history: "Named after the sage Manu, Manali is a stunning valley town surrounded by towering peaks.",
      bestTime: "October to June",
      famousFor: "Solang Valley, Rohtang Pass, pine forests, and apple orchards.",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "kerala",
      name: "Kerala",
      location: "Southern India",
      subtitle: "Lush greenery, backwaters and tropical landscapes.",
      description: "Lush greenery, palm-fringed backwaters and tropical landscapes filled with rich biodiversity.",
      history: "A globally renowned eco-tourism destination famous for sustainable nature conservation.",
      bestTime: "September to March",
      famousFor: "Backwaters, Munnar tea hills, and Periyar wildlife sanctuary.",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "ladakh",
      name: "Ladakh",
      location: "Himalayas",
      subtitle: "Dramatic mountains, valleys and breathtaking views.",
      description: "Dramatic high-altitude mountains, deep blue lakes, and breathtaking natural views.",
      history: "A high-altitude desert region with a unique ecosystem shaped by extreme climate and geology.",
      bestTime: "May to September",
      famousFor: "Pangong Lake, Nubra Valley, magnetic hill, and high mountain passes.",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "rishikesh",
      name: "Rishikesh",
      location: "Uttarakhand",
      subtitle: "Rivers, waterfalls, forests and peaceful trails.",
      description: "Flowing rivers, cascading waterfalls, dense forests and peaceful walking trails.",
      history: "A sacred town where the holy Ganges breaks out from the lower Himalayas into the plains.",
      bestTime: "September to March",
      famousFor: "Waterfall treks, river rafting, Beatles Ashram, and forest camping.",
      image:
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <div className="nature-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">TravelMate</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/reviews">Reviews</Link>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="nature-hero">
        <div className="nature-hero-overlay">
          <p>TRAVELMATE • NATURE</p>
          <h1>Connect with Nature</h1>
          <span>
            Explore forests, mountains, waterfalls, wildlife and peaceful
            landscapes across India.
          </span>
        </div>
      </section>

      {/* INTRO */}
      <section className="nature-intro">
        <p className="nature-small-title">DISCOVER THE NATURAL SIDE OF INDIA</p>
        <h2>Find experiences that bring you closer to nature</h2>
        <p>
          From peaceful forest walks to breathtaking mountain views, discover
          experiences that let you slow down, explore the outdoors and enjoy
          India's beautiful natural landscapes.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="nature-section">
        <div className="nature-section-heading">
          <p>EXPLORE BY CATEGORY</p>
          <h2>Nature experiences for every traveller</h2>
        </div>

        <div className="nature-category-grid">
          {natureCategories.map((category) => (
            <button
              type="button"
              className={`nature-category-card ${selectedCategory === category ? "active" : ""}`}
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                document.getElementById("experiences")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                border: selectedCategory === category ? "2px solid #15803d" : "1px solid #eee",
                background: selectedCategory === category ? "#f0fdf4" : "#fafafa",
                cursor: "pointer",
                textAlign: "left"
              }}
            >
              <h3>{category}</h3>
              <span style={{ color: "#15803d", fontWeight: 600 }}>
                {selectedCategory === category ? "Selected ✓" : "Explore experiences →"}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* TRAVELLERS CHOICE */}
      <section className="nature-awards">
        <div className="nature-section-heading">
          <p>TRAVELLERS' CHOICE AWARDS</p>
          <h2>Nature experiences travellers love</h2>
          <span>Discover highly rated experiences chosen by travellers.</span>
        </div>

        <div className="nature-award-grid">
          {awardExperiences.map((item) => (
            <div
              className="nature-award-card"
              key={item.title}
              onClick={() => setSelectedExperience(item)}
              style={{ cursor: "pointer" }}
            >
              <img src={item.image} alt={item.title} />
              <div className="nature-award-content">
                <span>Travellers' Choice</span>
                <h3>{item.title}</h3>
                <p>{item.place}</p>
                <div className="nature-rating">
                  <span>★★★★★</span>
                  <b>{item.rating}</b>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR EXPERIENCES */}
      <section className="nature-section" id="experiences">
        <div className="nature-section-heading">
          <p>POPULAR EXPERIENCES</p>
          <h2>
            {selectedCategory === "All" ? "Explore nature your way" : `Adventures in ${selectedCategory}`}
          </h2>
          {selectedCategory !== "All" && (
            <button
              type="button"
              onClick={() => setSelectedCategory("All")}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#15803d", fontWeight: 600, marginTop: "5px" }}
            >
              Show All ↺
            </button>
          )}
        </div>

        <div className="nature-experience-grid">
          {natureExperiences.filter(matchesCategory).map((item) => (
            <div
              className="nature-experience-card"
              key={item.title}
              onClick={() => setSelectedExperience(item)}
              style={{ cursor: "pointer" }}
            >
              <div className="nature-experience-image">
                <img src={item.image} alt={item.title} />
                <button
                  type="button"
                  className="nature-heart"
                  onClick={(e) => toggleFavorite(item.title, e)}
                  style={{ position: "absolute", top: "12px", right: "12px", width: "36px", height: "36px", border: "none", borderRadius: "50%", background: "white", fontSize: "18px", cursor: "pointer", zIndex: 2 }}
                >
                  {favorites.includes(item.title) ? "♥" : "♡"}
                </button>
              </div>

              <div className="nature-experience-content">
                <span className="nature-experience-location">
                  📍 {item.location}
                </span>
                <h3>{item.title}</h3>
                <div className="nature-rating">
                  <span>★★★★★</span>
                  <b>{item.rating}</b>
                  <small>({item.reviews})</small>
                </div>
                <p>{item.description}</p>
                <strong>from {item.price} per person</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE DETAIL MODAL */}
      {selectedExperience && (
        <div className="nature-modal-overlay" onClick={() => setSelectedExperience(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "20px" }}>
          <div className="nature-modal-content" onClick={(e) => e.stopPropagation()} style={{ background: "white", maxWidth: "600px", width: "100%", borderRadius: "16px", overflow: "hidden", position: "relative", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
            <button className="nature-modal-close" onClick={() => setSelectedExperience(null)} style={{ position: "absolute", top: "15px", right: "15px", background: "white", border: "none", width: "36px", height: "36px", borderRadius: "50%", fontSize: "18px", cursor: "pointer", zIndex: 10, boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>✕</button>
            <img src={selectedExperience.image} alt={selectedExperience.title} style={{ width: "100%", height: "270px", objectFit: "cover" }} />
            <div className="nature-modal-details" style={{ padding: "25px" }}>
              <span style={{ fontSize: "11px", fontWeight: "700", color: "#15803d", letterSpacing: "1px" }}>NATURE ADVENTURE</span>
              <h2 style={{ fontSize: "24px", margin: "8px 0" }}>{selectedExperience.title}</h2>
              <p className="nature-location">📍 {selectedExperience.location || selectedExperience.place}</p>
              <div className="nature-rating">
                <span>★★★★★</span>
                <b>{selectedExperience.rating}</b>
                {selectedExperience.reviews && <small>({selectedExperience.reviews} reviews)</small>}
              </div>
              <p style={{ color: "#555", lineHeight: "1.6", margin: "15px 0" }}>{selectedExperience.description}</p>
              <p><strong>Duration:</strong> {selectedExperience.duration || "Full Day"}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "25px", paddingTop: "15px", borderTop: "1px solid #eee" }}>
                <div>
                  <span style={{ fontSize: "14px", color: "#666" }}>Price</span>
                  <p style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>{selectedExperience.price || "₹1,499"} per person</p>
                </div>
                <button
                  style={{ background: "#15803d", color: "white", border: "none", padding: "12px 24px", borderRadius: "8px", fontWeight: "600", cursor: "pointer" }}
                  onClick={() => alert(`Booking initiated for: ${selectedExperience.title}`)}
                >
                  Book Adventure Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DESTINATIONS - CLICKABLE */}
      <section className="nature-destinations">
        <div className="nature-section-heading">
          <p>TOP NATURE DESTINATIONS</p>
          <h2>Places made for nature lovers</h2>
        </div>

        <div className="nature-destination-grid">
          {destinations.map((destination) => (
            <div
              className="nature-destination-card"
              key={destination.id}
              onClick={() => navigate(`/nature/${destination.id}`, { state: destination })}
              style={{ cursor: "pointer" }}
            >
              <img src={destination.image} alt={destination.name} />
              <div>
                <h3>{destination.name}</h3>
                <p>{destination.text}</p>
                <span style={{ fontWeight: 600, color: "#15803d" }}>Explore →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRAVEL STYLE */}
      <section className="nature-style">
        <div>
          <p>CHOOSE YOUR TRAVEL STYLE</p>
          <h2>How do you want to experience nature?</h2>
        </div>

        <div className="nature-style-grid">
          <div>
            <h3>🌲 Slow & Peaceful</h3>
            <p>Relax in forests, valleys, lakesides and peaceful natural surroundings.</p>
          </div>
          <div>
            <h3>🥾 Explore & Trek</h3>
            <p>Discover trails, waterfalls, mountains and hidden natural landscapes.</p>
          </div>
          <div>
            <h3>🦌 Wildlife</h3>
            <p>Experience India's forests and observe wildlife in their natural habitats.</p>
          </div>
          <div>
            <h3>📸 Scenic Escapes</h3>
            <p>Find beautiful landscapes and viewpoints perfect for photography and memories.</p>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="nature-tips">
        <div className="nature-section-heading">
          <p>TRAVEL TIPS</p>
          <h2>Enjoy nature responsibly</h2>
        </div>

        <div className="nature-tips-grid">
          <div>
            <h3>Respect the environment</h3>
            <p>Avoid littering and carry your waste back with you.</p>
          </div>
          <div>
            <h3>Stay on marked trails</h3>
            <p>Follow designated paths to protect natural habitats.</p>
          </div>
          <div>
            <h3>Carry essentials</h3>
            <p>Keep water, comfortable shoes, sunscreen and basic first-aid supplies.</p>
          </div>
          <div>
            <h3>Respect wildlife</h3>
            <p>Observe animals from a safe distance and never disturb them.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="nature-faq">
        <div className="nature-section-heading">
          <p>FREQUENTLY ASKED QUESTIONS</p>
          <h2>Nature travel FAQs</h2>
        </div>

        <div className="nature-faq-list">
          <details>
            <summary>What are the best nature destinations in India?</summary>
            <p>Manali, Kerala, Ladakh, Rishikesh, Darjeeling and wildlife destinations such as Ranthambore are popular choices.</p>
          </details>
          <details>
            <summary>Are nature experiences suitable for beginners?</summary>
            <p>Yes. Many nature walks, sightseeing experiences and easy trails are suitable for beginners.</p>
          </details>
          <details>
            <summary>What should I carry for a nature trip?</summary>
            <p>Comfortable footwear, water, sunscreen, weather-appropriate clothing and basic essentials are useful.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="nature-cta">
        <h2>Ready to explore the natural side of India?</h2>
        <p>Discover peaceful escapes, scenic landscapes and unforgettable outdoor experiences.</p>
        <Link to="/destinations">Explore Destinations</Link>
      </section>

      {/* FOOTER */}
      <footer className="nature-footer">
        <h2>TravelMate</h2>
        <p>Discover. Explore. Experience.</p>
      </footer>

      {/* CSS */}
      <style>{`
        .nature-page { background: #fff; color: #222; min-height: 100vh; }
        .nature-page .navbar { display: flex; align-items: center; justify-content: space-between; padding: 18px 60px; background: #fff; border-bottom: 1px solid #eee; }
        .nature-page .logo { font-size: 24px; font-weight: 700; }
        .nature-page .nav-links { display: flex; align-items: center; gap: 28px; }
        .nature-page .nav-links a { text-decoration: none; color: #333; font-weight: 500; }
        .nature-page .login-btn { border: none; padding: 9px 20px; border-radius: 8px; cursor: pointer; background: #15803d; color: white; }

        .nature-hero { min-height: 560px; background-image: linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.45)), url("https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=90"); background-size: cover; background-position: center; display: flex; align-items: center; justify-content: center; text-align: center; }
        .nature-hero-overlay { max-width: 850px; padding: 30px; color: white; }
        .nature-hero-overlay p, .nature-small-title, .nature-section-heading > p, .nature-style > div > p { font-size: 13px; letter-spacing: 2px; font-weight: 700; color: #15803d; }
        .nature-hero-overlay h1 { font-size: 64px; margin: 15px 0; }
        .nature-hero-overlay span { font-size: 19px; line-height: 1.6; }

        .nature-intro { max-width: 850px; margin: 80px auto; padding: 0 25px; text-align: center; }
        .nature-intro h2 { font-size: 40px; margin: 15px 0; }
        .nature-intro > p:last-child { color: #666; line-height: 1.8; font-size: 17px; }

        .nature-section, .nature-awards, .nature-destinations, .nature-faq, .nature-tips { max-width: 1200px; margin: 80px auto; padding: 0 30px; }
        .nature-section-heading { margin-bottom: 35px; }
        .nature-section-heading h2 { font-size: 34px; margin: 10px 0; }
        .nature-section-heading > span { color: #666; }

        .nature-category-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .nature-category-card { min-height: 130px; padding: 25px; border-radius: 16px; display: flex; flex-direction: column; justify-content: flex-end; transition: .25s ease; }
        .nature-category-card:hover { transform: translateY(-4px); box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
        .nature-category-card h3 { font-size: 22px; margin: 0 0 8px; }

        .nature-awards { max-width: none; background: #f7f7f7; padding: 70px max(30px, calc((100% - 1200px) / 2)); }
        .nature-award-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; }
        .nature-award-card { background: white; border-radius: 16px; overflow: hidden; transition: transform .2s ease; }
        .nature-award-card:hover { transform: translateY(-4px); box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
        .nature-award-card img { width: 100%; height: 250px; object-fit: cover; display: block; }
        .nature-award-content { padding: 22px; }
        .nature-award-content > span { font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #15803d; }
        .nature-award-content h3 { font-size: 21px; margin: 10px 0; }
        .nature-award-content p { color: #666; }

        .nature-rating { display: flex; align-items: center; gap: 8px; margin-top: 12px; color: #f59e0b; }
        .nature-rating b { color: #222; }
        .nature-rating span { letter-spacing: 2px; }
        .nature-rating small { color: #777; }

        .nature-experience-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; }
        .nature-experience-card { border: 1px solid #eee; border-radius: 16px; overflow: hidden; background: #fff; transition: transform .2s ease; }
        .nature-experience-card:hover { transform: translateY(-4px); box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
        .nature-experience-image { height: 230px; position: relative; }
        .nature-experience-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .nature-experience-content { padding: 20px; }
        .nature-experience-location { font-size: 13px; color: #777; }
        .nature-experience-content h3 { font-size: 21px; margin: 8px 0; }
        .nature-experience-content p { color: #666; line-height: 1.6; }
        .nature-experience-content strong { display: block; margin-top: 15px; font-size: 18px; }

        .nature-destinations { background: #fafafa; max-width: none; padding: 70px max(30px, calc((100% - 1200px) / 2)); }
        .nature-destination-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .nature-destination-card { background: white; border-radius: 16px; overflow: hidden; transition: transform .3s ease; }
        .nature-destination-card:hover { transform: translateY(-5px); }
        .nature-destination-card img { width: 100%; height: 220px; object-fit: cover; display: block; }
        .nature-destination-card > div { padding: 20px; }
        .nature-destination-card h3 { margin: 0 0 8px; font-size: 22px; }
        .nature-destination-card p { color: #666; line-height: 1.6; }

        .nature-style { max-width: 1200px; margin: 80px auto; padding: 0 30px; }
        .nature-style h2 { font-size: 34px; margin-top: 10px; }
        .nature-style-grid, .nature-tips-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 35px; }
        .nature-style-grid > div, .nature-tips-grid > div { padding: 25px; border: 1px solid #eee; border-radius: 16px; background: #fafafa; }
        .nature-style-grid h3, .nature-tips-grid h3 { margin-top: 0; }
        .nature-style-grid p, .nature-tips-grid p { color: #666; line-height: 1.6; }

        .nature-faq-list { display: flex; flex-direction: column; gap: 12px; }
        .nature-faq-list details { border: 1px solid #eee; border-radius: 12px; padding: 20px; }
        .nature-faq-list summary { cursor: pointer; font-weight: 600; }
        .nature-faq-list p { color: #666; line-height: 1.6; }

        .nature-cta { margin-top: 80px; padding: 90px 25px; text-align: center; background: #f5f5f5; }
        .nature-cta h2 { font-size: 40px; margin-bottom: 12px; }
        .nature-cta p { color: #666; margin-bottom: 25px; }
        .nature-cta a { display: inline-block; padding: 13px 25px; border-radius: 8px; text-decoration: none; background: #15803d; color: white; font-weight: 600; }

        .nature-footer { padding: 45px 30px; text-align: center; border-top: 1px solid #eee; }
        .nature-footer h2 { margin-bottom: 5px; color: #15803d; }
        .nature-footer p { color: #777; }

        @media (max-width: 900px) {
          .nature-category-grid, .nature-award-grid, .nature-experience-grid, .nature-destination-grid, .nature-style-grid, .nature-tips-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .nature-page .navbar { padding: 15px 20px; }
          .nature-category-grid, .nature-award-grid, .nature-experience-grid, .nature-destination-grid, .nature-style-grid, .nature-tips-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

export default Nature;