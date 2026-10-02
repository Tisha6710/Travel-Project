import React from "react";
import { Link } from "react-router-dom";

function Water() {
  const experiences = [
    {
      title: "Goa Scuba Diving Experience",
      location: "Goa",
      rating: "4.8",
      reviews: "1,245",
      price: "₹2,500",
      category: "Scuba Diving",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Rishikesh River Rafting",
      location: "Rishikesh, Uttarakhand",
      rating: "4.9",
      reviews: "2,130",
      price: "₹1,499",
      category: "River Adventure",
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
      image:
        "https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Goa Sunset Cruise",
      location: "Goa",
      rating: "4.7",
      reviews: "1,120",
      price: "₹799",
      category: "Cruise",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Parasailing Adventure",
      location: "Goa",
      rating: "4.7",
      reviews: "2,130",
      price: "₹1,800",
      category: "Water Sports",
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
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85",
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
      title: "Goa Sunset Sailing Experience",
      location: "Goa",
      rating: "4.8",
      reviews: "1,960",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Lakshadweep Island Experience",
      location: "Lakshadweep",
      rating: "4.8",
      reviews: "1,420",
      price: "₹1,999",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
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

  const destinations = [
    {
      name: "Goa",
      subtitle: "Beaches, Water Sports & Cruises",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Andaman",
      subtitle: "Coral Reefs, Diving & Island Adventures",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Rishikesh",
      subtitle: "River Rafting & Ganga Adventures",
      image:
        "https://images.unsplash.com/photo-1530866495561-507c2c9a4c91?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Lakshadweep",
      subtitle: "Pristine Beaches & Marine Life",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kerala",
      subtitle: "Backwaters, Beaches & Houseboats",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Gokarna",
      subtitle: "Peaceful Beaches & Coastal Escapes",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
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

          <button className="water-login-btn">
            Login
          </button>
        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="water-hero">

        <div className="water-hero-overlay"></div>

        <div className="water-hero-content">

          <span className="water-tag">
            🌊 TRAVEL BY INTEREST
          </span>

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

            <a
              href="#experiences"
              className="water-primary-btn"
            >
              Explore Experiences
            </a>

            <a
              href="#awards"
              className="water-secondary-btn"
            >
              🏆 Travellers' Choice
            </a>

          </div>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="water-intro">

        <span>MAKE A SPLASH</span>

        <h2>
          Find your perfect water experience
        </h2>

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

            <h2>
              What kind of water experience are you looking for?
            </h2>

          </div>

        </div>


        <div className="water-category-grid">

          {categories.map((item) => (

            <div
              className="water-category-card"
              key={item.title}
            >

              <div className="water-category-icon">
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
        className="water-awards-section"
        id="awards"
      >

        <div className="water-awards-header">

          <div>

            <span>
              TRAVELLERS' CHOICE
            </span>

            <h2>
              Travellers' Choice Awards
            </h2>

            <p>
              Discover highly rated water experiences loved by travellers.
            </p>

          </div>

          <div className="water-award-badge">
            🏆
          </div>

        </div>


        <div className="water-experience-grid">

          {awardExperiences.map((item) => (

            <div
              className="water-experience-card"
              key={item.title}
            >

              <div className="water-card-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <span className="water-award-label">
                  🏆 Travellers' Choice
                </span>

                <button className="water-heart">
                  ♡
                </button>

              </div>

              <div className="water-card-content">

                <span className="water-card-category">
                  WATER EXPERIENCE
                </span>

                <h3>
                  {item.title}
                </h3>

                <p className="water-location">
                  📍 {item.location}
                </p>

                <div className="water-rating">

                  <span>★★★★★</span>

                  <b>{item.rating}</b>

                  <small>
                    ({item.reviews})
                  </small>

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

      <section
        className="water-section"
        id="experiences"
      >

        <div className="water-section-heading">

          <div>

            <span>
              POPULAR EXPERIENCES
            </span>

            <h2>
              Explore water adventures
            </h2>

          </div>

          <span className="water-view-all">
            View all →
          </span>

        </div>


        <div className="water-experience-grid">

          {experiences.map((item) => (

            <div
              className="water-experience-card"
              key={item.title}
            >

              <div className="water-card-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <span className="water-image-tag">
                  {item.category}
                </span>

                <button className="water-heart">
                  ♡
                </button>

              </div>

              <div className="water-card-content">

                <h3>
                  {item.title}
                </h3>

                <p className="water-location">
                  📍 {item.location}
                </p>

                <div className="water-rating">

                  <span>★★★★★</span>

                  <b>{item.rating}</b>

                  <small>
                    ({item.reviews})
                  </small>

                </div>

                <p className="water-price">
                  from <strong>{item.price}</strong> per person
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= DESTINATIONS ================= */}

      <section className="water-destinations">

        <div className="water-section-heading">

          <div>

            <span>
              WATER DESTINATIONS
            </span>

            <h2>
              Where the water meets adventure
            </h2>

          </div>

        </div>


        <div className="water-destination-grid">

          {destinations.map((item) => (

            <div
              className="water-destination-card"
              key={item.name}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="water-destination-overlay">

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


      {/* ================= WATER ACTIVITIES ================= */}

      <section className="water-guide">

        <div className="water-guide-content">

          <span>
            PLAN YOUR ADVENTURE
          </span>

          <h2>
            Choose the experience that matches your travel style
          </h2>


          <div className="water-guide-grid">

            <div>
              <strong>01</strong>

              <h3>
                For adventure lovers
              </h3>

              <p>
                Try river rafting, parasailing, kayaking and other
                exciting water sports.
              </p>

            </div>


            <div>
              <strong>02</strong>

              <h3>
                For beach lovers
              </h3>

              <p>
                Relax on beautiful beaches, watch sunsets and enjoy
                peaceful coastal escapes.
              </p>

            </div>


            <div>
              <strong>03</strong>

              <h3>
                For explorers
              </h3>

              <p>
                Discover coral reefs, marine life and underwater
                ecosystems through diving and snorkeling.
              </p>

            </div>


            <div>
              <strong>04</strong>

              <h3>
                For slow travellers
              </h3>

              <p>
                Enjoy cruises, houseboats, backwaters and peaceful
                waterside experiences.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SAFETY ================= */}

      <section className="water-safety">

        <div className="water-safety-content">

          <div className="water-safety-text">

            <span>
              TRAVEL SMART
            </span>

            <h2>
              Stay safe while enjoying the water
            </h2>

            <p>
              Water adventures are exciting, but choosing the right
              equipment and following safety instructions is important
              for a comfortable experience.
            </p>

          </div>


          <div className="water-safety-grid">

            <div>
              <span>🦺</span>
              <h3>Use safety equipment</h3>
              <p>
                Always use life jackets and other required safety gear.
              </p>
            </div>

            <div>
              <span>🌦️</span>
              <h3>Check conditions</h3>
              <p>
                Check weather and water conditions before activities.
              </p>
            </div>

            <div>
              <span>👨‍🏫</span>
              <h3>Follow your guide</h3>
              <p>
                Listen carefully to professional instructors and guides.
              </p>
            </div>

            <div>
              <span>💧</span>
              <h3>Stay hydrated</h3>
              <p>
                Carry enough drinking water, especially during outdoor
                activities.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section className="water-faq">

        <div className="water-section-heading">

          <div>

            <span>
              HELPFUL INFORMATION
            </span>

            <h2>
              Water travel FAQs
            </h2>

          </div>

        </div>


        <div className="water-faq-list">

          <details>

            <summary>
              Which destinations are popular for water activities?
            </summary>

            <p>
              Goa, Andaman, Rishikesh, Kerala and Lakshadweep offer
              different combinations of beaches, rivers, diving,
              snorkeling, cruises and other water experiences.
            </p>

          </details>


          <details>

            <summary>
              Is scuba diving suitable for beginners?
            </summary>

            <p>
              Many destinations offer introductory experiences for
              beginners. Always follow the instructor's requirements
              and safety instructions.
            </p>

          </details>


          <details>

            <summary>
              What should I carry for a water activity?
            </summary>

            <p>
              Carry comfortable clothes, sunscreen, water-resistant
              accessories and any personal items recommended by the
              activity provider.
            </p>

          </details>


          <details>

            <summary>
              What is the best time for water activities?
            </summary>

            <p>
              The ideal time depends on the destination and activity.
              Check local weather and seasonal conditions before planning.
            </p>

          </details>


          <details>

            <summary>
              Are water activities suitable for families?
            </summary>

            <p>
              Many activities are family-friendly, but age, swimming
              ability and safety requirements vary by experience.
            </p>

          </details>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="water-cta">

        <div>

          <span>
            YOUR NEXT WATER ADVENTURE
          </span>

          <h2>
            Make your next trip a splash-worthy experience.
          </h2>

          <p>
            Discover beaches, islands, rivers, underwater worlds and
            unforgettable water adventures.
          </p>

          <Link to="/destinations">
            Explore Destinations →
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="water-footer">

        <div className="water-footer-container">

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


          <div>

            <h4>Interests</h4>

            <span>Culture</span>
            <span>Water</span>
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


        <div className="water-footer-bottom">
          © 2026 TravelMate. All rights reserved.
        </div>

      </footer>


      {/* ================= CSS ================= */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .water-page {
          min-height: 100vh;
          background: #fff;
          color: #222;
        }

        .water-page a {
          text-decoration: none;
        }

        /* NAVBAR */

        .water-navbar {
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

        .water-logo {
          font-size: 24px;
          font-weight: 700;
          color: #222;
        }

        .water-nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .water-nav-links a {
          color: #333;
          font-weight: 500;
        }

        .water-login-btn {
          border: none;
          background: #111;
          color: white;
          padding: 10px 22px;
          border-radius: 8px;
          cursor: pointer;
        }

        /* HERO */

        .water-hero {
          min-height: 570px;
          position: relative;
          display: flex;
          align-items: center;
          background-image:
            url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85");
          background-size: cover;
          background-position: center;
        }

        .water-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0,0,0,.7),
            rgba(0,0,0,.32),
            rgba(0,0,0,.1)
          );
        }

        .water-hero-content {
          position: relative;
          max-width: 760px;
          margin-left: 8%;
          color: white;
        }

        .water-tag {
          font-size: 13px;
          letter-spacing: 2px;
          font-weight: 700;
        }

        .water-hero h1 {
          font-size: 58px;
          line-height: 1.08;
          margin: 20px 0;
        }

        .water-hero h1 span {
          display: block;
        }

        .water-hero p {
          max-width: 650px;
          font-size: 18px;
          line-height: 1.7;
        }

        .water-hero-buttons {
          display: flex;
          gap: 14px;
          margin-top: 30px;
        }

        .water-primary-btn,
        .water-secondary-btn {
          padding: 13px 22px;
          border-radius: 9px;
          font-weight: 600;
        }

        .water-primary-btn {
          background: white;
          color: #222;
        }

        .water-secondary-btn {
          color: white;
          border: 1px solid rgba(255,255,255,.7);
        }

        /* INTRO */

        .water-intro {
          max-width: 850px;
          margin: 80px auto 40px;
          padding: 0 25px;
          text-align: center;
        }

        .water-intro > span,
        .water-section-heading span,
        .water-guide-content > span,
        .water-safety-text > span,
        .water-faq span,
        .water-awards-header span {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .water-intro h2 {
          font-size: 38px;
          margin: 15px 0;
        }

        .water-intro p {
          color: #666;
          line-height: 1.8;
        }

        /* COMMON SECTION */

        .water-section {
          max-width: 1250px;
          margin: 80px auto;
          padding: 0 30px;
        }

        .water-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          margin-bottom: 30px;
        }

        .water-section-heading h2,
        .water-awards-header h2 {
          font-size: 34px;
          margin: 10px 0 0;
        }

        .water-view-all {
          font-weight: 600;
        }

        /* CATEGORY */

        .water-category-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .water-category-card {
          padding: 30px;
          border: 1px solid #eee;
          border-radius: 16px;
          transition: .25s ease;
        }

        .water-category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,.08);
        }

        .water-category-icon {
          font-size: 35px;
          margin-bottom: 18px;
        }

        .water-category-card h3 {
          margin: 0 0 10px;
          font-size: 20px;
        }

        .water-category-card p {
          color: #666;
          line-height: 1.6;
          min-height: 50px;
        }

        .water-category-card span {
          font-weight: 600;
        }

        /* AWARDS */

        .water-awards-section {
          background: #eef8fa;
          padding: 75px max(30px, calc((100% - 1250px) / 2));
        }

        .water-awards-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 35px;
        }

        .water-awards-header p {
          color: #666;
        }

        .water-award-badge {
          font-size: 70px;
        }

        /* CARDS */

        .water-experience-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .water-experience-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          border: 1px solid #eee;
        }

        .water-card-image {
          height: 220px;
          position: relative;
          overflow: hidden;
        }

        .water-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .3s ease;
        }

        .water-experience-card:hover img {
          transform: scale(1.05);
        }

        .water-heart {
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

        .water-award-label,
        .water-image-tag {
          position: absolute;
          left: 12px;
          bottom: 12px;
          padding: 7px 10px;
          border-radius: 6px;
          background: white;
          font-size: 11px;
          font-weight: 700;
        }

        .water-card-content {
          padding: 18px;
        }

        .water-card-category {
          font-size: 10px;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .water-card-content h3 {
          font-size: 18px;
          margin: 9px 0;
          line-height: 1.3;
        }

        .water-location {
          color: #666;
          font-size: 13px;
        }

        .water-rating {
          display: flex;
          align-items: center;
          gap: 7px;
          margin: 12px 0;
        }

        .water-rating span {
          letter-spacing: 1px;
        }

        .water-rating small {
          color: #777;
        }

        .water-price {
          margin: 0;
          color: #555;
        }

        .water-price strong {
          color: #222;
          font-size: 18px;
        }

        /* DESTINATIONS */

        .water-destinations {
          padding: 80px 30px;
          background: #fafafa;
        }

        .water-destinations > .water-section-heading {
          max-width: 1250px;
          margin: 0 auto 30px;
        }

        .water-destination-grid {
          max-width: 1250px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .water-destination-card {
          height: 300px;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }

        .water-destination-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .water-destination-overlay {
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

        .water-destination-overlay h3 {
          font-size: 27px;
          margin: 0 0 5px;
        }

        .water-destination-overlay p {
          margin: 0 0 12px;
        }

        .water-destination-overlay span {
          font-weight: 600;
        }

        /* GUIDE */

        .water-guide {
          padding: 80px 30px;
        }

        .water-guide-content {
          max-width: 1250px;
          margin: auto;
        }

        .water-guide-content h2 {
          max-width: 650px;
          font-size: 35px;
          margin: 12px 0 35px;
        }

        .water-guide-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .water-guide-grid div {
          border-top: 2px solid #222;
          padding-top: 18px;
        }

        .water-guide-grid h3 {
          font-size: 18px;
        }

        .water-guide-grid p {
          color: #666;
          line-height: 1.6;
          font-size: 14px;
        }

        /* SAFETY */

        .water-safety {
          padding: 80px 30px;
          background: #f5fbfc;
        }

        .water-safety-content {
          max-width: 1250px;
          margin: auto;
        }

        .water-safety-text {
          max-width: 700px;
          margin-bottom: 35px;
        }

        .water-safety-text h2 {
          font-size: 35px;
          margin: 12px 0;
        }

        .water-safety-text p {
          color: #666;
          line-height: 1.7;
        }

        .water-safety-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .water-safety-grid div {
          background: white;
          padding: 25px;
          border-radius: 14px;
        }

        .water-safety-grid span {
          font-size: 28px;
        }

        .water-safety-grid h3 {
          font-size: 17px;
        }

        .water-safety-grid p {
          color: #666;
          line-height: 1.5;
          font-size: 14px;
        }

        /* FAQ */

        .water-faq {
          max-width: 900px;
          margin: 70px auto;
          padding: 0 25px;
        }

        .water-faq-list {
          margin-top: 30px;
        }

        .water-faq details {
          border-bottom: 1px solid #ddd;
          padding: 20px 0;
        }

        .water-faq summary {
          font-weight: 600;
          cursor: pointer;
          font-size: 17px;
        }

        .water-faq details p {
          color: #666;
          line-height: 1.7;
        }

        /* CTA */

        .water-cta {
          margin-top: 80px;
          padding: 80px 30px;
          background: #111;
          color: white;
          text-align: center;
        }

        .water-cta > div {
          max-width: 750px;
          margin: auto;
        }

        .water-cta span {
          font-size: 12px;
          letter-spacing: 2px;
        }

        .water-cta h2 {
          font-size: 40px;
          margin: 15px 0;
        }

        .water-cta p {
          color: #ccc;
          line-height: 1.7;
        }

        .water-cta a {
          display: inline-block;
          margin-top: 20px;
          background: white;
          color: #222;
          padding: 13px 22px;
          border-radius: 8px;
          font-weight: 600;
        }

        /* FOOTER */

        .water-footer {
          background: #111;
          color: white;
          padding: 55px 30px 20px;
        }

        .water-footer-container {
          max-width: 1250px;
          margin: auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
        }

        .water-footer h3 {
          font-size: 22px;
        }

        .water-footer h4 {
          margin-bottom: 18px;
        }

        .water-footer p {
          color: #aaa;
          line-height: 1.6;
          max-width: 300px;
        }

        .water-footer a,
        .water-footer span {
          display: block;
          color: #aaa;
          margin: 10px 0;
        }

        .water-footer-bottom {
          max-width: 1250px;
          margin: 40px auto 0;
          padding-top: 20px;
          border-top: 1px solid #333;
          color: #888;
          font-size: 13px;
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {

          .water-experience-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .water-category-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .water-guide-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .water-safety-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .water-destination-grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        @media (max-width: 700px) {

          .water-navbar {
            padding: 0 20px;
          }

          .water-nav-links {
            gap: 10px;
          }

          .water-hero-content {
            margin: 0 25px;
          }

          .water-hero h1 {
            font-size: 40px;
          }

          .water-category-grid,
          .water-experience-grid,
          .water-destination-grid,
          .water-guide-grid,
          .water-safety-grid {
            grid-template-columns: 1fr;
          }

          .water-footer-container {
            grid-template-columns: 1fr 1fr;
          }

          .water-awards-header {
            align-items: flex-start;
          }

          .water-award-badge {
            font-size: 45px;
          }

        }

      `}</style>

    </div>
  );
}

export default Water;