
import { useRef } from "react";
import { Link } from "react-router-dom";

function Varanasi() {
  const thingsSliderRef = useRef(null);

  const beautifulPlaces = [
    {
      name: "Dashashwamedh Ghat",
      category: "Ghat",
      image:
        "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Assi Ghat",
      category: "Ghat",
      image:
        "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kashi Vishwanath Temple",
      category: "Religious Site",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Manikarnika Ghat",
      category: "Historical Ghat",
      image:
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Sarnath",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Banaras Hindu University",
      category: "University",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Ramnagar Fort",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Tulsi Manas Mandir",
      category: "Temple",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Sankat Mochan Temple",
      category: "Religious Site",
      image:
        "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Bharat Mata Temple",
      category: "Temple",
      image:
        "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Durga Temple",
      category: "Temple",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "New Vishwanath Temple",
      category: "Temple",
      image:
        "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Vishwanath Gali",
      category: "Local Market",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Man Mandir Ghat",
      category: "Heritage Ghat",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Banaras Ghats",
      category: "Riverfront",
      image:
        "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const thingsToDo = [
    {
      title: "Ganga Aarti Experience",
      rating: "4.9",
      reviews: "2,145",
      price: "₹499/person",
      category: "Spiritual Experience",
      image:
        "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Morning Ganga Boat Ride",
      rating: "4.8",
      reviews: "1,890",
      price: "₹799/person",
      category: "River Experience",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Varanasi Local Sightseeing",
      rating: "4.7",
      reviews: "1,125",
      price: "₹999/person",
      category: "Sightseeing",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Sarnath Heritage Tour",
      rating: "4.8",
      reviews: "980",
      price: "₹899/person",
      category: "Heritage",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Banarasi Food Walk",
      rating: "4.6",
      reviews: "765",
      price: "₹699/person",
      category: "Food & Culture",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Old City Walking Tour",
      rating: "4.8",
      reviews: "1,340",
      price: "₹599/person",
      category: "Cultural Experience",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
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
    <div className="varanasi-page">

      {/* TOP BAR */}
      <div className="varanasi-topbar">
        <div className="varanasi-logo">TravelMate</div>

        <Link to="/destinations" className="varanasi-back-btn">
          ← Back to Destinations
        </Link>
      </div>

      {/* HERO */}
      <section className="varanasi-hero">
        <img
          src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1600&q=90"
          alt="Varanasi"
        />

        <div className="varanasi-hero-overlay">
          <div>
            <p>📍 Uttar Pradesh, India</p>
            <h1>Varanasi</h1>
            <span>
              Experience the spiritual heart of India along the sacred Ganga.
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="varanasi-about">
        <div className="varanasi-section-heading">
          <span>ABOUT VARANASI</span>
          <h2>The Spiritual Heart of India</h2>
        </div>

        <div className="varanasi-about-text">
          <p>
            Varanasi, also known as Kashi and Banaras, is one of India's
            oldest living cities. Located on the banks of the River Ganga,
            the city is known for its temples, ghats, spiritual traditions,
            culture and historic streets.
          </p>

          <p>
            The famous ghats of Varanasi stretch along the Ganga and form an
            important part of the city's identity. Visitors can experience
            sunrise boat rides, evening Ganga Aarti, traditional rituals and
            the vibrant atmosphere of the old city.
          </p>

          <p>
            Varanasi is also closely connected with learning, music, art,
            literature and crafts. Nearby Sarnath adds another important
            historical and cultural dimension to a trip to Varanasi.
          </p>
        </div>
      </section>

      {/* BEAUTIFUL PLACES */}
      <section className="varanasi-places">
        <div className="varanasi-section-heading">
          <span>EXPLORE VARANASI</span>
          <h2>Beautiful Places to Visit</h2>
          <p>
            Discover temples, ghats, heritage sites and cultural attractions.
          </p>
        </div>

        <div className="varanasi-places-grid">
          {beautifulPlaces.map((place, index) => (
            <div className="varanasi-place-card" key={index}>
              <img src={place.image} alt={place.name} />

              <div className="varanasi-place-content">
                <span>{place.category}</span>
                <h3>{place.name}</h3>

                <button>Explore Place →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="varanasi-things">
        <div className="varanasi-section-heading">
          <span>EXPERIENCES</span>
          <h2>Things to Do in Varanasi</h2>
          <p>
            Explore the city through spiritual, cultural and local experiences.
          </p>
        </div>

        <div className="varanasi-slider-wrapper">
          <button
            className="varanasi-slider-btn left"
            onClick={() => moveThingsSlider(-1)}
          >
            ←
          </button>

          <div className="varanasi-things-slider" ref={thingsSliderRef}>
            {thingsToDo.map((thing, index) => (
              <div className="varanasi-thing-card" key={index}>
                <div className="varanasi-thing-image">
                  <img src={thing.image} alt={thing.title} />
                </div>

                <div className="varanasi-thing-content">
                  <span className="varanasi-thing-category">
                    {thing.category}
                  </span>

                  <h3>{thing.title}</h3>

                  <div className="varanasi-rating">
                    ⭐ {thing.rating}
                    <small> ({thing.reviews})</small>
                  </div>

                  <div className="varanasi-thing-bottom">
                    <strong>{thing.price}</strong>
                    <button>View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="varanasi-slider-btn right"
            onClick={() => moveThingsSlider(1)}
          >
            →
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="varanasi-faq">
        <div className="varanasi-section-heading">
          <span>TRAVEL GUIDE</span>
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to help you plan your Varanasi trip.</p>
        </div>

        <div className="varanasi-faq-list">

          <details className="varanasi-faq-item">
            <summary>What is Varanasi famous for?</summary>
            <div className="varanasi-faq-answer">
              Varanasi is famous for its ancient ghats, temples, the River
              Ganga, Ganga Aarti, spiritual traditions, culture and historic
              old-city lanes.
            </div>
          </details>

          <details className="varanasi-faq-item">
            <summary>What is the best time to visit Varanasi?</summary>
            <div className="varanasi-faq-answer">
              October to March is generally considered a comfortable period
              for exploring Varanasi, especially for walking around the ghats
              and enjoying outdoor activities.
            </div>
          </details>

          <details className="varanasi-faq-item">
            <summary>How many days are enough for Varanasi?</summary>
            <div className="varanasi-faq-answer">
              Around 2 to 3 days can give you time to explore the major ghats,
              temples, local markets and nearby Sarnath.
            </div>
          </details>

          <details className="varanasi-faq-item">
            <summary>What are the best places to visit in Varanasi?</summary>
            <div className="varanasi-faq-answer">
              Popular places include Dashashwamedh Ghat, Assi Ghat, Kashi
              Vishwanath Temple, Sarnath, Manikarnika Ghat, Ramnagar Fort and
              the old-city lanes.
            </div>
          </details>

          <details className="varanasi-faq-item">
            <summary>Is Varanasi good for a family trip?</summary>
            <div className="varanasi-faq-answer">
              Yes. Families can explore temples, ghats, boat rides, Sarnath,
              cultural attractions and local food experiences together.
            </div>
          </details>

          <details className="varanasi-faq-item">
            <summary>Is a boat ride on the Ganga worth trying?</summary>
            <div className="varanasi-faq-answer">
              A boat ride is a popular way to view the ghats and experience
              the riverfront, especially around sunrise.
            </div>
          </details>

          <details className="varanasi-faq-item">
            <summary>What food should I try in Varanasi?</summary>
            <div className="varanasi-faq-answer">
              You can explore local favourites such as kachori sabzi,
              tamatar chaat, lassi, Banarasi paan and other traditional
              street-food options.
            </div>
          </details>

          <details className="varanasi-faq-item">
            <summary>Is Varanasi good for photography?</summary>
            <div className="varanasi-faq-answer">
              Yes. The ghats, sunrise over the Ganga, colourful boats,
              temples, markets and old-city streets provide many
              photography opportunities.
            </div>
          </details>

          <details className="varanasi-faq-item">
            <summary>Can I visit Varanasi on a budget?</summary>
            <div className="varanasi-faq-answer">
              Yes. Varanasi offers different accommodation, food and local
              transport options, so a trip can be planned according to your
              budget.
            </div>
          </details>

          <details className="varanasi-faq-item">
            <summary>What should I pack for Varanasi?</summary>
            <div className="varanasi-faq-answer">
              Carry comfortable clothes, walking shoes, sunscreen, a water
              bottle, basic medicines and modest clothing for temple visits.
            </div>
          </details>

        </div>
      </section>

      {/* TIPS */}
      <section className="varanasi-tips">
        <div className="varanasi-section-heading">
          <span>TRAVEL TIPS</span>
          <h2>Important Tips for Varanasi</h2>
        </div>

        <div className="varanasi-tips-grid">

          <div className="varanasi-tip-card">
            <div>🌅</div>
            <h3>Start Early</h3>
            <p>
              Early mornings are a great time to explore the ghats and enjoy
              the peaceful river views.
            </p>
          </div>

          <div className="varanasi-tip-card">
            <div>👟</div>
            <h3>Wear Good Shoes</h3>
            <p>
              Comfortable footwear is useful because you may walk through
              narrow lanes and around the ghats.
            </p>
          </div>

          <div className="varanasi-tip-card">
            <div>💧</div>
            <h3>Stay Hydrated</h3>
            <p>
              Keep a water bottle with you, especially while exploring the
              city during warmer hours.
            </p>
          </div>

          <div className="varanasi-tip-card">
            <div>🙏</div>
            <h3>Respect Local Customs</h3>
            <p>
              Dress appropriately and be respectful while visiting temples
              and religious places.
            </p>
          </div>

          <div className="varanasi-tip-card">
            <div>📱</div>
            <h3>Plan Your Route</h3>
            <p>
              Keep your important places planned because the old-city lanes
              can be busy and confusing.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="varanasi-footer">

        <div className="varanasi-footer-grid">

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
            <Link to="/varanasi">Varanasi</Link>
          </div>

        </div>

        <div className="varanasi-footer-bottom">
          <p>© 2026 TravelMate. All rights reserved.</p>
        </div>

      </footer>

      {/* PAGE CSS */}
      <style>{`

        .varanasi-page {
          width: 100%;
          background: #ffffff;
          color: #222;
          font-family: Arial, sans-serif;
        }

        /* TOPBAR */

        .varanasi-topbar {
          height: 72px;
          padding: 0 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          border-bottom: 1px solid #eeeeee;
        }

        .varanasi-logo {
          font-size: 27px;
          font-weight: 700;
          color: #222;
        }

        .varanasi-back-btn {
          text-decoration: none;
          color: #333;
          font-size: 15px;
          font-weight: 600;
        }

        /* HERO */

        .varanasi-hero {
          height: 500px;
          position: relative;
          overflow: hidden;
        }

        .varanasi-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .varanasi-hero-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding: 60px 7%;
          background:
            linear-gradient(
              to top,
              rgba(0, 0, 0, 0.72),
              rgba(0, 0, 0, 0.05)
            );
          color: white;
        }

        .varanasi-hero-overlay p {
          margin: 0 0 10px;
          font-size: 17px;
        }

        .varanasi-hero-overlay h1 {
          margin: 0 0 10px;
          font-size: 64px;
          line-height: 1;
        }

        .varanasi-hero-overlay span {
          font-size: 19px;
        }

        /* COMMON HEADING */

        .varanasi-section-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .varanasi-section-heading span {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #777;
        }

        .varanasi-section-heading h2 {
          margin: 10px 0;
          font-size: 38px;
          color: #222;
        }

        .varanasi-section-heading p {
          margin: 0;
          color: #777;
          font-size: 16px;
        }

        /* ABOUT */

        .varanasi-about {
          padding: 80px 8%;
        }

        .varanasi-about-text {
          max-width: 950px;
          margin: auto;
        }

        .varanasi-about-text p {
          color: #555;
          line-height: 1.9;
          font-size: 16px;
          margin-bottom: 20px;
        }

        /* PLACES */

        .varanasi-places {
          padding: 80px 7%;
          background: #fafafa;
        }

        .varanasi-places-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .varanasi-place-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .varanasi-place-card:hover {
          transform: translateY(-5px);
        }

        .varanasi-place-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          display: block;
        }

        .varanasi-place-content {
          padding: 22px;
        }

        .varanasi-place-content span {
          font-size: 12px;
          font-weight: 700;
          color: #777;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .varanasi-place-content h3 {
          margin: 9px 0 17px;
          font-size: 21px;
        }

        .varanasi-place-content button {
          border: none;
          background: none;
          padding: 0;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
        }

        /* THINGS TO DO */

        .varanasi-things {
          padding: 80px 7%;
        }

        .varanasi-slider-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .varanasi-things-slider {
          display: flex;
          gap: 22px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          width: 100%;
          padding: 5px;
        }

        .varanasi-things-slider::-webkit-scrollbar {
          display: none;
        }

        .varanasi-thing-card {
          flex: 0 0 calc((100% - 44px) / 3);
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.09);
        }

        .varanasi-thing-image {
          height: 220px;
          overflow: hidden;
        }

        .varanasi-thing-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .varanasi-thing-content {
          padding: 22px;
        }

        .varanasi-thing-category {
          font-size: 12px;
          font-weight: 700;
          color: #777;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .varanasi-thing-content h3 {
          font-size: 20px;
          margin: 9px 0;
        }

        .varanasi-rating {
          font-size: 14px;
          margin-bottom: 20px;
        }

        .varanasi-rating small {
          color: #777;
        }

        .varanasi-thing-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .varanasi-thing-bottom strong {
          font-size: 17px;
        }

        .varanasi-thing-bottom button {
          border: 1px solid #222;
          background: white;
          padding: 9px 13px;
          border-radius: 8px;
          cursor: pointer;
        }

        .varanasi-slider-btn {
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

        .varanasi-faq {
          padding: 80px 15%;
          background: #fafafa;
        }

        .varanasi-faq-list {
          max-width: 900px;
          margin: auto;
        }

        .varanasi-faq-item {
          background: white;
          margin-bottom: 13px;
          border-radius: 10px;
          border: 1px solid #eeeeee;
          overflow: hidden;
        }

        .varanasi-faq-item summary {
          padding: 20px 22px;
          cursor: pointer;
          font-weight: 600;
          list-style: none;
          position: relative;
          padding-right: 50px;
        }

        .varanasi-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .varanasi-faq-item summary::after {
          content: "+";
          position: absolute;
          right: 22px;
          font-size: 22px;
        }

        .varanasi-faq-item[open] summary::after {
          content: "−";
        }

        .varanasi-faq-answer {
          padding: 0 22px 20px;
          color: #666;
          line-height: 1.7;
          font-size: 15px;
        }

        /* TIPS */

        .varanasi-tips {
          padding: 80px 7%;
        }

        .varanasi-tips-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .varanasi-tip-card {
          padding: 25px 18px;
          border: 1px solid #eeeeee;
          border-radius: 15px;
          text-align: center;
          background: white;
        }

        .varanasi-tip-card > div {
          font-size: 30px;
          margin-bottom: 12px;
        }

        .varanasi-tip-card h3 {
          font-size: 17px;
          margin: 0 0 10px;
        }

        .varanasi-tip-card p {
          color: #777;
          font-size: 13px;
          line-height: 1.6;
          margin: 0;
        }

        /* FOOTER */

        .varanasi-footer {
          background: #1f1f1f;
          color: white;
          padding: 60px 7% 20px;
        }

        .varanasi-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
        }

        .varanasi-footer h2 {
          margin-top: 0;
          font-size: 26px;
        }

        .varanasi-footer h3 {
          font-size: 16px;
          margin-top: 0;
          margin-bottom: 18px;
        }

        .varanasi-footer p {
          color: #aaa;
          line-height: 1.7;
          font-size: 14px;
        }

        .varanasi-footer a {
          display: block;
          text-decoration: none;
          color: #aaa;
          margin-bottom: 12px;
          font-size: 14px;
        }

        .varanasi-footer a:hover {
          color: white;
        }

        .varanasi-footer-bottom {
          border-top: 1px solid #444;
          margin-top: 45px;
          padding-top: 20px;
          text-align: center;
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {

          .varanasi-places-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .varanasi-thing-card {
            flex: 0 0 calc((100% - 22px) / 2);
          }

          .varanasi-tips-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .varanasi-footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {

          .varanasi-topbar {
            padding: 0 5%;
          }

          .varanasi-logo {
            font-size: 22px;
          }

          .varanasi-back-btn {
            font-size: 13px;
          }

          .varanasi-hero {
            height: 430px;
          }

          .varanasi-hero-overlay {
            padding: 40px 6%;
          }

          .varanasi-hero-overlay h1 {
            font-size: 48px;
          }

          .varanasi-section-heading h2 {
            font-size: 30px;
          }

          .varanasi-about,
          .varanasi-places,
          .varanasi-things,
          .varanasi-tips {
            padding: 60px 6%;
          }

          .varanasi-faq {
            padding: 60px 6%;
          }

          .varanasi-places-grid {
            grid-template-columns: 1fr;
          }

          .varanasi-thing-card {
            flex: 0 0 100%;
          }

          .varanasi-tips-grid {
            grid-template-columns: 1fr;
          }

          .varanasi-footer {
            padding: 50px 6% 20px;
          }

          .varanasi-footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .varanasi-slider-btn {
            min-width: 40px;
            height: 40px;
          }
        }

      `}</style>
    </div>
  );
}

export default Varanasi;

