import { useRef } from "react";
import { Link } from "react-router-dom";

function Mumbai() {
  const thingsSliderRef = useRef(null);

  const beautifulPlaces = [
    {
      name: "Gateway of India",
      category: "Landmark",
      image:
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Marine Drive",
      category: "Waterfront",
      image:
        "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Chhatrapati Shivaji Maharaj Terminus",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Elephanta Caves",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1600100397608-f010f4d9c8c9?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Colaba Causeway",
      category: "Shopping",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Juhu Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Sanjay Gandhi National Park",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Haji Ali Dargah",
      category: "Religious Site",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Bandra-Worli Sea Link",
      category: "Landmark",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Siddhivinayak Temple",
      category: "Religious Site",
      image:
        "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Bandra Fort",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Chowpatty Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Global Vipassana Pagoda",
      category: "Cultural Site",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Crawford Market",
      category: "Local Market",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Worli Sea Face",
      category: "Waterfront",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const thingsToDo = [
    {
      title: "Mumbai City Sightseeing",
      rating: "4.8",
      reviews: "1,245",
      price: "₹1,499/person",
      category: "Sightseeing",
      image:
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Marine Drive Sunset Walk",
      rating: "4.9",
      reviews: "2,130",
      price: "₹499/person",
      category: "Nature & Views",
      image:
        "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Elephanta Caves Tour",
      rating: "4.7",
      reviews: "985",
      price: "₹999/person",
      category: "Heritage",
      image:
        "https://images.unsplash.com/photo-1600100397608-f010f4d9c8c9?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Mumbai Street Food Walk",
      rating: "4.8",
      reviews: "1,120",
      price: "₹699/person",
      category: "Food & Culture",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Colaba Shopping Tour",
      rating: "4.6",
      reviews: "764",
      price: "₹599/person",
      category: "Shopping",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Bollywood Experience",
      rating: "4.8",
      reviews: "1,540",
      price: "₹1,299/person",
      category: "Entertainment",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const moveThingsSlider = (direction) => {
    if (thingsSliderRef.current) {
      thingsSliderRef.current.scrollBy({
        left: direction * thingsSliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mumbai-page">

      {/* TOP BAR */}
      <div className="mumbai-topbar">
        <div className="mumbai-logo">TravelMate</div>

        <Link to="/destinations" className="mumbai-back-btn">
          ← Back to Destinations
        </Link>
      </div>

      {/* HERO */}
      <section className="mumbai-hero">
        <img
          src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=90"
          alt="Mumbai"
        />

        <div className="mumbai-hero-overlay">
          <div>
            <p>📍 Maharashtra, India</p>
            <h1>Mumbai</h1>
            <span>
              Experience the city of dreams, iconic landmarks, beaches and
              vibrant culture.
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mumbai-about">
        <div className="mumbai-section-heading">
          <span>ABOUT MUMBAI</span>
          <h2>The City of Dreams</h2>
        </div>

        <div className="mumbai-about-text">
          <p>
            Mumbai is one of India's most vibrant metropolitan cities and the
            capital of Maharashtra. Located along the Arabian Sea, the city
            combines modern life, historic architecture, entertainment and
            diverse cultures.
          </p>

          <p>
            The city is known for landmarks such as the Gateway of India,
            Marine Drive, Chhatrapati Shivaji Maharaj Terminus and Elephanta
            Caves. Its coastline also gives Mumbai a unique atmosphere.
          </p>

          <p>
            Mumbai is also famous for Bollywood, street food, shopping,
            nightlife and its fast-paced lifestyle. From historic
            neighbourhoods to modern business districts, the city offers
            experiences for every kind of traveller.
          </p>
        </div>
      </section>

      {/* BEAUTIFUL PLACES */}
      <section className="mumbai-places">
        <div className="mumbai-section-heading">
          <span>EXPLORE MUMBAI</span>
          <h2>Beautiful Places to Visit</h2>
          <p>
            Discover iconic landmarks, beaches, historical sites and cultural
            attractions.
          </p>
        </div>

        <div className="mumbai-places-grid">
          {beautifulPlaces.map((place, index) => (
            <div className="mumbai-place-card" key={index}>
              <img src={place.image} alt={place.name} />

              <div className="mumbai-place-content">
                <span>{place.category}</span>
                <h3>{place.name}</h3>

                <button>Explore Place →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="mumbai-things">
        <div className="mumbai-section-heading">
          <span>EXPERIENCES</span>
          <h2>Things to Do in Mumbai</h2>
          <p>
            Explore Mumbai through sightseeing, food, culture and
            entertainment.
          </p>
        </div>

        <div className="mumbai-slider-wrapper">

          <button
            className="mumbai-slider-btn left"
            onClick={() => moveThingsSlider(-1)}
          >
            ←
          </button>

          <div className="mumbai-things-slider" ref={thingsSliderRef}>
            {thingsToDo.map((thing, index) => (
              <div className="mumbai-thing-card" key={index}>

                <div className="mumbai-thing-image">
                  <img src={thing.image} alt={thing.title} />
                </div>

                <div className="mumbai-thing-content">

                  <span className="mumbai-thing-category">
                    {thing.category}
                  </span>

                  <h3>{thing.title}</h3>

                  <div className="mumbai-rating">
                    ⭐ {thing.rating}
                    <small> ({thing.reviews})</small>
                  </div>

                  <div className="mumbai-thing-bottom">
                    <strong>{thing.price}</strong>
                    <button>View Details</button>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <button
            className="mumbai-slider-btn right"
            onClick={() => moveThingsSlider(1)}
          >
            →
          </button>

        </div>
      </section>

      {/* FAQ */}
      <section className="mumbai-faq">

        <div className="mumbai-section-heading">
          <span>TRAVEL GUIDE</span>
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to help you plan your Mumbai trip.</p>
        </div>

        <div className="mumbai-faq-list">

          <details className="mumbai-faq-item">
            <summary>What is Mumbai famous for?</summary>
            <div className="mumbai-faq-answer">
              Mumbai is famous for Bollywood, Marine Drive, the Gateway of
              India, its coastline, food, shopping and vibrant city life.
            </div>
          </details>

          <details className="mumbai-faq-item">
            <summary>What is the best time to visit Mumbai?</summary>
            <div className="mumbai-faq-answer">
              October to February is generally a comfortable period for
              exploring Mumbai and enjoying outdoor attractions.
            </div>
          </details>

          <details className="mumbai-faq-item">
            <summary>How many days are enough for Mumbai?</summary>
            <div className="mumbai-faq-answer">
              Around 3 to 4 days can allow you to explore major landmarks,
              beaches, markets and local experiences.
            </div>
          </details>

          <details className="mumbai-faq-item">
            <summary>What are the best places to visit in Mumbai?</summary>
            <div className="mumbai-faq-answer">
              Popular attractions include Gateway of India, Marine Drive,
              Elephanta Caves, CSMT, Juhu Beach and Colaba.
            </div>
          </details>

          <details className="mumbai-faq-item">
            <summary>Is Mumbai good for a family trip?</summary>
            <div className="mumbai-faq-answer">
              Yes. Families can enjoy beaches, sightseeing, museums, parks,
              historical landmarks and food experiences.
            </div>
          </details>

          <details className="mumbai-faq-item">
            <summary>Is Marine Drive worth visiting?</summary>
            <div className="mumbai-faq-answer">
              Yes. Marine Drive is one of Mumbai's most popular waterfront
              areas and is especially pleasant around sunset and evening.
            </div>
          </details>

          <details className="mumbai-faq-item">
            <summary>What food should I try in Mumbai?</summary>
            <div className="mumbai-faq-answer">
              Popular local options include vada pav, pav bhaji, bhel puri,
              sev puri and other Mumbai street-food specialities.
            </div>
          </details>

          <details className="mumbai-faq-item">
            <summary>Is Mumbai good for photography?</summary>
            <div className="mumbai-faq-answer">
              Yes. Mumbai offers many photography spots including Marine Drive,
              Gateway of India, historic buildings, beaches and city streets.
            </div>
          </details>

          <details className="mumbai-faq-item">
            <summary>Can I visit Mumbai on a budget?</summary>
            <div className="mumbai-faq-answer">
              Yes. Mumbai has local trains, buses, affordable food options
              and accommodation choices for different budgets.
            </div>
          </details>

          <details className="mumbai-faq-item">
            <summary>What should I pack for Mumbai?</summary>
            <div className="mumbai-faq-answer">
              Carry comfortable clothes, walking shoes, sunscreen, a water
              bottle and an umbrella depending on the season.
            </div>
          </details>

        </div>
      </section>

      {/* TIPS */}
      <section className="mumbai-tips">

        <div className="mumbai-section-heading">
          <span>TRAVEL TIPS</span>
          <h2>Important Tips for Mumbai</h2>
        </div>

        <div className="mumbai-tips-grid">

          <div className="mumbai-tip-card">
            <div>🚆</div>
            <h3>Use Local Transport</h3>
            <p>
              Mumbai's local trains and public transport can help you move
              around the city.
            </p>
          </div>

          <div className="mumbai-tip-card">
            <div>👟</div>
            <h3>Wear Good Shoes</h3>
            <p>
              Comfortable footwear is useful when exploring markets and
              walking around tourist attractions.
            </p>
          </div>

          <div className="mumbai-tip-card">
            <div>💧</div>
            <h3>Stay Hydrated</h3>
            <p>
              Keep water with you, especially when exploring the city during
              warmer hours.
            </p>
          </div>

          <div className="mumbai-tip-card">
            <div>🌦️</div>
            <h3>Check Weather</h3>
            <p>
              Check the weather before planning outdoor activities, especially
              during monsoon.
            </p>
          </div>

          <div className="mumbai-tip-card">
            <div>🗺️</div>
            <h3>Plan Your Route</h3>
            <p>
              Mumbai is large, so grouping nearby attractions can save travel
              time.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="mumbai-footer">

        <div className="mumbai-footer-grid">

          <div>
            <h2>TravelMate</h2>
            <p>
              Discover beautiful destinations, unique experiences and
              unforgettable journeys across India.
            </p>
          </div>

          <div>
            <h3>Explore</h3>
            <Link to="/">Home</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/reviews">Reviews</Link>
          </div>

          <div>
            <h3>TravelMate</h3>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/reviews">Write a Review</Link>
          </div>

          <div>
            <h3>Popular Places</h3>
            <Link to="/manali">Manali</Link>
            <Link to="/goa">Goa</Link>
            <Link to="/jaipur">Jaipur</Link>
            <Link to="/rishikesh">Rishikesh</Link>
            <Link to="/udaipur">Udaipur</Link>
            <Link to="/mumbai">Mumbai</Link>
          </div>

        </div>

        <div className="mumbai-footer-bottom">
          <p>© 2026 TravelMate. All rights reserved.</p>
        </div>

      </footer>

      {/* CSS */}
      <style>{`

        .mumbai-page {
          width: 100%;
          background: #ffffff;
          color: #222;
          font-family: Arial, sans-serif;
        }

        .mumbai-topbar {
          height: 72px;
          padding: 0 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          border-bottom: 1px solid #eeeeee;
        }

        .mumbai-logo {
          font-size: 27px;
          font-weight: 700;
          color: #222;
        }

        .mumbai-back-btn {
          text-decoration: none;
          color: #333;
          font-size: 15px;
          font-weight: 600;
        }

        .mumbai-hero {
          height: 500px;
          position: relative;
          overflow: hidden;
        }

        .mumbai-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .mumbai-hero-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding: 60px 7%;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.72),
            rgba(0, 0, 0, 0.05)
          );
          color: white;
        }

        .mumbai-hero-overlay p {
          margin: 0 0 10px;
          font-size: 17px;
        }

        .mumbai-hero-overlay h1 {
          margin: 0 0 10px;
          font-size: 64px;
          line-height: 1;
        }

        .mumbai-hero-overlay span {
          font-size: 19px;
        }

        .mumbai-section-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .mumbai-section-heading span {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #777;
        }

        .mumbai-section-heading h2 {
          margin: 10px 0;
          font-size: 38px;
          color: #222;
        }

        .mumbai-section-heading p {
          margin: 0;
          color: #777;
          font-size: 16px;
        }

        .mumbai-about {
          padding: 80px 8%;
        }

        .mumbai-about-text {
          max-width: 950px;
          margin: auto;
        }

        .mumbai-about-text p {
          color: #555;
          line-height: 1.9;
          font-size: 16px;
          margin-bottom: 20px;
        }

        .mumbai-places {
          padding: 80px 7%;
          background: #fafafa;
        }

        .mumbai-places-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .mumbai-place-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .mumbai-place-card:hover {
          transform: translateY(-5px);
        }

        .mumbai-place-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          display: block;
        }

        .mumbai-place-content {
          padding: 22px;
        }

        .mumbai-place-content span {
          font-size: 12px;
          font-weight: 700;
          color: #777;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .mumbai-place-content h3 {
          margin: 9px 0 17px;
          font-size: 21px;
        }

        .mumbai-place-content button {
          border: none;
          background: none;
          padding: 0;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
        }

        .mumbai-things {
          padding: 80px 7%;
        }

        .mumbai-slider-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .mumbai-things-slider {
          display: flex;
          gap: 22px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          width: 100%;
          padding: 5px;
        }

        .mumbai-things-slider::-webkit-scrollbar {
          display: none;
        }

        .mumbai-thing-card {
          flex: 0 0 calc((100% - 44px) / 3);
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.09);
        }

        .mumbai-thing-image {
          height: 220px;
          overflow: hidden;
        }

        .mumbai-thing-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .mumbai-thing-content {
          padding: 22px;
        }

        .mumbai-thing-category {
          font-size: 12px;
          font-weight: 700;
          color: #777;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .mumbai-thing-content h3 {
          font-size: 20px;
          margin: 9px 0;
        }

        .mumbai-rating {
          font-size: 14px;
          margin-bottom: 20px;
        }

        .mumbai-rating small {
          color: #777;
        }

        .mumbai-thing-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .mumbai-thing-bottom strong {
          font-size: 17px;
        }

        .mumbai-thing-bottom button {
          border: 1px solid #222;
          background: white;
          padding: 9px 13px;
          border-radius: 8px;
          cursor: pointer;
        }

        .mumbai-slider-btn {
          min-width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 1px solid #ddd;
          background: white;
          cursor: pointer;
          font-size: 20px;
          z-index: 2;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
        }

        .mumbai-faq {
          padding: 80px 15%;
          background: #fafafa;
        }

        .mumbai-faq-list {
          max-width: 900px;
          margin: auto;
        }

        .mumbai-faq-item {
          background: white;
          margin-bottom: 13px;
          border-radius: 10px;
          border: 1px solid #eeeeee;
          overflow: hidden;
        }

        .mumbai-faq-item summary {
          padding: 20px 22px;
          cursor: pointer;
          font-weight: 600;
          list-style: none;
          position: relative;
          padding-right: 50px;
        }

        .mumbai-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .mumbai-faq-item summary::after {
          content: "+";
          position: absolute;
          right: 22px;
          font-size: 22px;
        }

        .mumbai-faq-item[open] summary::after {
          content: "−";
        }

        .mumbai-faq-answer {
          padding: 0 22px 20px;
          color: #666;
          line-height: 1.7;
          font-size: 15px;
        }

        .mumbai-tips {
          padding: 80px 7%;
        }

        .mumbai-tips-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .mumbai-tip-card {
          padding: 25px 18px;
          border: 1px solid #eeeeee;
          border-radius: 15px;
          text-align: center;
          background: white;
        }

        .mumbai-tip-card > div {
          font-size: 30px;
          margin-bottom: 12px;
        }

        .mumbai-tip-card h3 {
          font-size: 17px;
          margin: 0 0 10px;
        }

        .mumbai-tip-card p {
          color: #777;
          font-size: 13px;
          line-height: 1.6;
          margin: 0;
        }

        .mumbai-footer {
          background: #1f1f1f;
          color: white;
          padding: 60px 7% 20px;
        }

        .mumbai-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
        }

        .mumbai-footer h2 {
          margin-top: 0;
          font-size: 26px;
        }

        .mumbai-footer h3 {
          font-size: 16px;
          margin-top: 0;
          margin-bottom: 18px;
        }

        .mumbai-footer p {
          color: #aaa;
          line-height: 1.7;
          font-size: 14px;
        }

        .mumbai-footer a {
          display: block;
          text-decoration: none;
          color: #aaa;
          margin-bottom: 12px;
          font-size: 14px;
        }

        .mumbai-footer a:hover {
          color: white;
        }

        .mumbai-footer-bottom {
          border-top: 1px solid #444;
          margin-top: 45px;
          padding-top: 20px;
          text-align: center;
        }

        @media (max-width: 1000px) {
          .mumbai-places-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .mumbai-thing-card {
            flex: 0 0 calc((100% - 22px) / 2);
          }

          .mumbai-tips-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .mumbai-footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .mumbai-topbar {
            padding: 0 5%;
          }

          .mumbai-logo {
            font-size: 22px;
          }

          .mumbai-back-btn {
            font-size: 13px;
          }

          .mumbai-hero {
            height: 430px;
          }

          .mumbai-hero-overlay {
            padding: 40px 6%;
          }

          .mumbai-hero-overlay h1 {
            font-size: 48px;
          }

          .mumbai-section-heading h2 {
            font-size: 30px;
          }

          .mumbai-about,
          .mumbai-places,
          .mumbai-things,
          .mumbai-tips {
            padding: 60px 6%;
          }

          .mumbai-faq {
            padding: 60px 6%;
          }

          .mumbai-places-grid {
            grid-template-columns: 1fr;
          }

          .mumbai-thing-card {
            flex: 0 0 100%;
          }

          .mumbai-tips-grid {
            grid-template-columns: 1fr;
          }

          .mumbai-footer {
            padding: 50px 6% 20px;
          }

          .mumbai-footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .mumbai-slider-btn {
            min-width: 40px;
            height: 40px;
          }
        }

      `}</style>
    </div>
  );
}

export default Mumbai;