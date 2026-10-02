import { Link } from "react-router-dom";

function ManaliExperience() {
  const highlights = [
    {
      icon: "🏔️",
      title: "Manali Sightseeing",
      text: "Explore the most beautiful and popular places around Manali."
    },
    {
      icon: "📸",
      title: "Beautiful Views",
      text: "Enjoy scenic mountain landscapes and amazing photography spots."
    },
    {
      icon: "🚗",
      title: "Comfortable Travel",
      text: "Travel comfortably between the major sightseeing attractions."
    },
    {
      icon: "👨‍🏫",
      title: "Expert Guide",
      text: "Get useful information about the history and importance of each place."
    }
  ];

  const itinerary = [
    {
      time: "09:00 AM",
      title: "Start from Manali",
      text: "Begin your sightseeing tour from your pickup point in Manali."
    },
    {
      time: "10:00 AM",
      title: "Hadimba Temple",
      text: "Visit the famous Hadimba Devi Temple surrounded by beautiful cedar forests."
    },
    {
      time: "11:30 AM",
      title: "Vashisht Village",
      text: "Explore Vashisht Temple and the famous natural hot springs."
    },
    {
      time: "01:00 PM",
      title: "Lunch Break",
      text: "Enjoy a relaxing lunch at a local restaurant."
    },
    {
      time: "02:30 PM",
      title: "Manali Mall Road",
      text: "Explore local shops, cafés and the lively Mall Road."
    },
    {
      time: "04:30 PM",
      title: "Beas River",
      text: "Enjoy peaceful views of the Beas River and surrounding mountains."
    },
    {
      time: "06:00 PM",
      title: "Return to Manali",
      text: "Complete the sightseeing tour and return to your drop-off point."
    }
  ];

  const faqs = [
    {
      question: "What is included in the Manali sightseeing tour?",
      answer:
        "The tour includes sightseeing at major attractions, comfortable local transportation and guidance during the tour."
    },
    {
      question: "How long is the sightseeing tour?",
      answer:
        "The complete sightseeing experience is planned as a one-day tour."
    },
    {
      question: "Is this tour suitable for families?",
      answer:
        "Yes, the tour is suitable for families, couples and groups who want to explore Manali comfortably."
    },
    {
      question: "What should I carry for the tour?",
      answer:
        "Carry comfortable clothes, walking shoes, sunglasses, sunscreen, water and a valid ID."
    },
    {
      question: "Can I cancel the booking?",
      answer:
        "Cancellation availability depends on the booking terms selected at the time of reservation."
    }
  ];

  return (
    <div className="experience-detail-page">

      {/* ================= NAVBAR ================= */}
      <nav className="experience-detail-navbar">
        <Link to="/" className="experience-detail-logo">
          Travel<span>Mate</span>
        </Link>

        <div className="experience-detail-nav-links">
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/login" className="experience-login-btn">
            Login
          </Link>
        </div>
      </nav>

      {/* ================= BREADCRUMB ================= */}
      <div className="experience-breadcrumb">
        <Link to="/">Home</Link>
        <span>›</span>
        <span>Experiences</span>
        <span>›</span>
        <span>Manali</span>
        <span>›</span>
        <span>Sightseeing</span>
      </div>

      {/* ================= MAIN EXPERIENCE ================= */}
      <section className="experience-main-section">

        <div className="experience-image-section">

          <div className="experience-main-image">
            <img
              src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=85"
              alt="Manali Sightseeing Tour"
            />
          </div>

          <div className="experience-thumbnails">
            <img
              src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80"
              alt="Manali mountains"
            />

            <img
              src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80"
              alt="Manali valley"
            />

            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=300&q=80"
              alt="Mountain landscape"
            />

            <img
              src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=300&q=80"
              alt="Nature in Manali"
            />
          </div>

        </div>

        <div className="experience-main-info">

          <div className="experience-category">
            SIGHTSEEING
          </div>

          <h1>The Best of Manali Sightseeing Tour</h1>

          <p className="experience-location">
            📍 Manali, Himachal Pradesh
          </p>

          <div className="experience-rating-row">
            <span className="experience-rating">
              ⭐ 4.8
            </span>

            <span>1,245 Reviews</span>

            <span>•</span>

            <span>🕐 1 Day</span>

            <span>•</span>

            <span>🌤️ All Season</span>
          </div>

          <div className="experience-price-box">
            <span className="price-label">
              Starting from
            </span>

            <div className="experience-price">
              ₹1,499
              <span>/ person</span>
            </div>
          </div>

          <p className="experience-description">
            Explore the best attractions of Manali in one memorable
            sightseeing experience. Visit beautiful temples, peaceful
            rivers, scenic valleys and popular local attractions while
            enjoying the stunning Himalayan surroundings.
          </p>

          <div className="experience-buttons">
            <button className="book-now-btn">
              Book Now
            </button>

            <button className="wishlist-btn">
              ♡ Wishlist
            </button>
          </div>

          <div className="experience-benefits">

            <div className="benefit-item">
              <span>✓</span>
              <div>
                <strong>Free Cancellation</strong>
                <small>Flexible booking options</small>
              </div>
            </div>

            <div className="benefit-item">
              <span>✓</span>
              <div>
                <strong>Instant Confirmation</strong>
                <small>Quick booking confirmation</small>
              </div>
            </div>

            <div className="benefit-item">
              <span>✓</span>
              <div>
                <strong>Expert Guide</strong>
                <small>Local sightseeing guidance</small>
              </div>
            </div>

            <div className="benefit-item">
              <span>✓</span>
              <div>
                <strong>Small Group</strong>
                <small>Comfortable travel experience</small>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ================= QUICK INFO ================= */}
      <section className="experience-quick-info">

        <div>
          <span>⏱️</span>
          <div>
            <strong>Duration</strong>
            <p>1 Day</p>
          </div>
        </div>

        <div>
          <span>📍</span>
          <div>
            <strong>Location</strong>
            <p>Manali, Himachal Pradesh</p>
          </div>
        </div>

        <div>
          <span>👥</span>
          <div>
            <strong>Group Size</strong>
            <p>Small Group</p>
          </div>
        </div>

        <div>
          <span>🌐</span>
          <div>
            <strong>Language</strong>
            <p>English & Hindi</p>
          </div>
        </div>

      </section>

      {/* ================= ABOUT ================= */}
      <section className="experience-content-section">

        <div className="experience-section-heading">
          <span>ABOUT THE EXPERIENCE</span>
          <h2>Explore the Best of Manali</h2>
        </div>

        <p>
          Manali is one of the most popular hill destinations in Himachal
          Pradesh, surrounded by beautiful mountains, forests and rivers.
          This sightseeing tour gives you an opportunity to explore some
          of the most popular attractions of Manali in a single day.
        </p>

        <p>
          From the peaceful Hadimba Temple and Vashisht Village to the
          beautiful Beas River and lively Mall Road, this experience
          combines nature, culture, sightseeing and local experiences.
        </p>

        <p>
          Whether you are travelling with friends, family or as a couple,
          this tour provides a convenient way to discover the highlights
          of Manali.
        </p>

      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="experience-highlights-section">

        <div className="experience-section-heading">
          <span>TOUR HIGHLIGHTS</span>
          <h2>What You'll Experience</h2>
        </div>

        <div className="experience-highlights-grid">

          {highlights.map((item, index) => (
            <div className="experience-highlight-card" key={index}>

              <div className="highlight-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>
          ))}

        </div>

      </section>

      {/* ================= ITINERARY ================= */}
      <section className="experience-itinerary-section">

        <div className="experience-section-heading">
          <span>ITINERARY</span>
          <h2>Your Day in Manali</h2>
        </div>

        <div className="experience-itinerary">

          {itinerary.map((item, index) => (
            <div className="itinerary-item" key={index}>

              <div className="itinerary-time">
                {item.time}
              </div>

              <div className="itinerary-line">
                <span></span>
              </div>

              <div className="itinerary-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* ================= GOOD TO KNOW ================= */}
      <section className="experience-good-to-know">

        <div className="experience-section-heading">
          <span>GOOD TO KNOW</span>
          <h2>Before You Go</h2>
        </div>

        <div className="good-to-know-grid">

          <div>
            <span>👟</span>
            <h3>Wear Comfortable Shoes</h3>
            <p>
              Some attractions involve walking, so comfortable footwear
              is recommended.
            </p>
          </div>

          <div>
            <span>🧥</span>
            <h3>Carry Warm Clothes</h3>
            <p>
              Mountain weather can change quickly, so carry an extra
              warm layer.
            </p>
          </div>

          <div>
            <span>📷</span>
            <h3>Keep Your Camera Ready</h3>
            <p>
              Manali offers beautiful mountain views and photography
              opportunities throughout the tour.
            </p>
          </div>

          <div>
            <span>💧</span>
            <h3>Stay Hydrated</h3>
            <p>
              Carry a reusable water bottle and stay hydrated during
              sightseeing.
            </p>
          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}
      <section className="experience-faq-section">

        <div className="experience-section-heading">
          <span>FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="experience-faq-list">

          {faqs.map((faq, index) => (
            <details
              className="experience-faq-item"
              key={index}
            >
              <summary>
                {faq.question}
                <span>+</span>
              </summary>

              <p>{faq.answer}</p>
            </details>
          ))}

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="experience-final-cta">

        <div>
          <span>PLAN YOUR MANALI TRIP</span>

          <h2>
            Ready to Explore Manali?
          </h2>

          <p>
            Discover beautiful places, unforgettable views and
            amazing experiences in the heart of Himachal Pradesh.
          </p>
        </div>

        <Link to="/destinations">
          Explore More Destinations →
        </Link>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="experience-detail-footer">

        <div className="footer-main">

          <div className="footer-brand">

            <Link to="/" className="footer-logo">
              Travel<span>Mate</span>
            </Link>

            <p>
              Discover amazing destinations and plan your
              perfect journey with TravelMate.
            </p>

          </div>

          <div className="footer-column">

            <h3>Explore</h3>

            <Link to="/">Home</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/reviews">Reviews</Link>

          </div>

          <div className="footer-column">

            <h3>Popular Places</h3>

            <Link to="/manali">Manali</Link>
            <Link to="/goa">Goa</Link>
            <Link to="/jaipur">Jaipur</Link>
            <Link to="/kerala">Kerala</Link>

          </div>

          <div className="footer-column">

            <h3>Contact</h3>

            <p>📧 hello@travelmate.com</p>
            <p>📍 India</p>
            <p>📞 +91 98765 43210</p>

          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 TravelMate. All rights reserved.
          </p>

          <p>
            Made for travellers ❤️
          </p>
        </div>

      </footer>

      {/* ================= PAGE CSS ================= */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        .experience-detail-page {
          background: #ffffff;
          color: #222;
          min-height: 100vh;
          font-family: Arial, Helvetica, sans-serif;
        }

        /* NAVBAR */

        .experience-detail-navbar {
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 7%;
          border-bottom: 1px solid #eeeeee;
          background: #ffffff;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .experience-detail-logo {
          text-decoration: none;
          color: #222;
          font-size: 28px;
          font-weight: 800;
        }

        .experience-detail-logo span {
          color: #f47c48;
        }

        .experience-detail-nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .experience-detail-nav-links a {
          text-decoration: none;
          color: #333;
          font-size: 15px;
          font-weight: 600;
        }

        .experience-detail-nav-links a:hover {
          color: #f47c48;
        }

        .experience-login-btn {
          padding: 11px 23px;
          background: #f47c48;
          color: white !important;
          border-radius: 8px;
        }

        /* BREADCRUMB */

        .experience-breadcrumb {
          max-width: 1200px;
          margin: 0 auto;
          padding: 25px 20px 15px;
          display: flex;
          gap: 9px;
          align-items: center;
          color: #777;
          font-size: 14px;
        }

        .experience-breadcrumb a {
          color: #f47c48;
          text-decoration: none;
          font-weight: 600;
        }

        /* MAIN */

        .experience-main-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 45px;
        }

        .experience-main-image {
          width: 100%;
          height: 430px;
          overflow: hidden;
          border-radius: 18px;
        }

        .experience-main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .experience-thumbnails {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-top: 12px;
        }

        .experience-thumbnails img {
          width: 100%;
          height: 82px;
          object-fit: cover;
          border-radius: 9px;
          cursor: pointer;
        }

        .experience-main-info {
          padding: 5px 0;
        }

        .experience-category {
          display: inline-block;
          background: #fff0e9;
          color: #f47c48;
          padding: 7px 13px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.7px;
          margin-bottom: 16px;
        }

        .experience-main-info h1 {
          font-size: 38px;
          line-height: 1.15;
          margin: 0 0 15px;
          color: #222;
        }

        .experience-location {
          color: #666;
          font-size: 15px;
          margin-bottom: 17px;
        }

        .experience-rating-row {
          display: flex;
          align-items: center;
          gap: 11px;
          flex-wrap: wrap;
          font-size: 14px;
          color: #666;
        }

        .experience-rating {
          background: #fff4df;
          color: #d98b00;
          padding: 7px 11px;
          border-radius: 7px;
          font-weight: 700;
        }

        .experience-price-box {
          margin-top: 25px;
          padding: 18px 20px;
          background: #f8f8f8;
          border-radius: 12px;
        }

        .price-label {
          display: block;
          font-size: 13px;
          color: #777;
          margin-bottom: 5px;
        }

        .experience-price {
          font-size: 30px;
          font-weight: 800;
          color: #222;
        }

        .experience-price span {
          font-size: 14px;
          color: #777;
          font-weight: 400;
        }

        .experience-description {
          color: #666;
          line-height: 1.7;
          font-size: 15px;
          margin: 22px 0;
        }

        .experience-buttons {
          display: flex;
          gap: 12px;
        }

        .book-now-btn,
        .wishlist-btn {
          height: 48px;
          border-radius: 8px;
          padding: 0 25px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
        }

        .book-now-btn {
          background: #f47c48;
          border: 1px solid #f47c48;
          color: white;
        }

        .wishlist-btn {
          background: white;
          border: 1px solid #dddddd;
          color: #333;
        }

        .experience-benefits {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 17px;
          margin-top: 27px;
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .benefit-item > span {
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eaf8ef;
          color: #299653;
          border-radius: 50%;
          font-size: 12px;
          font-weight: bold;
        }

        .benefit-item strong {
          display: block;
          font-size: 13px;
          margin-bottom: 3px;
        }

        .benefit-item small {
          color: #888;
          font-size: 11px;
        }

        /* QUICK INFO */

        .experience-quick-info {
          max-width: 1160px;
          margin: 40px auto;
          padding: 24px 30px;
          background: #fafafa;
          border-radius: 15px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .experience-quick-info > div {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .experience-quick-info > div > span {
          font-size: 25px;
        }

        .experience-quick-info strong {
          display: block;
          font-size: 13px;
          margin-bottom: 4px;
        }

        .experience-quick-info p {
          margin: 0;
          color: #777;
          font-size: 13px;
        }

        /* COMMON CONTENT */

        .experience-content-section,
        .experience-highlights-section,
        .experience-itinerary-section,
        .experience-good-to-know,
        .experience-faq-section {
          max-width: 1160px;
          margin: 80px auto;
          padding: 0 20px;
        }

        .experience-section-heading {
          margin-bottom: 30px;
        }

        .experience-section-heading span {
          color: #f47c48;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .experience-section-heading h2 {
          font-size: 31px;
          margin: 8px 0 0;
          color: #222;
        }

        .experience-content-section > p {
          max-width: 920px;
          color: #666;
          line-height: 1.8;
          font-size: 15px;
          margin-bottom: 15px;
        }

        /* HIGHLIGHTS */

        .experience-highlights-section {
          padding: 55px 20px;
          max-width: none;
          background: #fafafa;
        }

        .experience-highlights-section > .experience-section-heading,
        .experience-highlights-grid {
          max-width: 1120px;
          margin-left: auto;
          margin-right: auto;
        }

        .experience-highlights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .experience-highlight-card {
          background: white;
          border: 1px solid #eeeeee;
          padding: 25px;
          border-radius: 13px;
        }

        .highlight-icon {
          font-size: 29px;
          margin-bottom: 15px;
        }

        .experience-highlight-card h3 {
          font-size: 17px;
          margin: 0 0 9px;
        }

        .experience-highlight-card p {
          color: #777;
          font-size: 13px;
          line-height: 1.6;
          margin: 0;
        }

        /* ITINERARY */

        .experience-itinerary {
          max-width: 850px;
        }

        .itinerary-item {
          display: grid;
          grid-template-columns: 100px 35px 1fr;
          min-height: 85px;
        }

        .itinerary-time {
          font-size: 13px;
          font-weight: 700;
          color: #f47c48;
          padding-top: 3px;
        }

        .itinerary-line {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .itinerary-line::before {
          content: "";
          position: absolute;
          width: 1px;
          background: #dddddd;
          top: 8px;
          bottom: 0;
        }

        .itinerary-item:last-child .itinerary-line::before {
          display: none;
        }

        .itinerary-line span {
          width: 12px;
          height: 12px;
          background: #f47c48;
          border-radius: 50%;
          position: relative;
          z-index: 2;
        }

        .itinerary-content {
          padding: 0 0 25px 15px;
        }

        .itinerary-content h3 {
          margin: 0 0 6px;
          font-size: 17px;
        }

        .itinerary-content p {
          margin: 0;
          color: #777;
          line-height: 1.6;
          font-size: 14px;
        }

        /* GOOD TO KNOW */

        .experience-good-to-know {
          padding: 55px 20px;
          max-width: none;
          background: #fff8f4;
        }

        .experience-good-to-know > .experience-section-heading,
        .good-to-know-grid {
          max-width: 1120px;
          margin-left: auto;
          margin-right: auto;
        }

        .good-to-know-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .good-to-know-grid > div {
          background: white;
          padding: 24px;
          border-radius: 12px;
        }

        .good-to-know-grid span {
          font-size: 27px;
        }

        .good-to-know-grid h3 {
          font-size: 16px;
          margin: 13px 0 7px;
        }

        .good-to-know-grid p {
          color: #777;
          line-height: 1.6;
          font-size: 13px;
          margin: 0;
        }

        /* FAQ */

        .experience-faq-list {
          max-width: 850px;
        }

        .experience-faq-item {
          border-bottom: 1px solid #e5e5e5;
          padding: 18px 0;
        }

        .experience-faq-item summary {
          list-style: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 16px;
          font-weight: 600;
        }

        .experience-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .experience-faq-item summary span {
          font-size: 24px;
          font-weight: 400;
          color: #f47c48;
        }

        .experience-faq-item[open] summary span {
          transform: rotate(45deg);
        }

        .experience-faq-item p {
          color: #777;
          line-height: 1.7;
          font-size: 14px;
          padding: 10px 35px 0 0;
          margin: 0;
        }

        /* CTA */

        .experience-final-cta {
          max-width: 1120px;
          margin: 80px auto;
          padding: 45px;
          border-radius: 18px;
          background: #f47c48;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .experience-final-cta span {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .experience-final-cta h2 {
          font-size: 30px;
          margin: 8px 0;
        }

        .experience-final-cta p {
          margin: 0;
          max-width: 600px;
          line-height: 1.6;
          opacity: 0.9;
          font-size: 14px;
        }

        .experience-final-cta a {
          flex-shrink: 0;
          background: white;
          color: #f47c48;
          text-decoration: none;
          padding: 14px 22px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
        }

        /* FOOTER */

        .experience-detail-footer {
          background: #202020;
          color: white;
          margin-top: 80px;
        }

        .footer-main {
          max-width: 1160px;
          margin: auto;
          padding: 60px 20px 45px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.4fr;
          gap: 45px;
        }

        .footer-logo {
          color: white;
          text-decoration: none;
          font-size: 25px;
          font-weight: 800;
        }

        .footer-logo span {
          color: #f47c48;
        }

        .footer-brand p {
          color: #aaa;
          font-size: 13px;
          line-height: 1.7;
          max-width: 280px;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-column h3 {
          font-size: 15px;
          margin: 0 0 8px;
        }

        .footer-column a,
        .footer-column p {
          color: #aaa;
          text-decoration: none;
          font-size: 13px;
          margin: 0;
        }

        .footer-column a:hover {
          color: white;
        }

        .footer-bottom {
          border-top: 1px solid #363636;
          max-width: 1160px;
          margin: auto;
          padding: 18px 20px;
          display: flex;
          justify-content: space-between;
          color: #888;
          font-size: 12px;
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {

          .experience-main-section {
            grid-template-columns: 1fr;
          }

          .experience-main-image {
            height: 380px;
          }

          .experience-highlights-grid,
          .good-to-know-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .experience-quick-info {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-main {
            grid-template-columns: repeat(2, 1fr);
          }

          .experience-final-cta {
            margin-left: 20px;
            margin-right: 20px;
          }

        }

        @media (max-width: 600px) {

          .experience-detail-navbar {
            padding: 0 20px;
          }

          .experience-detail-nav-links {
            gap: 12px;
          }

          .experience-detail-nav-links a:not(.experience-login-btn) {
            display: none;
          }

          .experience-main-section {
            padding: 10px 20px;
          }

          .experience-main-image {
            height: 280px;
          }

          .experience-main-info h1 {
            font-size: 29px;
          }

          .experience-benefits {
            grid-template-columns: 1fr;
          }

          .experience-quick-info {
            margin: 25px 20px;
            grid-template-columns: 1fr;
          }

          .experience-highlights-grid,
          .good-to-know-grid {
            grid-template-columns: 1fr;
          }

          .experience-content-section,
          .experience-itinerary-section,
          .experience-faq-section {
            margin: 55px auto;
          }

          .experience-section-heading h2 {
            font-size: 26px;
          }

          .itinerary-item {
            grid-template-columns: 75px 25px 1fr;
          }

          .experience-final-cta {
            flex-direction: column;
            align-items: flex-start;
            padding: 30px;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 8px;
          }

        }

      `}</style>
    </div>
  );
}

export default ManaliExperience;