import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Food() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const categoryKeywords = {
    "Street Food": ["Street", "Delhi", "Mumbai", "Chaat", "Snack"],
    "Local Cuisine": ["Punjabi", "Rajasthani", "South Indian", "Goan", "Kerala", "Thali"],
    "Fine Dining": ["Dining", "Feast", "Authentic"],
    "Food Markets": ["Market", "Walk", "Tour"],
    "Cooking Classes": ["Cooking", "Chef", "Class"],
    "Desserts & Sweets": ["Sweets", "Dessert", "Halwa"],
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

  const foodExperiences = [
    {
      title: "Old Delhi Street Food Walk",
      location: "Delhi",
      rating: "4.9",
      reviews: "2,145",
      price: "₹799",
      category: "Street Food",
      description: "Explore the bustling lanes of Chandni Chowk and taste legendary street foods like parathas, chaat, and jalebis.",
      duration: "3 Hours",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Authentic Punjabi Food Experience",
      location: "Amritsar",
      rating: "4.8",
      reviews: "1,540",
      price: "₹999",
      category: "Local Cuisine",
      description: "Indulge in rich, buttery Punjabi delicacies, Amritsari kulchas, and authentic lassi in the heart of Punjab.",
      duration: "4 Hours",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Rajasthani Thali Experience",
      location: "Jaipur",
      rating: "4.8",
      reviews: "1,280",
      price: "₹899",
      category: "Local Cuisine",
      description: "Savor a royal royal spread featuring dal baati churma, gatte ki sabzi, and traditional sweets in Jaipur.",
      duration: "2.5 Hours",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "South Indian Breakfast Tour",
      location: "Bengaluru",
      rating: "4.7",
      reviews: "965",
      price: "₹699",
      category: "Street Food",
      description: "Discover legendary filter coffees, crispy dosas, soft idlis, and traditional South Indian tiffin items.",
      duration: "3 Hours",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Goa Seafood & Local Food Tour",
      location: "Goa",
      rating: "4.8",
      reviews: "1,120",
      price: "₹1,299",
      category: "Local Cuisine",
      description: "Taste fresh catches of the day cooked in authentic Goan Xacuti and Bebinca desserts.",
      duration: "4 Hours",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Kerala Traditional Food Experience",
      location: "Kerala",
      rating: "4.9",
      reviews: "1,675",
      price: "₹1,199",
      category: "Fine Dining",
      description: "Enjoy a traditional Sadya feast served on a fresh banana leaf with over 20+ distinct dishes.",
      duration: "3 Hours",
      image:
        "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const awardExperiences = [
    {
      title: "Best Street Food Experience",
      location: "Old Delhi",
      place: "Old Delhi",
      rating: "4.9",
      reviews: "2,145",
      price: "₹799",
      description: "An award-winning culinary journey through the historic food lanes of Old Delhi.",
      duration: "3 Hours",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Authentic Rajasthani Dining",
      location: "Jaipur",
      place: "Jaipur",
      rating: "4.8",
      reviews: "1,280",
      price: "₹899",
      description: "Top-rated royal dining experience celebrating the rich heritage of Rajasthan.",
      duration: "2.5 Hours",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Traditional Kerala Feast",
      location: "Kerala",
      place: "Kerala",
      rating: "4.9",
      reviews: "1,675",
      price: "₹1,199",
      description: "Recognized as the finest authentic South Indian feast experience.",
      duration: "3 Hours",
      image:
        "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const foodCategories = [
    { title: "Street Food", text: "Explore lively food stalls and iconic roadside treats." },
    { title: "Local Cuisine", text: "Savor authentic regional dishes and traditional thalis." },
    { title: "Fine Dining", text: "Enjoy premium multi-course cultural dining experiences." },
    { title: "Food Markets", text: "Wander through aromatic spice and ingredient bazaars." },
    { title: "Cooking Classes", text: "Learn secret traditional recipes from local expert chefs." },
    { title: "Desserts & Sweets", text: "Taste rich regional sweets, pastries, and confections." },
  ];

  const cuisines = [
    {
      id: "north-indian",
      name: "North Indian",
      subtitle: "Rich Punjabi & Mughlai Flavours",
      description: "Butter chicken, chole bhature, kebabs, parathas and rich Punjabi flavours.",
      history: "Deeply influenced by Central Asian and Mughal cooking traditions.",
      bestTime: "All year round",
      famousFor: "Tandoori items, rich gravies, and stuffed parathas.",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "rajasthani",
      name: "Rajasthani",
      subtitle: "Royal Thalis & Desi Ghee Delicacies",
      description: "Dal baati churma, gatte, ker sangri and traditional Rajasthani thalis.",
      history: "Crafted to survive arid desert conditions with minimal water and long-shelf-life ingredients.",
      bestTime: "October to March",
      famousFor: "Dal baati churma, laal maas, and ghevar.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "south-indian",
      name: "South Indian",
      subtitle: "Crispy Dosas & Filter Coffee",
      description: "Dosa, idli, vada, sambar and delicious regional breakfast dishes.",
      history: "Rice and coconut-based coastal and inland vegetarian staples dating back millennia.",
      bestTime: "All year round",
      famousFor: "Masala dosa, idli-vada, and authentic filter coffee.",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "goan",
      name: "Goan",
      subtitle: "Seafood & Portuguese Fusion",
      description: "Fresh seafood, local curries and Portuguese-inspired flavours.",
      history: "A unique fusion of Konkan coastal ingredients and centuries of Portuguese culinary rule.",
      bestTime: "November to February",
      famousFor: "Fish curry rice, prawn balchao, and bebinca.",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const foodCities = [
    {
      id: "delhi-food",
      name: "Delhi",
      subtitle: "Street Food & Mughlai Flavours",
      description: "Street food, Mughlai flavours and legendary food markets.",
      history: "Capital city blending royal Mughal culinary legacy with vibrant modern street food culture.",
      bestTime: "October to March",
      famousFor: "Paranthe Wali Gali, Chandni Chowk chaat, and Karim's kebabs.",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "amritsar-food",
      name: "Amritsar",
      subtitle: "Kulchas & Punjabi Hospitality",
      description: "Punjabi food, Amritsari kulcha and traditional local flavours.",
      history: "World capital of dhaba culture and legendary community kitchen traditions.",
      bestTime: "October to March",
      famousFor: "Amritsari Kulcha, lassi, and Guru Ram Das Ji Langar.",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "jaipur-food",
      name: "Jaipur",
      subtitle: "Royal Thalis & Sweets",
      description: "Royal Rajasthani cuisine, thalis and traditional sweets.",
      history: "Pink City offering majestic heritage dining and royal palace recipes.",
      bestTime: "October to March",
      famousFor: "Pyaaz kachori, Dal baati churma, and ghevar.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "mumbai-food",
      name: "Mumbai",
      subtitle: "Vada Pav & Coastal Delights",
      description: "Vada pav, pav bhaji, seafood and famous street food.",
      history: "Financial capital featuring fast-paced street grub and diverse coastal communities.",
      bestTime: "November to February",
      famousFor: "Vada pav, pav bhaji, bhel puri, and Bombay duck fry.",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <div className="food-page">

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
      <section className="food-hero">
        <div className="food-hero-overlay">
          <p>TRAVELMATE • FOOD</p>
          <h1>Explore India Through Food</h1>
          <span>
            Discover local flavours, street food, traditional cuisines,
            hidden food spots and unforgettable dining experiences.
          </span>
        </div>
      </section>

      {/* INTRO */}
      <section className="food-intro">
        <p className="food-small-title">TASTE THE FLAVOURS OF INDIA</p>
        <h2>Find food experiences worth travelling for</h2>
        <p>
          From busy street-food lanes to royal kitchens and traditional
          family recipes, explore the food experiences that make every
          destination unique.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="food-section">
        <div className="food-section-heading">
          <p>EXPLORE BY CATEGORY</p>
          <h2>Find your kind of food experience</h2>
        </div>

        <div className="food-category-grid">
          {foodCategories.map((item) => (
            <button
              type="button"
              className={`food-category-card ${selectedCategory === item.title ? "active" : ""}`}
              key={item.title}
              onClick={() => {
                setSelectedCategory(item.title);
                document.getElementById("experiences")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                border: selectedCategory === item.title ? "2px solid #b91c1c" : "1px solid #eee",
                background: selectedCategory === item.title ? "#fef2f2" : "#fafafa",
                cursor: "pointer",
                textAlign: "left"
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span style={{ color: "#b91c1c", fontWeight: 600 }}>
                {selectedCategory === item.title ? "Selected ✓" : "Explore experiences →"}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* TRAVELLERS CHOICE */}
      <section className="food-awards">
        <div className="food-section-heading">
          <p>TRAVELLERS' CHOICE AWARDS</p>
          <h2>Food experiences travellers love</h2>
          <span>Discover highly rated culinary experiences enjoyed by travellers.</span>
        </div>

        <div className="food-award-grid">
          {awardExperiences.map((item) => (
            <div
              className="food-award-card"
              key={item.title}
              onClick={() => setSelectedExperience(item)}
              style={{ cursor: "pointer" }}
            >
              <img src={item.image} alt={item.title} />
              <div className="food-award-content">
                <span>Travellers' Choice</span>
                <h3>{item.title}</h3>
                <p>{item.place}</p>
                <div className="food-rating">
                  <span>★★★★★</span>
                  <b>{item.rating}</b>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR FOOD EXPERIENCES */}
      <section className="food-section" id="experiences">
        <div className="food-section-heading">
          <p>POPULAR FOOD EXPERIENCES</p>
          <h2>
            {selectedCategory === "All" ? "Eat your way through India" : `Experiences in ${selectedCategory}`}
          </h2>
          {selectedCategory !== "All" && (
            <button
              type="button"
              onClick={() => setSelectedCategory("All")}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#b91c1c", fontWeight: 600, marginTop: "5px" }}
            >
              Show All ↺
            </button>
          )}
        </div>

        <div className="food-experience-grid">
          {foodExperiences.filter(matchesCategory).map((item) => (
            <div
              className="food-experience-card"
              key={item.title}
              onClick={() => setSelectedExperience(item)}
              style={{ cursor: "pointer" }}
            >
              <div className="food-experience-image" style={{ position: "relative" }}>
                <img src={item.image} alt={item.title} />
                <button
                  type="button"
                  className="food-heart"
                  onClick={(e) => toggleFavorite(item.title, e)}
                  style={{ position: "absolute", top: "12px", right: "12px", width: "36px", height: "36px", border: "none", borderRadius: "50%", background: "white", fontSize: "18px", cursor: "pointer", zIndex: 2 }}
                >
                  {favorites.includes(item.title) ? "♥" : "♡"}
                </button>
              </div>

              <div className="food-experience-content">
                <span className="food-experience-location">📍 {item.location}</span>
                <h3>{item.title}</h3>
                <div className="food-rating">
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
        <div className="food-modal-overlay" onClick={() => setSelectedExperience(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "20px" }}>
          <div className="food-modal-content" onClick={(e) => e.stopPropagation()} style={{ background: "white", maxWidth: "600px", width: "100%", borderRadius: "16px", overflow: "hidden", position: "relative", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
            <button className="food-modal-close" onClick={() => setSelectedExperience(null)} style={{ position: "absolute", top: "15px", right: "15px", background: "white", border: "none", width: "36px", height: "36px", borderRadius: "50%", fontSize: "18px", cursor: "pointer", zIndex: 10, boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>✕</button>
            <img src={selectedExperience.image} alt={selectedExperience.title} style={{ width: "100%", height: "270px", objectFit: "cover" }} />
            <div className="food-modal-details" style={{ padding: "25px" }}>
              <span style={{ fontSize: "11px", fontWeight: "700", color: "#b91c1c", letterSpacing: "1px" }}>CULINARY EXPERIENCE</span>
              <h2 style={{ fontSize: "24px", margin: "8px 0" }}>{selectedExperience.title}</h2>
              <p className="food-location">📍 {selectedExperience.location || selectedExperience.place}</p>
              <div className="food-rating">
                <span>★★★★★</span>
                <b>{selectedExperience.rating}</b>
                {selectedExperience.reviews && <small>({selectedExperience.reviews} reviews)</small>}
              </div>
              <p style={{ color: "#555", lineHeight: "1.6", margin: "15px 0" }}>{selectedExperience.description}</p>
              <p><strong>Duration:</strong> {selectedExperience.duration || "3 Hours"}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "25px", paddingTop: "15px", borderTop: "1px solid #eee" }}>
                <div>
                  <span style={{ fontSize: "14px", color: "#666" }}>Price</span>
                  <p style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>{selectedExperience.price || "₹799"} per person</p>
                </div>
                <button
                  style={{ background: "#b91c1c", color: "white", border: "none", padding: "12px 24px", borderRadius: "8px", fontWeight: "600", cursor: "pointer" }}
                  onClick={() => alert(`Booking initiated for: ${selectedExperience.title}`)}
                >
                  Book Food Tour Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CUISINES - CLICKABLE */}
      <section className="food-cuisines">
        <div className="food-section-heading">
          <p>DISCOVER INDIAN CUISINES</p>
          <h2>A different flavour in every region</h2>
        </div>

        <div className="food-cuisine-grid">
          {cuisines.map((cuisine) => (
            <div
              className="food-cuisine-card"
              key={cuisine.id}
              onClick={() => navigate(`/food/${cuisine.id}`, { state: cuisine })}
              style={{ cursor: "pointer" }}
            >
              <img src={cuisine.image} alt={cuisine.name} />
              <div>
                <h3>{cuisine.name}</h3>
                <p>{cuisine.text}</p>
                <span style={{ fontWeight: 600, color: "#b91c1c" }}>Explore →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOD CITIES - CLICKABLE */}
      <section className="food-section">
        <div className="food-section-heading">
          <p>TOP FOOD DESTINATIONS</p>
          <h2>Indian cities every food lover should explore</h2>
        </div>

        <div className="food-city-grid">
          {foodCities.map((city) => (
            <div
              className="food-city-card"
              key={city.id}
              onClick={() => navigate(`/food/${city.id}`, { state: city })}
              style={{ cursor: "pointer" }}
            >
              <img src={city.image} alt={city.name} />
              <div>
                <h3>{city.name}</h3>
                <p>{city.text}</p>
                <span style={{ fontWeight: 600, color: "#b91c1c" }}>Explore →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOD STYLES */}
      <section className="food-style">
        <div>
          <p>CHOOSE YOUR FOOD STYLE</p>
          <h2>What kind of foodie are you?</h2>
        </div>

        <div className="food-style-grid">
          <div>
            <h3>🌮 Street Food Explorer</h3>
            <p>Discover local markets, food stalls and iconic street-food dishes.</p>
          </div>
          <div>
            <h3>🍛 Traditional Food Lover</h3>
            <p>Experience authentic regional recipes, thalis and traditional meals.</p>
          </div>
          <div>
            <h3>👨‍🍳 Cooking Enthusiast</h3>
            <p>Learn local recipes and cooking techniques through hands-on experiences.</p>
          </div>
          <div>
            <h3>🍰 Dessert Lover</h3>
            <p>Discover famous sweets, desserts and regional specialities.</p>
          </div>
        </div>
      </section>

      {/* MUST TRY */}
      <section className="food-must-try">
        <div className="food-section-heading">
          <p>MUST-TRY EXPERIENCES</p>
          <h2>Don't leave without tasting these</h2>
        </div>

        <div className="food-must-grid">
          <div>
            <span>01</span>
            <h3>Street Food Walk</h3>
            <p>Walk through local food streets and taste multiple regional specialities.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Traditional Thali</h3>
            <p>Experience a complete meal featuring flavours from the local region.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Local Food Market</h3>
            <p>Explore colourful markets filled with fresh ingredients and local snacks.</p>
          </div>
          <div>
            <span>04</span>
            <h3>Cooking Experience</h3>
            <p>Learn how traditional dishes are prepared by local cooks.</p>
          </div>
        </div>
      </section>

      {/* FOOD TIPS */}
      <section className="food-tips">
        <div className="food-section-heading">
          <p>FOOD TRAVEL TIPS</p>
          <h2>Make your food journey better</h2>
        </div>

        <div className="food-tips-grid">
          <div>
            <h3>Try local dishes</h3>
            <p>Don't limit yourself to familiar food. Try something unique to the destination.</p>
          </div>
          <div>
            <h3>Ask locals</h3>
            <p>Locals often know the best hidden food spots away from tourist areas.</p>
          </div>
          <div>
            <h3>Explore food markets</h3>
            <p>Local markets are a great way to discover authentic flavours and snacks.</p>
          </div>
          <div>
            <h3>Check hygiene</h3>
            <p>Choose food places that maintain good hygiene and handle food safely.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="food-faq">
        <div className="food-section-heading">
          <p>FREQUENTLY ASKED QUESTIONS</p>
          <h2>Food travel FAQs</h2>
        </div>

        <div className="food-faq-list">
          <details>
            <summary>Which Indian cities are famous for food?</summary>
            <p>Delhi, Amritsar, Jaipur, Mumbai, Lucknow, Kolkata, Hyderabad and many other cities are known for their distinctive food cultures.</p>
          </details>
          <details>
            <summary>What is the best way to explore local food?</summary>
            <p>Street-food walks, local markets, traditional restaurants and cooking experiences are popular ways to discover local cuisine.</p>
          </details>
          <details>
            <summary>Are food walks suitable for families?</summary>
            <p>Many food walks are family-friendly, but it is useful to check duration, walking requirements, and options beforehand.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="food-cta">
        <h2>Ready to taste India?</h2>
        <p>Discover local flavours, unforgettable dishes and food experiences across India.</p>
        <Link to="/destinations">Explore Destinations</Link>
      </section>

      {/* FOOTER */}
      <footer className="food-footer">
        <h2>TravelMate</h2>
        <p>Discover. Explore. Experience.</p>
      </footer>

      {/* CSS */}
      <style>{`
        .food-page { min-height: 100vh; background: #fff; color: #222; font-family: Arial, sans-serif; }
        .food-page .navbar { display: flex; align-items: center; justify-content: space-between; padding: 18px 60px; background: #fff; border-bottom: 1px solid #eee; }
        .food-page .logo { font-size: 24px; font-weight: 700; }
        .food-page .nav-links { display: flex; align-items: center; gap: 28px; }
        .food-page .nav-links a { text-decoration: none; color: #333; font-weight: 500; }
        .food-page .login-btn { border: none; padding: 9px 20px; border-radius: 8px; cursor: pointer; background: #b91c1c; color: white; }

        .food-hero { min-height: 560px; background-image: linear-gradient(rgba(0,0,0,.38), rgba(0,0,0,.5)), url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=90"); background-size: cover; background-position: center; display: flex; align-items: center; justify-content: center; text-align: center; }
        .food-hero-overlay { max-width: 900px; padding: 30px; color: white; }
        .food-hero-overlay p, .food-small-title, .food-section-heading > p, .food-style > div > p { font-size: 13px; letter-spacing: 2px; font-weight: 700; color: #b91c1c; }
        .food-hero-overlay h1 { font-size: 62px; margin: 15px 0; }
        .food-hero-overlay span { font-size: 19px; line-height: 1.6; }

        .food-intro { max-width: 850px; margin: 80px auto; padding: 0 25px; text-align: center; }
        .food-intro h2 { font-size: 40px; margin: 15px 0; }
        .food-intro > p:last-child { color: #666; line-height: 1.8; font-size: 17px; }

        .food-section, .food-awards, .food-cuisines, .food-must-try, .food-tips, .food-faq { max-width: 1200px; margin: 80px auto; padding: 0 30px; }
        .food-section-heading { margin-bottom: 35px; }
        .food-section-heading h2 { font-size: 34px; margin: 10px 0; }
        .food-section-heading > span { color: #666; }

        .food-category-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .food-category-card { min-height: 130px; padding: 25px; border-radius: 16px; display: flex; flex-direction: column; justify-content: flex-end; transition: .25s ease; }
        .food-category-card:hover { transform: translateY(-4px); box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
        .food-category-card h3 { font-size: 22px; margin: 0 0 8px; }
        .food-category-card p { color: #666; font-size: 14px; margin: 0 0 10px; }

        .food-awards { max-width: none; background: #fef2f2; padding: 70px max(30px, calc((100% - 1200px) / 2)); }
        .food-award-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; }
        .food-award-card { background: white; border-radius: 16px; overflow: hidden; transition: transform .2s ease; }
        .food-award-card:hover { transform: translateY(-4px); box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
        .food-award-card img { width: 100%; height: 250px; object-fit: cover; display: block; }
        .food-award-content { padding: 22px; }
        .food-award-content > span { font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #b91c1c; }
        .food-award-content h3 { font-size: 21px; margin: 10px 0; }
        .food-award-content p { color: #666; }

        .food-rating { display: flex; align-items: center; gap: 8px; margin-top: 12px; color: #f59e0b; }
        .food-rating b { color: #222; }
        .food-rating span { letter-spacing: 2px; }
        .food-rating small { color: #777; }

        .food-experience-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; }
        .food-experience-card { border: 1px solid #eee; border-radius: 16px; overflow: hidden; background: #fff; transition: transform .2s ease; }
        .food-experience-card:hover { transform: translateY(-4px); box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
        .food-experience-image { height: 230px; position: relative; }
        .food-experience-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .food-experience-content { padding: 20px; }
        .food-experience-location { font-size: 13px; color: #777; }
        .food-experience-content h3 { font-size: 21px; margin: 8px 0; }
        .food-experience-content p { color: #666; line-height: 1.6; }
        .food-experience-content strong { display: block; margin-top: 15px; font-size: 18px; }

        .food-cuisines, .food-section { max-width: none; }
        .food-cuisine-grid, .food-city-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .food-cuisine-card, .food-city-card { background: white; border-radius: 16px; overflow: hidden; border: 1px solid #eee; transition: transform .3s ease; }
        .food-cuisine-card:hover, .food-city-card:hover { transform: translateY(-5px); }
        .food-cuisine-card img, .food-city-card img { width: 100%; height: 220px; object-fit: cover; display: block; }
        .food-cuisine-card > div, .food-city-card > div { padding: 20px; }
        .food-cuisine-card h3, .food-city-card h3 { font-size: 22px; margin: 0 0 8px; }
        .food-cuisine-card p, .food-city-card p { color: #666; line-height: 1.6; }

        .food-style-grid, .food-must-grid, .food-tips-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 35px; }
        .food-style-grid > div, .food-tips-grid > div, .food-must-grid > div { padding: 25px; border: 1px solid #eee; border-radius: 16px; background: #fafafa; }
        .food-style-grid h3, .food-tips-grid h3, .food-must-grid h3 { margin-top: 0; }
        .food-style-grid p, .food-tips-grid p, .food-must-grid p { color: #666; line-height: 1.6; }
        .food-must-grid span { font-size: 13px; font-weight: 700; color: #b91c1c; }

        .food-faq-list { display: flex; flex-direction: column; gap: 12px; }
        .food-faq-list details { border: 1px solid #eee; border-radius: 12px; padding: 20px; }
        .food-faq-list summary { cursor: pointer; font-weight: 600; }
        .food-faq-list p { color: #666; line-height: 1.6; }

        .food-cta { margin-top: 80px; padding: 90px 25px; text-align: center; background: #fef2f2; }
        .food-cta h2 { font-size: 40px; margin-bottom: 12px; }
        .food-cta p { color: #666; margin-bottom: 25px; }
        .food-cta a { display: inline-block; padding: 13px 25px; border-radius: 8px; text-decoration: none; background: #b91c1c; color: white; font-weight: 600; }

        .food-footer { padding: 45px 30px; text-align: center; border-top: 1px solid #eee; }
        .food-footer h2 { margin-bottom: 5px; color: #b91c1c; }
        .food-footer p { color: #777; }

        @media (max-width: 900px) {
          .food-category-grid, .food-award-grid, .food-experience-grid, .food-cuisine-grid, .food-city-grid, .food-style-grid, .food-must-grid, .food-tips-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .food-page .navbar { padding: 15px 20px; }
          .food-category-grid, .food-award-grid, .food-experience-grid, .food-cuisine-grid, .food-city-grid, .food-style-grid, .food-must-grid, .food-tips-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

export default Food;