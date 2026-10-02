import { useRef } from "react";
import { Link } from "react-router-dom";

function Manali() {
  const thingsSliderRef = useRef(null);

  const beautifulPlaces = [
    {
      name: "Solang Valley",
      category: "Adventure",
      image:
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=900&q=80",
      description:
        "A beautiful valley famous for snow activities, paragliding and mountain views.",
    },
    {
      name: "Hadimba Devi Temple",
      category: "Religious Site",
      image:
        "https://images.unsplash.com/photo-1623059517160-7c4b6e6f4f0b?auto=format&fit=crop&w=900&q=80",
      description:
        "An ancient wooden temple surrounded by tall cedar trees and peaceful nature.",
    },
    {
      name: "Beas River",
      category: "Natural Attraction",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      description:
        "Enjoy the peaceful atmosphere and beautiful views beside the flowing Beas River.",
    },
    {
      name: "Rohtang Pass",
      category: "Mountain Pass",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
      description:
        "A famous high-altitude destination known for snow-covered mountains and scenic views.",
    },
    {
      name: "Old Manali",
      category: "Local Area",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
      description:
        "A charming area filled with cafés, small shops, wooden houses and relaxed vibes.",
    },
    {
      name: "Mall Road",
      category: "Shopping",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80",
      description:
        "The lively shopping area of Manali with local products, food and souvenirs.",
    },
    {
      name: "Vashisht Hot Springs",
      category: "Natural Attraction",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
      description:
        "Natural hot water springs located near the ancient Vashisht Temple.",
    },
    {
      name: "Jogini Waterfalls",
      category: "Waterfall",
      image:
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=80",
      description:
        "A scenic waterfall surrounded by greenery and peaceful walking trails.",
    },
    {
      name: "Manu Temple",
      category: "Religious Site",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
      description:
        "A peaceful temple dedicated to Sage Manu, located in the Old Manali area.",
    },
    {
      name: "Nehru Kund",
      category: "Natural Attraction",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
      description:
        "A natural spring known for its clear water and beautiful mountain surroundings.",
    },
    {
      name: "Van Vihar",
      category: "Nature Park",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
      description:
        "A peaceful forest park perfect for relaxing walks under tall deodar trees.",
    },
    {
      name: "Arjun Gufa",
      category: "Adventure",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
      description:
        "A natural cave connected with mythology and surrounded by beautiful landscapes.",
    },
    {
      name: "Naggar Castle",
      category: "Historical Site",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=80",
      description:
        "A historic wooden and stone castle offering stunning views of the Kullu Valley.",
    },
    {
      name: "Gulaba",
      category: "Mountain Destination",
      image:
        "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=900&q=80",
      description:
        "A beautiful snow-covered destination located on the way to Rohtang Pass.",
    },
    {
      name: "Sethan Village",
      category: "Village Experience",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
      description:
        "A peaceful Himalayan village known for snow activities and traditional surroundings.",
    },
  ];

  const thingsToDo = [
    {
      title: "Paragliding in Solang Valley",
      rating: "4.8",
      reviews: "1,245",
      price: "₹1,500 per person",
      category: "Adventure",
      image:
        "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Rohtang Pass Snow Adventure",
      rating: "4.7",
      reviews: "2,130",
      price: "₹2,499 per person",
      category: "Outdoor Activity",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Manali Local Sightseeing Tour",
      rating: "4.6",
      reviews: "985",
      price: "₹999 per person",
      category: "Sightseeing",
      image:
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Old Manali Café Walk",
      rating: "4.5",
      reviews: "764",
      price: "₹699 per person",
      category: "Food & Culture",
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Beas River Riverside Walk",
      rating: "4.7",
      reviews: "1,120",
      price: "₹499 per person",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Trekking near Jogini Waterfall",
      rating: "4.8",
      reviews: "1,540",
      price: "₹1,200 per person",
      category: "Trekking",
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
    <div className="manali-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .manali-page {
          min-height: 100vh;
          background: #ffffff;
          color: #073b27;
          font-family: Arial, sans-serif;
        }

        .manali-container {
          width: 90%;
          max-width: 1400px;
          margin: auto;
        }

        /* NAVBAR */

        .manali-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 0;
          border-bottom: 1px solid #e4e4e4;
        }

        .manali-logo {
          font-size: 28px;
          font-weight: 800;
          color: #073b27;
          text-decoration: none;
        }

        .manali-back-btn {
          text-decoration: none;
          color: #073b27;
          border: 1px solid #073b27;
          padding: 10px 18px;
          border-radius: 25px;
          font-size: 14px;
        }

        .manali-back-btn:hover {
          background: #073b27;
          color: white;
        }

        /* HERO */

        .manali-hero {
          margin-top: 28px;
          position: relative;
          width: 100%;
          height: 520px;
          border-radius: 20px;
          overflow: hidden;
          background: #ddd;
        }

        .manali-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .manali-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.65),
            transparent 60%
          );
        }

        .manali-hero-content {
          position: absolute;
          left: 35px;
          bottom: 35px;
          color: white;
        }

        .manali-hero-content h1 {
          font-size: 58px;
          margin: 0 0 10px;
          font-weight: 800;
        }

        .manali-hero-content p {
          margin: 0;
          font-size: 18px;
        }

        /* INTRODUCTION */

        .manali-introduction {
          padding: 45px 0 35px;
        }

        .manali-introduction h2 {
          font-size: 32px;
          margin-bottom: 15px;
          color: #073b27;
        }

        .manali-introduction p {
          max-width: 1050px;
          color: #555;
          line-height: 1.8;
          font-size: 16px;
          margin-bottom: 12px;
        }

        /* SECTION HEADINGS */

        .manali-section-heading {
          margin: 30px 0 25px;
        }

        .manali-section-heading h2 {
          font-size: 32px;
          margin: 0 0 10px;
          color: #073b27;
        }

        .manali-section-heading p {
          margin: 0;
          color: #555;
          font-size: 16px;
        }

        /* 15 BEAUTIFUL PLACES */

        .manali-places-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
        }

        .manali-place-card {
          overflow: hidden;
          border-radius: 15px;
          background: white;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.10);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .manali-place-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.16);
        }

        .manali-place-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }

        .manali-place-content {
          padding: 18px;
        }

        .manali-place-category {
          color: #777;
          font-size: 13px;
          margin-bottom: 8px;
        }

        .manali-place-content h3 {
          margin: 0 0 10px;
          color: #073b27;
          font-size: 22px;
        }

        .manali-place-content p {
          margin: 0;
          color: #666;
          line-height: 1.5;
          font-size: 14px;
        }

        /* THINGS TO DO */

        .manali-things-section {
          margin-top: 65px;
          padding-bottom: 60px;
        }

        .manali-things-heading-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .manali-things-arrows {
          display: flex;
          gap: 12px;
        }

        .manali-arrow {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid #073b27;
          background: white;
          color: #073b27;
          font-size: 25px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.25s ease;
        }

        .manali-arrow:hover {
          background: #073b27;
          color: white;
        }

        .manali-things-viewport {
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          scroll-snap-type: x mandatory;
        }

        .manali-things-viewport::-webkit-scrollbar {
          display: none;
        }

        .manali-things-track {
          display: flex;
          gap: 20px;
          width: max-content;
        }

        .manali-thing-card {
          flex: 0 0 calc((100vw - 190px) / 3);
          max-width: 430px;
          min-width: 280px;
          scroll-snap-align: start;
        }

        .manali-thing-image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 14px;
        }

        .manali-thing-image {
          width: 100%;
          height: 260px;
          object-fit: cover;
          display: block;
        }

        .manali-heart {
          position: absolute;
          right: 14px;
          top: 14px;
          width: 43px;
          height: 43px;
          border: none;
          border-radius: 50%;
          background: white;
          font-size: 23px;
          cursor: pointer;
        }

        .manali-thing-content {
          padding-top: 12px;
        }

        .manali-thing-content h3 {
          margin: 0 0 10px;
          color: #073b27;
          font-size: 21px;
          line-height: 1.3;
        }

        .manali-rating {
          color: #444;
          margin-bottom: 9px;
          font-size: 14px;
        }

        .manali-rating span {
          color: #00843d;
          font-size: 17px;
          letter-spacing: 2px;
        }

        .manali-thing-category {
          color: #666;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .manali-price {
          color: #073b27;
          font-weight: 700;
          font-size: 15px;
        }

        /* =========================
           FAQ SECTION
        ========================= */

        .manali-faq-section {
          margin-top: 20px;
          padding: 55px 0 20px;
          border-top: 1px solid #eeeeee;
        }

        .manali-faq-heading {
          margin-bottom: 28px;
        }

        .manali-faq-heading h2 {
          margin: 0 0 10px;
          font-size: 32px;
          color: #073b27;
        }

        .manali-faq-heading p {
          margin: 0;
          color: #666;
          font-size: 16px;
        }

        .manali-faq-list {
          max-width: 1000px;
        }

        .manali-faq-item {
          border-bottom: 1px solid #dddddd;
        }

        .manali-faq-item summary {
          list-style: none;
          cursor: pointer;
          padding: 20px 5px;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;

          font-size: 17px;
          font-weight: 600;
          color: #073b27;
        }

        .manali-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .manali-faq-item summary::after {
          content: "+";

          min-width: 30px;
          height: 30px;

          border: 1px solid #073b27;
          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 20px;
          font-weight: 400;
        }

        .manali-faq-item[open] summary::after {
          content: "−";
        }

        .manali-faq-answer {
          padding: 0 55px 20px 5px;
          color: #666;
          font-size: 14px;
          line-height: 1.7;
        }

        /* =========================
           5 TRAVEL TIPS
        ========================= */

        .manali-tips-section {
          margin-top: 60px;
          padding: 45px 0;
        }

        .manali-tips-heading h2 {
          margin: 0 0 10px;
          font-size: 32px;
          color: #073b27;
        }

        .manali-tips-heading p {
          margin: 0 0 28px;
          color: #666;
        }

        .manali-tips-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 18px;
        }

        .manali-tip-card {
          padding: 24px 18px;

          border: 1px solid #e3e3e3;
          border-radius: 16px;

          background: #fafcfb;

          transition: 0.25s ease;
        }

        .manali-tip-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .manali-tip-number {
          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #073b27;
          color: white;

          font-weight: 700;
          margin-bottom: 15px;
        }

        .manali-tip-card h3 {
          margin: 0 0 9px;
          color: #073b27;
          font-size: 17px;
        }

        .manali-tip-card p {
          margin: 0;
          color: #666;
          font-size: 13px;
          line-height: 1.6;
        }

        /* =========================
           FOOTER
        ========================= */

        .manali-footer {
          margin-top: 30px;
          background: #073b27;
          color: white;
          padding: 50px 0 25px;
        }

        .manali-footer-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
        }

        .manali-footer-brand h2 {
          margin: 0 0 12px;
          font-size: 28px;
        }

        .manali-footer-brand p {
          max-width: 320px;
          margin: 0;
          color: #d5e3dc;
          font-size: 14px;
          line-height: 1.7;
        }

        .manali-footer-column h3 {
          margin: 0 0 15px;
          font-size: 16px;
        }

        .manali-footer-column a {
          display: block;
          margin-bottom: 10px;
          color: #d5e3dc;
          text-decoration: none;
          font-size: 14px;
        }

        .manali-footer-column a:hover {
          color: white;
        }

        .manali-footer-bottom {
          margin-top: 40px;
          padding-top: 20px;

          border-top: 1px solid rgba(255, 255, 255, 0.2);

          display: flex;
          justify-content: space-between;
          align-items: center;

          color: #c8d8d0;
          font-size: 13px;
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {
          .manali-places-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .manali-thing-card {
            flex: 0 0 calc((100vw - 130px) / 2);
          }

          .manali-hero-content h1 {
            font-size: 45px;
          }

          .manali-tips-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .manali-footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .manali-container {
            width: 92%;
          }

          .manali-topbar {
            padding: 16px 0;
          }

          .manali-logo {
            font-size: 22px;
          }

          .manali-hero {
            height: 350px;
            border-radius: 14px;
          }

          .manali-hero-content {
            left: 20px;
            bottom: 22px;
          }

          .manali-hero-content h1 {
            font-size: 34px;
          }

          .manali-hero-content p {
            font-size: 14px;
          }

          .manali-introduction h2,
          .manali-section-heading h2 {
            font-size: 26px;
          }

          .manali-places-grid {
            grid-template-columns: 1fr;
          }

          .manali-place-card img {
            height: 230px;
          }

          .manali-things-heading-row {
            align-items: flex-start;
            flex-direction: column;
          }

          .manali-thing-card {
            flex: 0 0 calc(100vw - 70px);
            min-width: 0;
          }

          .manali-thing-image {
            height: 240px;
          }

          .manali-faq-heading h2,
          .manali-tips-heading h2 {
            font-size: 26px;
          }

          .manali-faq-item summary {
            font-size: 15px;
          }

          .manali-faq-answer {
            padding-right: 10px;
          }

          .manali-tips-grid {
            grid-template-columns: 1fr;
          }

          .manali-footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .manali-footer-bottom {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
        }
      `}</style>

      <div className="manali-container">

        {/* TOP BAR */}

        <div className="manali-topbar">
          <Link to="/" className="manali-logo">
            TravelMate
          </Link>

          <Link to="/destinations" className="manali-back-btn">
            ← Back to Destinations
          </Link>
        </div>


        {/* HERO SECTION */}

        <section className="manali-hero">

          <img
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1800&q=90"
            alt="Beautiful Manali Mountains"
          />

          <div className="manali-hero-overlay"></div>

          <div className="manali-hero-content">
            <h1>Manali, India</h1>
            <p>
              Mountains, snow, valleys and unforgettable experiences.
            </p>
          </div>

        </section>


        {/* THEORY / INTRODUCTION */}

        <section className="manali-introduction">

          <h2>About Manali</h2>

          <p>
            Manali is a beautiful hill station located in the Kullu Valley
            of Himachal Pradesh. Surrounded by snow-covered mountains,
            green forests, peaceful rivers and scenic valleys, Manali is
            one of the most popular travel destinations in India.
          </p>

          <p>
            The destination is perfect for nature lovers, adventure
            enthusiasts, families, couples and people looking for a
            peaceful escape from busy city life. Visitors can enjoy
            activities such as trekking, skiing, paragliding, river
            rafting, sightseeing and exploring local cafés.
          </p>

          <p>
            From the peaceful streets of Old Manali to the snowy landscapes
            of Rohtang Pass, the town offers a combination of natural beauty,
            culture, adventure and relaxation.
          </p>

        </section>


        {/* EXACTLY 15 BEAUTIFUL PLACES */}

        <section className="manali-places-section">

          <div className="manali-section-heading">
            <h2>Beautiful Places in Manali</h2>

            <p>
              Explore the most popular attractions and hidden gems of Manali.
            </p>
          </div>


          <div className="manali-places-grid">
{beautifulPlaces.map((place, index) =>
  place.name === "Solang Valley" ? (
    <Link
      to="/experience/solang-adventure"
      className="manali-place-card"
      key={index}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
      }}
    >
      <img
        src={place.image}
        alt={place.name}
      />

      <div className="manali-place-content">
        <div className="manali-place-category">
          {place.category}
        </div>

        <h3>{place.name}</h3>

        <p>{place.description}</p>
      </div>
    </Link>
  ) : (
    <article
      className="manali-place-card"
      key={index}
    >
      <img
        src={place.image}
        alt={place.name}
      />

      <div className="manali-place-content">
        <div className="manali-place-category">
          {place.category}
        </div>

        <h3>{place.name}</h3>

        <p>{place.description}</p>
      </div>
    </article>
  )
)}
          </div>

        </section>


        {/* THINGS TO DO SECTION */}

        <section className="manali-things-section">

          <div className="manali-things-heading-row">

            <div className="manali-section-heading">

              <h2>Things to Do in Manali</h2>

              <p>
                Enjoy exciting activities and unforgettable experiences.
              </p>

            </div>


            <div className="manali-things-arrows">

              <button
                className="manali-arrow"
                onClick={() => moveThingsSlider(-1)}
                aria-label="Previous activities"
              >
                ←
              </button>

              <button
                className="manali-arrow"
                onClick={() => moveThingsSlider(1)}
                aria-label="Next activities"
              >
                →
              </button>

            </div>

          </div>


          <div
            className="manali-things-viewport"
            ref={thingsSliderRef}
          >

            <div className="manali-things-track">

              {thingsToDo.map((thing, index) => {
                const cardContent = (
                  <>
                    <div className="manali-thing-image-wrapper">
                      <img
                        src={thing.image}
                        alt={thing.title}
                        className="manali-thing-image"
                      />
                      <button
                        className="manali-heart"
                        aria-label="Add to favourites"
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                        }}
                      >
                        ♡
                      </button>
                    </div>

                    <div className="manali-thing-content">
                      <h3>{thing.title}</h3>
                      <div className="manali-rating">
                        {thing.rating}
                        <span> ●●●●● </span>
                        ({thing.reviews})
                      </div>
                      <div className="manali-thing-category">
                        {thing.category}
                      </div>
                      <div className="manali-price">
                        From {thing.price}
                      </div>
                    </div>
                  </>
                );

                return thing.title === "Paragliding in Solang Valley" ? (
                  <Link
                    to="/experience/solang-adventure"
                    className="manali-thing-card"
                    key={index}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                    }}
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <article className="manali-thing-card" key={index}>
                    {cardContent}
                  </article>
                );
              })}

            </div>

          </div>

        </section>


        {/* =====================================================
            TOP 10 FREQUENTLY ASKED QUESTIONS
        ===================================================== */}

        <section className="manali-faq-section">

          <div className="manali-faq-heading">

            <h2>Frequently Asked Questions About Manali</h2>

            <p>
              Find quick answers to some common questions before planning
              your Manali trip.
            </p>

          </div>


          <div className="manali-faq-list">

            <details className="manali-faq-item">
              <summary>
                1. What is Manali famous for?
              </summary>

              <div className="manali-faq-answer">
                Manali is famous for its beautiful mountains, valleys,
                rivers, snowfall, adventure activities, temples and
                peaceful Himalayan surroundings.
              </div>
            </details>


            <details className="manali-faq-item">
              <summary>
                2. What are the best places to visit in Manali?
              </summary>

              <div className="manali-faq-answer">
                Popular places include Solang Valley, Rohtang Pass,
                Hadimba Temple, Old Manali, Beas River, Vashisht,
                Jogini Waterfalls and Naggar Castle.
              </div>
            </details>


            <details className="manali-faq-item">
              <summary>
                3. How many days are enough for a Manali trip?
              </summary>

              <div className="manali-faq-answer">
                Around 3 to 5 days can be enough to explore the major
                attractions of Manali and enjoy some local activities.
              </div>
            </details>


            <details className="manali-faq-item">
              <summary>
                4. Which is the best time to visit Manali?
              </summary>

              <div className="manali-faq-answer">
                The best time depends on your interests. Summer is popular
                for sightseeing and outdoor activities, while winter is
                preferred by travellers who want to experience snow.
              </div>
            </details>


            <details className="manali-faq-item">
              <summary>
                5. Is Manali good for a family trip?
              </summary>

              <div className="manali-faq-answer">
                Yes. Manali offers sightseeing, nature spots, easy walks,
                local markets and activities that can be enjoyed by families.
              </div>
            </details>


            <details className="manali-faq-item">
              <summary>
                6. What adventure activities can I do in Manali?
              </summary>

              <div className="manali-faq-answer">
                Depending on the season and local availability, visitors
                can enjoy activities such as paragliding, trekking,
                skiing, rafting and other outdoor experiences.
              </div>
            </details>


            <details className="manali-faq-item">
              <summary>
                7. Is Manali suitable for couples?
              </summary>

              <div className="manali-faq-answer">
                Yes. Scenic valleys, peaceful cafés, mountain views and
                romantic walks make Manali a popular destination for couples.
              </div>
            </details>


            <details className="manali-faq-item">
              <summary>
                8. What should I pack for a Manali trip?
              </summary>

              <div className="manali-faq-answer">
                Pack comfortable clothes, warm layers, good walking shoes,
                sunscreen, sunglasses, personal medicines and
                weather-appropriate essentials.
              </div>
            </details>


            <details className="manali-faq-item">
              <summary>
                9. Is Manali good for a budget trip?
              </summary>

              <div className="manali-faq-answer">
                Yes. Travellers can choose budget-friendly stays, local
                restaurants and shared transportation to manage their
                trip expenses.
              </div>
            </details>


            <details className="manali-faq-item">
              <summary>
                10. What kind of food can I try in Manali?
              </summary>

              <div className="manali-faq-answer">
                You can explore Himachali dishes along with North Indian,
                Tibetan and other cuisines available at local restaurants
                and cafés.
              </div>
            </details>

          </div>

        </section>


        {/* =====================================================
            5 IMPORTANT TIPS
        ===================================================== */}

        <section className="manali-tips-section">

          <div className="manali-tips-heading">

            <h2>5 Important Tips for Your Manali Trip</h2>

            <p>
              A few simple things can make your trip more comfortable
              and enjoyable.
            </p>

          </div>


          <div className="manali-tips-grid">

            <div className="manali-tip-card">

              <div className="manali-tip-number">
                1
              </div>

              <h3>Check the Weather</h3>

              <p>
                Check the weather conditions before leaving and pack
                clothes according to the season.
              </p>

            </div>


            <div className="manali-tip-card">

              <div className="manali-tip-number">
                2
              </div>

              <h3>Carry Warm Layers</h3>

              <p>
                Mountain weather can change quickly, so keep warm layers
                and comfortable clothes with you.
              </p>

            </div>


            <div className="manali-tip-card">

              <div className="manali-tip-number">
                3
              </div>

              <h3>Wear Good Shoes</h3>

              <p>
                Comfortable shoes are useful for walking, sightseeing
                and exploring uneven mountain paths.
              </p>

            </div>


            <div className="manali-tip-card">

              <div className="manali-tip-number">
                4
              </div>

              <h3>Plan Your Route</h3>

              <p>
                Group nearby attractions together so you can save time
                and enjoy more places during your trip.
              </p>

            </div>


            <div className="manali-tip-card">

              <div className="manali-tip-number">
                5
              </div>

              <h3>Respect Nature</h3>

              <p>
                Avoid littering, respect local culture and help keep
                Manali's beautiful environment clean.
              </p>

            </div>

          </div>

        </section>

      </div>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="manali-footer">

        <div className="manali-container">

          <div className="manali-footer-content">

            <div className="manali-footer-brand">

              <h2>TravelMate</h2>

              <p>
                Discover beautiful destinations, explore new experiences
                and plan memorable journeys with TravelMate.
              </p>

            </div>


            <div className="manali-footer-column">

              <h3>Explore</h3>

              <Link to="/">Home</Link>

              <Link to="/destinations">Destinations</Link>

              <Link to="/reviews">Reviews</Link>

              <Link to="/manali">Manali</Link>

            </div>


            <div className="manali-footer-column">

              <h3>TravelMate</h3>

              <Link to="/">About Us</Link>

              <Link to="/">Contact</Link>

              <Link to="/">Privacy Policy</Link>

              <Link to="/">Terms & Conditions</Link>

            </div>


            <div className="manali-footer-column">

              <h3>Popular Places</h3>

              <Link to="/manali">Manali</Link>

              <Link to="/destination/Goa">Goa</Link>

              <Link to="/destination/Jaipur">Jaipur</Link>

              <Link to="/destinations">Explore More</Link>

            </div>

          </div>


          <div className="manali-footer-bottom">

            <span>
              © 2026 TravelMate. All rights reserved.
            </span>

            <span>
              Explore. Experience. Remember.
            </span>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Manali;