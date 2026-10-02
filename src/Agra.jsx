import { useRef } from "react";
import { Link } from "react-router-dom";

function Agra() {
  const thingsSliderRef = useRef(null);

  const beautifulPlaces = [
    {
      name: "Taj Mahal",
      category: "World Heritage Site",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Agra Fort",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Mehtab Bagh",
      category: "Garden",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Itmad-ud-Daulah",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Fatehpur Sikri",
      category: "Historical City",
      image:
        "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Akbar's Tomb",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1599661046827-dacff0c4b0c8?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Mariam-uz-Zamani Tomb",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Jama Masjid Agra",
      category: "Religious Site",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Moti Masjid",
      category: "Religious Site",
      image:
        "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Chini Ka Rauza",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Ram Bagh",
      category: "Garden",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Sikandra",
      category: "Heritage Site",
      image:
        "https://images.unsplash.com/photo-1590050752117-23a9d2e5d7a3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Taj Nature Walk",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kinari Bazaar",
      category: "Shopping",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Agra Old City",
      category: "Cultural Experience",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const thingsToDo = [
    {
      title: "Taj Mahal Sunrise Tour",
      rating: "4.9",
      reviews: "2,145",
      price: "₹999/person",
      category: "Sightseeing",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Agra Heritage Tour",
      rating: "4.8",
      reviews: "1,890",
      price: "₹1,299/person",
      category: "Heritage",
      image:
        "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Fatehpur Sikri Tour",
      rating: "4.7",
      reviews: "1,125",
      price: "₹999/person",
      category: "Historical Experience",
      image:
        "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Agra Food Walk",
      rating: "4.8",
      reviews: "980",
      price: "₹699/person",
      category: "Food & Culture",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Mughal Heritage Walk",
      rating: "4.6",
      reviews: "765",
      price: "₹599/person",
      category: "Cultural Experience",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Taj Sunset Experience",
      rating: "4.8",
      reviews: "1,340",
      price: "₹799/person",
      category: "Nature & Views",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
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
    <div className="agra-page">

      {/* TOP BAR */}
      <div className="agra-topbar">
        <div className="agra-logo">TravelMate</div>

        <Link to="/destinations" className="agra-back-btn">
          ← Back to Destinations
        </Link>
      </div>

      {/* HERO */}
      <section className="agra-hero">
        <img
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=90"
          alt="Agra"
        />

        <div className="agra-hero-overlay">
          <div>
            <p>📍 Uttar Pradesh, India</p>
            <h1>Agra</h1>
            <span>
              Discover magnificent monuments, Mughal history and the timeless
              beauty of the Taj Mahal.
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="agra-about">
        <div className="agra-section-heading">
          <span>ABOUT AGRA</span>
          <h2>The City of the Taj Mahal</h2>
        </div>

        <div className="agra-about-text">
          <p>
            Agra is one of India's most famous historical cities and is home
            to the iconic Taj Mahal. Located on the banks of the Yamuna River,
            the city has a rich Mughal history and magnificent architecture.
          </p>

          <p>
            Apart from the Taj Mahal, Agra is known for Agra Fort, Fatehpur
            Sikri, Itmad-ud-Daulah and several other historical monuments.
            These places showcase the art, architecture and history of the
            Mughal era.
          </p>

          <p>
            Agra is also known for its traditional markets, local food,
            handicrafts and marble products. Its historical attractions make
            it an important destination for travellers interested in culture
            and heritage.
          </p>
        </div>
      </section>

      {/* BEAUTIFUL PLACES */}
      <section className="agra-places">
        <div className="agra-section-heading">
          <span>EXPLORE AGRA</span>
          <h2>Beautiful Places to Visit</h2>
          <p>
            Explore magnificent monuments, gardens, markets and heritage
            attractions.
          </p>
        </div>

        <div className="agra-places-grid">
          {beautifulPlaces.map((place, index) => (
            <div className="agra-place-card" key={index}>
              <img src={place.image} alt={place.name} />

              <div className="agra-place-content">
                <span>{place.category}</span>
                <h3>{place.name}</h3>

                <button>Explore Place →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="agra-things">
        <div className="agra-section-heading">
          <span>EXPERIENCES</span>
          <h2>Things to Do in Agra</h2>
          <p>
            Experience Agra through heritage, food, sightseeing and culture.
          </p>
        </div>

        <div className="agra-slider-wrapper">

          <button
            className="agra-slider-btn left"
            onClick={() => moveThingsSlider(-1)}
          >
            ←
          </button>

          <div className="agra-things-slider" ref={thingsSliderRef}>
            {thingsToDo.map((thing, index) => (
              <div className="agra-thing-card" key={index}>

                <div className="agra-thing-image">
                  <img src={thing.image} alt={thing.title} />
                </div>

                <div className="agra-thing-content">

                  <span className="agra-thing-category">
                    {thing.category}
                  </span>

                  <h3>{thing.title}</h3>

                  <div className="agra-rating">
                    ⭐ {thing.rating}
                    <small> ({thing.reviews})</small>
                  </div>

                  <div className="agra-thing-bottom">
                    <strong>{thing.price}</strong>
                    <button>View Details</button>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <button
            className="agra-slider-btn right"
            onClick={() => moveThingsSlider(1)}
          >
            →
          </button>

        </div>
      </section>

      {/* FAQ */}
      <section className="agra-faq">

        <div className="agra-section-heading">
          <span>TRAVEL GUIDE</span>
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to help you plan your Agra trip.</p>
        </div>

        <div className="agra-faq-list">

          <details className="agra-faq-item">
            <summary>What is Agra famous for?</summary>
            <div className="agra-faq-answer">
              Agra is most famous for the Taj Mahal and is also known for
              Agra Fort, Mughal architecture and its rich historical heritage.
            </div>
          </details>

          <details className="agra-faq-item">
            <summary>What is the best time to visit Agra?</summary>
            <div className="agra-faq-answer">
              October to March is generally considered a comfortable period
              to explore Agra and its outdoor attractions.
            </div>
          </details>

          <details className="agra-faq-item">
            <summary>How many days are enough for Agra?</summary>
            <div className="agra-faq-answer">
              One to two days can cover the major attractions of Agra,
              including the Taj Mahal, Agra Fort and nearby heritage sites.
            </div>
          </details>

          <details className="agra-faq-item">
            <summary>What are the best places to visit in Agra?</summary>
            <div className="agra-faq-answer">
              Popular places include the Taj Mahal, Agra Fort, Mehtab Bagh,
              Itmad-ud-Daulah, Fatehpur Sikri and Akbar's Tomb.
            </div>
          </details>

          <details className="agra-faq-item">
            <summary>Is Agra good for a family trip?</summary>
            <div className="agra-faq-answer">
              Yes. Families can explore historical monuments, gardens,
              markets and local food experiences together.
            </div>
          </details>

          <details className="agra-faq-item">
            <summary>How early should I visit the Taj Mahal?</summary>
            <div className="agra-faq-answer">
              Early morning is a popular time to visit because the weather is
              usually more comfortable and the monument can be enjoyed before
              the day becomes busier.
            </div>
          </details>

          <details className="agra-faq-item">
            <summary>What food should I try in Agra?</summary>
            <div className="agra-faq-answer">
              Agra is known for local Mughlai cuisine, petha and various
              traditional North Indian dishes.
            </div>
          </details>

          <details className="agra-faq-item">
            <summary>Is Agra good for photography?</summary>
            <div className="agra-faq-answer">
              Yes. The Taj Mahal, Agra Fort, gardens and historic architecture
              provide many photography opportunities.
            </div>
          </details>

          <details className="agra-faq-item">
            <summary>Can I visit Agra on a budget?</summary>
            <div className="agra-faq-answer">
              Yes. Agra has accommodation, food and local transport options
              for different budgets.
            </div>
          </details>

          <details className="agra-faq-item">
            <summary>What should I pack for Agra?</summary>
            <div className="agra-faq-answer">
              Carry comfortable footwear, weather-appropriate clothes,
              sunscreen, a water bottle and basic travel essentials.
            </div>
          </details>

        </div>
      </section>

      {/* TIPS */}
      <section className="agra-tips">

        <div className="agra-section-heading">
          <span>TRAVEL TIPS</span>
          <h2>Important Tips for Agra</h2>
        </div>

        <div className="agra-tips-grid">

          <div className="agra-tip-card">
            <div>🌅</div>
            <h3>Start Early</h3>
            <p>
              Start your sightseeing early to enjoy the major attractions
              comfortably.
            </p>
          </div>

          <div className="agra-tip-card">
            <div>👟</div>
            <h3>Wear Good Shoes</h3>
            <p>
              Comfortable footwear is useful because many attractions involve
              walking.
            </p>
          </div>

          <div className="agra-tip-card">
            <div>💧</div>
            <h3>Stay Hydrated</h3>
            <p>
              Carry water with you while exploring Agra, especially during
              warmer months.
            </p>
          </div>

          <div className="agra-tip-card">
            <div>📷</div>
            <h3>Carry Your Camera</h3>
            <p>
              Agra has many beautiful monuments and viewpoints for memorable
              photographs.
            </p>
          </div>

          <div className="agra-tip-card">
            <div>🗺️</div>
            <h3>Plan Your Route</h3>
            <p>
              Plan your attractions beforehand so you can cover more places
              during your trip.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="agra-footer">

        <div className="agra-footer-grid">

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
            <Link to="/agra">Agra</Link>
          </div>

        </div>

        <div className="agra-footer-bottom">
          <p>© 2026 TravelMate. All rights reserved.</p>
        </div>

      </footer>

      {/* CSS */}
      <style>{`

        .agra-page {
          width: 100%;
          background: #ffffff;
          color: #222;
          font-family: Arial, sans-serif;
        }

        /* TOPBAR */

        .agra-topbar {
          height: 72px;
          padding: 0 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          border-bottom: 1px solid #eeeeee;
        }

        .agra-logo {
          font-size: 27px;
          font-weight: 700;
          color: #222;
        }

        .agra-back-btn {
          text-decoration: none;
          color: #333;
          font-size: 15px;
          font-weight: 600;
        }

        /* HERO */

        .agra-hero {
          height: 500px;
          position: relative;
          overflow: hidden;
        }

        .agra-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .agra-hero-overlay {
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

        .agra-hero-overlay p {
          margin: 0 0 10px;
          font-size: 17px;
        }

        .agra-hero-overlay h1 {
          margin: 0 0 10px;
          font-size: 64px;
          line-height: 1;
        }

        .agra-hero-overlay span {
          font-size: 19px;
        }

        /* COMMON HEADING */

        .agra-section-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .agra-section-heading span {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #777;
        }

        .agra-section-heading h2 {
          margin: 10px 0;
          font-size: 38px;
          color: #222;
        }

        .agra-section-heading p {
          margin: 0;
          color: #777;
          font-size: 16px;
        }

        /* ABOUT */

        .agra-about {
          padding: 80px 8%;
        }

        .agra-about-text {
          max-width: 950px;
          margin: auto;
        }

        .agra-about-text p {
          color: #555;
          line-height: 1.9;
          font-size: 16px;
          margin-bottom: 20px;
        }

        /* PLACES */

        .agra-places {
          padding: 80px 7%;
          background: #fafafa;
        }

        .agra-places-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .agra-place-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .agra-place-card:hover {
          transform: translateY(-5px);
        }

        .agra-place-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          display: block;
        }

        .agra-place-content {
          padding: 22px;
        }

        .agra-place-content span {
          font-size: 12px;
          font-weight: 700;
          color: #777;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .agra-place-content h3 {
          margin: 9px 0 17px;
          font-size: 21px;
        }

        .agra-place-content button {
          border: none;
          background: none;
          padding: 0;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
        }

        /* THINGS TO DO */

        .agra-things {
          padding: 80px 7%;
        }

        .agra-slider-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .agra-things-slider {
          display: flex;
          gap: 22px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          width: 100%;
          padding: 5px;
        }

        .agra-things-slider::-webkit-scrollbar {
          display: none;
        }

        .agra-thing-card {
          flex: 0 0 calc((100% - 44px) / 3);
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.09);
        }

        .agra-thing-image {
          height: 220px;
          overflow: hidden;
        }

        .agra-thing-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .agra-thing-content {
          padding: 22px;
        }

        .agra-thing-category {
          font-size: 12px;
          font-weight: 700;
          color: #777;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .agra-thing-content h3 {
          font-size: 20px;
          margin: 9px 0;
        }

        .agra-rating {
          font-size: 14px;
          margin-bottom: 20px;
        }

        .agra-rating small {
          color: #777;
        }

        .agra-thing-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .agra-thing-bottom strong {
          font-size: 17px;
        }

        .agra-thing-bottom button {
          border: 1px solid #222;
          background: white;
          padding: 9px 13px;
          border-radius: 8px;
          cursor: pointer;
        }

        .agra-slider-btn {
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

        /* FAQ */

        .agra-faq {
          padding: 80px 15%;
          background: #fafafa;
        }

        .agra-faq-list {
          max-width: 900px;
          margin: auto;
        }

        .agra-faq-item {
          background: white;
          margin-bottom: 13px;
          border-radius: 10px;
          border: 1px solid #eeeeee;
          overflow: hidden;
        }

        .agra-faq-item summary {
          padding: 20px 22px;
          cursor: pointer;
          font-weight: 600;
          list-style: none;
          position: relative;
          padding-right: 50px;
        }

        .agra-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .agra-faq-item summary::after {
          content: "+";
          position: absolute;
          right: 22px;
          font-size: 22px;
        }

        .agra-faq-item[open] summary::after {
          content: "−";
        }

        .agra-faq-answer {
          padding: 0 22px 20px;
          color: #666;
          line-height: 1.7;
          font-size: 15px;
        }

        /* TIPS */

        .agra-tips {
          padding: 80px 7%;
        }

        .agra-tips-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .agra-tip-card {
          padding: 25px 18px;
          border: 1px solid #eeeeee;
          border-radius: 15px;
          text-align: center;
          background: white;
        }

        .agra-tip-card > div {
          font-size: 30px;
          margin-bottom: 12px;
        }

        .agra-tip-card h3 {
          font-size: 17px;
          margin: 0 0 10px;
        }

        .agra-tip-card p {
          color: #777;
          font-size: 13px;
          line-height: 1.6;
          margin: 0;
        }

        /* FOOTER */

        .agra-footer {
          background: #1f1f1f;
          color: white;
          padding: 60px 7% 20px;
        }

        .agra-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
        }

        .agra-footer h2 {
          margin-top: 0;
          font-size: 26px;
        }

        .agra-footer h3 {
          font-size: 16px;
          margin-top: 0;
          margin-bottom: 18px;
        }

        .agra-footer p {
          color: #aaa;
          line-height: 1.7;
          font-size: 14px;
        }

        .agra-footer a {
          display: block;
          text-decoration: none;
          color: #aaa;
          margin-bottom: 12px;
          font-size: 14px;
        }

        .agra-footer a:hover {
          color: white;
        }

        .agra-footer-bottom {
          border-top: 1px solid #444;
          margin-top: 45px;
          padding-top: 20px;
          text-align: center;
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {

          .agra-places-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .agra-thing-card {
            flex: 0 0 calc((100% - 22px) / 2);
          }

          .agra-tips-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .agra-footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {

          .agra-topbar {
            padding: 0 5%;
          }

          .agra-logo {
            font-size: 22px;
          }

          .agra-back-btn {
            font-size: 13px;
          }

          .agra-hero {
            height: 430px;
          }

          .agra-hero-overlay {
            padding: 40px 6%;
          }

          .agra-hero-overlay h1 {
            font-size: 48px;
          }

          .agra-section-heading h2 {
            font-size: 30px;
          }

          .agra-about,
          .agra-places,
          .agra-things,
          .agra-tips {
            padding: 60px 6%;
          }

          .agra-faq {
            padding: 60px 6%;
          }

          .agra-places-grid {
            grid-template-columns: 1fr;
          }

          .agra-thing-card {
            flex: 0 0 100%;
          }

          .agra-tips-grid {
            grid-template-columns: 1fr;
          }

          .agra-footer {
            padding: 50px 6% 20px;
          }

          .agra-footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .agra-slider-btn {
            min-width: 40px;
            height: 40px;
          }
        }

      `}</style>
    </div>
  );
}

export default Agra;