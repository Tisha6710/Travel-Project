import { useRef } from "react";
import { Link } from "react-router-dom";

function Delhi() {
  const thingsSliderRef = useRef(null);

  const beautifulPlaces = [
    {
      name: "India Gate",
      category: "Landmark",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Red Fort",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1585506942812-e72b29cef752?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Qutub Minar",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Lotus Temple",
      category: "Religious Site",
      image:
        "https://images.unsplash.com/photo-1600100397608-f010f4d9c8c9?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Humayun's Tomb",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Akshardham Temple",
      category: "Religious Site",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Jama Masjid",
      category: "Religious Site",
      image:
        "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Chandni Chowk",
      category: "Shopping",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Lodhi Garden",
      category: "Garden",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Raj Ghat",
      category: "Memorial",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "National Museum",
      category: "Museum",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Connaught Place",
      category: "City Area",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Dilli Haat",
      category: "Cultural Experience",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Purana Qila",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Garden of Five Senses",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const thingsToDo = [
    {
      title: "Delhi City Sightseeing",
      rating: "4.8",
      reviews: "1,245",
      price: "₹1,499/person",
      category: "Sightseeing",
    },
    {
      title: "Old Delhi Food Walk",
      rating: "4.9",
      reviews: "2,130",
      price: "₹799/person",
      category: "Food & Culture",
    },
    {
      title: "Red Fort Heritage Tour",
      rating: "4.7",
      reviews: "985",
      price: "₹999/person",
      category: "Heritage",
    },
    {
      title: "India Gate Evening Tour",
      rating: "4.8",
      reviews: "1,120",
      price: "₹499/person",
      category: "Nature & Views",
    },
    {
      title: "Chandni Chowk Shopping Tour",
      rating: "4.6",
      reviews: "764",
      price: "₹599/person",
      category: "Shopping",
    },
    {
      title: "Delhi Cultural Experience",
      rating: "4.8",
      reviews: "1,540",
      price: "₹899/person",
      category: "Cultural Experience",
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
    <div className="delhi-page">
      <style>{`
        .delhi-page {
          font-family: Arial, sans-serif;
          color: #222;
          background: #fff;
        }

        .delhi-topbar {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 7%;
          border-bottom: 1px solid #eee;
          background: #fff;
        }

        .delhi-logo {
          font-size: 26px;
          font-weight: 700;
          color: #222;
        }

        .delhi-back {
          text-decoration: none;
          color: #555;
          font-size: 15px;
        }

        .delhi-hero {
          height: 500px;
          position: relative;
          background-image:
            linear-gradient(
              rgba(0, 0, 0, 0.45),
              rgba(0, 0, 0, 0.45)
            ),
            url("https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=85");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
        }

        .delhi-hero-content {
          padding: 60px 7%;
          color: white;
        }

        .delhi-hero-content h1 {
          font-size: 64px;
          margin: 0 0 12px;
          font-weight: 700;
        }

        .delhi-hero-content p {
          font-size: 20px;
          margin: 8px 0;
        }

        .delhi-section-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .delhi-section-heading span {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #777;
        }

        .delhi-section-heading h2 {
          font-size: 38px;
          margin: 12px 0;
        }

        .delhi-section-heading p {
          color: #777;
          font-size: 16px;
        }

        .delhi-about {
          padding: 80px 8%;
          text-align: center;
        }

        .delhi-about-content {
          max-width: 900px;
          margin: auto;
          line-height: 1.8;
          color: #555;
          font-size: 16px;
        }

        .delhi-places {
          padding: 80px 7%;
          background: #fafafa;
        }

        .delhi-places-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .delhi-place-card {
          background: white;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }

        .delhi-place-card:hover {
          transform: translateY(-5px);
        }

        .delhi-place-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          display: block;
        }

        .delhi-place-content {
          padding: 20px;
        }

        .delhi-place-category {
          font-size: 12px;
          color: #777;
          margin-bottom: 8px;
        }

        .delhi-place-content h3 {
          margin: 0;
          font-size: 21px;
        }

        .delhi-things {
          padding: 80px 7%;
        }

        .delhi-things-wrapper {
          position: relative;
        }

        .delhi-things-slider {
          display: flex;
          gap: 22px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          padding: 10px 2px 20px;
        }

        .delhi-things-slider::-webkit-scrollbar {
          display: none;
        }

        .delhi-thing-card {
          flex: 0 0 calc((100% - 44px) / 3);
          min-width: 0;
          border: 1px solid #eee;
          border-radius: 14px;
          padding: 25px;
          background: white;
          box-shadow: 0 5px 18px rgba(0,0,0,0.06);
        }

        .delhi-thing-category {
          font-size: 12px;
          color: #777;
          margin-bottom: 12px;
        }

        .delhi-thing-card h3 {
          margin: 0 0 15px;
          font-size: 20px;
        }

        .delhi-rating {
          font-size: 14px;
          margin-bottom: 12px;
        }

        .delhi-reviews {
          color: #777;
        }

        .delhi-price {
          font-weight: 700;
          font-size: 18px;
          margin-top: 18px;
        }

        .delhi-slider-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 25px;
        }

        .delhi-slider-buttons button {
          width: 45px;
          height: 45px;
          border: none;
          border-radius: 50%;
          background: #222;
          color: white;
          font-size: 20px;
          cursor: pointer;
        }

        .delhi-faq {
          padding: 80px 15%;
          background: #fafafa;
        }

        .delhi-faq-list {
          max-width: 900px;
          margin: auto;
        }

        .delhi-faq-item {
          background: white;
          border-bottom: 1px solid #eee;
          padding: 20px 24px;
        }

        .delhi-faq-item summary {
          cursor: pointer;
          font-size: 17px;
          font-weight: 600;
          list-style: none;
        }

        .delhi-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .delhi-faq-item summary::after {
          content: "+";
          float: right;
          font-size: 22px;
        }

        .delhi-faq-item[open] summary::after {
          content: "−";
        }

        .delhi-faq-answer {
          padding-top: 14px;
          color: #666;
          line-height: 1.7;
          font-size: 15px;
        }

        .delhi-tips {
          padding: 80px 7%;
        }

        .delhi-tips-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .delhi-tip-card {
          padding: 25px 18px;
          border: 1px solid #eee;
          border-radius: 14px;
          text-align: center;
          background: white;
        }

        .delhi-tip-card h3 {
          margin: 0 0 10px;
          font-size: 17px;
        }

        .delhi-tip-card p {
          margin: 0;
          color: #777;
          font-size: 14px;
          line-height: 1.5;
        }

        .delhi-footer {
          background: #181818;
          color: white;
          padding: 60px 7% 25px;
        }

        .delhi-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
        }

        .delhi-footer h3 {
          margin-top: 0;
          margin-bottom: 18px;
        }

        .delhi-footer p {
          color: #aaa;
          line-height: 1.7;
          font-size: 14px;
        }

        .delhi-footer a {
          display: block;
          text-decoration: none;
          color: #aaa;
          margin-bottom: 10px;
          font-size: 14px;
        }

        .delhi-footer a:hover {
          color: white;
        }

        .delhi-footer-bottom {
          border-top: 1px solid #333;
          margin-top: 45px;
          padding-top: 20px;
          text-align: center;
          color: #888;
          font-size: 13px;
        }

        @media (max-width: 1000px) {
          .delhi-places-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .delhi-thing-card {
            flex: 0 0 calc((100% - 22px) / 2);
          }

          .delhi-tips-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .delhi-footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .delhi-topbar {
            padding: 0 5%;
          }

          .delhi-hero {
            height: 430px;
          }

          .delhi-hero-content {
            padding: 40px 6%;
          }

          .delhi-hero-content h1 {
            font-size: 45px;
          }

          .delhi-section-heading h2 {
            font-size: 30px;
          }

          .delhi-about,
          .delhi-places,
          .delhi-things,
          .delhi-tips {
            padding: 60px 6%;
          }

          .delhi-places-grid {
            grid-template-columns: 1fr;
          }

          .delhi-thing-card {
            flex: 0 0 100%;
          }

          .delhi-faq {
            padding: 60px 6%;
          }

          .delhi-tips-grid {
            grid-template-columns: 1fr;
          }

          .delhi-footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* TOP BAR */}
      <div className="delhi-topbar">
        <div className="delhi-logo">TravelMate</div>

        <Link to="/destinations" className="delhi-back">
          ← Back to Destinations
        </Link>
      </div>

      {/* HERO */}
      <section className="delhi-hero">
        <div className="delhi-hero-content">
          <h1>Delhi</h1>
          <p>India</p>
          <p>History, culture, food and unforgettable experiences.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="delhi-about">
        <div className="delhi-section-heading">
          <span>ABOUT DELHI</span>
          <h2>Discover the heart of India</h2>
        </div>

        <div className="delhi-about-content">
          <p>
            Delhi is the capital of India and one of the country's most
            historic and vibrant cities. It beautifully combines ancient
            monuments, modern infrastructure, rich culture and diverse
            traditions.
          </p>

          <p>
            From the magnificent Red Fort and Qutub Minar to India Gate,
            Humayun's Tomb and Lotus Temple, Delhi offers a wide variety of
            experiences for travellers interested in history, architecture
            and culture.
          </p>

          <p>
            The city is also famous for its delicious food and lively markets.
            Places like Chandni Chowk and Connaught Place offer visitors a
            chance to experience Delhi's shopping, street food and everyday
            city life.
          </p>
        </div>
      </section>

      {/* BEAUTIFUL PLACES */}
      <section className="delhi-places">
        <div className="delhi-section-heading">
          <span>EXPLORE DELHI</span>
          <h2>Beautiful places to visit</h2>
          <p>Explore the most popular places in Delhi.</p>
        </div>

        <div className="delhi-places-grid">
          {beautifulPlaces.map((place) => (
            <div className="delhi-place-card" key={place.name}>
              <img src={place.image} alt={place.name} />

              <div className="delhi-place-content">
                <div className="delhi-place-category">
                  {place.category}
                </div>

                <h3>{place.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="delhi-things">
        <div className="delhi-section-heading">
          <span>THINGS TO DO</span>
          <h2>Experiences you can enjoy</h2>
          <p>Make your Delhi trip more memorable.</p>
        </div>

        <div className="delhi-things-wrapper">
          <div
            className="delhi-things-slider"
            ref={thingsSliderRef}
          >
            {thingsToDo.map((thing) => (
              <div className="delhi-thing-card" key={thing.title}>
                <div className="delhi-thing-category">
                  {thing.category}
                </div>

                <h3>{thing.title}</h3>

                <div className="delhi-rating">
                  ⭐ {thing.rating}{" "}
                  <span className="delhi-reviews">
                    ({thing.reviews} reviews)
                  </span>
                </div>

                <div className="delhi-price">
                  {thing.price}
                </div>
              </div>
            ))}
          </div>

          <div className="delhi-slider-buttons">
            <button onClick={() => moveThingsSlider(-1)}>
              ←
            </button>

            <button onClick={() => moveThingsSlider(1)}>
              →
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="delhi-faq">
        <div className="delhi-section-heading">
          <span>FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before visiting Delhi.</p>
        </div>

        <div className="delhi-faq-list">
          <details className="delhi-faq-item">
            <summary>What is Delhi famous for?</summary>
            <div className="delhi-faq-answer">
              Delhi is famous for its historical monuments, museums,
              street food, markets, culture and important landmarks such as
              India Gate, Red Fort and Qutub Minar.
            </div>
          </details>

          <details className="delhi-faq-item">
            <summary>What is the best time to visit Delhi?</summary>
            <div className="delhi-faq-answer">
              October to March is generally considered a comfortable period
              for sightseeing because the weather is relatively pleasant.
            </div>
          </details>

          <details className="delhi-faq-item">
            <summary>How many days are enough for Delhi?</summary>
            <div className="delhi-faq-answer">
              Around 3 to 4 days can allow you to explore major monuments,
              markets, food spots and cultural attractions.
            </div>
          </details>

          <details className="delhi-faq-item">
            <summary>What are the best places to visit in Delhi?</summary>
            <div className="delhi-faq-answer">
              India Gate, Red Fort, Qutub Minar, Lotus Temple, Humayun's Tomb,
              Akshardham Temple and Chandni Chowk are among the popular
              attractions.
            </div>
          </details>

          <details className="delhi-faq-item">
            <summary>Is Delhi good for a family trip?</summary>
            <div className="delhi-faq-answer">
              Yes. Delhi offers historical sites, gardens, museums, cultural
              attractions and family-friendly sightseeing options.
            </div>
          </details>

          <details className="delhi-faq-item">
            <summary>What food should I try in Delhi?</summary>
            <div className="delhi-faq-answer">
              Visitors can try popular Delhi foods such as chole bhature,
              parathas, kebabs, chaat and various street-food options.
            </div>
          </details>

          <details className="delhi-faq-item">
            <summary>Is Delhi good for shopping?</summary>
            <div className="delhi-faq-answer">
              Yes. Chandni Chowk, Connaught Place and Dilli Haat offer
              different shopping experiences ranging from traditional items
              to modern products.
            </div>
          </details>

          <details className="delhi-faq-item">
            <summary>Is Delhi expensive to visit?</summary>
            <div className="delhi-faq-answer">
              Delhi can be explored with different budgets. Public transport,
              local food and budget accommodation can help reduce travel costs.
            </div>
          </details>

          <details className="delhi-faq-item">
            <summary>How can I travel around Delhi?</summary>
            <div className="delhi-faq-answer">
              Metro, buses, auto-rickshaws, taxis and app-based cab services
              are commonly used for travelling around the city.
            </div>
          </details>

          <details className="delhi-faq-item">
            <summary>What should I carry for a Delhi trip?</summary>
            <div className="delhi-faq-answer">
              Carry comfortable shoes, weather-appropriate clothes, sunscreen,
              water and a small day bag for sightseeing.
            </div>
          </details>
        </div>
      </section>

      {/* TIPS */}
      <section className="delhi-tips">
        <div className="delhi-section-heading">
          <span>TRAVEL TIPS</span>
          <h2>Important tips for Delhi</h2>
        </div>

        <div className="delhi-tips-grid">
          <div className="delhi-tip-card">
            <h3>Check Weather</h3>
            <p>Check the weather before planning outdoor sightseeing.</p>
          </div>

          <div className="delhi-tip-card">
            <h3>Wear Good Shoes</h3>
            <p>Comfortable footwear is useful for exploring monuments.</p>
          </div>

          <div className="delhi-tip-card">
            <h3>Stay Hydrated</h3>
            <p>Carry water, especially during long sightseeing days.</p>
          </div>

          <div className="delhi-tip-card">
            <h3>Plan Your Route</h3>
            <p>Group nearby attractions together to save travel time.</p>
          </div>

          <div className="delhi-tip-card">
            <h3>Respect Heritage</h3>
            <p>Follow the rules and help preserve historical monuments.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="delhi-footer">
        <div className="delhi-footer-grid">
          <div>
            <h3>TravelMate</h3>
            <p>
              Discover beautiful destinations, explore amazing places and
              plan memorable journeys with TravelMate.
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
            <Link to="/destinations">Explore Places</Link>
          </div>

          <div>
            <h3>Popular Places</h3>
            <Link to="/manali">Manali</Link>
            <Link to="/goa">Goa</Link>
            <Link to="/jaipur">Jaipur</Link>
            <Link to="/kerala">Kerala</Link>
            <Link to="/ladakh">Ladakh</Link>
            <Link to="/rishikesh">Rishikesh</Link>
            <Link to="/udaipur">Udaipur</Link>
            <Link to="/mumbai">Mumbai</Link>
          </div>
        </div>

        <div className="delhi-footer-bottom">
          © 2026 TravelMate. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Delhi;