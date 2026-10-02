import React from "react";
import { Link } from "react-router-dom";

function Nature() {
  const natureExperiences = [
    {
      title: "Forest & Nature Walk",
      location: "Manali, Himachal Pradesh",
      rating: "4.8",
      reviews: "1,245",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Mountain Valley Exploration",
      location: "Ladakh",
      rating: "4.9",
      reviews: "980",
      price: "₹1,499",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Waterfall Nature Trek",
      location: "Rishikesh",
      rating: "4.8",
      reviews: "1,120",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Backwater Nature Experience",
      location: "Kerala",
      rating: "4.7",
      reviews: "875",
      price: "₹1,299",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Wildlife Safari",
      location: "Ranthambore",
      rating: "4.8",
      reviews: "1,540",
      price: "₹1,899",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Sunrise Nature Trail",
      location: "Darjeeling",
      rating: "4.7",
      reviews: "764",
      price: "₹699",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const awardExperiences = [
    {
      title: "Himalayan Nature Escape",
      place: "Manali",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Kerala Backwater Retreat",
      place: "Kerala",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Wildlife & Forest Safari",
      place: "Rajasthan",
      rating: "4.8",
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
      name: "Manali",
      text: "Pine forests, mountain valleys and peaceful rivers.",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kerala",
      text: "Lush greenery, backwaters and tropical landscapes.",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Ladakh",
      text: "Dramatic mountains, valleys and breathtaking views.",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Rishikesh",
      text: "Rivers, waterfalls, forests and peaceful trails.",
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
            <div className="nature-category-card" key={category}>
              <h3>{category}</h3>
              <span>Explore experiences →</span>
            </div>
          ))}
        </div>
      </section>

      {/* TRAVELLERS CHOICE */}
      <section className="nature-awards">
        <div className="nature-section-heading">
          <p>TRAVELLERS' CHOICE AWARDS</p>
          <h2>Nature experiences travellers love</h2>
          <span>
            Discover highly rated experiences chosen by travellers.
          </span>
        </div>

        <div className="nature-award-grid">
          {awardExperiences.map((item) => (
            <div className="nature-award-card" key={item.title}>
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
      <section className="nature-section">
        <div className="nature-section-heading">
          <p>POPULAR EXPERIENCES</p>
          <h2>Explore nature your way</h2>
        </div>

        <div className="nature-experience-grid">
          {natureExperiences.map((item) => (
            <div className="nature-experience-card" key={item.title}>
              <div className="nature-experience-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="nature-experience-content">
                <span className="nature-experience-location">
                  {item.location}
                </span>

                <h3>{item.title}</h3>

                <div className="nature-rating">
                  <span>★★★★★</span>
                  <b>{item.rating}</b>
                  <small>({item.reviews})</small>
                </div>

                <p>
                  Explore beautiful landscapes and enjoy a refreshing
                  experience surrounded by nature.
                </p>

                <strong>from {item.price} per person</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="nature-destinations">
        <div className="nature-section-heading">
          <p>TOP NATURE DESTINATIONS</p>
          <h2>Places made for nature lovers</h2>
        </div>

        <div className="nature-destination-grid">
          {destinations.map((destination) => (
            <div className="nature-destination-card" key={destination.name}>
              <img src={destination.image} alt={destination.name} />

              <div>
                <h3>{destination.name}</h3>
                <p>{destination.text}</p>
                <Link to="/destinations">Explore →</Link>
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
            <p>
              Relax in forests, valleys, lakesides and peaceful natural
              surroundings.
            </p>
          </div>

          <div>
            <h3>🥾 Explore & Trek</h3>
            <p>
              Discover trails, waterfalls, mountains and hidden natural
              landscapes.
            </p>
          </div>

          <div>
            <h3>🦌 Wildlife</h3>
            <p>
              Experience India's forests and observe wildlife in their natural
              habitats.
            </p>
          </div>

          <div>
            <h3>📸 Scenic Escapes</h3>
            <p>
              Find beautiful landscapes and viewpoints perfect for photography
              and memories.
            </p>
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
            <p>
              Avoid littering and carry your waste back with you.
            </p>
          </div>

          <div>
            <h3>Stay on marked trails</h3>
            <p>
              Follow designated paths to protect natural habitats.
            </p>
          </div>

          <div>
            <h3>Carry essentials</h3>
            <p>
              Keep water, comfortable shoes, sunscreen and basic first-aid
              supplies.
            </p>
          </div>

          <div>
            <h3>Respect wildlife</h3>
            <p>
              Observe animals from a safe distance and never disturb them.
            </p>
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
            <p>
              Manali, Kerala, Ladakh, Rishikesh, Darjeeling and wildlife
              destinations such as Ranthambore are popular choices.
            </p>
          </details>

          <details>
            <summary>Are nature experiences suitable for beginners?</summary>
            <p>
              Yes. Many nature walks, sightseeing experiences and easy trails
              are suitable for beginners.
            </p>
          </details>

          <details>
            <summary>What should I carry for a nature trip?</summary>
            <p>
              Comfortable footwear, water, sunscreen, weather-appropriate
              clothing and basic essentials are useful.
            </p>
          </details>

          <details>
            <summary>Can I find wildlife experiences?</summary>
            <p>
              Yes. Wildlife safaris and forest experiences are available at
              several destinations.
            </p>
          </details>

          <details>
            <summary>What is the best season for nature travel?</summary>
            <p>
              The ideal season depends on the destination and the type of
              experience you want to enjoy.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="nature-cta">
        <h2>Ready to explore the natural side of India?</h2>

        <p>
          Discover peaceful escapes, scenic landscapes and unforgettable
          outdoor experiences.
        </p>

        <Link to="/destinations">Explore Destinations</Link>
      </section>

      {/* FOOTER */}
      <footer className="nature-footer">
        <h2>TravelMate</h2>
        <p>Discover. Explore. Experience.</p>
      </footer>

      {/* CSS */}
      <style>{`
        .nature-page {
          background: #fff;
          color: #222;
          min-height: 100vh;
        }

        .nature-page .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 60px;
          background: #fff;
          border-bottom: 1px solid #eee;
        }

        .nature-page .logo {
          font-size: 24px;
          font-weight: 700;
        }

        .nature-page .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nature-page .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
        }

        .nature-page .login-btn {
          border: none;
          padding: 9px 20px;
          border-radius: 8px;
          cursor: pointer;
        }

        .nature-hero {
          min-height: 560px;
          background-image:
            linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.45)),
            url("https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=90");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .nature-hero-overlay {
          max-width: 850px;
          padding: 30px;
          color: white;
        }

        .nature-hero-overlay p,
        .nature-small-title,
        .nature-section-heading > p,
        .nature-style > div > p {
          font-size: 13px;
          letter-spacing: 2px;
          font-weight: 700;
        }

        .nature-hero-overlay h1 {
          font-size: 64px;
          margin: 15px 0;
        }

        .nature-hero-overlay span {
          font-size: 19px;
          line-height: 1.6;
        }

        .nature-intro {
          max-width: 850px;
          margin: 80px auto;
          padding: 0 25px;
          text-align: center;
        }

        .nature-intro h2 {
          font-size: 40px;
          margin: 15px 0;
        }

        .nature-intro > p:last-child {
          color: #666;
          line-height: 1.8;
          font-size: 17px;
        }

        .nature-section,
        .nature-awards,
        .nature-destinations,
        .nature-faq,
        .nature-tips {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 30px;
        }

        .nature-section-heading {
          margin-bottom: 35px;
        }

        .nature-section-heading h2 {
          font-size: 34px;
          margin: 10px 0;
        }

        .nature-section-heading > span {
          color: #666;
        }

        .nature-category-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .nature-category-card {
          min-height: 150px;
          padding: 28px;
          border: 1px solid #eee;
          border-radius: 16px;
          background: #fafafa;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .nature-category-card h3 {
          font-size: 22px;
          margin: 0 0 8px;
        }

        .nature-category-card span {
          color: #777;
          font-size: 14px;
        }

        .nature-awards {
          max-width: none;
          background: #f7f7f7;
          padding: 70px max(30px, calc((100% - 1200px) / 2));
        }

        .nature-award-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .nature-award-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
        }

        .nature-award-card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
        }

        .nature-award-content {
          padding: 22px;
        }

        .nature-award-content > span {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .nature-award-content h3 {
          font-size: 21px;
          margin: 10px 0;
        }

        .nature-award-content p {
          color: #666;
        }

        .nature-rating {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 12px;
        }

        .nature-rating span {
          letter-spacing: 2px;
        }

        .nature-rating small {
          color: #777;
        }

        .nature-experience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .nature-experience-card {
          border: 1px solid #eee;
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
        }

        .nature-experience-image {
          height: 230px;
        }

        .nature-experience-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .nature-experience-content {
          padding: 20px;
        }

        .nature-experience-location {
          font-size: 13px;
          color: #777;
        }

        .nature-experience-content h3 {
          font-size: 21px;
          margin: 8px 0;
        }

        .nature-experience-content p {
          color: #666;
          line-height: 1.6;
        }

        .nature-experience-content strong {
          display: block;
          margin-top: 15px;
        }

        .nature-destinations {
          background: #fafafa;
          max-width: none;
          padding: 70px max(30px, calc((100% - 1200px) / 2));
        }

        .nature-destination-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .nature-destination-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
        }

        .nature-destination-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }

        .nature-destination-card > div {
          padding: 20px;
        }

        .nature-destination-card h3 {
          margin: 0 0 8px;
          font-size: 22px;
        }

        .nature-destination-card p {
          color: #666;
          line-height: 1.6;
        }

        .nature-destination-card a {
          text-decoration: none;
          font-weight: 600;
          color: #222;
        }

        .nature-style {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 30px;
        }

        .nature-style h2 {
          font-size: 34px;
          margin-top: 10px;
        }

        .nature-style-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 35px;
        }

        .nature-style-grid > div,
        .nature-tips-grid > div {
          padding: 25px;
          border: 1px solid #eee;
          border-radius: 16px;
          background: #fafafa;
        }

        .nature-style-grid h3,
        .nature-tips-grid h3 {
          margin-top: 0;
        }

        .nature-style-grid p,
        .nature-tips-grid p {
          color: #666;
          line-height: 1.6;
        }

        .nature-tips-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .nature-faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .nature-faq-list details {
          border: 1px solid #eee;
          border-radius: 12px;
          padding: 20px;
        }

        .nature-faq-list summary {
          cursor: pointer;
          font-weight: 600;
        }

        .nature-faq-list p {
          color: #666;
          line-height: 1.6;
        }

        .nature-cta {
          margin-top: 80px;
          padding: 90px 25px;
          text-align: center;
          background: #f5f5f5;
        }

        .nature-cta h2 {
          font-size: 40px;
          margin-bottom: 12px;
        }

        .nature-cta p {
          color: #666;
          margin-bottom: 25px;
        }

        .nature-cta a {
          display: inline-block;
          padding: 13px 25px;
          border-radius: 8px;
          text-decoration: none;
          background: #222;
          color: white;
          font-weight: 600;
        }

        .nature-footer {
          padding: 45px 30px;
          text-align: center;
          border-top: 1px solid #eee;
        }

        .nature-footer h2 {
          margin-bottom: 5px;
        }

        .nature-footer p {
          color: #777;
        }

        @media (max-width: 900px) {
          .nature-category-grid,
          .nature-award-grid,
          .nature-experience-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .nature-destination-grid,
          .nature-style-grid,
          .nature-tips-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .nature-hero-overlay h1 {
            font-size: 46px;
          }
        }

        @media (max-width: 600px) {
          .nature-page .navbar {
            padding: 15px 20px;
          }

          .nature-page .nav-links {
            gap: 10px;
          }

          .nature-category-grid,
          .nature-award-grid,
          .nature-experience-grid,
          .nature-destination-grid,
          .nature-style-grid,
          .nature-tips-grid {
            grid-template-columns: 1fr;
          }

          .nature-hero {
            min-height: 450px;
          }

          .nature-hero-overlay h1 {
            font-size: 38px;
          }

          .nature-intro h2,
          .nature-cta h2 {
            font-size: 30px;
          }

          .nature-section,
          .nature-faq,
          .nature-tips,
          .nature-style {
            padding: 0 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default Nature;