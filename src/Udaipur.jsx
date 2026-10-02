import { useRef } from "react";
import { Link } from "react-router-dom";

function Udaipur() {
  const thingsSliderRef = useRef(null);

  const beautifulPlaces = [
    {
      name: "City Palace",
      category: "Palace",
      image:
        "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Lake Pichola",
      category: "Lake",
      image:
        "https://images.unsplash.com/photo-1599661046827-dacff0c4b0c8?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Jag Mandir",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Lake Palace",
      category: "Palace",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Sajjangarh Palace",
      category: "Palace",
      image:
        "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Fateh Sagar Lake",
      category: "Lake",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Jagdish Temple",
      category: "Religious Site",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Saheliyon Ki Bari",
      category: "Garden",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Bagore Ki Haveli",
      category: "Heritage Site",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Vintage & Classic Car Museum",
      category: "Museum",
      image:
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c5?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Doodh Talai",
      category: "Viewpoint",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Gulab Bagh",
      category: "Garden",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Ahar Cenotaphs",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1590050752117-23a9d2e5d7a3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Shilpgram",
      category: "Cultural Experience",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Badi Lake",
      category: "Lake",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const thingsToDo = [
    {
      title: "Udaipur City Sightseeing",
      rating: "4.8",
      reviews: "1,245",
      price: "₹1,499/person",
      category: "Sightseeing",
    },
    {
      title: "Lake Pichola Boat Ride",
      rating: "4.7",
      reviews: "2,130",
      price: "₹799/person",
      category: "Lake Experience",
    },
    {
      title: "City Palace Experience",
      rating: "4.6",
      reviews: "985",
      price: "₹999/person",
      category: "Heritage",
    },
    {
      title: "Rajasthani Cultural Show",
      rating: "4.8",
      reviews: "1,120",
      price: "₹699/person",
      category: "Culture",
    },
    {
      title: "Udaipur Food Experience",
      rating: "4.5",
      reviews: "764",
      price: "₹599/person",
      category: "Food & Culture",
    },
    {
      title: "Monsoon Palace Sunset Tour",
      rating: "4.8",
      reviews: "1,540",
      price: "₹899/person",
      category: "Nature & Views",
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
    <div className="udaipur-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .udaipur-page {
          font-family: Arial, sans-serif;
          color: #222;
          background: #fff;
        }

        /* TOP BAR */
        .udaipur-topbar {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 7%;
          background: #fff;
          border-bottom: 1px solid #eee;
        }

        .udaipur-logo {
          font-size: 25px;
          font-weight: 700;
          color: #111;
          text-decoration: none;
        }

        .udaipur-back {
          text-decoration: none;
          color: #333;
          font-size: 15px;
          font-weight: 600;
        }

        .udaipur-back:hover {
          color: #777;
        }

        /* HERO */
        .udaipur-hero {
          height: 500px;
          background-image:
            linear-gradient(
              rgba(0, 0, 0, 0.45),
              rgba(0, 0, 0, 0.45)
            ),
            url("https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=1800&q=85");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
        }

        .udaipur-hero-content {
          padding: 60px 7%;
          color: white;
        }

        .udaipur-hero-content h1 {
          font-size: 64px;
          margin: 0 0 10px;
          font-weight: 700;
        }

        .udaipur-hero-content p {
          font-size: 20px;
          margin: 6px 0;
        }

        /* COMMON HEADING */
        .udaipur-section-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .udaipur-section-heading span {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #777;
        }

        .udaipur-section-heading h2 {
          font-size: 36px;
          margin: 10px 0;
        }

        .udaipur-section-heading p {
          color: #777;
          margin: 0;
          font-size: 16px;
        }

        /* ABOUT */
        .udaipur-about {
          padding: 80px 8%;
        }

        .udaipur-about-content {
          max-width: 1000px;
          margin: auto;
          text-align: center;
        }

        .udaipur-about-content p {
          color: #666;
          line-height: 1.8;
          font-size: 16px;
          margin-bottom: 18px;
        }

        /* BEAUTIFUL PLACES */
        .udaipur-places {
          padding: 80px 7%;
          background: #fafafa;
        }

        .udaipur-places-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .udaipur-place-card {
          background: white;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .udaipur-place-card:hover {
          transform: translateY(-6px);
        }

        .udaipur-place-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          display: block;
        }

        .udaipur-place-content {
          padding: 20px;
        }

        .udaipur-place-category {
          display: inline-block;
          font-size: 12px;
          color: #777;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .udaipur-place-content h3 {
          margin: 0;
          font-size: 21px;
        }

        /* THINGS TO DO */
        .udaipur-things {
          padding: 80px 7%;
        }

        .udaipur-things-slider-wrapper {
          position: relative;
        }

        .udaipur-things-slider {
          display: flex;
          gap: 22px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          padding: 5px;
        }

        .udaipur-things-slider::-webkit-scrollbar {
          display: none;
        }

        .udaipur-thing-card {
          flex: 0 0 calc((100% - 44px) / 3);
          background: white;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid #eee;
          box-shadow: 0 5px 18px rgba(0, 0, 0, 0.07);
        }

        .udaipur-thing-image {
          height: 210px;
          background-image:
            linear-gradient(
              rgba(0, 0, 0, 0.25),
              rgba(0, 0, 0, 0.25)
            ),
            url("https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=900&q=80");
          background-size: cover;
          background-position: center;
        }

        .udaipur-thing-content {
          padding: 20px;
        }

        .udaipur-thing-content h3 {
          margin: 0 0 10px;
          font-size: 20px;
        }

        .udaipur-rating {
          font-size: 14px;
          margin-bottom: 10px;
          color: #555;
        }

        .udaipur-thing-category {
          font-size: 13px;
          color: #777;
          margin-bottom: 12px;
        }

        .udaipur-price {
          font-size: 16px;
          font-weight: 700;
        }

        .udaipur-arrow {
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

        .udaipur-arrow-left {
          left: -22px;
        }

        .udaipur-arrow-right {
          right: -22px;
        }

        /* FAQ */
        .udaipur-faq {
          padding: 80px 15%;
          background: #fafafa;
        }

        .udaipur-faq-list {
          max-width: 900px;
          margin: auto;
        }

        .udaipur-faq-item {
          background: white;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          margin-bottom: 12px;
          overflow: hidden;
        }

        .udaipur-faq-item summary {
          padding: 20px;
          cursor: pointer;
          font-weight: 600;
          list-style: none;
          position: relative;
        }

        .udaipur-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .udaipur-faq-item summary::after {
          content: "+";
          position: absolute;
          right: 20px;
          font-size: 22px;
        }

        .udaipur-faq-item[open] summary::after {
          content: "−";
        }

        .udaipur-faq-answer {
          padding: 0 20px 20px;
          color: #666;
          line-height: 1.7;
          font-size: 15px;
        }

        /* TIPS */
        .udaipur-tips {
          padding: 80px 7%;
        }

        .udaipur-tips-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .udaipur-tip-card {
          padding: 25px 18px;
          border: 1px solid #eee;
          border-radius: 12px;
          text-align: center;
          background: white;
        }

        .udaipur-tip-card h3 {
          font-size: 17px;
          margin: 0 0 10px;
        }

        .udaipur-tip-card p {
          color: #777;
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
        }

        /* FOOTER */
        .udaipur-footer {
          background: #111;
          color: white;
          padding: 60px 7% 25px;
        }

        .udaipur-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
        }

        .udaipur-footer h3 {
          margin-top: 0;
          margin-bottom: 18px;
        }

        .udaipur-footer p {
          color: #aaa;
          line-height: 1.7;
          font-size: 14px;
        }

        .udaipur-footer a {
          display: block;
          color: #aaa;
          text-decoration: none;
          margin-bottom: 10px;
          font-size: 14px;
        }

        .udaipur-footer a:hover {
          color: white;
        }

        .udaipur-footer-bottom {
          border-top: 1px solid #333;
          margin-top: 40px;
          padding-top: 20px;
          text-align: center;
          color: #888;
          font-size: 13px;
        }

        @media (max-width: 1000px) {
          .udaipur-places-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .udaipur-thing-card {
            flex: 0 0 calc((100% - 22px) / 2);
          }

          .udaipur-tips-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .udaipur-footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .udaipur-topbar {
            padding: 0 5%;
          }

          .udaipur-hero {
            height: 420px;
          }

          .udaipur-hero-content {
            padding: 40px 7%;
          }

          .udaipur-hero-content h1 {
            font-size: 46px;
          }

          .udaipur-section-heading h2 {
            font-size: 29px;
          }

          .udaipur-places-grid {
            grid-template-columns: 1fr;
          }

          .udaipur-thing-card {
            flex: 0 0 100%;
          }

          .udaipur-arrow-left {
            left: 5px;
          }

          .udaipur-arrow-right {
            right: 5px;
          }

          .udaipur-faq {
            padding: 70px 7%;
          }

          .udaipur-tips-grid {
            grid-template-columns: 1fr;
          }

          .udaipur-footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* TOP BAR */}
      <div className="udaipur-topbar">
        <Link to="/" className="udaipur-logo">
          TravelMate
        </Link>

        <Link to="/destinations" className="udaipur-back">
          ← Back to Destinations
        </Link>
      </div>

      {/* HERO */}
      <section className="udaipur-hero">
        <div className="udaipur-hero-content">
          <h1>Udaipur</h1>
          <p>City of Lakes</p>
          <p>📍 Rajasthan, India</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="udaipur-about">
        <div className="udaipur-section-heading">
          <span>ABOUT UDAIPUR</span>
          <h2>Welcome to the City of Lakes</h2>
        </div>

        <div className="udaipur-about-content">
          <p>
            Udaipur is a beautiful city in Rajasthan known for its
            magnificent palaces, peaceful lakes, historic architecture and
            rich royal heritage.
          </p>

          <p>
            From the famous City Palace and Lake Pichola to the beautiful
            gardens and viewpoints, Udaipur offers travellers a perfect
            combination of history, culture and scenic beauty.
          </p>

          <p>
            The city's colourful markets, traditional Rajasthani food and
            cultural experiences make it a memorable destination for
            travellers looking to experience Rajasthan.
          </p>
        </div>
      </section>

      {/* BEAUTIFUL PLACES */}
      <section className="udaipur-places">
        <div className="udaipur-section-heading">
          <span>EXPLORE UDAIPUR</span>
          <h2>Beautiful Places to Visit</h2>
          <p>Discover some of Udaipur's most popular destinations.</p>
        </div>

        <div className="udaipur-places-grid">
          {beautifulPlaces.map((place, index) => (
            <div className="udaipur-place-card" key={index}>
              <img src={place.image} alt={place.name} />

              <div className="udaipur-place-content">
                <span className="udaipur-place-category">
                  {place.category}
                </span>

                <h3>{place.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="udaipur-things">
        <div className="udaipur-section-heading">
          <span>EXPERIENCES</span>
          <h2>Things to Do in Udaipur</h2>
          <p>Enjoy unforgettable experiences during your Udaipur trip.</p>
        </div>

        <div className="udaipur-things-slider-wrapper">
          <button
            className="udaipur-arrow udaipur-arrow-left"
            onClick={() => moveThingsSlider(-1)}
          >
            ←
          </button>

          <div className="udaipur-things-slider" ref={thingsSliderRef}>
            {thingsToDo.map((thing, index) => (
              <div className="udaipur-thing-card" key={index}>
                <div className="udaipur-thing-image"></div>

                <div className="udaipur-thing-content">
                  <h3>{thing.title}</h3>

                  <div className="udaipur-rating">
                    ⭐ {thing.rating} · {thing.reviews} reviews
                  </div>

                  <div className="udaipur-thing-category">
                    {thing.category}
                  </div>

                  <div className="udaipur-price">
                    {thing.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="udaipur-arrow udaipur-arrow-right"
            onClick={() => moveThingsSlider(1)}
          >
            →
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="udaipur-faq">
        <div className="udaipur-section-heading">
          <span>TRAVEL GUIDE</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before visiting Udaipur.</p>
        </div>

        <div className="udaipur-faq-list">
          <details className="udaipur-faq-item">
            <summary>What is Udaipur famous for?</summary>
            <div className="udaipur-faq-answer">
              Udaipur is famous for its beautiful lakes, royal palaces,
              historic architecture and Rajasthani culture.
            </div>
          </details>

          <details className="udaipur-faq-item">
            <summary>What is the best time to visit Udaipur?</summary>
            <div className="udaipur-faq-answer">
              The cooler months are generally comfortable for sightseeing
              and exploring Udaipur's outdoor attractions.
            </div>
          </details>

          <details className="udaipur-faq-item">
            <summary>How many days are enough for Udaipur?</summary>
            <div className="udaipur-faq-answer">
              Around 2 to 4 days can be enough to explore the major
              attractions and enjoy the city's experiences.
            </div>
          </details>

          <details className="udaipur-faq-item">
            <summary>What are the best places to visit in Udaipur?</summary>
            <div className="udaipur-faq-answer">
              City Palace, Lake Pichola, Jag Mandir, Fateh Sagar Lake,
              Sajjangarh Palace and Saheliyon Ki Bari are popular places.
            </div>
          </details>

          <details className="udaipur-faq-item">
            <summary>Is Udaipur good for a family trip?</summary>
            <div className="udaipur-faq-answer">
              Yes. Udaipur offers sightseeing, lakes, gardens, palaces and
              cultural experiences suitable for families.
            </div>
          </details>

          <details className="udaipur-faq-item">
            <summary>Is a boat ride in Lake Pichola worth trying?</summary>
            <div className="udaipur-faq-answer">
              A boat ride offers scenic views of the lake, surrounding
              palaces and the city's historic landscape.
            </div>
          </details>

          <details className="udaipur-faq-item">
            <summary>What food should I try in Udaipur?</summary>
            <div className="udaipur-faq-answer">
              Dal baati churma, gatte ki sabzi, ker sangri and other
              traditional Rajasthani dishes are popular choices.
            </div>
          </details>

          <details className="udaipur-faq-item">
            <summary>Is Udaipur good for photography?</summary>
            <div className="udaipur-faq-answer">
              Yes. The lakes, palaces, old city streets and sunset
              viewpoints offer many scenic photography opportunities.
            </div>
          </details>

          <details className="udaipur-faq-item">
            <summary>Can I visit Udaipur on a budget?</summary>
            <div className="udaipur-faq-answer">
              Yes. Budget stays, local restaurants and affordable
              sightseeing options are available.
            </div>
          </details>

          <details className="udaipur-faq-item">
            <summary>What should I pack for Udaipur?</summary>
            <div className="udaipur-faq-answer">
              Carry comfortable clothes, walking shoes, sunscreen,
              sunglasses and other personal travel essentials.
            </div>
          </details>
        </div>
      </section>

      {/* TIPS */}
      <section className="udaipur-tips">
        <div className="udaipur-section-heading">
          <span>TRAVEL TIPS</span>
          <h2>Important Tips for Udaipur</h2>
        </div>

        <div className="udaipur-tips-grid">
          <div className="udaipur-tip-card">
            <h3>🌤 Check Weather</h3>
            <p>
              Check the weather before planning outdoor sightseeing.
            </p>
          </div>

          <div className="udaipur-tip-card">
            <h3>👟 Good Shoes</h3>
            <p>
              Wear comfortable footwear for walking around forts and
              heritage areas.
            </p>
          </div>

          <div className="udaipur-tip-card">
            <h3>💧 Stay Hydrated</h3>
            <p>
              Carry enough water while exploring the city during the day.
            </p>
          </div>

          <div className="udaipur-tip-card">
            <h3>🧴 Sun Protection</h3>
            <p>
              Carry sunscreen, sunglasses and other sun-protection
              essentials.
            </p>
          </div>

          <div className="udaipur-tip-card">
            <h3>🏛 Respect Heritage</h3>
            <p>
              Respect historic sites and avoid littering around heritage
              attractions.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="udaipur-footer">
        <div className="udaipur-footer-grid">
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
            <Link to="/rishikesh">Rishikesh</Link>
            <Link to="/udaipur">Udaipur</Link>
          </div>
        </div>

        <div className="udaipur-footer-bottom">
          © 2026 TravelMate. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Udaipur;