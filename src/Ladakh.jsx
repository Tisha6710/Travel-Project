import { useRef } from "react";
import { Link } from "react-router-dom";

function Ladakh() {
  const thingsSliderRef = useRef(null);

  const beautifulPlaces = [
    {
      name: "Pangong Lake",
      category: "Lake",
      image:
        "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Nubra Valley",
      category: "Valley",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Shanti Stupa",
      category: "Religious Site",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Leh Palace",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1590050752117-23a9d2e5d7a3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Magnetic Hill",
      category: "Natural Attraction",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Khardung La",
      category: "Mountain Pass",
      image:
        "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Tso Moriri Lake",
      category: "Lake",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Diskit Monastery",
      category: "Monastery",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Thiksey Monastery",
      category: "Monastery",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Zanskar Valley",
      category: "Valley",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Lamayuru",
      category: "Village",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Hall of Fame",
      category: "Museum",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Alchi Monastery",
      category: "Monastery",
      image:
        "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Hemis Monastery",
      category: "Monastery",
      image:
        "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Changthang Wildlife Sanctuary",
      category: "Wildlife",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const thingsToDo = [
    {
      title: "Pangong Lake Camping",
      rating: "4.8",
      reviews: "1,245",
      price: "₹2,499/person",
      category: "Nature & Camping",
    },
    {
      title: "Nubra Valley Adventure",
      rating: "4.7",
      reviews: "2,130",
      price: "₹1,999/person",
      category: "Adventure",
    },
    {
      title: "Leh Local Sightseeing",
      rating: "4.6",
      reviews: "985",
      price: "₹999/person",
      category: "Sightseeing",
    },
    {
      title: "Monastery Tour",
      rating: "4.8",
      reviews: "1,120",
      price: "₹799/person",
      category: "Culture",
    },
    {
      title: "Ladakh Bike Ride",
      rating: "4.5",
      reviews: "764",
      price: "₹2,999/person",
      category: "Adventure",
    },
    {
      title: "Khardung La Experience",
      rating: "4.8",
      reviews: "1,540",
      price: "₹1,499/person",
      category: "Mountain Adventure",
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
    <div className="ladakh-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .ladakh-page {
          font-family: Arial, sans-serif;
          color: #222;
          background: #fff;
        }

        /* TOP BAR */
        .ladakh-topbar {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 7%;
          background: #fff;
          border-bottom: 1px solid #eee;
        }

        .ladakh-logo {
          font-size: 25px;
          font-weight: 700;
          color: #111;
          text-decoration: none;
        }

        .ladakh-back {
          text-decoration: none;
          color: #333;
          font-size: 15px;
          font-weight: 600;
        }

        .ladakh-back:hover {
          color: #777;
        }

        /* HERO */
        .ladakh-hero {
          height: 500px;
          background-image:
            linear-gradient(
              rgba(0, 0, 0, 0.45),
              rgba(0, 0, 0, 0.45)
            ),
            url("https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1800&q=85");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
        }

        .ladakh-hero-content {
          padding: 60px 7%;
          color: white;
        }

        .ladakh-hero-content h1 {
          font-size: 64px;
          margin: 0 0 10px;
          font-weight: 700;
        }

        .ladakh-hero-content p {
          font-size: 20px;
          margin: 6px 0;
        }

        /* COMMON HEADING */
        .ladakh-section-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .ladakh-section-heading span {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #777;
        }

        .ladakh-section-heading h2 {
          font-size: 36px;
          margin: 10px 0;
        }

        .ladakh-section-heading p {
          color: #777;
          margin: 0;
          font-size: 16px;
        }

        /* ABOUT */
        .ladakh-about {
          padding: 80px 8%;
        }

        .ladakh-about-content {
          max-width: 1000px;
          margin: auto;
          text-align: center;
        }

        .ladakh-about-content p {
          color: #666;
          line-height: 1.8;
          font-size: 16px;
          margin-bottom: 18px;
        }

        /* BEAUTIFUL PLACES */
        .ladakh-places {
          padding: 80px 7%;
          background: #fafafa;
        }

        .ladakh-places-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .ladakh-place-card {
          background: white;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .ladakh-place-card:hover {
          transform: translateY(-6px);
        }

        .ladakh-place-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          display: block;
        }

        .ladakh-place-content {
          padding: 20px;
        }

        .ladakh-place-category {
          display: inline-block;
          font-size: 12px;
          color: #777;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .ladakh-place-content h3 {
          margin: 0;
          font-size: 21px;
        }

        /* THINGS TO DO */
        .ladakh-things {
          padding: 80px 7%;
        }

        .ladakh-things-slider-wrapper {
          position: relative;
        }

        .ladakh-things-slider {
          display: flex;
          gap: 22px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          padding: 5px;
        }

        .ladakh-things-slider::-webkit-scrollbar {
          display: none;
        }

        .ladakh-thing-card {
          flex: 0 0 calc((100% - 44px) / 3);
          background: white;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid #eee;
          box-shadow: 0 5px 18px rgba(0, 0, 0, 0.07);
        }

        .ladakh-thing-image {
          height: 210px;
          background-image:
            linear-gradient(
              rgba(0, 0, 0, 0.25),
              rgba(0, 0, 0, 0.25)
            ),
            url("https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=900&q=80");
          background-size: cover;
          background-position: center;
        }

        .ladakh-thing-content {
          padding: 20px;
        }

        .ladakh-thing-content h3 {
          margin: 0 0 10px;
          font-size: 20px;
        }

        .ladakh-rating {
          font-size: 14px;
          margin-bottom: 10px;
          color: #555;
        }

        .ladakh-thing-category {
          font-size: 13px;
          color: #777;
          margin-bottom: 12px;
        }

        .ladakh-price {
          font-size: 16px;
          font-weight: 700;
        }

        .ladakh-arrow {
          position: absolute;
          top: 45%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background: white;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          cursor: pointer;
          font-size: 20px;
          z-index: 2;
        }

        .ladakh-arrow-left {
          left: -22px;
        }

        .ladakh-arrow-right {
          right: -22px;
        }

        /* FAQ */
        .ladakh-faq {
          padding: 80px 15%;
          background: #fafafa;
        }

        .ladakh-faq-list {
          max-width: 900px;
          margin: auto;
        }

        .ladakh-faq-item {
          background: white;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          margin-bottom: 12px;
          overflow: hidden;
        }

        .ladakh-faq-item summary {
          padding: 20px;
          cursor: pointer;
          font-weight: 600;
          list-style: none;
          position: relative;
        }

        .ladakh-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .ladakh-faq-item summary::after {
          content: "+";
          position: absolute;
          right: 20px;
          font-size: 22px;
        }

        .ladakh-faq-item[open] summary::after {
          content: "−";
        }

        .ladakh-faq-answer {
          padding: 0 20px 20px;
          color: #666;
          line-height: 1.7;
          font-size: 15px;
        }

        /* TIPS */
        .ladakh-tips {
          padding: 80px 7%;
        }

        .ladakh-tips-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .ladakh-tip-card {
          padding: 25px 18px;
          border: 1px solid #eee;
          border-radius: 12px;
          text-align: center;
          background: white;
        }

        .ladakh-tip-card h3 {
          font-size: 17px;
          margin: 0 0 10px;
        }

        .ladakh-tip-card p {
          color: #777;
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
        }

        /* FOOTER */
        .ladakh-footer {
          background: #111;
          color: white;
          padding: 60px 7% 25px;
        }

        .ladakh-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
        }

        .ladakh-footer h3 {
          margin-top: 0;
          margin-bottom: 18px;
        }

        .ladakh-footer p {
          color: #aaa;
          line-height: 1.7;
          font-size: 14px;
        }

        .ladakh-footer a {
          display: block;
          color: #aaa;
          text-decoration: none;
          margin-bottom: 10px;
          font-size: 14px;
        }

        .ladakh-footer a:hover {
          color: white;
        }

        .ladakh-footer-bottom {
          border-top: 1px solid #333;
          margin-top: 40px;
          padding-top: 20px;
          text-align: center;
          color: #888;
          font-size: 13px;
        }

        @media (max-width: 1000px) {
          .ladakh-places-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ladakh-thing-card {
            flex: 0 0 calc((100% - 22px) / 2);
          }

          .ladakh-tips-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ladakh-footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .ladakh-topbar {
            padding: 0 5%;
          }

          .ladakh-hero {
            height: 420px;
          }

          .ladakh-hero-content {
            padding: 40px 7%;
          }

          .ladakh-hero-content h1 {
            font-size: 46px;
          }

          .ladakh-section-heading h2 {
            font-size: 29px;
          }

          .ladakh-places-grid {
            grid-template-columns: 1fr;
          }

          .ladakh-thing-card {
            flex: 0 0 100%;
          }

          .ladakh-arrow-left {
            left: 5px;
          }

          .ladakh-arrow-right {
            right: 5px;
          }

          .ladakh-faq {
            padding: 70px 7%;
          }

          .ladakh-tips-grid {
            grid-template-columns: 1fr;
          }

          .ladakh-footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* TOP BAR */}
      <div className="ladakh-topbar">
        <Link to="/" className="ladakh-logo">
          TravelMate
        </Link>

        <Link to="/destinations" className="ladakh-back">
          ← Back to Destinations
        </Link>
      </div>

      {/* HERO */}
      <section className="ladakh-hero">
        <div className="ladakh-hero-content">
          <h1>Ladakh</h1>
          <p>Land of High Passes</p>
          <p>📍 Ladakh, India</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="ladakh-about">
        <div className="ladakh-section-heading">
          <span>ABOUT LADAKH</span>
          <h2>Welcome to the Land of High Passes</h2>
        </div>

        <div className="ladakh-about-content">
          <p>
            Ladakh is a spectacular high-altitude destination known for its
            dramatic mountains, clear blue lakes, peaceful monasteries and
            unique landscapes.
          </p>

          <p>
            From the beautiful Pangong Lake to the vast Nubra Valley,
            Ladakh offers travellers a combination of adventure, nature,
            culture and peaceful mountain experiences.
          </p>

          <p>
            The region is also known for its Buddhist monasteries, high
            mountain passes and traditional villages, making every journey
            through Ladakh a memorable experience.
          </p>
        </div>
      </section>

      {/* BEAUTIFUL PLACES */}
      <section className="ladakh-places">
        <div className="ladakh-section-heading">
          <span>EXPLORE LADAKH</span>
          <h2>Beautiful Places to Visit</h2>
          <p>Discover some of Ladakh's most amazing destinations.</p>
        </div>

        <div className="ladakh-places-grid">
          {beautifulPlaces.map((place, index) => (
            <div className="ladakh-place-card" key={index}>
              <img src={place.image} alt={place.name} />

              <div className="ladakh-place-content">
                <span className="ladakh-place-category">
                  {place.category}
                </span>

                <h3>{place.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="ladakh-things">
        <div className="ladakh-section-heading">
          <span>EXPERIENCES</span>
          <h2>Things to Do in Ladakh</h2>
          <p>Enjoy unforgettable mountain experiences in Ladakh.</p>
        </div>

        <div className="ladakh-things-slider-wrapper">
          <button
            className="ladakh-arrow ladakh-arrow-left"
            onClick={() => moveThingsSlider(-1)}
          >
            ←
          </button>

          <div className="ladakh-things-slider" ref={thingsSliderRef}>
            {thingsToDo.map((thing, index) => (
              <div className="ladakh-thing-card" key={index}>
                <div className="ladakh-thing-image"></div>

                <div className="ladakh-thing-content">
                  <h3>{thing.title}</h3>

                  <div className="ladakh-rating">
                    ⭐ {thing.rating} · {thing.reviews} reviews
                  </div>

                  <div className="ladakh-thing-category">
                    {thing.category}
                  </div>

                  <div className="ladakh-price">
                    {thing.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="ladakh-arrow ladakh-arrow-right"
            onClick={() => moveThingsSlider(1)}
          >
            →
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="ladakh-faq">
        <div className="ladakh-section-heading">
          <span>TRAVEL GUIDE</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before visiting Ladakh.</p>
        </div>

        <div className="ladakh-faq-list">
          <details className="ladakh-faq-item">
            <summary>What is Ladakh famous for?</summary>
            <div className="ladakh-faq-answer">
              Ladakh is famous for its high mountains, beautiful lakes,
              monasteries, valleys and adventurous road trips.
            </div>
          </details>

          <details className="ladakh-faq-item">
            <summary>What is the best time to visit Ladakh?</summary>
            <div className="ladakh-faq-answer">
              The summer months are generally popular for visiting Ladakh
              because many roads and attractions are accessible.
            </div>
          </details>

          <details className="ladakh-faq-item">
            <summary>How many days are enough for Ladakh?</summary>
            <div className="ladakh-faq-answer">
              Around 7 to 10 days can allow travellers to explore several
              major attractions comfortably.
            </div>
          </details>

          <details className="ladakh-faq-item">
            <summary>Which places should I visit in Ladakh?</summary>
            <div className="ladakh-faq-answer">
              Pangong Lake, Nubra Valley, Leh, Khardung La, Tso Moriri and
              several monasteries are popular choices.
            </div>
          </details>

          <details className="ladakh-faq-item">
            <summary>Is Ladakh suitable for adventure lovers?</summary>
            <div className="ladakh-faq-answer">
              Yes. Road trips, trekking, camping and mountain activities
              make Ladakh a popular destination for adventure travellers.
            </div>
          </details>

          <details className="ladakh-faq-item">
            <summary>Is Ladakh suitable for a family trip?</summary>
            <div className="ladakh-faq-answer">
              It can be suitable for families, but the high altitude means
              the itinerary should be planned carefully.
            </div>
          </details>

          <details className="ladakh-faq-item">
            <summary>What food should I try in Ladakh?</summary>
            <div className="ladakh-faq-answer">
              Thukpa, momos, skyu and traditional Ladakhi dishes are some
              foods visitors commonly try.
            </div>
          </details>

          <details className="ladakh-faq-item">
            <summary>What should I carry for a Ladakh trip?</summary>
            <div className="ladakh-faq-answer">
              Carry warm layers, comfortable shoes, sunglasses, sunscreen,
              medicines and other personal essentials.
            </div>
          </details>

          <details className="ladakh-faq-item">
            <summary>Is Ladakh a good destination for photography?</summary>
            <div className="ladakh-faq-answer">
              Yes. Its mountains, lakes, monasteries and unique landscapes
              offer many scenic photography opportunities.
            </div>
          </details>

          <details className="ladakh-faq-item">
            <summary>What should I know about travelling at high altitude?</summary>
            <div className="ladakh-faq-answer">
              Give your body time to adjust to the altitude, stay hydrated
              and avoid overexertion during the initial part of the trip.
            </div>
          </details>
        </div>
      </section>

      {/* TIPS */}
      <section className="ladakh-tips">
        <div className="ladakh-section-heading">
          <span>TRAVEL TIPS</span>
          <h2>Important Tips for Ladakh</h2>
        </div>

        <div className="ladakh-tips-grid">
          <div className="ladakh-tip-card">
            <h3>🏔 Acclimatize</h3>
            <p>
              Give yourself enough time to adjust to the high altitude.
            </p>
          </div>

          <div className="ladakh-tip-card">
            <h3>🧥 Warm Layers</h3>
            <p>
              Carry warm clothes because temperatures can change quickly.
            </p>
          </div>

          <div className="ladakh-tip-card">
            <h3>💧 Stay Hydrated</h3>
            <p>
              Drink enough water and take regular breaks while travelling.
            </p>
          </div>

          <div className="ladakh-tip-card">
            <h3>🕶 Sun Protection</h3>
            <p>
              Carry sunglasses, sunscreen and other sun-protection
              essentials.
            </p>
          </div>

          <div className="ladakh-tip-card">
            <h3>🌿 Respect Nature</h3>
            <p>
              Avoid littering and help protect Ladakh's fragile environment.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ladakh-footer">
        <div className="ladakh-footer-grid">
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
          </div>

          <div>
            <h3>Popular Places</h3>
            <Link to="/manali">Manali</Link>
            <Link to="/goa">Goa</Link>
            <Link to="/jaipur">Jaipur</Link>
            <Link to="/kerala">Kerala</Link>
            <Link to="/ladakh">Ladakh</Link>
          </div>
        </div>

        <div className="ladakh-footer-bottom">
          © 2026 TravelMate. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Ladakh;