import React from "react";
import { Link } from "react-router-dom";

function Food() {
  const foodExperiences = [
    {
      title: "Old Delhi Street Food Walk",
      location: "Delhi",
      rating: "4.9",
      reviews: "2,145",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Authentic Punjabi Food Experience",
      location: "Amritsar",
      rating: "4.8",
      reviews: "1,540",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Rajasthani Thali Experience",
      location: "Jaipur",
      rating: "4.8",
      reviews: "1,280",
      price: "₹899",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "South Indian Breakfast Tour",
      location: "Bengaluru",
      rating: "4.7",
      reviews: "965",
      price: "₹699",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Goa Seafood & Local Food Tour",
      location: "Goa",
      rating: "4.8",
      reviews: "1,120",
      price: "₹1,299",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Kerala Traditional Food Experience",
      location: "Kerala",
      rating: "4.9",
      reviews: "1,675",
      price: "₹1,199",
      image:
        "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const awardExperiences = [
    {
      title: "Best Street Food Experience",
      place: "Old Delhi",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Authentic Rajasthani Dining",
      place: "Jaipur",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Traditional Kerala Feast",
      place: "Kerala",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const foodCategories = [
    "Street Food",
    "Local Cuisine",
    "Fine Dining",
    "Food Markets",
    "Cooking Classes",
    "Desserts & Sweets",
  ];

  const cuisines = [
    {
      name: "North Indian",
      text: "Butter chicken, chole bhature, kebabs, parathas and rich Punjabi flavours.",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Rajasthani",
      text: "Dal baati churma, gatte, ker sangri and traditional Rajasthani thalis.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "South Indian",
      text: "Dosa, idli, vada, sambar and delicious regional breakfast dishes.",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Goan",
      text: "Fresh seafood, local curries and Portuguese-inspired flavours.",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const foodCities = [
    {
      name: "Delhi",
      text: "Street food, Mughlai flavours and legendary food markets.",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Amritsar",
      text: "Punjabi food, Amritsari kulcha and traditional local flavours.",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Jaipur",
      text: "Royal Rajasthani cuisine, thalis and traditional sweets.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Mumbai",
      text: "Vada pav, pav bhaji, seafood and famous street food.",
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
        <p className="food-small-title">
          TASTE THE FLAVOURS OF INDIA
        </p>

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
          {foodCategories.map((category) => (
            <div className="food-category-card" key={category}>
              <h3>{category}</h3>

              <span>
                Explore experiences →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* TRAVELLERS CHOICE */}
      <section className="food-awards">
        <div className="food-section-heading">
          <p>TRAVELLERS' CHOICE AWARDS</p>

          <h2>Food experiences travellers love</h2>

          <span>
            Discover highly rated culinary experiences enjoyed by travellers.
          </span>
        </div>

        <div className="food-award-grid">
          {awardExperiences.map((item) => (
            <div className="food-award-card" key={item.title}>
              <img
                src={item.image}
                alt={item.title}
              />

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
      <section className="food-section">
        <div className="food-section-heading">
          <p>POPULAR FOOD EXPERIENCES</p>

          <h2>Eat your way through India</h2>
        </div>

        <div className="food-experience-grid">
          {foodExperiences.map((item) => (
            <div
              className="food-experience-card"
              key={item.title}
            >
              <div className="food-experience-image">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="food-experience-content">
                <span className="food-experience-location">
                  {item.location}
                </span>

                <h3>{item.title}</h3>

                <div className="food-rating">
                  <span>★★★★★</span>

                  <b>{item.rating}</b>

                  <small>
                    ({item.reviews})
                  </small>
                </div>

                <p>
                  Taste authentic local flavours and discover
                  the food culture of the destination.
                </p>

                <strong>
                  from {item.price} per person
                </strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CUISINES */}
      <section className="food-cuisines">
        <div className="food-section-heading">
          <p>DISCOVER INDIAN CUISINES</p>

          <h2>A different flavour in every region</h2>
        </div>

        <div className="food-cuisine-grid">
          {cuisines.map((cuisine) => (
            <div
              className="food-cuisine-card"
              key={cuisine.name}
            >
              <img
                src={cuisine.image}
                alt={cuisine.name}
              />

              <div>
                <h3>{cuisine.name}</h3>

                <p>{cuisine.text}</p>

                <Link to="/destinations">
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOD CITIES */}
      <section className="food-section">
        <div className="food-section-heading">
          <p>TOP FOOD DESTINATIONS</p>

          <h2>Indian cities every food lover should explore</h2>
        </div>

        <div className="food-city-grid">
          {foodCities.map((city) => (
            <div
              className="food-city-card"
              key={city.name}
            >
              <img
                src={city.image}
                alt={city.name}
              />

              <div>
                <h3>{city.name}</h3>

                <p>{city.text}</p>

                <Link to="/destinations">
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOD STYLES */}
      <section className="food-style">
        <div>
          <p>CHOOSE YOUR FOOD STYLE</p>

          <h2>
            What kind of foodie are you?
          </h2>
        </div>

        <div className="food-style-grid">

          <div>
            <h3>🌮 Street Food Explorer</h3>

            <p>
              Discover local markets, food stalls and
              iconic street-food dishes.
            </p>
          </div>

          <div>
            <h3>🍛 Traditional Food Lover</h3>

            <p>
              Experience authentic regional recipes,
              thalis and traditional meals.
            </p>
          </div>

          <div>
            <h3>👨‍🍳 Cooking Enthusiast</h3>

            <p>
              Learn local recipes and cooking techniques
              through hands-on experiences.
            </p>
          </div>

          <div>
            <h3>🍰 Dessert Lover</h3>

            <p>
              Discover famous sweets, desserts and
              regional specialities.
            </p>
          </div>

        </div>
      </section>

      {/* MUST TRY */}
      <section className="food-must-try">

        <div className="food-section-heading">
          <p>MUST-TRY EXPERIENCES</p>

          <h2>
            Don't leave without tasting these
          </h2>
        </div>

        <div className="food-must-grid">

          <div>
            <span>01</span>
            <h3>Street Food Walk</h3>
            <p>
              Walk through local food streets and
              taste multiple regional specialities.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Traditional Thali</h3>
            <p>
              Experience a complete meal featuring
              flavours from the local region.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Local Food Market</h3>
            <p>
              Explore colourful markets filled with
              fresh ingredients and local snacks.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Cooking Experience</h3>
            <p>
              Learn how traditional dishes are prepared
              by local cooks.
            </p>
          </div>

        </div>
      </section>

      {/* FOOD TIPS */}
      <section className="food-tips">

        <div className="food-section-heading">
          <p>FOOD TRAVEL TIPS</p>

          <h2>
            Make your food journey better
          </h2>
        </div>

        <div className="food-tips-grid">

          <div>
            <h3>Try local dishes</h3>
            <p>
              Don't limit yourself to familiar food.
              Try something unique to the destination.
            </p>
          </div>

          <div>
            <h3>Ask locals</h3>
            <p>
              Locals often know the best hidden food
              spots away from tourist areas.
            </p>
          </div>

          <div>
            <h3>Explore food markets</h3>
            <p>
              Local markets are a great way to discover
              authentic flavours and snacks.
            </p>
          </div>

          <div>
            <h3>Check hygiene</h3>
            <p>
              Choose food places that maintain good
              hygiene and handle food safely.
            </p>
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
            <summary>
              Which Indian cities are famous for food?
            </summary>

            <p>
              Delhi, Amritsar, Jaipur, Mumbai, Lucknow,
              Kolkata, Hyderabad and many other cities
              are known for their distinctive food cultures.
            </p>
          </details>

          <details>
            <summary>
              What is the best way to explore local food?
            </summary>

            <p>
              Street-food walks, local markets, traditional
              restaurants and cooking experiences are
              popular ways to discover local cuisine.
            </p>
          </details>

          <details>
            <summary>
              Are food walks suitable for families?
            </summary>

            <p>
              Many food walks are family-friendly, but
              it is useful to check the duration, walking
              requirements and food options beforehand.
            </p>
          </details>

          <details>
            <summary>
              Can I find vegetarian food experiences?
            </summary>

            <p>
              Yes. Many Indian destinations offer a wide
              variety of vegetarian regional dishes.
            </p>
          </details>

          <details>
            <summary>
              Can I learn to cook local dishes?
            </summary>

            <p>
              Yes. Cooking classes can give travellers
              hands-on experience with local recipes
              and ingredients.
            </p>
          </details>

        </div>
      </section>

      {/* CTA */}
      <section className="food-cta">

        <h2>
          Ready to taste India?
        </h2>

        <p>
          Discover local flavours, unforgettable dishes
          and food experiences across India.
        </p>

        <Link to="/destinations">
          Explore Destinations
        </Link>

      </section>

      {/* FOOTER */}
      <footer className="food-footer">

        <h2>TravelMate</h2>

        <p>
          Discover. Explore. Experience.
        </p>

      </footer>

      {/* CSS */}
      <style>{`

        .food-page {
          min-height: 100vh;
          background: #fff;
          color: #222;
        }

        .food-page .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 60px;
          background: #fff;
          border-bottom: 1px solid #eee;
        }

        .food-page .logo {
          font-size: 24px;
          font-weight: 700;
        }

        .food-page .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .food-page .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
        }

        .food-page .login-btn {
          border: none;
          padding: 9px 20px;
          border-radius: 8px;
          cursor: pointer;
        }

        .food-hero {
          min-height: 560px;
          background-image:
            linear-gradient(
              rgba(0,0,0,.38),
              rgba(0,0,0,.5)
            ),
            url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=90");

          background-size: cover;
          background-position: center;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;
        }

        .food-hero-overlay {
          max-width: 900px;
          padding: 30px;
          color: white;
        }

        .food-hero-overlay p,
        .food-small-title,
        .food-section-heading > p,
        .food-style > div > p {
          font-size: 13px;
          letter-spacing: 2px;
          font-weight: 700;
        }

        .food-hero-overlay h1 {
          font-size: 62px;
          margin: 15px 0;
        }

        .food-hero-overlay span {
          font-size: 19px;
          line-height: 1.6;
        }

        .food-intro {
          max-width: 850px;
          margin: 80px auto;
          padding: 0 25px;
          text-align: center;
        }

        .food-intro h2 {
          font-size: 40px;
          margin: 15px 0;
        }

        .food-intro > p:last-child {
          color: #666;
          line-height: 1.8;
          font-size: 17px;
        }

        .food-section,
        .food-awards,
        .food-cuisines,
        .food-must-try,
        .food-tips,
        .food-faq {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 30px;
        }

        .food-section-heading {
          margin-bottom: 35px;
        }

        .food-section-heading h2 {
          font-size: 34px;
          margin: 10px 0;
        }

        .food-section-heading > span {
          color: #666;
        }

        .food-category-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .food-category-card {
          min-height: 150px;
          padding: 28px;
          border: 1px solid #eee;
          border-radius: 16px;
          background: #fafafa;

          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .food-category-card h3 {
          font-size: 22px;
          margin: 0 0 8px;
        }

        .food-category-card span {
          color: #777;
          font-size: 14px;
        }

        .food-awards {
          max-width: none;
          background: #f7f7f7;
          padding: 70px max(
            30px,
            calc((100% - 1200px) / 2)
          );
        }

        .food-award-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .food-award-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
        }

        .food-award-card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
        }

        .food-award-content {
          padding: 22px;
        }

        .food-award-content > span {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .food-award-content h3 {
          font-size: 21px;
          margin: 10px 0;
        }

        .food-award-content p {
          color: #666;
        }

        .food-rating {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 12px;
        }

        .food-rating span {
          letter-spacing: 2px;
        }

        .food-rating small {
          color: #777;
        }

        .food-experience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .food-experience-card {
          border: 1px solid #eee;
          border-radius: 16px;
          overflow: hidden;
          background: white;
        }

        .food-experience-image {
          height: 230px;
        }

        .food-experience-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .food-experience-content {
          padding: 20px;
        }

        .food-experience-location {
          font-size: 13px;
          color: #777;
        }

        .food-experience-content h3 {
          font-size: 21px;
          margin: 8px 0;
        }

        .food-experience-content p {
          color: #666;
          line-height: 1.6;
        }

        .food-experience-content strong {
          display: block;
          margin-top: 15px;
        }

        .food-cuisines {
          max-width: none;
          background: #fafafa;
          padding: 70px max(
            30px,
            calc((100% - 1200px) / 2)
          );
        }

        .food-cuisine-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .food-cuisine-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
        }

        .food-cuisine-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }

        .food-cuisine-card > div {
          padding: 20px;
        }

        .food-cuisine-card h3 {
          font-size: 22px;
          margin: 0 0 8px;
        }

        .food-cuisine-card p {
          color: #666;
          line-height: 1.6;
        }

        .food-cuisine-card a {
          text-decoration: none;
          color: #222;
          font-weight: 600;
        }

        .food-city-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .food-city-card {
          border: 1px solid #eee;
          border-radius: 16px;
          overflow: hidden;
        }

        .food-city-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }

        .food-city-card > div {
          padding: 20px;
        }

        .food-city-card h3 {
          font-size: 22px;
          margin: 0 0 8px;
        }

        .food-city-card p {
          color: #666;
          line-height: 1.6;
        }

        .food-city-card a {
          text-decoration: none;
          color: #222;
          font-weight: 600;
        }

        .food-style {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 30px;
        }

        .food-style h2 {
          font-size: 34px;
          margin-top: 10px;
        }

        .food-style-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 35px;
        }

        .food-style-grid > div,
        .food-tips-grid > div {
          padding: 25px;
          border: 1px solid #eee;
          border-radius: 16px;
          background: #fafafa;
        }

        .food-style-grid h3,
        .food-tips-grid h3 {
          margin-top: 0;
        }

        .food-style-grid p,
        .food-tips-grid p {
          color: #666;
          line-height: 1.6;
        }

        .food-must-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .food-must-grid > div {
          padding: 28px;
          border: 1px solid #eee;
          border-radius: 16px;
        }

        .food-must-grid span {
          font-size: 13px;
          font-weight: 700;
        }

        .food-must-grid h3 {
          font-size: 21px;
        }

        .food-must-grid p {
          color: #666;
          line-height: 1.6;
        }

        .food-tips-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .food-faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .food-faq-list details {
          border: 1px solid #eee;
          border-radius: 12px;
          padding: 20px;
        }

        .food-faq-list summary {
          cursor: pointer;
          font-weight: 600;
        }

        .food-faq-list p {
          color: #666;
          line-height: 1.6;
        }

        .food-cta {
          margin-top: 80px;
          padding: 90px 25px;
          text-align: center;
          background: #f5f5f5;
        }

        .food-cta h2 {
          font-size: 40px;
          margin-bottom: 12px;
        }

        .food-cta p {
          color: #666;
          margin-bottom: 25px;
        }

        .food-cta a {
          display: inline-block;
          padding: 13px 25px;
          border-radius: 8px;
          text-decoration: none;
          background: #222;
          color: white;
          font-weight: 600;
        }

        .food-footer {
          padding: 45px 30px;
          text-align: center;
          border-top: 1px solid #eee;
        }

        .food-footer h2 {
          margin-bottom: 5px;
        }

        .food-footer p {
          color: #777;
        }

        @media (max-width: 900px) {
          .food-category-grid,
          .food-award-grid,
          .food-experience-grid,
          .food-cuisine-grid,
          .food-city-grid,
          .food-style-grid,
          .food-must-grid,
          .food-tips-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .food-hero-overlay h1 {
            font-size: 46px;
          }
        }

        @media (max-width: 600px) {
          .food-page .navbar {
            padding: 15px 20px;
          }

          .food-page .nav-links {
            gap: 10px;
          }

          .food-category-grid,
          .food-award-grid,
          .food-experience-grid,
          .food-cuisine-grid,
          .food-city-grid,
          .food-style-grid,
          .food-must-grid,
          .food-tips-grid {
            grid-template-columns: 1fr;
          }

          .food-hero {
            min-height: 450px;
          }

          .food-hero-overlay h1 {
            font-size: 38px;
          }

          .food-intro h2,
          .food-cta h2 {
            font-size: 30px;
          }

          .food-section,
          .food-faq,
          .food-tips,
          .food-style,
          .food-must-try {
            padding: 0 20px;
          }
        }

      `}</style>
    </div>
  );
}

export default Food;