import { useRef } from "react";
import { Link } from "react-router-dom";

function Kerala() {
  const thingsSliderRef = useRef(null);

  const beautifulPlaces = [
    {
      name: "Alleppey Backwaters",
      category: "Natural Attraction",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Munnar",
      category: "Hill Station",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Varkala Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kovalam Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Fort Kochi",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Thekkady",
      category: "Wildlife",
      image:
        "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Wayanad",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Athirappilly Waterfalls",
      category: "Waterfall",
      image:
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kumarakom",
      category: "Backwaters",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Bekal Fort",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1590050752117-23a9d2e5d7a3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Marari Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Poovar Island",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Silent Valley National Park",
      category: "Wildlife",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Cherai Beach",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Mattancherry Palace",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const thingsToDo = [
    {
      title: "Alleppey Houseboat Cruise",
      rating: "4.8",
      reviews: "1,245",
      price: "₹2,500/person",
      category: "Backwater Experience",
    },
    {
      title: "Munnar Tea Garden Tour",
      rating: "4.7",
      reviews: "2,130",
      price: "₹999/person",
      category: "Nature & Culture",
    },
    {
      title: "Kerala Wildlife Safari",
      rating: "4.6",
      reviews: "985",
      price: "₹1,499/person",
      category: "Wildlife",
    },
    {
      title: "Kathakali Cultural Show",
      rating: "4.8",
      reviews: "1,120",
      price: "₹699/person",
      category: "Culture",
    },
    {
      title: "Kerala Food Experience",
      rating: "4.5",
      reviews: "764",
      price: "₹599/person",
      category: "Food & Culture",
    },
    {
      title: "Varkala Beach Experience",
      rating: "4.8",
      reviews: "1,540",
      price: "₹799/person",
      category: "Beach Activity",
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
    <div className="kerala-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .kerala-page {
          font-family: Arial, sans-serif;
          color: #222;
          background: #fff;
        }

        /* TOP BAR */
        .kerala-topbar {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 7%;
          background: #fff;
          border-bottom: 1px solid #eee;
        }

        .kerala-logo {
          font-size: 25px;
          font-weight: 700;
          color: #111;
          text-decoration: none;
        }

        .kerala-back {
          text-decoration: none;
          color: #333;
          font-size: 15px;
          font-weight: 600;
        }

        .kerala-back:hover {
          color: #777;
        }

        /* HERO */
        .kerala-hero {
          height: 500px;
          background-image:
            linear-gradient(
              rgba(0, 0, 0, 0.45),
              rgba(0, 0, 0, 0.45)
            ),
            url("https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1800&q=85");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
        }

        .kerala-hero-content {
          padding: 60px 7%;
          color: white;
        }

        .kerala-hero-content h1 {
          font-size: 64px;
          margin: 0 0 10px;
          font-weight: 700;
        }

        .kerala-hero-content p {
          font-size: 20px;
          margin: 6px 0;
        }

        /* COMMON HEADING */
        .kerala-section-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .kerala-section-heading span {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #777;
        }

        .kerala-section-heading h2 {
          font-size: 36px;
          margin: 10px 0;
        }

        .kerala-section-heading p {
          color: #777;
          margin: 0;
          font-size: 16px;
        }

        /* ABOUT */
        .kerala-about {
          padding: 80px 8%;
        }

        .kerala-about-content {
          max-width: 1000px;
          margin: auto;
          text-align: center;
        }

        .kerala-about-content p {
          color: #666;
          line-height: 1.8;
          font-size: 16px;
          margin-bottom: 18px;
        }

        /* BEAUTIFUL PLACES */
        .kerala-places {
          padding: 80px 7%;
          background: #fafafa;
        }

        .kerala-places-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .kerala-place-card {
          background: white;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .kerala-place-card:hover {
          transform: translateY(-6px);
        }

        .kerala-place-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          display: block;
        }

        .kerala-place-content {
          padding: 20px;
        }

        .kerala-place-category {
          display: inline-block;
          font-size: 12px;
          color: #777;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .kerala-place-content h3 {
          margin: 0;
          font-size: 21px;
        }

        /* THINGS TO DO */
        .kerala-things {
          padding: 80px 7%;
        }

        .kerala-things-slider-wrapper {
          position: relative;
        }

        .kerala-things-slider {
          display: flex;
          gap: 22px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          padding: 5px;
        }

        .kerala-things-slider::-webkit-scrollbar {
          display: none;
        }

        .kerala-thing-card {
          flex: 0 0 calc((100% - 44px) / 3);
          background: white;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid #eee;
          box-shadow: 0 5px 18px rgba(0, 0, 0, 0.07);
        }

        .kerala-thing-image {
          height: 210px;
          background-image:
            linear-gradient(
              rgba(0, 0, 0, 0.25),
              rgba(0, 0, 0, 0.25)
            ),
            url("https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80");
          background-size: cover;
          background-position: center;
        }

        .kerala-thing-content {
          padding: 20px;
        }

        .kerala-thing-content h3 {
          margin: 0 0 10px;
          font-size: 20px;
        }

        .kerala-rating {
          font-size: 14px;
          margin-bottom: 10px;
          color: #555;
        }

        .kerala-thing-category {
          font-size: 13px;
          color: #777;
          margin-bottom: 12px;
        }

        .kerala-price {
          font-size: 16px;
          font-weight: 700;
        }

        .kerala-arrow {
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

        .kerala-arrow-left {
          left: -22px;
        }

        .kerala-arrow-right {
          right: -22px;
        }

        /* FAQ */
        .kerala-faq {
          padding: 80px 15%;
          background: #fafafa;
        }

        .kerala-faq-list {
          max-width: 900px;
          margin: auto;
        }

        .kerala-faq-item {
          background: white;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          margin-bottom: 12px;
          overflow: hidden;
        }

        .kerala-faq-item summary {
          padding: 20px;
          cursor: pointer;
          font-weight: 600;
          list-style: none;
          position: relative;
        }

        .kerala-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .kerala-faq-item summary::after {
          content: "+";
          position: absolute;
          right: 20px;
          font-size: 22px;
        }

        .kerala-faq-item[open] summary::after {
          content: "−";
        }

        .kerala-faq-answer {
          padding: 0 20px 20px;
          color: #666;
          line-height: 1.7;
          font-size: 15px;
        }

        /* TIPS */
        .kerala-tips {
          padding: 80px 7%;
        }

        .kerala-tips-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .kerala-tip-card {
          padding: 25px 18px;
          border: 1px solid #eee;
          border-radius: 12px;
          text-align: center;
          background: white;
        }

        .kerala-tip-card h3 {
          font-size: 17px;
          margin: 0 0 10px;
        }

        .kerala-tip-card p {
          color: #777;
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
        }

        /* FOOTER */
        .kerala-footer {
          background: #111;
          color: white;
          padding: 60px 7% 25px;
        }

        .kerala-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
        }

        .kerala-footer h3 {
          margin-top: 0;
          margin-bottom: 18px;
        }

        .kerala-footer p {
          color: #aaa;
          line-height: 1.7;
          font-size: 14px;
        }

        .kerala-footer a {
          display: block;
          color: #aaa;
          text-decoration: none;
          margin-bottom: 10px;
          font-size: 14px;
        }

        .kerala-footer a:hover {
          color: white;
        }

        .kerala-footer-bottom {
          border-top: 1px solid #333;
          margin-top: 40px;
          padding-top: 20px;
          text-align: center;
          color: #888;
          font-size: 13px;
        }

        @media (max-width: 1000px) {
          .kerala-places-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .kerala-thing-card {
            flex: 0 0 calc((100% - 22px) / 2);
          }

          .kerala-tips-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .kerala-footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .kerala-topbar {
            padding: 0 5%;
          }

          .kerala-hero {
            height: 420px;
          }

          .kerala-hero-content {
            padding: 40px 7%;
          }

          .kerala-hero-content h1 {
            font-size: 46px;
          }

          .kerala-section-heading h2 {
            font-size: 29px;
          }

          .kerala-places-grid {
            grid-template-columns: 1fr;
          }

          .kerala-thing-card {
            flex: 0 0 100%;
          }

          .kerala-arrow-left {
            left: 5px;
          }

          .kerala-arrow-right {
            right: 5px;
          }

          .kerala-faq {
            padding: 70px 7%;
          }

          .kerala-tips-grid {
            grid-template-columns: 1fr;
          }

          .kerala-footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* TOP BAR */}
      <div className="kerala-topbar">
        <Link to="/" className="kerala-logo">
          TravelMate
        </Link>

        <Link to="/destinations" className="kerala-back">
          ← Back to Destinations
        </Link>
      </div>

      {/* HERO */}
      <section className="kerala-hero">
        <div className="kerala-hero-content">
          <h1>Kerala</h1>
          <p>God's Own Country</p>
          <p>📍 Kerala, India</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="kerala-about">
        <div className="kerala-section-heading">
          <span>ABOUT KERALA</span>
          <h2>Welcome to God's Own Country</h2>
        </div>

        <div className="kerala-about-content">
          <p>
            Kerala is a beautiful state in southern India known for its
            peaceful backwaters, lush green landscapes, beaches, hill
            stations and rich cultural traditions.
          </p>

          <p>
            From the tea gardens of Munnar to the peaceful houseboats of
            Alleppey, Kerala offers a wide variety of experiences for
            travellers looking for nature, relaxation and adventure.
          </p>

          <p>
            Kerala is also famous for its traditional food, Ayurveda,
            Kathakali performances and warm hospitality, making it a
            memorable destination for different types of travellers.
          </p>
        </div>
      </section>

      {/* BEAUTIFUL PLACES */}
      <section className="kerala-places">
        <div className="kerala-section-heading">
          <span>EXPLORE KERALA</span>
          <h2>Beautiful Places to Visit</h2>
          <p>Discover some of Kerala's most popular destinations.</p>
        </div>

        <div className="kerala-places-grid">
          {beautifulPlaces.map((place, index) => (
            <div className="kerala-place-card" key={index}>
              <img src={place.image} alt={place.name} />

              <div className="kerala-place-content">
                <span className="kerala-place-category">
                  {place.category}
                </span>

                <h3>{place.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="kerala-things">
        <div className="kerala-section-heading">
          <span>EXPERIENCES</span>
          <h2>Things to Do in Kerala</h2>
          <p>Enjoy unforgettable experiences during your Kerala trip.</p>
        </div>

        <div className="kerala-things-slider-wrapper">
          <button
            className="kerala-arrow kerala-arrow-left"
            onClick={() => moveThingsSlider(-1)}
          >
            ←
          </button>

          <div className="kerala-things-slider" ref={thingsSliderRef}>
            {thingsToDo.map((thing, index) => (
              <div className="kerala-thing-card" key={index}>
                <div className="kerala-thing-image"></div>

                <div className="kerala-thing-content">
                  <h3>{thing.title}</h3>

                  <div className="kerala-rating">
                    ⭐ {thing.rating} · {thing.reviews} reviews
                  </div>

                  <div className="kerala-thing-category">
                    {thing.category}
                  </div>

                  <div className="kerala-price">
                    {thing.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="kerala-arrow kerala-arrow-right"
            onClick={() => moveThingsSlider(1)}
          >
            →
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="kerala-faq">
        <div className="kerala-section-heading">
          <span>TRAVEL GUIDE</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before visiting Kerala.</p>
        </div>

        <div className="kerala-faq-list">
          <details className="kerala-faq-item">
            <summary>What is Kerala famous for?</summary>
            <div className="kerala-faq-answer">
              Kerala is famous for its backwaters, beaches, hill stations,
              Ayurveda, wildlife and rich cultural traditions.
            </div>
          </details>

          <details className="kerala-faq-item">
            <summary>Which is the best time to visit Kerala?</summary>
            <div className="kerala-faq-answer">
              October to March is generally considered a comfortable period
              for exploring Kerala.
            </div>
          </details>

          <details className="kerala-faq-item">
            <summary>How many days are enough for Kerala?</summary>
            <div className="kerala-faq-answer">
              A trip of around 5 to 7 days can cover several major
              attractions comfortably.
            </div>
          </details>

          <details className="kerala-faq-item">
            <summary>What are the best places to visit in Kerala?</summary>
            <div className="kerala-faq-answer">
              Munnar, Alleppey, Thekkady, Kochi, Varkala and Wayanad are
              among the popular places to explore.
            </div>
          </details>

          <details className="kerala-faq-item">
            <summary>Is Kerala good for a family trip?</summary>
            <div className="kerala-faq-answer">
              Yes. Kerala offers beaches, nature, wildlife, cultural
              experiences and relaxing activities suitable for families.
            </div>
          </details>

          <details className="kerala-faq-item">
            <summary>Is a houseboat stay worth trying?</summary>
            <div className="kerala-faq-answer">
              Yes. Staying on a traditional houseboat is one of the popular
              ways to experience Kerala's backwaters.
            </div>
          </details>

          <details className="kerala-faq-item">
            <summary>What food should I try in Kerala?</summary>
            <div className="kerala-faq-answer">
              Appam, Kerala sadya, puttu, kadala curry and traditional
              seafood are popular choices.
            </div>
          </details>

          <details className="kerala-faq-item">
            <summary>Is Kerala suitable for nature lovers?</summary>
            <div className="kerala-faq-answer">
              Yes. Kerala has forests, waterfalls, tea plantations,
              backwaters, beaches and wildlife destinations.
            </div>
          </details>

          <details className="kerala-faq-item">
            <summary>Can I visit Kerala on a budget?</summary>
            <div className="kerala-faq-answer">
              Yes. Budget accommodation, local transport and planned
              activities can help keep the overall trip affordable.
            </div>
          </details>

          <details className="kerala-faq-item">
            <summary>What should I pack for Kerala?</summary>
            <div className="kerala-faq-answer">
              Carry comfortable clothes, walking shoes, sunscreen,
              rain protection and any personal essentials.
            </div>
          </details>
        </div>
      </section>

      {/* TIPS */}
      <section className="kerala-tips">
        <div className="kerala-section-heading">
          <span>TRAVEL TIPS</span>
          <h2>Important Tips for Kerala</h2>
        </div>

        <div className="kerala-tips-grid">
          <div className="kerala-tip-card">
            <h3>🌦 Check Weather</h3>
            <p>
              Check the weather before planning outdoor activities.
            </p>
          </div>

          <div className="kerala-tip-card">
            <h3>👕 Light Clothes</h3>
            <p>
              Carry comfortable and breathable clothes for most places.
            </p>
          </div>

          <div className="kerala-tip-card">
            <h3>👟 Good Shoes</h3>
            <p>
              Comfortable footwear is useful for sightseeing and walks.
            </p>
          </div>

          <div className="kerala-tip-card">
            <h3>🧴 Essentials</h3>
            <p>
              Carry sunscreen, mosquito repellent and basic travel
              essentials.
            </p>
          </div>

          <div className="kerala-tip-card">
            <h3>🌿 Respect Nature</h3>
            <p>
              Avoid littering and help keep Kerala's natural places clean.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="kerala-footer">
        <div className="kerala-footer-grid">
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
          </div>
        </div>

        <div className="kerala-footer-bottom">
          © 2026 TravelMate. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Kerala;