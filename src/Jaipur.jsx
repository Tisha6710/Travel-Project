import { useRef } from "react";
import { Link } from "react-router-dom";

function Jaipur() {
  const thingsSliderRef = useRef(null);

  const beautifulPlaces = [
    {
      name: "Amber Fort",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Hawa Mahal",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "City Palace",
      category: "Palace",
      image:
        "https://images.unsplash.com/photo-1599661046827-dacff0c4b0c8?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Jantar Mantar",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Jal Mahal",
      category: "Palace",
      image:
        "https://images.unsplash.com/photo-1599661046827-dacff0c4b0c8?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Nahargarh Fort",
      category: "Fort",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Jaigarh Fort",
      category: "Fort",
      image:
        "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Albert Hall Museum",
      category: "Museum",
      image:
        "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Birla Mandir",
      category: "Religious Site",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Patrika Gate",
      category: "Architecture",
      image:
        "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Galtaji Temple",
      category: "Religious Site",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Panna Meena Ka Kund",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Johari Bazaar",
      category: "Shopping",
      image:
        "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Chokhi Dhani",
      category: "Cultural Experience",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Sisodia Rani Garden",
      category: "Garden",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const thingsToDo = [
    {
      name: "Jaipur City Sightseeing",
      rating: "4.8",
      reviews: "1,245",
      price: "₹1,499/person",
      category: "Sightseeing",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Amber Fort Experience",
      rating: "4.7",
      reviews: "2,130",
      price: "₹999/person",
      category: "Heritage",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Pink City Walking Tour",
      rating: "4.6",
      reviews: "985",
      price: "₹799/person",
      category: "Cultural Experience",
      image:
        "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Rajasthani Food Experience",
      rating: "4.8",
      reviews: "1,120",
      price: "₹699/person",
      category: "Food & Culture",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Jaipur Shopping Tour",
      rating: "4.5",
      reviews: "764",
      price: "₹599/person",
      category: "Shopping",
      image:
        "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Nahargarh Sunset Tour",
      rating: "4.8",
      reviews: "1,540",
      price: "₹899/person",
      category: "Nature & Views",
      image:
        "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=900&q=80",
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
    <div className="jaipur-page">

      {/* TOP BAR */}
      <div className="jaipur-topbar">
        <div className="jaipur-logo">TravelMate</div>

        <Link to="/destinations" className="jaipur-back-link">
          ← Back to Destinations
        </Link>
      </div>

      {/* HERO */}
      <section className="jaipur-hero">
        <img
          src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1800&q=85"
          alt="Jaipur"
        />

        <div className="jaipur-hero-overlay">
          <div>
            <h1>Jaipur</h1>
            <p>Rajasthan, India</p>
            <span>
              Royal palaces, magnificent forts and vibrant culture.
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT JAIPUR */}
      <section className="jaipur-about">
        <div className="jaipur-section-heading">
          <span>ABOUT JAIPUR</span>
          <h2>Discover the beauty of the Pink City</h2>
        </div>

        <div className="jaipur-about-content">
          <p>
            Jaipur, popularly known as the Pink City, is the capital of
            Rajasthan and one of India's most famous heritage destinations.
            The city is known for its magnificent forts, royal palaces,
            colourful markets and rich traditions.
          </p>

          <p>
            From the grand Amber Fort and beautiful Hawa Mahal to the historic
            City Palace and Jantar Mantar, Jaipur offers a fascinating mix of
            history, architecture and culture.
          </p>

          <p>
            Visitors can explore royal monuments, enjoy traditional Rajasthani
            food, shop for handicrafts and jewellery, experience local
            traditions and enjoy beautiful views of the city.
          </p>
        </div>
      </section>

      {/* BEAUTIFUL PLACES */}
      <section className="jaipur-places-section">
        <div className="jaipur-section-heading">
          <span>PLACES TO EXPLORE</span>
          <h2>15 Beautiful Places in Jaipur</h2>
          <p>
            Explore forts, palaces, museums, markets and cultural attractions
            across the Pink City.
          </p>
        </div>

        <div className="jaipur-places-grid">
          {beautifulPlaces.map((place, index) => (
            <div className="jaipur-place-card" key={index}>
              <div className="jaipur-place-image">
                <img src={place.image} alt={place.name} />
              </div>

              <div className="jaipur-place-content">
                <span>{place.category}</span>
                <h3>{place.name}</h3>
                <p>
                  Explore this beautiful attraction and add it to your Jaipur
                  travel plan.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="jaipur-things-section">
        <div className="jaipur-section-heading">
          <span>THINGS TO DO</span>
          <h2>Things to Do in Jaipur</h2>
          <p>
            Experience Jaipur's history, culture, food, shopping and beautiful
            views.
          </p>
        </div>

        <div className="jaipur-slider-wrapper">

          <button
            className="jaipur-slider-btn"
            onClick={() => moveThingsSlider(-1)}
          >
            ←
          </button>

          <div className="jaipur-things-slider" ref={thingsSliderRef}>
            {thingsToDo.map((activity, index) => (
              <div className="jaipur-thing-card" key={index}>

                <div className="jaipur-thing-image">
                  <img src={activity.image} alt={activity.name} />
                </div>

                <div className="jaipur-thing-content">
                  <span className="jaipur-thing-category">
                    {activity.category}
                  </span>

                  <h3>{activity.name}</h3>

                  <div className="jaipur-thing-rating">
                    ⭐ {activity.rating}
                    <span>({activity.reviews})</span>
                  </div>

                  <div className="jaipur-thing-bottom">
                    <strong>{activity.price}</strong>
                    <button>View Details</button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <button
            className="jaipur-slider-btn"
            onClick={() => moveThingsSlider(1)}
          >
            →
          </button>

        </div>
      </section>

      {/* FAQ */}
      <section className="jaipur-faq-section">
        <div className="jaipur-section-heading">
          <span>TRAVEL GUIDE</span>
          <h2>Frequently Asked Questions</h2>
          <p>Some common questions about travelling to Jaipur.</p>
        </div>

        <div className="jaipur-faq-list">

          <details className="jaipur-faq-item">
            <summary>What is the best time to visit Jaipur?</summary>
            <div className="jaipur-faq-answer">
              October to March is generally considered a comfortable period
              for exploring Jaipur because the weather is comparatively
              pleasant for sightseeing.
            </div>
          </details>

          <details className="jaipur-faq-item">
            <summary>How many days are enough for Jaipur?</summary>
            <div className="jaipur-faq-answer">
              Around 2 to 4 days can be enough to explore the major forts,
              palaces, markets and cultural attractions.
            </div>
          </details>

          <details className="jaipur-faq-item">
            <summary>Why is Jaipur called the Pink City?</summary>
            <div className="jaipur-faq-answer">
              Jaipur is popularly known as the Pink City because many historic
              buildings in the old city feature pink-coloured facades.
            </div>
          </details>

          <details className="jaipur-faq-item">
            <summary>What are the famous places in Jaipur?</summary>
            <div className="jaipur-faq-answer">
              Amber Fort, Hawa Mahal, City Palace, Jantar Mantar, Jal Mahal,
              Nahargarh Fort and Jaigarh Fort are among the major attractions.
            </div>
          </details>

          <details className="jaipur-faq-item">
            <summary>What food should I try in Jaipur?</summary>
            <div className="jaipur-faq-answer">
              Visitors can try traditional Rajasthani dishes such as dal baati
              churma, gatte ki sabzi, ker sangri and various local sweets.
            </div>
          </details>

          <details className="jaipur-faq-item">
            <summary>Is Jaipur suitable for a family trip?</summary>
            <div className="jaipur-faq-answer">
              Yes. Jaipur has historical monuments, museums, gardens, markets
              and cultural attractions that can be included in a family trip.
            </div>
          </details>

          <details className="jaipur-faq-item">
            <summary>What can I buy in Jaipur?</summary>
            <div className="jaipur-faq-answer">
              Jaipur is known for jewellery, handicrafts, textiles, block
              prints, traditional clothing and colourful souvenirs.
            </div>
          </details>

          <details className="jaipur-faq-item">
            <summary>Can Jaipur be explored on a budget?</summary>
            <div className="jaipur-faq-answer">
              Yes. Travellers can choose budget accommodation, local food and
              affordable transport options to explore the city economically.
            </div>
          </details>

          <details className="jaipur-faq-item">
            <summary>What should I pack for Jaipur?</summary>
            <div className="jaipur-faq-answer">
              Comfortable clothes, walking shoes, sunglasses, sunscreen and
              personal essentials are useful while exploring Jaipur.
            </div>
          </details>

          <details className="jaipur-faq-item">
            <summary>Is Jaipur only about forts and palaces?</summary>
            <div className="jaipur-faq-answer">
              No. Jaipur also offers local markets, traditional food, museums,
              gardens, cultural experiences and beautiful sunset viewpoints.
            </div>
          </details>

        </div>
      </section>

      {/* TIPS */}
      <section className="jaipur-tips-section">
        <div className="jaipur-section-heading">
          <span>TRAVEL TIPS</span>
          <h2>5 Important Tips for Jaipur</h2>
        </div>

        <div className="jaipur-tips-grid">

          <div className="jaipur-tip-card">
            <div className="jaipur-tip-number">01</div>
            <h3>Start Early</h3>
            <p>
              Start sightseeing early to explore popular forts and monuments
              comfortably and avoid the busiest hours.
            </p>
          </div>

          <div className="jaipur-tip-card">
            <div className="jaipur-tip-number">02</div>
            <h3>Carry Sun Protection</h3>
            <p>
              Carry sunscreen, sunglasses and comfortable clothing while
              exploring Jaipur's outdoor attractions.
            </p>
          </div>

          <div className="jaipur-tip-card">
            <div className="jaipur-tip-number">03</div>
            <h3>Wear Comfortable Shoes</h3>
            <p>
              Many attractions involve walking, stairs and large areas, so
              comfortable footwear is useful.
            </p>
          </div>

          <div className="jaipur-tip-card">
            <div className="jaipur-tip-number">04</div>
            <h3>Plan Your Route</h3>
            <p>
              Group nearby attractions together to save travelling time and
              explore more places during your trip.
            </p>
          </div>

          <div className="jaipur-tip-card">
            <div className="jaipur-tip-number">05</div>
            <h3>Respect Local Culture</h3>
            <p>
              Respect local traditions, heritage sites and cultural spaces
              while exploring the Pink City.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="jaipur-footer">

        <div className="jaipur-footer-main">

          <div className="jaipur-footer-brand">
            <h2>TravelMate</h2>
            <p>
              Discover beautiful destinations, exciting experiences and
              memorable journeys across India.
            </p>
          </div>

          <div className="jaipur-footer-column">
            <h3>Explore</h3>
            <Link to="/">Home</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/reviews">Reviews</Link>
          </div>

          <div className="jaipur-footer-column">
            <h3>TravelMate</h3>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/destinations">Travel Guide</Link>
          </div>

          <div className="jaipur-footer-column">
            <h3>Popular Places</h3>
            <Link to="/manali">Manali</Link>
            <Link to="/goa">Goa</Link>
            <Link to="/jaipur">Jaipur</Link>
          </div>

        </div>

        <div className="jaipur-footer-bottom">
          <p>© 2026 TravelMate. All rights reserved.</p>
          <p>Made for travellers ❤️</p>
        </div>

      </footer>

      {/* CSS */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        .jaipur-page {
          width: 100%;
          background: #ffffff;
          color: #222;
          overflow-x: hidden;
        }

        /* TOP BAR */

        .jaipur-topbar {
          height: 72px;
          padding: 0 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fff;
          border-bottom: 1px solid #eee;
        }

        .jaipur-logo {
          font-size: 27px;
          font-weight: 800;
          color: #111;
        }

        .jaipur-back-link {
          text-decoration: none;
          color: #333;
          font-weight: 600;
        }

        /* HERO */

        .jaipur-hero {
          position: relative;
          height: 500px;
          overflow: hidden;
        }

        .jaipur-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .jaipur-hero-overlay {
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

        .jaipur-hero-overlay h1 {
          margin: 0;
          font-size: 64px;
          line-height: 1;
        }

        .jaipur-hero-overlay p {
          margin: 12px 0 5px;
          font-size: 18px;
        }

        .jaipur-hero-overlay span {
          font-size: 16px;
        }

        /* COMMON HEADING */

        .jaipur-section-heading {
          text-align: center;
          margin-bottom: 40px;
        }

        .jaipur-section-heading span {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #777;
        }

        .jaipur-section-heading h2 {
          margin: 10px 0;
          font-size: 36px;
          color: #111;
        }

        .jaipur-section-heading p {
          margin: 0 auto;
          max-width: 650px;
          color: #777;
          line-height: 1.7;
        }

        /* ABOUT */

        .jaipur-about {
          padding: 80px 8%;
          background: #fff;
        }

        .jaipur-about-content {
          max-width: 950px;
          margin: auto;
        }

        .jaipur-about-content p {
          color: #555;
          line-height: 1.9;
          font-size: 16px;
          margin-bottom: 20px;
        }

        /* PLACES */

        .jaipur-places-section {
          padding: 80px 7%;
          background: #f8f8f8;
        }

        .jaipur-places-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .jaipur-place-card {
          background: white;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          transition: transform 0.25s;
        }

        .jaipur-place-card:hover {
          transform: translateY(-6px);
        }

        .jaipur-place-image {
          height: 230px;
          overflow: hidden;
        }

        .jaipur-place-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .jaipur-place-content {
          padding: 22px;
        }

        .jaipur-place-content span {
          font-size: 12px;
          font-weight: 700;
          color: #777;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .jaipur-place-content h3 {
          margin: 8px 0;
          font-size: 22px;
        }

        .jaipur-place-content p {
          margin: 0;
          color: #777;
          line-height: 1.6;
          font-size: 14px;
        }

        /* THINGS TO DO */

        .jaipur-things-section {
          padding: 80px 7%;
          background: white;
        }

        .jaipur-slider-wrapper {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .jaipur-things-slider {
          display: flex;
          gap: 22px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          width: 100%;
        }

        .jaipur-things-slider::-webkit-scrollbar {
          display: none;
        }

        .jaipur-thing-card {
          min-width: calc((100% - 44px) / 3);
          background: white;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #eee;
          box-shadow: 0 8px 25px rgba(0,0,0,0.07);
        }

        .jaipur-thing-image {
          height: 220px;
        }

        .jaipur-thing-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .jaipur-thing-content {
          padding: 20px;
        }

        .jaipur-thing-category {
          font-size: 12px;
          color: #777;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .jaipur-thing-content h3 {
          margin: 8px 0;
          font-size: 21px;
        }

        .jaipur-thing-rating {
          font-size: 14px;
          margin-bottom: 18px;
        }

        .jaipur-thing-rating span {
          color: #777;
          margin-left: 5px;
        }

        .jaipur-thing-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .jaipur-thing-bottom strong {
          font-size: 15px;
        }

        .jaipur-thing-bottom button {
          border: none;
          background: #111;
          color: white;
          padding: 9px 14px;
          border-radius: 8px;
          cursor: pointer;
        }

        .jaipur-slider-btn {
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

        .jaipur-faq-section {
          padding: 80px 15%;
          background: #f8f8f8;
        }

        .jaipur-faq-list {
          max-width: 900px;
          margin: auto;
        }

        .jaipur-faq-item {
          background: white;
          border-radius: 12px;
          margin-bottom: 14px;
          padding: 0 22px;
          border: 1px solid #eee;
        }

        .jaipur-faq-item summary {
          cursor: pointer;
          padding: 21px 0;
          font-weight: 700;
          font-size: 16px;
          list-style: none;
          position: relative;
          padding-right: 30px;
        }

        .jaipur-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .jaipur-faq-item summary::after {
          content: "+";
          position: absolute;
          right: 0;
          font-size: 23px;
        }

        .jaipur-faq-item[open] summary::after {
          content: "−";
        }

        .jaipur-faq-answer {
          padding: 0 0 21px;
          color: #666;
          line-height: 1.7;
          font-size: 15px;
        }

        /* TIPS */

        .jaipur-tips-section {
          padding: 80px 7%;
          background: white;
        }

        .jaipur-tips-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .jaipur-tip-card {
          padding: 25px;
          border: 1px solid #eee;
          border-radius: 16px;
          background: #fafafa;
        }

        .jaipur-tip-number {
          font-size: 13px;
          font-weight: 800;
          color: #777;
          margin-bottom: 15px;
        }

        .jaipur-tip-card h3 {
          font-size: 18px;
          margin: 0 0 10px;
        }

        .jaipur-tip-card p {
          margin: 0;
          color: #666;
          font-size: 14px;
          line-height: 1.6;
        }

        /* FOOTER */

        .jaipur-footer {
          background: #111;
          color: white;
          padding: 60px 7% 25px;
        }

        .jaipur-footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
          padding-bottom: 45px;
        }

        .jaipur-footer-brand h2 {
          margin: 0 0 15px;
          font-size: 28px;
        }

        .jaipur-footer-brand p {
          color: #aaa;
          max-width: 350px;
          line-height: 1.7;
        }

        .jaipur-footer-column {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .jaipur-footer-column h3 {
          margin: 0 0 10px;
        }

        .jaipur-footer-column a {
          color: #aaa;
          text-decoration: none;
          font-size: 14px;
        }

        .jaipur-footer-bottom {
          border-top: 1px solid #333;
          padding-top: 22px;
          display: flex;
          justify-content: space-between;
          color: #888;
          font-size: 13px;
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {

          .jaipur-places-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .jaipur-thing-card {
            min-width: calc((100% - 22px) / 2);
          }

          .jaipur-tips-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .jaipur-footer-main {
            grid-template-columns: repeat(2, 1fr);
          }

          .jaipur-faq-section {
            padding: 80px 8%;
          }
        }

        @media (max-width: 600px) {

          .jaipur-topbar {
            padding: 0 5%;
          }

          .jaipur-hero {
            height: 430px;
          }

          .jaipur-hero-overlay {
            padding: 45px 7%;
          }

          .jaipur-hero-overlay h1 {
            font-size: 52px;
          }

          .jaipur-section-heading h2 {
            font-size: 30px;
          }

          .jaipur-about,
          .jaipur-places-section,
          .jaipur-things-section,
          .jaipur-tips-section {
            padding: 65px 5%;
          }

          .jaipur-places-grid {
            grid-template-columns: 1fr;
          }

          .jaipur-thing-card {
            min-width: 100%;
          }

          .jaipur-faq-section {
            padding: 65px 5%;
          }

          .jaipur-tips-grid {
            grid-template-columns: 1fr;
          }

          .jaipur-footer-main {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .jaipur-footer-bottom {
            flex-direction: column;
            gap: 10px;
          }
        }

      `}</style>
    </div>
  );
}

export default Jaipur;