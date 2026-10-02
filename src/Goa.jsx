import { useRef } from "react";
import { Link } from "react-router-dom";

function Goa() {
  const thingsSliderRef = useRef(null);

  const beautifulPlaces = [
    {
      name: "Baga Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Calangute Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Fort Aguada",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Basilica of Bom Jesus",
      category: "Religious Site",
      image:
        "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Dudhsagar Falls",
      category: "Waterfall",
      image:
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Anjuna Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Vagator Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Chapora Fort",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Palolem Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Colva Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Fontainhas",
      category: "Heritage Area",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Reis Magos Fort",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1590050752117-23a9d2e5d7a3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Morjim Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Arambol Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Spice Plantations",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const thingsToDo = [
    {
      name: "Scuba Diving",
      rating: "4.8",
      reviews: "1,245",
      price: "₹2,500/person",
      category: "Water Adventure",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Parasailing in Goa",
      rating: "4.7",
      reviews: "2,130",
      price: "₹1,800/person",
      category: "Adventure",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Goa Local Sightseeing",
      rating: "4.6",
      reviews: "985",
      price: "₹999/person",
      category: "Sightseeing",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Sunset Cruise",
      rating: "4.7",
      reviews: "1,120",
      price: "₹799/person",
      category: "Experience",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Goa Café Walk",
      rating: "4.5",
      reviews: "764",
      price: "₹699/person",
      category: "Food & Culture",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Dudhsagar Waterfall Trip",
      rating: "4.8",
      reviews: "1,540",
      price: "₹1,499/person",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=80",
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
    <div className="goa-page">

      {/* TOP BAR */}
      <div className="goa-topbar">
        <div className="goa-logo">TravelMate</div>

        <Link to="/destinations" className="goa-back-link">
          ← Back to Destinations
        </Link>
      </div>

      {/* HERO */}
      <section className="goa-hero">
        <img
          src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1800&q=85"
          alt="Goa"
        />

        <div className="goa-hero-overlay">
          <div>
            <h1>Goa</h1>
            <p>Goa, India</p>
            <span>Beaches, sunsets and unforgettable experiences.</span>
          </div>
        </div>
      </section>

      {/* ABOUT GOA */}
      <section className="goa-about">
        <div className="goa-section-heading">
          <span>ABOUT GOA</span>
          <h2>Discover the beauty of Goa</h2>
        </div>

        <div className="goa-about-content">
          <p>
            Goa is one of India's most popular travel destinations, famous for
            its beautiful beaches, relaxed atmosphere, Portuguese-influenced
            architecture and vibrant culture.
          </p>

          <p>
            From peaceful beaches and historic forts to exciting water sports,
            local markets and colourful streets, Goa offers a wide variety of
            experiences for travellers.
          </p>

          <p>
            North Goa is known for lively beaches and entertainment, while
            South Goa offers a comparatively peaceful environment. Visitors
            can enjoy sightseeing, adventure activities, local food and
            beautiful sunsets throughout the region.
          </p>
        </div>
      </section>

      {/* BEAUTIFUL PLACES */}
      <section className="goa-places-section">
        <div className="goa-section-heading">
          <span>PLACES TO EXPLORE</span>
          <h2>15 Beautiful Places in Goa</h2>
          <p>
            Explore Goa's beaches, forts, waterfalls and beautiful natural
            attractions.
          </p>
        </div>

        <div className="goa-places-grid">
          {beautifulPlaces.map((place, index) => (
            <div className="goa-place-card" key={index}>
              <div className="goa-place-image">
                <img src={place.image} alt={place.name} />
              </div>

              <div className="goa-place-content">
                <span>{place.category}</span>
                <h3>{place.name}</h3>
                <p>
                  Explore this beautiful destination and add it to your Goa
                  travel plan.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="goa-things-section">
        <div className="goa-section-heading">
          <span>THINGS TO DO</span>
          <h2>Things to Do in Goa</h2>
          <p>
            Experience adventure, sightseeing, food and nature during your
            Goa trip.
          </p>
        </div>

        <div className="goa-slider-wrapper">

          <button
            className="goa-slider-btn"
            onClick={() => moveThingsSlider(-1)}
          >
            ←
          </button>

          <div className="goa-things-slider" ref={thingsSliderRef}>
            {thingsToDo.map((activity, index) => (
              <div className="goa-thing-card" key={index}>

                <div className="goa-thing-image">
                  <img src={activity.image} alt={activity.name} />
                </div>

                <div className="goa-thing-content">
                  <span className="goa-thing-category">
                    {activity.category}
                  </span>

                  <h3>{activity.name}</h3>

                  <div className="goa-thing-rating">
                    ⭐ {activity.rating}
                    <span>({activity.reviews})</span>
                  </div>

                  <div className="goa-thing-bottom">
                    <strong>{activity.price}</strong>
                    <button>View Details</button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <button
            className="goa-slider-btn"
            onClick={() => moveThingsSlider(1)}
          >
            →
          </button>

        </div>
      </section>

      {/* FAQ */}
      <section className="goa-faq-section">
        <div className="goa-section-heading">
          <span>TRAVEL GUIDE</span>
          <h2>Frequently Asked Questions</h2>
          <p>Some common questions about travelling to Goa.</p>
        </div>

        <div className="goa-faq-list">

          <details className="goa-faq-item">
            <summary>What is the best time to visit Goa?</summary>
            <div className="goa-faq-answer">
              November to February is a popular time to visit Goa because the
              weather is generally pleasant for beaches and sightseeing.
            </div>
          </details>

          <details className="goa-faq-item">
            <summary>How many days are enough for Goa?</summary>
            <div className="goa-faq-answer">
              Around 3 to 5 days can be enough to explore major beaches,
              attractions and experiences comfortably.
            </div>
          </details>

          <details className="goa-faq-item">
            <summary>Which is better, North Goa or South Goa?</summary>
            <div className="goa-faq-answer">
              North Goa is generally more lively, while South Goa is known for
              a comparatively quieter and relaxed experience.
            </div>
          </details>

          <details className="goa-faq-item">
            <summary>What are the famous beaches in Goa?</summary>
            <div className="goa-faq-answer">
              Baga, Calangute, Anjuna, Vagator, Palolem, Colva, Morjim and
              Arambol are among the popular beaches.
            </div>
          </details>

          <details className="goa-faq-item">
            <summary>What food should I try in Goa?</summary>
            <div className="goa-faq-answer">
              You can try local Goan dishes, seafood, traditional curries and
              explore the many cafés and restaurants.
            </div>
          </details>

          <details className="goa-faq-item">
            <summary>Is Goa suitable for a family trip?</summary>
            <div className="goa-faq-answer">
              Yes. Goa has beaches, forts, churches, nature attractions and
              sightseeing experiences suitable for family trips.
            </div>
          </details>

          <details className="goa-faq-item">
            <summary>What adventure activities can I do in Goa?</summary>
            <div className="goa-faq-answer">
              Popular activities include scuba diving, parasailing, boating,
              water sports and other beach adventures.
            </div>
          </details>

          <details className="goa-faq-item">
            <summary>Can Goa be explored on a budget?</summary>
            <div className="goa-faq-answer">
              Yes. Budget accommodation, local food and affordable transport
              options can help keep your trip economical.
            </div>
          </details>

          <details className="goa-faq-item">
            <summary>What should I pack for Goa?</summary>
            <div className="goa-faq-answer">
              Carry comfortable clothes, sunscreen, sunglasses, comfortable
              footwear and other personal essentials.
            </div>
          </details>

          <details className="goa-faq-item">
            <summary>Is Goa only about beaches?</summary>
            <div className="goa-faq-answer">
              No. Goa also has forts, churches, heritage areas, waterfalls,
              spice plantations, markets and cultural attractions.
            </div>
          </details>

        </div>
      </section>

      {/* TIPS */}
      <section className="goa-tips-section">
        <div className="goa-section-heading">
          <span>TRAVEL TIPS</span>
          <h2>5 Important Tips for Goa</h2>
        </div>

        <div className="goa-tips-grid">

          <div className="goa-tip-card">
            <div className="goa-tip-number">01</div>
            <h3>Plan Your Beaches</h3>
            <p>
              Choose beaches according to the type of experience you want,
              from lively locations to quieter areas.
            </p>
          </div>

          <div className="goa-tip-card">
            <div className="goa-tip-number">02</div>
            <h3>Carry Sun Protection</h3>
            <p>
              Keep sunscreen, sunglasses and comfortable clothes with you
              while exploring Goa.
            </p>
          </div>

          <div className="goa-tip-card">
            <div className="goa-tip-number">03</div>
            <h3>Wear Good Shoes</h3>
            <p>
              Comfortable footwear will make sightseeing and exploring forts
              and markets easier.
            </p>
          </div>

          <div className="goa-tip-card">
            <div className="goa-tip-number">04</div>
            <h3>Plan Your Route</h3>
            <p>
              Group nearby attractions together to save travelling time and
              explore more places comfortably.
            </p>
          </div>

          <div className="goa-tip-card">
            <div className="goa-tip-number">05</div>
            <h3>Respect Nature</h3>
            <p>
              Avoid littering and help keep Goa's beaches, waterfalls and
              natural attractions clean.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="goa-footer">

        <div className="goa-footer-main">

          <div className="goa-footer-brand">
            <h2>TravelMate</h2>
            <p>
              Discover beautiful destinations, exciting experiences and
              memorable journeys across India.
            </p>
          </div>

          <div className="goa-footer-column">
            <h3>Explore</h3>
            <Link to="/">Home</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/reviews">Reviews</Link>
          </div>

          <div className="goa-footer-column">
            <h3>TravelMate</h3>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/destinations">Travel Guide</Link>
          </div>

          <div className="goa-footer-column">
            <h3>Popular Places</h3>
            <Link to="/manali">Manali</Link>
            <Link to="/goa">Goa</Link>
            <Link to="/destination/Jaipur">Jaipur</Link>
          </div>

        </div>

        <div className="goa-footer-bottom">
          <p>© 2026 TravelMate. All rights reserved.</p>
          <p>Made for travellers ❤️</p>
        </div>

      </footer>

      {/* SAME STYLE STRUCTURE AS MANALI */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        .goa-page {
          width: 100%;
          background: #ffffff;
          color: #222;
          overflow-x: hidden;
        }

        /* TOP BAR */

        .goa-topbar {
          height: 72px;
          padding: 0 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fff;
          border-bottom: 1px solid #eee;
        }

        .goa-logo {
          font-size: 27px;
          font-weight: 800;
          color: #111;
        }

        .goa-back-link {
          text-decoration: none;
          color: #333;
          font-weight: 600;
        }

        /* HERO */

        .goa-hero {
          position: relative;
          height: 500px;
          overflow: hidden;
        }

        .goa-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .goa-hero-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding: 60px 7%;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.75),
            rgba(0,0,0,0.05)
          );
          color: white;
        }

        .goa-hero-overlay h1 {
          margin: 0;
          font-size: 64px;
          line-height: 1;
        }

        .goa-hero-overlay p {
          margin: 12px 0 5px;
          font-size: 18px;
        }

        .goa-hero-overlay span {
          font-size: 16px;
        }

        /* COMMON HEADING */

        .goa-section-heading {
          text-align: center;
          margin-bottom: 40px;
        }

        .goa-section-heading span {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #777;
        }

        .goa-section-heading h2 {
          margin: 10px 0;
          font-size: 36px;
          color: #111;
        }

        .goa-section-heading p {
          margin: 0 auto;
          max-width: 650px;
          color: #777;
          line-height: 1.7;
        }

        /* ABOUT */

        .goa-about {
          padding: 80px 8%;
          background: #fff;
        }

        .goa-about-content {
          max-width: 950px;
          margin: auto;
        }

        .goa-about-content p {
          color: #555;
          line-height: 1.9;
          font-size: 16px;
          margin-bottom: 20px;
        }

        /* PLACES */

        .goa-places-section {
          padding: 80px 7%;
          background: #f8f8f8;
        }

        .goa-places-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .goa-place-card {
          background: white;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          transition: transform 0.25s;
        }

        .goa-place-card:hover {
          transform: translateY(-6px);
        }

        .goa-place-image {
          height: 230px;
          overflow: hidden;
        }

        .goa-place-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .goa-place-content {
          padding: 22px;
        }

        .goa-place-content span {
          font-size: 12px;
          font-weight: 700;
          color: #777;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .goa-place-content h3 {
          margin: 8px 0;
          font-size: 22px;
        }

        .goa-place-content p {
          margin: 0;
          color: #777;
          line-height: 1.6;
          font-size: 14px;
        }

        /* THINGS TO DO */

        .goa-things-section {
          padding: 80px 7%;
          background: white;
        }

        .goa-slider-wrapper {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .goa-things-slider {
          display: flex;
          gap: 22px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          width: 100%;
        }

        .goa-things-slider::-webkit-scrollbar {
          display: none;
        }

        .goa-thing-card {
          min-width: calc((100% - 44px) / 3);
          background: white;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #eee;
          box-shadow: 0 8px 25px rgba(0,0,0,0.07);
        }

        .goa-thing-image {
          height: 220px;
        }

        .goa-thing-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .goa-thing-content {
          padding: 20px;
        }

        .goa-thing-category {
          font-size: 12px;
          color: #777;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .goa-thing-content h3 {
          margin: 8px 0;
          font-size: 21px;
        }

        .goa-thing-rating {
          font-size: 14px;
          margin-bottom: 18px;
        }

        .goa-thing-rating span {
          color: #777;
          margin-left: 5px;
        }

        .goa-thing-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .goa-thing-bottom strong {
          font-size: 15px;
        }

        .goa-thing-bottom button {
          border: none;
          background: #111;
          color: white;
          padding: 9px 14px;
          border-radius: 8px;
          cursor: pointer;
        }

        .goa-slider-btn {
          min-width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 1px solid #ddd;
          background: white;
          font-size: 20px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        /* FAQ */

        .goa-faq-section {
          padding: 80px 15%;
          background: #f8f8f8;
        }

        .goa-faq-list {
          max-width: 900px;
          margin: auto;
        }

        .goa-faq-item {
          background: white;
          border-radius: 12px;
          margin-bottom: 14px;
          padding: 0 22px;
          border: 1px solid #eee;
        }

        .goa-faq-item summary {
          cursor: pointer;
          padding: 21px 0;
          font-weight: 700;
          font-size: 16px;
          list-style: none;
          position: relative;
          padding-right: 30px;
        }

        .goa-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .goa-faq-item summary::after {
          content: "+";
          position: absolute;
          right: 0;
          font-size: 23px;
        }

        .goa-faq-item[open] summary::after {
          content: "−";
        }

        .goa-faq-answer {
          padding: 0 0 21px;
          color: #666;
          line-height: 1.7;
          font-size: 15px;
        }

        /* TIPS */

        .goa-tips-section {
          padding: 80px 7%;
          background: white;
        }

        .goa-tips-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .goa-tip-card {
          padding: 25px;
          border: 1px solid #eee;
          border-radius: 16px;
          background: #fafafa;
        }

        .goa-tip-number {
          font-size: 13px;
          font-weight: 800;
          color: #777;
          margin-bottom: 15px;
        }

        .goa-tip-card h3 {
          font-size: 18px;
          margin: 0 0 10px;
        }

        .goa-tip-card p {
          margin: 0;
          color: #666;
          font-size: 14px;
          line-height: 1.6;
        }

        /* FOOTER */

        .goa-footer {
          background: #111;
          color: white;
          padding: 60px 7% 25px;
        }

        .goa-footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
          padding-bottom: 45px;
        }

        .goa-footer-brand h2 {
          margin: 0 0 15px;
          font-size: 28px;
        }

        .goa-footer-brand p {
          color: #aaa;
          max-width: 350px;
          line-height: 1.7;
        }

        .goa-footer-column {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .goa-footer-column h3 {
          margin: 0 0 10px;
        }

        .goa-footer-column a {
          color: #aaa;
          text-decoration: none;
          font-size: 14px;
        }

        .goa-footer-bottom {
          border-top: 1px solid #333;
          padding-top: 22px;
          display: flex;
          justify-content: space-between;
          color: #888;
          font-size: 13px;
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {

          .goa-places-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .goa-thing-card {
            min-width: calc((100% - 22px) / 2);
          }

          .goa-tips-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .goa-footer-main {
            grid-template-columns: repeat(2, 1fr);
          }

          .goa-faq-section {
            padding: 80px 8%;
          }
        }

        @media (max-width: 600px) {

          .goa-topbar {
            padding: 0 5%;
          }

          .goa-hero {
            height: 430px;
          }

          .goa-hero-overlay {
            padding: 45px 7%;
          }

          .goa-hero-overlay h1 {
            font-size: 52px;
          }

          .goa-section-heading h2 {
            font-size: 30px;
          }

          .goa-about,
          .goa-places-section,
          .goa-things-section,
          .goa-tips-section {
            padding: 65px 5%;
          }

          .goa-places-grid {
            grid-template-columns: 1fr;
          }

          .goa-thing-card {
            min-width: 100%;
          }

          .goa-faq-section {
            padding: 65px 5%;
          }

          .goa-tips-grid {
            grid-template-columns: 1fr;
          }

          .goa-footer-main {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .goa-footer-bottom {
            flex-direction: column;
            gap: 10px;
          }
        }

      `}</style>
    </div>
  );
}

export default Goa;