import React from "react";
import { Link } from "react-router-dom";

function Culture() {
  const experiences = [
    {
      title: "Varanasi Cultural Heritage Walk",
      location: "Varanasi, Uttar Pradesh",
      rating: "4.8",
      reviews: "1,245",
      price: "₹999",
      category: "Heritage",
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
      image:
        "https://images.unsplash.com/photo-1609947017136-9daf32a9f8e5?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Rajasthan Royal Heritage Tour",
      location: "Jaipur",
      rating: "4.9",
      reviews: "1,890",
      price: "₹1,599",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Varanasi Ganga & Heritage Experience",
      location: "Varanasi",
      rating: "4.8",
      reviews: "2,110",
      price: "₹1,099",
      image:
        "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Agra Mughal Heritage Experience",
      location: "Agra",
      rating: "4.8",
      reviews: "1,760",
      price: "₹899",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const destinations = [
    {
      name: "Jaipur",
      subtitle: "Royal Palaces & Rajasthani Culture",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Varanasi",
      subtitle: "Spirituality, Temples & Ganga Aarti",
      image:
        "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Udaipur",
      subtitle: "Lakes, Palaces & Royal Heritage",
      image:
        "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Amritsar",
      subtitle: "Golden Temple & Punjabi Culture",
      image:
        "https://images.unsplash.com/photo-1609947017136-9daf32a9f8e5?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Agra",
      subtitle: "Mughal History & Architecture",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Delhi",
      subtitle: "Monuments, Museums & Local Culture",
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
          <button className="culture-login-btn">
            Login
          </button>
        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="culture-hero">

        <div className="culture-hero-overlay"></div>

        <div className="culture-hero-content">

          <span className="culture-tag">
            🌏 TRAVEL BY INTEREST
          </span>

          <h1>
            Discover the soul of
            <span> India through Culture</span>
          </h1>

          <p>
            Explore India's rich heritage, traditions, architecture,
            food, art and unforgettable cultural experiences.
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

        <h2>
          Travel deeper. Experience the culture.
        </h2>

        <p>
          Culture is more than visiting a famous monument. Meet local
          communities, taste traditional food, explore ancient streets,
          discover local art and understand the stories behind every
          destination.
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
            <div className="culture-category-card" key={item.title}>

              <div className="culture-category-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <span className="culture-explore-arrow">
                Explore →
              </span>

            </div>
          ))}

        </div>

      </section>


      {/* ================= TRAVELLERS CHOICE ================= */}

      <section className="culture-awards-section" id="awards">

        <div className="culture-awards-header">

          <div>

            <span>TRAVELLERS' CHOICE</span>

            <h2>
              Travellers' Choice Awards
            </h2>

            <p>
              Discover highly rated cultural experiences that travellers
              love exploring.
            </p>

          </div>

          <div className="award-badge">
            🏆
          </div>

        </div>


        <div className="culture-experience-grid">

          {awardExperiences.map((item) => (
            <div className="culture-experience-card" key={item.title}>

              <div className="culture-card-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <span className="award-label">
                  🏆 Travellers' Choice
                </span>

                <button className="culture-heart">
                  ♡
                </button>

              </div>

              <div className="culture-card-content">

                <span className="culture-card-category">
                  CULTURAL EXPERIENCE
                </span>

                <h3>{item.title}</h3>

                <p className="culture-location">
                  📍 {item.location}
                </p>

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

          <span className="culture-view-all">
            View all →
          </span>

        </div>


        <div className="culture-experience-grid">

          {experiences.map((item) => (
            <div className="culture-experience-card" key={item.title}>

              <div className="culture-card-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <span className="culture-image-tag">
                  {item.category}
                </span>

                <button className="culture-heart">
                  ♡
                </button>

              </div>

              <div className="culture-card-content">

                <h3>{item.title}</h3>

                <p className="culture-location">
                  📍 {item.location}
                </p>

                <div className="culture-rating">

                  <span>★★★★★</span>

                  <b>{item.rating}</b>

                  <small>
                    ({item.reviews})
                  </small>

                </div>

                <p className="culture-price">
                  from <strong>{item.price}</strong> per person
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ================= DESTINATIONS ================= */}

      <section className="culture-destinations">

        <div className="culture-section-heading">

          <div>
            <span>CULTURAL DESTINATIONS</span>
            <h2>Where culture comes alive</h2>
          </div>

        </div>


        <div className="culture-destination-grid">

          {destinations.map((item) => (
            <div className="culture-destination-card" key={item.name}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="culture-destination-overlay">

                <h3>{item.name}</h3>

                <p>{item.subtitle}</p>

                <span>
                  Explore →
                </span>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ================= CULTURAL TRAVEL GUIDE ================= */}

      <section className="culture-guide">

        <div className="culture-guide-content">

          <span>TRAVEL SMART</span>

          <h2>
            Make your cultural journey more meaningful
          </h2>

          <div className="culture-guide-grid">

            <div>
              <strong>01</strong>
              <h3>Respect local traditions</h3>
              <p>
                Learn basic customs and follow local rules when visiting
                cultural and religious places.
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
                Every region has its own traditions, stories and way of
                life. Take time to understand them.
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
            <summary>
              What are the best cultural destinations in India?
            </summary>

            <p>
              Jaipur, Varanasi, Udaipur, Amritsar, Agra and Delhi offer
              different combinations of heritage, spirituality, architecture,
              food and local traditions.
            </p>
          </details>


          <details>
            <summary>
              What can I experience on a cultural trip?
            </summary>

            <p>
              You can explore historical monuments, temples, museums,
              traditional food, local markets, handicrafts, music, dance
              and community experiences.
            </p>
          </details>


          <details>
            <summary>
              Are cultural experiences suitable for families?
            </summary>

            <p>
              Many cultural experiences are suitable for families. Always
              check the duration, walking requirements and age restrictions
              before booking.
            </p>
          </details>


          <details>
            <summary>
              How can I respect local culture while travelling?
            </summary>

            <p>
              Dress appropriately where required, follow photography rules,
              respect religious customs and avoid disturbing local
              communities.
            </p>
          </details>


          <details>
            <summary>
              Can I combine culture with food experiences?
            </summary>

            <p>
              Yes. Food walks, traditional cooking classes and local
              markets can be combined with heritage and cultural tours.
            </p>
          </details>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="culture-cta">

        <div>

          <span>
            YOUR NEXT CULTURAL ADVENTURE
          </span>

          <h2>
            Discover the stories behind every destination.
          </h2>

          <p>
            Explore places, meet people, taste traditions and create
            memories that go beyond sightseeing.
          </p>

          <Link to="/destinations">
            Explore Destinations →
          </Link>

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
          background-image:
            url("https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&w=1800&q=85");
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