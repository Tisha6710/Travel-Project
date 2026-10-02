import { useRef } from "react";
import { Link } from "react-router-dom";

function Darjeeling() {
  const thingsSliderRef = useRef(null);

  const beautifulPlaces = [
    {
      name: "Tiger Hill",
      category: "Viewpoint",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Batasia Loop",
      category: "Scenic Attraction",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Darjeeling Himalayan Railway",
      category: "Heritage Site",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Darjeeling Tea Gardens",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Peace Pagoda",
      category: "Religious Site",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Padmaja Naidu Himalayan Zoological Park",
      category: "Wildlife",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Himalayan Mountaineering Institute",
      category: "Museum",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Happy Valley Tea Estate",
      category: "Tea Estate",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Rock Garden",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Ghoom Monastery",
      category: "Religious Site",
      image:
        "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Sandakphu",
      category: "Adventure",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Nightingale Park",
      category: "Nature Park",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Observatory Hill",
      category: "Viewpoint",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Darjeeling Mall Road",
      category: "Shopping",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Singalila National Park",
      category: "Wildlife",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const thingsToDo = [
    {
      title: "Darjeeling City Sightseeing",
      rating: "4.8",
      reviews: "1,245",
      price: "₹1,499/person",
      category: "Sightseeing",
    },
    {
      title: "Tiger Hill Sunrise Tour",
      rating: "4.9",
      reviews: "2,130",
      price: "₹799/person",
      category: "Nature & Views",
    },
    {
      title: "Darjeeling Tea Garden Tour",
      rating: "4.7",
      reviews: "985",
      price: "₹699/person",
      category: "Tea Experience",
    },
    {
      title: "Toy Train Experience",
      rating: "4.8",
      reviews: "1,120",
      price: "₹1,199/person",
      category: "Heritage Experience",
    },
    {
      title: "Himalayan Food Walk",
      rating: "4.6",
      reviews: "764",
      price: "₹599/person",
      category: "Food & Culture",
    },
    {
      title: "Sandakphu Trek",
      rating: "4.8",
      reviews: "1,540",
      price: "₹2,499/person",
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
    <div className="darjeeling-page">
      <style>{`
        .darjeeling-page {
          font-family: Arial, sans-serif;
          color: #222;
          background: #fff;
        }

        .darjeeling-topbar {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 7%;
          border-bottom: 1px solid #eee;
          background: #fff;
        }

        .darjeeling-logo {
          font-size: 26px;
          font-weight: 700;
          color: #222;
        }

        .darjeeling-back {
          text-decoration: none;
          color: #555;
          font-size: 15px;
        }

        .darjeeling-hero {
          height: 500px;
          position: relative;
          background-image:
            linear-gradient(
              rgba(0, 0, 0, 0.45),
              rgba(0, 0, 0, 0.45)
            ),
            url("https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
        }

        .darjeeling-hero-content {
          padding: 60px 7%;
          color: white;
        }

        .darjeeling-hero-content h1 {
          font-size: 64px;
          margin: 0 0 12px;
          font-weight: 700;
        }

        .darjeeling-hero-content p {
          font-size: 20px;
          margin: 8px 0;
        }

        .darjeeling-section-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .darjeeling-section-heading span {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #777;
        }

        .darjeeling-section-heading h2 {
          font-size: 38px;
          margin: 12px 0;
        }

        .darjeeling-section-heading p {
          color: #777;
          font-size: 16px;
        }

        .darjeeling-about {
          padding: 80px 8%;
          text-align: center;
        }

        .darjeeling-about-content {
          max-width: 900px;
          margin: auto;
          line-height: 1.8;
          color: #555;
          font-size: 16px;
        }

        .darjeeling-places {
          padding: 80px 7%;
          background: #fafafa;
        }

        .darjeeling-places-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .darjeeling-place-card {
          background: white;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }

        .darjeeling-place-card:hover {
          transform: translateY(-5px);
        }

        .darjeeling-place-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          display: block;
        }

        .darjeeling-place-content {
          padding: 20px;
        }

        .darjeeling-place-category {
          font-size: 12px;
          color: #777;
          margin-bottom: 8px;
        }

        .darjeeling-place-content h3 {
          margin: 0;
          font-size: 21px;
        }

        .darjeeling-things {
          padding: 80px 7%;
        }

        .darjeeling-things-wrapper {
          position: relative;
        }

        .darjeeling-things-slider {
          display: flex;
          gap: 22px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          padding: 10px 2px 20px;
        }

        .darjeeling-things-slider::-webkit-scrollbar {
          display: none;
        }

        .darjeeling-thing-card {
          flex: 0 0 calc((100% - 44px) / 3);
          min-width: 0;
          border: 1px solid #eee;
          border-radius: 14px;
          padding: 25px;
          background: white;
          box-shadow: 0 5px 18px rgba(0,0,0,0.06);
        }

        .darjeeling-thing-category {
          font-size: 12px;
          color: #777;
          margin-bottom: 12px;
        }

        .darjeeling-thing-card h3 {
          margin: 0 0 15px;
          font-size: 20px;
        }

        .darjeeling-rating {
          font-size: 14px;
          margin-bottom: 12px;
        }

        .darjeeling-reviews {
          color: #777;
        }

        .darjeeling-price {
          font-weight: 700;
          font-size: 18px;
          margin-top: 18px;
        }

        .darjeeling-slider-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 25px;
        }

        .darjeeling-slider-buttons button {
          width: 45px;
          height: 45px;
          border: none;
          border-radius: 50%;
          background: #222;
          color: white;
          font-size: 20px;
          cursor: pointer;
        }

        .darjeeling-faq {
          padding: 80px 15%;
          background: #fafafa;
        }

        .darjeeling-faq-list {
          max-width: 900px;
          margin: auto;
        }

        .darjeeling-faq-item {
          background: white;
          border-bottom: 1px solid #eee;
          padding: 20px 24px;
        }

        .darjeeling-faq-item summary {
          cursor: pointer;
          font-size: 17px;
          font-weight: 600;
          list-style: none;
        }

        .darjeeling-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .darjeeling-faq-item summary::after {
          content: "+";
          float: right;
          font-size: 22px;
        }

        .darjeeling-faq-item[open] summary::after {
          content: "−";
        }

        .darjeeling-faq-answer {
          padding-top: 14px;
          color: #666;
          line-height: 1.7;
          font-size: 15px;
        }

        .darjeeling-tips {
          padding: 80px 7%;
        }

        .darjeeling-tips-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .darjeeling-tip-card {
          padding: 25px 18px;
          border: 1px solid #eee;
          border-radius: 14px;
          text-align: center;
          background: white;
        }

        .darjeeling-tip-card h3 {
          margin: 0 0 10px;
          font-size: 17px;
        }

        .darjeeling-tip-card p {
          margin: 0;
          color: #777;
          font-size: 14px;
          line-height: 1.5;
        }

        .darjeeling-footer {
          background: #181818;
          color: white;
          padding: 60px 7% 25px;
        }

        .darjeeling-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
        }

        .darjeeling-footer h3 {
          margin-top: 0;
          margin-bottom: 18px;
        }

        .darjeeling-footer p {
          color: #aaa;
          line-height: 1.7;
          font-size: 14px;
        }

        .darjeeling-footer a {
          display: block;
          text-decoration: none;
          color: #aaa;
          margin-bottom: 10px;
          font-size: 14px;
        }

        .darjeeling-footer a:hover {
          color: white;
        }

        .darjeeling-footer-bottom {
          border-top: 1px solid #333;
          margin-top: 45px;
          padding-top: 20px;
          text-align: center;
          color: #888;
          font-size: 13px;
        }

        @media (max-width: 1000px) {
          .darjeeling-places-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .darjeeling-thing-card {
            flex: 0 0 calc((100% - 22px) / 2);
          }

          .darjeeling-tips-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .darjeeling-footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .darjeeling-topbar {
            padding: 0 5%;
          }

          .darjeeling-hero {
            height: 430px;
          }

          .darjeeling-hero-content {
            padding: 40px 6%;
          }

          .darjeeling-hero-content h1 {
            font-size: 45px;
          }

          .darjeeling-section-heading h2 {
            font-size: 30px;
          }

          .darjeeling-about,
          .darjeeling-places,
          .darjeeling-things,
          .darjeeling-tips {
            padding: 60px 6%;
          }

          .darjeeling-places-grid {
            grid-template-columns: 1fr;
          }

          .darjeeling-thing-card {
            flex: 0 0 100%;
          }

          .darjeeling-faq {
            padding: 60px 6%;
          }

          .darjeeling-tips-grid {
            grid-template-columns: 1fr;
          }

          .darjeeling-footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* TOP BAR */}
      <div className="darjeeling-topbar">
        <div className="darjeeling-logo">TravelMate</div>

        <Link to="/destinations" className="darjeeling-back">
          ← Back to Destinations
        </Link>
      </div>

      {/* HERO */}
      <section className="darjeeling-hero">
        <div className="darjeeling-hero-content">
          <h1>Darjeeling</h1>
          <p>West Bengal, India</p>
          <p>Tea gardens, Himalayan views and unforgettable mountain experiences.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="darjeeling-about">
        <div className="darjeeling-section-heading">
          <span>ABOUT DARJEELING</span>
          <h2>Discover the Queen of the Hills</h2>
        </div>

        <div className="darjeeling-about-content">
          <p>
            Darjeeling is a beautiful hill town in West Bengal, famous for its
            stunning views of the Himalayas, peaceful surroundings and
            world-famous tea gardens.
          </p>

          <p>
            The town is known for attractions such as Tiger Hill, Batasia
            Loop, the Darjeeling Himalayan Railway and the Himalayan
            Mountaineering Institute. Its pleasant mountain atmosphere makes
            it a popular destination for travellers.
          </p>

          <p>
            From enjoying a cup of Darjeeling tea to exploring colourful
            markets, monasteries and scenic viewpoints, the town offers a
            relaxing combination of nature, culture and adventure.
          </p>
        </div>
      </section>

      {/* BEAUTIFUL PLACES */}
      <section className="darjeeling-places">
        <div className="darjeeling-section-heading">
          <span>EXPLORE DARJEELING</span>
          <h2>Beautiful places to visit</h2>
          <p>Explore the most popular attractions around Darjeeling.</p>
        </div>

        <div className="darjeeling-places-grid">
          {beautifulPlaces.map((place) => (
            <div className="darjeeling-place-card" key={place.name}>
              <img src={place.image} alt={place.name} />

              <div className="darjeeling-place-content">
                <div className="darjeeling-place-category">
                  {place.category}
                </div>

                <h3>{place.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="darjeeling-things">
        <div className="darjeeling-section-heading">
          <span>THINGS TO DO</span>
          <h2>Experiences you can enjoy</h2>
          <p>Make your Darjeeling trip more memorable.</p>
        </div>

        <div className="darjeeling-things-wrapper">
          <div
            className="darjeeling-things-slider"
            ref={thingsSliderRef}
          >
            {thingsToDo.map((thing) => (
              <div className="darjeeling-thing-card" key={thing.title}>
                <div className="darjeeling-thing-category">
                  {thing.category}
                </div>

                <h3>{thing.title}</h3>

                <div className="darjeeling-rating">
                  ⭐ {thing.rating}{" "}
                  <span className="darjeeling-reviews">
                    ({thing.reviews} reviews)
                  </span>
                </div>

                <div className="darjeeling-price">
                  {thing.price}
                </div>
              </div>
            ))}
          </div>

          <div className="darjeeling-slider-buttons">
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
      <section className="darjeeling-faq">
        <div className="darjeeling-section-heading">
          <span>FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before visiting Darjeeling.</p>
        </div>

        <div className="darjeeling-faq-list">

          <details className="darjeeling-faq-item">
            <summary>What is Darjeeling famous for?</summary>
            <div className="darjeeling-faq-answer">
              Darjeeling is famous for its tea gardens, Himalayan views,
              Toy Train, Tiger Hill and beautiful mountain scenery.
            </div>
          </details>

          <details className="darjeeling-faq-item">
            <summary>What is the best time to visit Darjeeling?</summary>
            <div className="darjeeling-faq-answer">
              March to May and October to November are generally popular
              periods for pleasant weather and sightseeing.
            </div>
          </details>

          <details className="darjeeling-faq-item">
            <summary>How many days are enough for Darjeeling?</summary>
            <div className="darjeeling-faq-answer">
              Around 3 to 4 days can be enough to explore the major
              attractions and enjoy the local experience.
            </div>
          </details>

          <details className="darjeeling-faq-item">
            <summary>What are the best places to visit in Darjeeling?</summary>
            <div className="darjeeling-faq-answer">
              Tiger Hill, Batasia Loop, Darjeeling Himalayan Railway,
              tea gardens, Peace Pagoda and Rock Garden are popular choices.
            </div>
          </details>

          <details className="darjeeling-faq-item">
            <summary>Is Darjeeling good for a family trip?</summary>
            <div className="darjeeling-faq-answer">
              Yes. Darjeeling has scenic attractions, gardens, viewpoints,
              the Toy Train and family-friendly sightseeing options.
            </div>
          </details>

          <details className="darjeeling-faq-item">
            <summary>Is Darjeeling good for couples?</summary>
            <div className="darjeeling-faq-answer">
              Darjeeling's scenic viewpoints, peaceful surroundings and
              mountain atmosphere make it a popular destination for couples.
            </div>
          </details>

          <details className="darjeeling-faq-item">
            <summary>What food should I try in Darjeeling?</summary>
            <div className="darjeeling-faq-answer">
              Visitors can try momos, thukpa, traditional Himalayan dishes
              and locally grown Darjeeling tea.
            </div>
          </details>

          <details className="darjeeling-faq-item">
            <summary>Is Darjeeling good for trekking?</summary>
            <div className="darjeeling-faq-answer">
              Yes. Darjeeling and the surrounding Himalayan region offer
              several trekking opportunities, including routes towards
              Sandakphu.
            </div>
          </details>

          <details className="darjeeling-faq-item">
            <summary>Can I see the Himalayas from Darjeeling?</summary>
            <div className="darjeeling-faq-answer">
              Yes. On clear days, several viewpoints around Darjeeling offer
              beautiful views of the Himalayan mountain ranges.
            </div>
          </details>

          <details className="darjeeling-faq-item">
            <summary>What should I pack for Darjeeling?</summary>
            <div className="darjeeling-faq-answer">
              Carry warm layers, comfortable shoes, sunscreen and
              weather-appropriate clothing for sightseeing and outdoor
              activities.
            </div>
          </details>

        </div>
      </section>

      {/* TIPS */}
      <section className="darjeeling-tips">
        <div className="darjeeling-section-heading">
          <span>TRAVEL TIPS</span>
          <h2>Important tips for Darjeeling</h2>
        </div>

        <div className="darjeeling-tips-grid">

          <div className="darjeeling-tip-card">
            <h3>Check Weather</h3>
            <p>
              Mountain weather can change quickly, so check the forecast
              before travelling.
            </p>
          </div>

          <div className="darjeeling-tip-card">
            <h3>Carry Warm Layers</h3>
            <p>
              Keep a light jacket or warm layers with you, especially for
              early mornings and evenings.
            </p>
          </div>

          <div className="darjeeling-tip-card">
            <h3>Wear Good Shoes</h3>
            <p>
              Comfortable footwear is useful for walking around hilly areas
              and viewpoints.
            </p>
          </div>

          <div className="darjeeling-tip-card">
            <h3>Stay Hydrated</h3>
            <p>
              Carry water during sightseeing and trekking activities.
            </p>
          </div>

          <div className="darjeeling-tip-card">
            <h3>Respect Nature</h3>
            <p>
              Avoid littering and help keep the Himalayan environment clean.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="darjeeling-footer">
        <div className="darjeeling-footer-grid">

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
          </div>

        </div>

        <div className="darjeeling-footer-bottom">
          © 2026 TravelMate. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Darjeeling;