import { useRef } from "react";
import { Link } from "react-router-dom";

function Rishikesh() {
  const thingsSliderRef = useRef(null);

  const beautifulPlaces = [
    {
      name: "Laxman Jhula",
      category: "Landmark",
      image:
        "https://images.unsplash.com/photo-1590050752117-23a9d2e5d7a3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Ram Jhula",
      category: "Landmark",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Triveni Ghat",
      category: "Spiritual Site",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Neer Garh Waterfall",
      category: "Waterfall",
      image:
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Beatles Ashram",
      category: "Cultural Site",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Parmarth Niketan",
      category: "Ashram",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kunjapuri Temple",
      category: "Temple",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Rajaji National Park",
      category: "Wildlife",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Vashishta Cave",
      category: "Spiritual Site",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Ganga Beach",
      category: "Natural Attraction",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Sivananda Ashram",
      category: "Ashram",
      image:
        "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Swarg Ashram",
      category: "Spiritual Area",
      image:
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Patna Waterfall",
      category: "Waterfall",
      image:
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Phool Chatti",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Garud Chatti Waterfall",
      category: "Waterfall",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const thingsToDo = [
    {
      title: "River Rafting in Ganga",
      rating: "4.8",
      reviews: "1,245",
      price: "₹1,499/person",
      category: "Adventure",
    },
    {
      title: "Bungee Jumping",
      rating: "4.7",
      reviews: "2,130",
      price: "₹3,500/person",
      category: "Adventure",
    },
    {
      title: "Rishikesh Sightseeing Tour",
      rating: "4.6",
      reviews: "985",
      price: "₹999/person",
      category: "Sightseeing",
    },
    {
      title: "Ganga Aarti Experience",
      rating: "4.8",
      reviews: "1,120",
      price: "₹499/person",
      category: "Spiritual Experience",
    },
    {
      title: "Yoga & Meditation Session",
      rating: "4.5",
      reviews: "764",
      price: "₹699/person",
      category: "Wellness",
    },
    {
      title: "Waterfall Trek",
      rating: "4.8",
      reviews: "1,540",
      price: "₹799/person",
      category: "Trekking",
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
    <div className="rishikesh-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .rishikesh-page {
          font-family: Arial, sans-serif;
          color: #222;
          background: #fff;
        }

        /* TOP BAR */
        .rishikesh-topbar {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 7%;
          background: #fff;
          border-bottom: 1px solid #eee;
        }

        .rishikesh-logo {
          font-size: 25px;
          font-weight: 700;
          color: #111;
          text-decoration: none;
        }

        .rishikesh-back {
          text-decoration: none;
          color: #333;
          font-size: 15px;
          font-weight: 600;
        }

        .rishikesh-back:hover {
          color: #777;
        }

        /* HERO */
        .rishikesh-hero {
          height: 500px;
          background-image:
            linear-gradient(
              rgba(0, 0, 0, 0.45),
              rgba(0, 0, 0, 0.45)
            ),
            url("https://images.unsplash.com/photo-1590050752117-23a9d2e5d7a3?auto=format&fit=crop&w=1800&q=85");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
        }

        .rishikesh-hero-content {
          padding: 60px 7%;
          color: white;
        }

        .rishikesh-hero-content h1 {
          font-size: 64px;
          margin: 0 0 10px;
          font-weight: 700;
        }

        .rishikesh-hero-content p {
          font-size: 20px;
          margin: 6px 0;
        }

        /* COMMON HEADING */
        .rishikesh-section-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .rishikesh-section-heading span {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #777;
        }

        .rishikesh-section-heading h2 {
          font-size: 36px;
          margin: 10px 0;
        }

        .rishikesh-section-heading p {
          color: #777;
          margin: 0;
          font-size: 16px;
        }

        /* ABOUT */
        .rishikesh-about {
          padding: 80px 8%;
        }

        .rishikesh-about-content {
          max-width: 1000px;
          margin: auto;
          text-align: center;
        }

        .rishikesh-about-content p {
          color: #666;
          line-height: 1.8;
          font-size: 16px;
          margin-bottom: 18px;
        }

        /* BEAUTIFUL PLACES */
        .rishikesh-places {
          padding: 80px 7%;
          background: #fafafa;
        }

        .rishikesh-places-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .rishikesh-place-card {
          background: white;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .rishikesh-place-card:hover {
          transform: translateY(-6px);
        }

        .rishikesh-place-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          display: block;
        }

        .rishikesh-place-content {
          padding: 20px;
        }

        .rishikesh-place-category {
          display: inline-block;
          font-size: 12px;
          color: #777;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .rishikesh-place-content h3 {
          margin: 0;
          font-size: 21px;
        }

        /* THINGS TO DO */
        .rishikesh-things {
          padding: 80px 7%;
        }

        .rishikesh-things-slider-wrapper {
          position: relative;
        }

        .rishikesh-things-slider {
          display: flex;
          gap: 22px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          padding: 5px;
        }

        .rishikesh-things-slider::-webkit-scrollbar {
          display: none;
        }

        .rishikesh-thing-card {
          flex: 0 0 calc((100% - 44px) / 3);
          background: white;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid #eee;
          box-shadow: 0 5px 18px rgba(0, 0, 0, 0.07);
        }

        .rishikesh-thing-image {
          height: 210px;
          background-image:
            linear-gradient(
              rgba(0, 0, 0, 0.25),
              rgba(0, 0, 0, 0.25)
            ),
            url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80");
          background-size: cover;
          background-position: center;
        }

        .rishikesh-thing-content {
          padding: 20px;
        }

        .rishikesh-thing-content h3 {
          margin: 0 0 10px;
          font-size: 20px;
        }

        .rishikesh-rating {
          font-size: 14px;
          margin-bottom: 10px;
          color: #555;
        }

        .rishikesh-thing-category {
          font-size: 13px;
          color: #777;
          margin-bottom: 12px;
        }

        .rishikesh-price {
          font-size: 16px;
          font-weight: 700;
        }

        .rishikesh-arrow {
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

        .rishikesh-arrow-left {
          left: -22px;
        }

        .rishikesh-arrow-right {
          right: -22px;
        }

        /* FAQ */
        .rishikesh-faq {
          padding: 80px 15%;
          background: #fafafa;
        }

        .rishikesh-faq-list {
          max-width: 900px;
          margin: auto;
        }

        .rishikesh-faq-item {
          background: white;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          margin-bottom: 12px;
          overflow: hidden;
        }

        .rishikesh-faq-item summary {
          padding: 20px;
          cursor: pointer;
          font-weight: 600;
          list-style: none;
          position: relative;
        }

        .rishikesh-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .rishikesh-faq-item summary::after {
          content: "+";
          position: absolute;
          right: 20px;
          font-size: 22px;
        }

        .rishikesh-faq-item[open] summary::after {
          content: "−";
        }

        .rishikesh-faq-answer {
          padding: 0 20px 20px;
          color: #666;
          line-height: 1.7;
          font-size: 15px;
        }

        /* TIPS */
        .rishikesh-tips {
          padding: 80px 7%;
        }

        .rishikesh-tips-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .rishikesh-tip-card {
          padding: 25px 18px;
          border: 1px solid #eee;
          border-radius: 12px;
          text-align: center;
          background: white;
        }

        .rishikesh-tip-card h3 {
          font-size: 17px;
          margin: 0 0 10px;
        }

        .rishikesh-tip-card p {
          color: #777;
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
        }

        /* FOOTER */
        .rishikesh-footer {
          background: #111;
          color: white;
          padding: 60px 7% 25px;
        }

        .rishikesh-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
        }

        .rishikesh-footer h3 {
          margin-top: 0;
          margin-bottom: 18px;
        }

        .rishikesh-footer p {
          color: #aaa;
          line-height: 1.7;
          font-size: 14px;
        }

        .rishikesh-footer a {
          display: block;
          color: #aaa;
          text-decoration: none;
          margin-bottom: 10px;
          font-size: 14px;
        }

        .rishikesh-footer a:hover {
          color: white;
        }

        .rishikesh-footer-bottom {
          border-top: 1px solid #333;
          margin-top: 40px;
          padding-top: 20px;
          text-align: center;
          color: #888;
          font-size: 13px;
        }

        @media (max-width: 1000px) {
          .rishikesh-places-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .rishikesh-thing-card {
            flex: 0 0 calc((100% - 22px) / 2);
          }

          .rishikesh-tips-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .rishikesh-footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .rishikesh-topbar {
            padding: 0 5%;
          }

          .rishikesh-hero {
            height: 420px;
          }

          .rishikesh-hero-content {
            padding: 40px 7%;
          }

          .rishikesh-hero-content h1 {
            font-size: 46px;
          }

          .rishikesh-section-heading h2 {
            font-size: 29px;
          }

          .rishikesh-places-grid {
            grid-template-columns: 1fr;
          }

          .rishikesh-thing-card {
            flex: 0 0 100%;
          }

          .rishikesh-arrow-left {
            left: 5px;
          }

          .rishikesh-arrow-right {
            right: 5px;
          }

          .rishikesh-faq {
            padding: 70px 7%;
          }

          .rishikesh-tips-grid {
            grid-template-columns: 1fr;
          }

          .rishikesh-footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* TOP BAR */}
      <div className="rishikesh-topbar">
        <Link to="/" className="rishikesh-logo">
          TravelMate
        </Link>

        <Link to="/destinations" className="rishikesh-back">
          ← Back to Destinations
        </Link>
      </div>

      {/* HERO */}
      <section className="rishikesh-hero">
        <div className="rishikesh-hero-content">
          <h1>Rishikesh</h1>
          <p>Yoga Capital of the World</p>
          <p>📍 Uttarakhand, India</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="rishikesh-about">
        <div className="rishikesh-section-heading">
          <span>ABOUT RISHIKESH</span>
          <h2>Welcome to the Yoga Capital of the World</h2>
        </div>

        <div className="rishikesh-about-content">
          <p>
            Rishikesh is a beautiful destination in Uttarakhand situated
            along the banks of the River Ganga and surrounded by the
            Himalayan foothills.
          </p>

          <p>
            The city is known for yoga, meditation, spirituality and
            peaceful riverside experiences. It is also a popular destination
            for adventure activities such as river rafting and trekking.
          </p>

          <p>
            From peaceful ashrams and temples to thrilling outdoor
            activities, Rishikesh offers a unique combination of spirituality,
            nature and adventure.
          </p>
        </div>
      </section>

      {/* BEAUTIFUL PLACES */}
      <section className="rishikesh-places">
        <div className="rishikesh-section-heading">
          <span>EXPLORE RISHIKESH</span>
          <h2>Beautiful Places to Visit</h2>
          <p>Discover some of Rishikesh's most popular destinations.</p>
        </div>

        <div className="rishikesh-places-grid">
          {beautifulPlaces.map((place, index) => (
            <div className="rishikesh-place-card" key={index}>
              <img src={place.image} alt={place.name} />

              <div className="rishikesh-place-content">
                <span className="rishikesh-place-category">
                  {place.category}
                </span>

                <h3>{place.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="rishikesh-things">
        <div className="rishikesh-section-heading">
          <span>EXPERIENCES</span>
          <h2>Things to Do in Rishikesh</h2>
          <p>Enjoy unforgettable experiences during your Rishikesh trip.</p>
        </div>

        <div className="rishikesh-things-slider-wrapper">
          <button
            className="rishikesh-arrow rishikesh-arrow-left"
            onClick={() => moveThingsSlider(-1)}
          >
            ←
          </button>

          <div
            className="rishikesh-things-slider"
            ref={thingsSliderRef}
          >
            {thingsToDo.map((thing, index) => (
              <div className="rishikesh-thing-card" key={index}>
                <div className="rishikesh-thing-image"></div>

                <div className="rishikesh-thing-content">
                  <h3>{thing.title}</h3>

                  <div className="rishikesh-rating">
                    ⭐ {thing.rating} · {thing.reviews} reviews
                  </div>

                  <div className="rishikesh-thing-category">
                    {thing.category}
                  </div>

                  <div className="rishikesh-price">
                    {thing.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="rishikesh-arrow rishikesh-arrow-right"
            onClick={() => moveThingsSlider(1)}
          >
            →
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="rishikesh-faq">
        <div className="rishikesh-section-heading">
          <span>TRAVEL GUIDE</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before visiting Rishikesh.</p>
        </div>

        <div className="rishikesh-faq-list">
          <details className="rishikesh-faq-item">
            <summary>What is Rishikesh famous for?</summary>
            <div className="rishikesh-faq-answer">
              Rishikesh is famous for yoga, meditation, spirituality,
              the River Ganga and adventure activities.
            </div>
          </details>

          <details className="rishikesh-faq-item">
            <summary>What is the best time to visit Rishikesh?</summary>
            <div className="rishikesh-faq-answer">
              The cooler months are generally comfortable for sightseeing,
              outdoor activities and exploring the city.
            </div>
          </details>

          <details className="rishikesh-faq-item">
            <summary>How many days are enough for Rishikesh?</summary>
            <div className="rishikesh-faq-answer">
              Around 3 to 4 days can be enough to experience major
              attractions and activities.
            </div>
          </details>

          <details className="rishikesh-faq-item">
            <summary>What are the best places to visit in Rishikesh?</summary>
            <div className="rishikesh-faq-answer">
              Laxman Jhula, Ram Jhula, Triveni Ghat, Beatles Ashram,
              Neer Garh Waterfall and Parmarth Niketan are popular places.
            </div>
          </details>

          <details className="rishikesh-faq-item">
            <summary>Is Rishikesh good for adventure activities?</summary>
            <div className="rishikesh-faq-answer">
              Yes. River rafting, bungee jumping, trekking and other
              outdoor activities are popular in Rishikesh.
            </div>
          </details>

          <details className="rishikesh-faq-item">
            <summary>Is Rishikesh suitable for a family trip?</summary>
            <div className="rishikesh-faq-answer">
              Yes. Families can enjoy sightseeing, riverside areas,
              temples, cultural experiences and nature attractions.
            </div>
          </details>

          <details className="rishikesh-faq-item">
            <summary>What food should I try in Rishikesh?</summary>
            <div className="rishikesh-faq-answer">
              Local vegetarian dishes, North Indian food, snacks and
              healthy café options are commonly available.
            </div>
          </details>

          <details className="rishikesh-faq-item">
            <summary>Is Rishikesh good for yoga and meditation?</summary>
            <div className="rishikesh-faq-answer">
              Yes. Rishikesh has many ashrams, yoga centres and meditation
              spaces for visitors.
            </div>
          </details>

          <details className="rishikesh-faq-item">
            <summary>Can I visit Rishikesh on a budget?</summary>
            <div className="rishikesh-faq-answer">
              Yes. There are many budget-friendly stays, local eateries
              and activities available.
            </div>
          </details>

          <details className="rishikesh-faq-item">
            <summary>What should I carry for a Rishikesh trip?</summary>
            <div className="rishikesh-faq-answer">
              Carry comfortable clothes, walking shoes, sunscreen,
              water and basic personal travel essentials.
            </div>
          </details>
        </div>
      </section>

      {/* TIPS */}
      <section className="rishikesh-tips">
        <div className="rishikesh-section-heading">
          <span>TRAVEL TIPS</span>
          <h2>Important Tips for Rishikesh</h2>
        </div>

        <div className="rishikesh-tips-grid">
          <div className="rishikesh-tip-card">
            <h3>🌦 Check Weather</h3>
            <p>
              Check the weather before planning rafting and outdoor
              activities.
            </p>
          </div>

          <div className="rishikesh-tip-card">
            <h3>👟 Good Shoes</h3>
            <p>
              Wear comfortable footwear for trekking and sightseeing.
            </p>
          </div>

          <div className="rishikesh-tip-card">
            <h3>💧 Stay Hydrated</h3>
            <p>
              Carry water with you, especially during outdoor activities.
            </p>
          </div>

          <div className="rishikesh-tip-card">
            <h3>🧴 Sun Protection</h3>
            <p>
              Carry sunscreen, sunglasses and other sun-protection
              essentials.
            </p>
          </div>

          <div className="rishikesh-tip-card">
            <h3>🌿 Respect Nature</h3>
            <p>
              Keep the Ganga and surrounding natural areas clean.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="rishikesh-footer">
        <div className="rishikesh-footer-grid">
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
          </div>
        </div>

        <div className="rishikesh-footer-bottom">
          © 2026 TravelMate. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Rishikesh;