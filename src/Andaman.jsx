import { useRef } from "react";
import { Link } from "react-router-dom";

function Andaman() {
  const thingsSliderRef = useRef(null);

  const beautifulPlaces = [
    {
      name: "Radhanagar Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Elephant Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Cellular Jail",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1590050752117-23a9d2e5d7a3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Neil Island",
      category: "Island",
      image:
        "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Ross Island",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "North Bay Island",
      category: "Island",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Baratang Island",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Limestone Caves",
      category: "Natural Attraction",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Chidiya Tapu",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Corbyn's Cove Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Laxmanpur Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Bharatpur Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Mount Manipur National Park",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Mahatma Gandhi Marine National Park",
      category: "Marine Park",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kalapathar Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const thingsToDo = [
    {
      title: "Scuba Diving",
      rating: "4.9",
      reviews: "2,145",
      price: "₹2,500/person",
      category: "Water Adventure",
    },
    {
      title: "Snorkeling at Elephant Beach",
      rating: "4.8",
      reviews: "1,890",
      price: "₹1,499/person",
      category: "Water Adventure",
    },
    {
      title: "Andaman Island Sightseeing",
      rating: "4.7",
      reviews: "1,125",
      price: "₹1,299/person",
      category: "Sightseeing",
    },
    {
      title: "Glass Bottom Boat Ride",
      rating: "4.8",
      reviews: "980",
      price: "₹699/person",
      category: "Marine Experience",
    },
    {
      title: "Sunset Beach Experience",
      rating: "4.6",
      reviews: "765",
      price: "₹499/person",
      category: "Nature & Views",
    },
    {
      title: "Kayaking Adventure",
      rating: "4.8",
      reviews: "1,540",
      price: "₹1,200/person",
      category: "Adventure",
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
    <div className="andaman-page">
      <style>{`
        .andaman-page {
          font-family: Arial, sans-serif;
          color: #222;
          background: #fff;
        }

        .andaman-topbar {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 7%;
          border-bottom: 1px solid #eee;
          background: #fff;
        }

        .andaman-logo {
          font-size: 26px;
          font-weight: 700;
          color: #222;
        }

        .andaman-back {
          text-decoration: none;
          color: #555;
          font-size: 15px;
        }

        .andaman-hero {
          height: 500px;
          position: relative;
          background-image:
            linear-gradient(
              rgba(0, 0, 0, 0.45),
              rgba(0, 0, 0, 0.45)
            ),
            url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
        }

        .andaman-hero-content {
          padding: 60px 7%;
          color: white;
        }

        .andaman-hero-content h1 {
          font-size: 64px;
          margin: 0 0 12px;
          font-weight: 700;
        }

        .andaman-hero-content p {
          font-size: 20px;
          margin: 8px 0;
        }

        .andaman-section-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .andaman-section-heading span {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #777;
        }

        .andaman-section-heading h2 {
          font-size: 38px;
          margin: 12px 0;
        }

        .andaman-section-heading p {
          color: #777;
          font-size: 16px;
        }

        .andaman-about {
          padding: 80px 8%;
          text-align: center;
        }

        .andaman-about-content {
          max-width: 900px;
          margin: auto;
          line-height: 1.8;
          color: #555;
          font-size: 16px;
        }

        .andaman-places {
          padding: 80px 7%;
          background: #fafafa;
        }

        .andaman-places-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .andaman-place-card {
          background: white;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }

        .andaman-place-card:hover {
          transform: translateY(-5px);
        }

        .andaman-place-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          display: block;
        }

        .andaman-place-content {
          padding: 20px;
        }

        .andaman-place-category {
          font-size: 12px;
          color: #777;
          margin-bottom: 8px;
        }

        .andaman-place-content h3 {
          margin: 0;
          font-size: 21px;
        }

        .andaman-things {
          padding: 80px 7%;
        }

        .andaman-things-wrapper {
          position: relative;
        }

        .andaman-things-slider {
          display: flex;
          gap: 22px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          padding: 10px 2px 20px;
        }

        .andaman-things-slider::-webkit-scrollbar {
          display: none;
        }

        .andaman-thing-card {
          flex: 0 0 calc((100% - 44px) / 3);
          min-width: 0;
          border: 1px solid #eee;
          border-radius: 14px;
          padding: 25px;
          background: white;
          box-shadow: 0 5px 18px rgba(0,0,0,0.06);
        }

        .andaman-thing-category {
          font-size: 12px;
          color: #777;
          margin-bottom: 12px;
        }

        .andaman-thing-card h3 {
          margin: 0 0 15px;
          font-size: 20px;
        }

        .andaman-rating {
          font-size: 14px;
          margin-bottom: 12px;
        }

        .andaman-reviews {
          color: #777;
        }

        .andaman-price {
          font-weight: 700;
          font-size: 18px;
          margin-top: 18px;
        }

        .andaman-slider-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 25px;
        }

        .andaman-slider-buttons button {
          width: 45px;
          height: 45px;
          border: none;
          border-radius: 50%;
          background: #222;
          color: white;
          font-size: 20px;
          cursor: pointer;
        }

        .andaman-faq {
          padding: 80px 15%;
          background: #fafafa;
        }

        .andaman-faq-list {
          max-width: 900px;
          margin: auto;
        }

        .andaman-faq-item {
          background: white;
          border-bottom: 1px solid #eee;
          padding: 20px 24px;
        }

        .andaman-faq-item summary {
          cursor: pointer;
          font-size: 17px;
          font-weight: 600;
          list-style: none;
        }

        .andaman-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .andaman-faq-item summary::after {
          content: "+";
          float: right;
          font-size: 22px;
        }

        .andaman-faq-item[open] summary::after {
          content: "−";
        }

        .andaman-faq-answer {
          padding-top: 14px;
          color: #666;
          line-height: 1.7;
          font-size: 15px;
        }

        .andaman-tips {
          padding: 80px 7%;
        }

        .andaman-tips-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .andaman-tip-card {
          padding: 25px 18px;
          border: 1px solid #eee;
          border-radius: 14px;
          text-align: center;
          background: white;
        }

        .andaman-tip-card h3 {
          margin: 0 0 10px;
          font-size: 17px;
        }

        .andaman-tip-card p {
          margin: 0;
          color: #777;
          font-size: 14px;
          line-height: 1.5;
        }

        .andaman-footer {
          background: #181818;
          color: white;
          padding: 60px 7% 25px;
        }

        .andaman-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
        }

        .andaman-footer h3 {
          margin-top: 0;
          margin-bottom: 18px;
        }

        .andaman-footer p {
          color: #aaa;
          line-height: 1.7;
          font-size: 14px;
        }

        .andaman-footer a {
          display: block;
          text-decoration: none;
          color: #aaa;
          margin-bottom: 10px;
          font-size: 14px;
        }

        .andaman-footer a:hover {
          color: white;
        }

        .andaman-footer-bottom {
          border-top: 1px solid #333;
          margin-top: 45px;
          padding-top: 20px;
          text-align: center;
          color: #888;
          font-size: 13px;
        }

        @media (max-width: 1000px) {
          .andaman-places-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .andaman-thing-card {
            flex: 0 0 calc((100% - 22px) / 2);
          }

          .andaman-tips-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .andaman-footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .andaman-topbar {
            padding: 0 5%;
          }

          .andaman-hero {
            height: 430px;
          }

          .andaman-hero-content {
            padding: 40px 6%;
          }

          .andaman-hero-content h1 {
            font-size: 45px;
          }

          .andaman-section-heading h2 {
            font-size: 30px;
          }

          .andaman-about,
          .andaman-places,
          .andaman-things,
          .andaman-tips {
            padding: 60px 6%;
          }

          .andaman-places-grid {
            grid-template-columns: 1fr;
          }

          .andaman-thing-card {
            flex: 0 0 100%;
          }

          .andaman-faq {
            padding: 60px 6%;
          }

          .andaman-tips-grid {
            grid-template-columns: 1fr;
          }

          .andaman-footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* TOP BAR */}
      <div className="andaman-topbar">
        <div className="andaman-logo">TravelMate</div>

        <Link to="/destinations" className="andaman-back">
          ← Back to Destinations
        </Link>
      </div>

      {/* HERO */}
      <section className="andaman-hero">
        <div className="andaman-hero-content">
          <h1>Andaman</h1>
          <p>Andaman & Nicobar Islands, India</p>
          <p>Turquoise waters, tropical beaches and unforgettable island adventures.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="andaman-about">
        <div className="andaman-section-heading">
          <span>ABOUT ANDAMAN</span>
          <h2>Discover a tropical island paradise</h2>
        </div>

        <div className="andaman-about-content">
          <p>
            The Andaman Islands are known for their beautiful beaches,
            crystal-clear waters, coral reefs and peaceful tropical
            surroundings. They are a popular destination for travellers
            looking for nature, relaxation and adventure.
          </p>

          <p>
            From the historic Cellular Jail in Port Blair to the beautiful
            beaches of Havelock and Neil Island, Andaman offers a combination
            of history, marine life and scenic island experiences.
          </p>

          <p>
            Travellers can enjoy activities such as scuba diving, snorkeling,
            kayaking and boat rides while also spending relaxing evenings
            watching beautiful sunsets along the beaches.
          </p>
        </div>
      </section>

      {/* BEAUTIFUL PLACES */}
      <section className="andaman-places">
        <div className="andaman-section-heading">
          <span>EXPLORE ANDAMAN</span>
          <h2>Beautiful places to visit</h2>
          <p>Explore the most popular islands, beaches and attractions.</p>
        </div>

        <div className="andaman-places-grid">
          {beautifulPlaces.map((place) => (
            <div className="andaman-place-card" key={place.name}>
              <img src={place.image} alt={place.name} />

              <div className="andaman-place-content">
                <div className="andaman-place-category">
                  {place.category}
                </div>

                <h3>{place.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="andaman-things">
        <div className="andaman-section-heading">
          <span>THINGS TO DO</span>
          <h2>Experiences you can enjoy</h2>
          <p>Make your Andaman trip more memorable.</p>
        </div>

        <div className="andaman-things-wrapper">
          <div
            className="andaman-things-slider"
            ref={thingsSliderRef}
          >
            {thingsToDo.map((thing) => (
              <div className="andaman-thing-card" key={thing.title}>
                <div className="andaman-thing-category">
                  {thing.category}
                </div>

                <h3>{thing.title}</h3>

                <div className="andaman-rating">
                  ⭐ {thing.rating}{" "}
                  <span className="andaman-reviews">
                    ({thing.reviews} reviews)
                  </span>
                </div>

                <div className="andaman-price">
                  {thing.price}
                </div>
              </div>
            ))}
          </div>

          <div className="andaman-slider-buttons">
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
      <section className="andaman-faq">
        <div className="andaman-section-heading">
          <span>FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before visiting Andaman.</p>
        </div>

        <div className="andaman-faq-list">

          <details className="andaman-faq-item">
            <summary>What is Andaman famous for?</summary>
            <div className="andaman-faq-answer">
              Andaman is famous for its beautiful beaches, coral reefs,
              clear waters, marine life, islands and water activities.
            </div>
          </details>

          <details className="andaman-faq-item">
            <summary>What is the best time to visit Andaman?</summary>
            <div className="andaman-faq-answer">
              October to May is generally considered a good period for
              visiting Andaman and enjoying outdoor and water activities.
            </div>
          </details>

          <details className="andaman-faq-item">
            <summary>How many days are enough for Andaman?</summary>
            <div className="andaman-faq-answer">
              Around 5 to 7 days can give you enough time to explore
              popular islands, beaches and activities.
            </div>
          </details>

          <details className="andaman-faq-item">
            <summary>What are the best places to visit in Andaman?</summary>
            <div className="andaman-faq-answer">
              Radhanagar Beach, Elephant Beach, Cellular Jail, Neil Island,
              Ross Island and North Bay Island are popular attractions.
            </div>
          </details>

          <details className="andaman-faq-item">
            <summary>Is Andaman good for a family trip?</summary>
            <div className="andaman-faq-answer">
              Yes. Andaman offers beaches, sightseeing, boat rides and
              several family-friendly experiences.
            </div>
          </details>

          <details className="andaman-faq-item">
            <summary>Is Andaman good for couples?</summary>
            <div className="andaman-faq-answer">
              Andaman is popular among couples because of its beaches,
              peaceful surroundings, sunsets and island experiences.
            </div>
          </details>

          <details className="andaman-faq-item">
            <summary>What water activities can I do in Andaman?</summary>
            <div className="andaman-faq-answer">
              Scuba diving, snorkeling, kayaking, boat rides and other
              water-based activities are popular in the islands.
            </div>
          </details>

          <details className="andaman-faq-item">
            <summary>Is scuba diving available in Andaman?</summary>
            <div className="andaman-faq-answer">
              Yes. Andaman is known for its marine life and offers scuba
              diving experiences at several locations.
            </div>
          </details>

          <details className="andaman-faq-item">
            <summary>What food should I try in Andaman?</summary>
            <div className="andaman-faq-answer">
              Visitors can enjoy fresh seafood, Indian cuisine and a variety
              of local and coastal dishes.
            </div>
          </details>

          <details className="andaman-faq-item">
            <summary>What should I pack for an Andaman trip?</summary>
            <div className="andaman-faq-answer">
              Carry comfortable clothes, swimwear, sunscreen, sunglasses,
              comfortable footwear and a small waterproof bag for beach
              activities.
            </div>
          </details>

        </div>
      </section>

      {/* TIPS */}
      <section className="andaman-tips">
        <div className="andaman-section-heading">
          <span>TRAVEL TIPS</span>
          <h2>Important tips for Andaman</h2>
        </div>

        <div className="andaman-tips-grid">

          <div className="andaman-tip-card">
            <h3>Check Weather</h3>
            <p>
              Check weather conditions before planning island transfers and
              water activities.
            </p>
          </div>

          <div className="andaman-tip-card">
            <h3>Use Sunscreen</h3>
            <p>
              Protect your skin from strong sunlight during beach activities.
            </p>
          </div>

          <div className="andaman-tip-card">
            <h3>Carry Beachwear</h3>
            <p>
              Keep comfortable beachwear and an extra change of clothes.
            </p>
          </div>

          <div className="andaman-tip-card">
            <h3>Stay Hydrated</h3>
            <p>
              Carry enough drinking water during outdoor sightseeing.
            </p>
          </div>

          <div className="andaman-tip-card">
            <h3>Protect Nature</h3>
            <p>
              Avoid littering and do not damage coral reefs or marine life.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="andaman-footer">
        <div className="andaman-footer-grid">

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
            <Link to="/delhi">Delhi</Link>
            <Link to="/darjeeling">Darjeeling</Link>
          </div>

        </div>

        <div className="andaman-footer-bottom">
          © 2026 TravelMate. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Andaman;