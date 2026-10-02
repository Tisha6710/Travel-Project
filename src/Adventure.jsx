import React from "react";
import { Link } from "react-router-dom";

function Adventure() {
  const experiences = [
    {
      title: "Paragliding in Manali",
      location: "Manali, Himachal Pradesh",
      rating: "4.8",
      reviews: "1,245",
      price: "₹1,500",
      category: "Paragliding",
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
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Scuba Diving Adventure",
      location: "Andaman Islands",
      rating: "4.9",
      reviews: "1,890",
      price: "₹2,500",
      category: "Diving",
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
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Rishikesh White Water Rafting",
      location: "Rishikesh",
      rating: "4.9",
      reviews: "2,780",
      price: "₹1,499",
      image:
        "https://images.unsplash.com/photo-1530866495561-507c2c9a4c91?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Manali Paragliding Experience",
      location: "Manali",
      rating: "4.8",
      reviews: "1,960",
      price: "₹1,500",
      image:
        "https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Andaman Diving Adventure",
      location: "Andaman Islands",
      rating: "4.8",
      reviews: "1,420",
      price: "₹2,500",
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
      name: "Manali",
      subtitle: "Trekking, Paragliding & Snow Adventures",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Rishikesh",
      subtitle: "Rafting, Bungee Jumping & Adventure",
      image:
        "https://images.unsplash.com/photo-1530866495561-507c2c9a4c91?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Ladakh",
      subtitle: "Mountain Roads, Trekking & Camping",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Andaman",
      subtitle: "Diving, Snorkeling & Island Adventures",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Jaisalmer",
      subtitle: "Desert Safari & Dune Adventures",
      image:
        "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Meghalaya",
      subtitle: "Trekking, Caves & Waterfalls",
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

          <button className="adventure-login-btn">
            Login
          </button>
        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="adventure-hero">

        <div className="adventure-hero-overlay"></div>

        <div className="adventure-hero-content">

          <span className="adventure-tag">
            🏔️ TRAVEL BY INTEREST
          </span>

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

            <a
              href="#experiences"
              className="adventure-primary-btn"
            >
              Explore Adventures
            </a>

            <a
              href="#awards"
              className="adventure-secondary-btn"
            >
              🏆 Travellers' Choice
            </a>

          </div>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="adventure-intro">

        <span>ADVENTURE AWAITS</span>

        <h2>
          Choose your kind of adventure
        </h2>

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

            <h2>
              What kind of adventure are you looking for?
            </h2>

          </div>

        </div>


        <div className="adventure-category-grid">

          {categories.map((item) => (

            <div
              className="adventure-category-card"
              key={item.title}
            >

              <div className="adventure-category-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

              <span>
                Explore →
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* ================= TRAVELLERS CHOICE ================= */}

      <section
        className="adventure-awards-section"
        id="awards"
      >

        <div className="adventure-awards-header">

          <div>

            <span>
              TRAVELLERS' CHOICE
            </span>

            <h2>
              Travellers' Choice Awards
            </h2>

            <p>
              Discover highly rated adventure experiences loved by
              travellers.
            </p>

          </div>

          <div className="adventure-award-badge">
            🏆
          </div>

        </div>


        <div className="adventure-experience-grid">

          {awardExperiences.map((item) => (

            <div
              className="adventure-experience-card"
              key={item.title}
            >

              <div className="adventure-card-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <span className="adventure-award-label">
                  🏆 Travellers' Choice
                </span>

                <button className="adventure-heart">
                  ♡
                </button>

              </div>

              <div className="adventure-card-content">

                <span className="adventure-card-category">
                  ADVENTURE EXPERIENCE
                </span>

                <h3>
                  {item.title}
                </h3>

                <p className="adventure-location">
                  📍 {item.location}
                </p>

                <div className="adventure-rating">

                  <span>★★★★★</span>

                  <b>{item.rating}</b>

                  <small>
                    ({item.reviews})
                  </small>

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

      <section
        className="adventure-section"
        id="experiences"
      >

        <div className="adventure-section-heading">

          <div>

            <span>
              POPULAR EXPERIENCES
            </span>

            <h2>
              Explore thrilling adventures
            </h2>

          </div>

          <span className="adventure-view-all">
            View all →
          </span>

        </div>


        <div className="adventure-experience-grid">

          {experiences.map((item) => (

            <div
              className="adventure-experience-card"
              key={item.title}
            >

              <div className="adventure-card-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <span className="adventure-image-tag">
                  {item.category}
                </span>

                <button className="adventure-heart">
                  ♡
                </button>

              </div>

              <div className="adventure-card-content">

                <h3>
                  {item.title}
                </h3>

                <p className="adventure-location">
                  📍 {item.location}
                </p>

                <div className="adventure-rating">

                  <span>★★★★★</span>

                  <b>{item.rating}</b>

                  <small>
                    ({item.reviews})
                  </small>

                </div>

                <p className="adventure-price">
                  from <strong>{item.price}</strong> per person
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= DESTINATIONS ================= */}

      <section className="adventure-destinations">

        <div className="adventure-section-heading">

          <div>

            <span>
              ADVENTURE DESTINATIONS
            </span>

            <h2>
              Where your next adventure begins
            </h2>

          </div>

        </div>


        <div className="adventure-destination-grid">

          {destinations.map((item) => (

            <div
              className="adventure-destination-card"
              key={item.name}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="adventure-destination-overlay">

                <h3>
                  {item.name}
                </h3>

                <p>
                  {item.subtitle}
                </p>

                <span>
                  Explore →
                </span>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= TRAVEL STYLE ================= */}

      <section className="adventure-guide">

        <div className="adventure-guide-content">

          <span>
            FIND YOUR ADVENTURE STYLE
          </span>

          <h2>
            Choose an adventure that matches your personality
          </h2>


          <div className="adventure-guide-grid">

            <div>

              <strong>01</strong>

              <h3>
                For thrill seekers
              </h3>

              <p>
                Try bungee jumping, rafting, paragliding and other
                adrenaline-filled experiences.
              </p>

            </div>


            <div>

              <strong>02</strong>

              <h3>
                For mountain lovers
              </h3>

              <p>
                Explore trekking trails, mountain camps and scenic
                Himalayan adventures.
              </p>

            </div>


            <div>

              <strong>03</strong>

              <h3>
                For explorers
              </h3>

              <p>
                Discover caves, forests, wildlife and destinations
                beyond the usual tourist routes.
              </p>

            </div>


            <div>

              <strong>04</strong>

              <h3>
                For nature lovers
              </h3>

              <p>
                Combine adventure with peaceful landscapes, waterfalls,
                forests and camping experiences.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SAFETY ================= */}

      <section className="adventure-safety">

        <div className="adventure-safety-content">

          <div className="adventure-safety-text">

            <span>
              ADVENTURE SAFETY
            </span>

            <h2>
              Adventure is better when you travel safely
            </h2>

            <p>
              Prepare properly, follow local instructions and choose
              professional guides and activity providers for a safer
              adventure.
            </p>

          </div>


          <div className="adventure-safety-grid">

            <div>
              <span>🪖</span>
              <h3>Use proper equipment</h3>
              <p>
                Wear the required protective equipment for every activity.
              </p>
            </div>

            <div>
              <span>🌦️</span>
              <h3>Check weather</h3>
              <p>
                Check weather and trail conditions before heading out.
              </p>
            </div>

            <div>
              <span>🧭</span>
              <h3>Follow your guide</h3>
              <p>
                Listen to professional guides and follow marked routes.
              </p>
            </div>

            <div>
              <span>🎒</span>
              <h3>Pack smart</h3>
              <p>
                Carry water, comfortable clothing and essential supplies.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section className="adventure-faq">

        <div className="adventure-section-heading">

          <div>

            <span>
              HELPFUL INFORMATION
            </span>

            <h2>
              Adventure travel FAQs
            </h2>

          </div>

        </div>


        <div className="adventure-faq-list">

          <details>

            <summary>
              Which destinations are popular for adventure activities?
            </summary>

            <p>
              Manali, Rishikesh, Ladakh, Andaman, Meghalaya and
              Jaisalmer offer a variety of trekking, rafting, camping,
              diving and other adventure experiences.
            </p>

          </details>


          <details>

            <summary>
              Are adventure activities suitable for beginners?
            </summary>

            <p>
              Many activities have beginner-friendly options. However,
              requirements vary depending on the activity, location,
              age and physical conditions.
            </p>

          </details>


          <details>

            <summary>
              What should I carry for an adventure trip?
            </summary>

            <p>
              Carry comfortable clothing, suitable footwear, water,
              sunscreen, personal medicines and any equipment recommended
              for your activity.
            </p>

          </details>


          <details>

            <summary>
              What is the best time for adventure travel?
            </summary>

            <p>
              The best season depends on the destination and activity.
              Always check local weather and seasonal conditions before
              planning.
            </p>

          </details>


          <details>

            <summary>
              Should I book adventure activities with a guide?
            </summary>

            <p>
              For activities that require technical skills or local
              knowledge, using a qualified guide or professional operator
              can help with planning and safety.
            </p>

          </details>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="adventure-cta">

        <div>

          <span>
            YOUR NEXT ADVENTURE
          </span>

          <h2>
            Step outside your comfort zone.
          </h2>

          <p>
            Discover mountains, rivers, forests, islands and experiences
            that make your journey unforgettable.
          </p>

          <Link to="/destinations">
            Explore Destinations →
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="adventure-footer">

        <div className="adventure-footer-container">

          <div>

            <h3>
              ✈️ TravelMate
            </h3>

            <p>
              Discover destinations, explore experiences and plan
              unforgettable journeys.
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

            <Link to="/culture">Culture</Link>
            <Link to="/water">Water</Link>
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


        <div className="adventure-footer-bottom">
          © 2026 TravelMate. All rights reserved.
        </div>

      </footer>


      {/* ================= CSS ================= */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .adventure-page {
          min-height: 100vh;
          background: #fff;
          color: #222;
        }

        .adventure-page a {
          text-decoration: none;
        }

        /* NAVBAR */

        .adventure-navbar {
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 60px;
          background: #fff;
          border-bottom: 1px solid #eee;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .adventure-logo {
          font-size: 24px;
          font-weight: 700;
          color: #222;
        }

        .adventure-nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .adventure-nav-links a {
          color: #333;
          font-weight: 500;
        }

        .adventure-login-btn {
          border: none;
          background: #111;
          color: white;
          padding: 10px 22px;
          border-radius: 8px;
          cursor: pointer;
        }

        /* HERO */

        .adventure-hero {
          min-height: 570px;
          position: relative;
          display: flex;
          align-items: center;
          background-image:
            url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85");
          background-size: cover;
          background-position: center;
        }

        .adventure-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0,0,0,.72),
            rgba(0,0,0,.35),
            rgba(0,0,0,.08)
          );
        }

        .adventure-hero-content {
          position: relative;
          max-width: 760px;
          margin-left: 8%;
          color: white;
        }

        .adventure-tag {
          font-size: 13px;
          letter-spacing: 2px;
          font-weight: 700;
        }

        .adventure-hero h1 {
          font-size: 58px;
          line-height: 1.08;
          margin: 20px 0;
        }

        .adventure-hero h1 span {
          display: block;
        }

        .adventure-hero p {
          max-width: 650px;
          font-size: 18px;
          line-height: 1.7;
        }

        .adventure-hero-buttons {
          display: flex;
          gap: 14px;
          margin-top: 30px;
        }

        .adventure-primary-btn,
        .adventure-secondary-btn {
          padding: 13px 22px;
          border-radius: 9px;
          font-weight: 600;
        }

        .adventure-primary-btn {
          background: white;
          color: #222;
        }

        .adventure-secondary-btn {
          color: white;
          border: 1px solid rgba(255,255,255,.7);
        }

        /* INTRO */

        .adventure-intro {
          max-width: 850px;
          margin: 80px auto 40px;
          padding: 0 25px;
          text-align: center;
        }

        .adventure-intro > span,
        .adventure-section-heading span,
        .adventure-guide-content > span,
        .adventure-safety-text > span,
        .adventure-faq span,
        .adventure-awards-header span {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .adventure-intro h2 {
          font-size: 38px;
          margin: 15px 0;
        }

        .adventure-intro p {
          color: #666;
          line-height: 1.8;
        }

        /* COMMON SECTION */

        .adventure-section {
          max-width: 1250px;
          margin: 80px auto;
          padding: 0 30px;
        }

        .adventure-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          margin-bottom: 30px;
        }

        .adventure-section-heading h2,
        .adventure-awards-header h2 {
          font-size: 34px;
          margin: 10px 0 0;
        }

        .adventure-view-all {
          font-weight: 600;
        }

        /* CATEGORY */

        .adventure-category-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .adventure-category-card {
          padding: 30px;
          border: 1px solid #eee;
          border-radius: 16px;
          transition: .25s ease;
        }

        .adventure-category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,.08);
        }

        .adventure-category-icon {
          font-size: 35px;
          margin-bottom: 18px;
        }

        .adventure-category-card h3 {
          margin: 0 0 10px;
          font-size: 20px;
        }

        .adventure-category-card p {
          color: #666;
          line-height: 1.6;
          min-height: 50px;
        }

        .adventure-category-card span {
          font-weight: 600;
        }

        /* AWARDS */

        .adventure-awards-section {
          background: #f5f3ee;
          padding: 75px max(30px, calc((100% - 1250px) / 2));
        }

        .adventure-awards-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 35px;
        }

        .adventure-awards-header p {
          color: #666;
        }

        .adventure-award-badge {
          font-size: 70px;
        }

        /* CARDS */

        .adventure-experience-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .adventure-experience-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          border: 1px solid #eee;
        }

        .adventure-card-image {
          height: 220px;
          position: relative;
          overflow: hidden;
        }

        .adventure-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .3s ease;
        }

        .adventure-experience-card:hover img {
          transform: scale(1.05);
        }

        .adventure-heart {
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

        .adventure-award-label,
        .adventure-image-tag {
          position: absolute;
          left: 12px;
          bottom: 12px;
          padding: 7px 10px;
          border-radius: 6px;
          background: white;
          font-size: 11px;
          font-weight: 700;
        }

        .adventure-card-content {
          padding: 18px;
        }

        .adventure-card-category {
          font-size: 10px;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .adventure-card-content h3 {
          font-size: 18px;
          margin: 9px 0;
          line-height: 1.3;
        }

        .adventure-location {
          color: #666;
          font-size: 13px;
        }

        .adventure-rating {
          display: flex;
          align-items: center;
          gap: 7px;
          margin: 12px 0;
        }

        .adventure-rating span {
          letter-spacing: 1px;
        }

        .adventure-rating small {
          color: #777;
        }

        .adventure-price {
          margin: 0;
          color: #555;
        }

        .adventure-price strong {
          color: #222;
          font-size: 18px;
        }

        /* DESTINATIONS */

        .adventure-destinations {
          padding: 80px 30px;
          background: #fafafa;
        }

        .adventure-destinations > .adventure-section-heading {
          max-width: 1250px;
          margin: 0 auto 30px;
        }

        .adventure-destination-grid {
          max-width: 1250px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .adventure-destination-card {
          height: 300px;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }

        .adventure-destination-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .adventure-destination-overlay {
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

        .adventure-destination-overlay h3 {
          font-size: 27px;
          margin: 0 0 5px;
        }

        .adventure-destination-overlay p {
          margin: 0 0 12px;
        }

        .adventure-destination-overlay span {
          font-weight: 600;
        }

        /* GUIDE */

        .adventure-guide {
          padding: 80px 30px;
        }

        .adventure-guide-content {
          max-width: 1250px;
          margin: auto;
        }

        .adventure-guide-content h2 {
          max-width: 700px;
          font-size: 35px;
          margin: 12px 0 35px;
        }

        .adventure-guide-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .adventure-guide-grid div {
          border-top: 2px solid #222;
          padding-top: 18px;
        }

        .adventure-guide-grid h3 {
          font-size: 18px;
        }

        .adventure-guide-grid p {
          color: #666;
          line-height: 1.6;
          font-size: 14px;
        }

        /* SAFETY */

        .adventure-safety {
          padding: 80px 30px;
          background: #f8f7f3;
        }

        .adventure-safety-content {
          max-width: 1250px;
          margin: auto;
        }

        .adventure-safety-text {
          max-width: 700px;
          margin-bottom: 35px;
        }

        .adventure-safety-text h2 {
          font-size: 35px;
          margin: 12px 0;
        }

        .adventure-safety-text p {
          color: #666;
          line-height: 1.7;
        }

        .adventure-safety-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .adventure-safety-grid div {
          background: white;
          padding: 25px;
          border-radius: 14px;
        }

        .adventure-safety-grid span {
          font-size: 28px;
        }

        .adventure-safety-grid h3 {
          font-size: 17px;
        }

        .adventure-safety-grid p {
          color: #666;
          line-height: 1.5;
          font-size: 14px;
        }

        /* FAQ */

        .adventure-faq {
          max-width: 900px;
          margin: 70px auto;
          padding: 0 25px;
        }

        .adventure-faq-list {
          margin-top: 30px;
        }

        .adventure-faq details {
          border-bottom: 1px solid #ddd;
          padding: 20px 0;
        }

        .adventure-faq summary {
          font-weight: 600;
          cursor: pointer;
          font-size: 17px;
        }

        .adventure-faq details p {
          color: #666;
          line-height: 1.7;
        }

        /* CTA */

        .adventure-cta {
          margin-top: 80px;
          padding: 80px 30px;
          background: #111;
          color: white;
          text-align: center;
        }

        .adventure-cta > div {
          max-width: 750px;
          margin: auto;
        }

        .adventure-cta span {
          font-size: 12px;
          letter-spacing: 2px;
        }

        .adventure-cta h2 {
          font-size: 40px;
          margin: 15px 0;
        }

        .adventure-cta p {
          color: #ccc;
          line-height: 1.7;
        }

        .adventure-cta a {
          display: inline-block;
          margin-top: 20px;
          background: white;
          color: #222;
          padding: 13px 22px;
          border-radius: 8px;
          font-weight: 600;
        }

        /* FOOTER */

        .adventure-footer {
          background: #111;
          color: white;
          padding: 55px 30px 20px;
        }

        .adventure-footer-container {
          max-width: 1250px;
          margin: auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
        }

        .adventure-footer h3 {
          font-size: 22px;
        }

        .adventure-footer h4 {
          margin-bottom: 18px;
        }

        .adventure-footer p {
          color: #aaa;
          line-height: 1.6;
          max-width: 300px;
        }

        .adventure-footer a,
        .adventure-footer span {
          display: block;
          color: #aaa;
          margin: 10px 0;
        }

        .adventure-footer-bottom {
          max-width: 1250px;
          margin: 40px auto 0;
          padding-top: 20px;
          border-top: 1px solid #333;
          color: #888;
          font-size: 13px;
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {

          .adventure-experience-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .adventure-category-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .adventure-guide-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .adventure-safety-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .adventure-destination-grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        @media (max-width: 700px) {

          .adventure-navbar {
            padding: 0 20px;
          }

          .adventure-nav-links {
            gap: 10px;
          }

          .adventure-hero-content {
            margin: 0 25px;
          }

          .adventure-hero h1 {
            font-size: 40px;
          }

          .adventure-category-grid,
          .adventure-experience-grid,
          .adventure-destination-grid,
          .adventure-guide-grid,
          .adventure-safety-grid {
            grid-template-columns: 1fr;
          }

          .adventure-footer-container {
            grid-template-columns: 1fr 1fr;
          }

          .adventure-awards-header {
            align-items: flex-start;
          }

          .adventure-award-badge {
            font-size: 45px;
          }

        }

      `}</style>

    </div>
  );
}

export default Adventure;