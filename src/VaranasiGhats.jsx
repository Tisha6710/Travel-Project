
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./VaranasiGhats.css";

function VaranasiGhats() {
  const [showMore, setShowMore] = useState(false);
  const [saved, setSaved] = useState(false);

  /* ==================================================
      REVIEW SYSTEM
  ================================================== */

  const defaultReviews = [
    {
      id: 1,
      name: "Riya Sharma",
      rating: 5,
      text: "Varanasi Ghats are an unforgettable experience. The sunrise boat ride was absolutely beautiful.",
    },
    {
      id: 2,
      name: "Aditya Verma",
      rating: 5,
      text: "The atmosphere around the Ganges is incredible. Ganga Aarti was one of the highlights of my trip.",
    },
    {
      id: 3,
      name: "Neha Kapoor",
      rating: 4,
      text: "A fascinating place full of history, culture and beautiful river views. Definitely worth visiting.",
    },
  ];

  const [reviews, setReviews] = useState(() => {
    try {
      const savedReviews =
        localStorage.getItem("varanasiGhatsReviews");

      if (savedReviews) {
        const parsedReviews = JSON.parse(savedReviews);

        if (Array.isArray(parsedReviews)) {
          return parsedReviews;
        }
      }

      return defaultReviews;
    } catch (error) {
      return defaultReviews;
    }
  });

  const [showReviewForm, setShowReviewForm] =
    useState(false);

  const [reviewName, setReviewName] =
    useState("");

  const [reviewText, setReviewText] =
    useState("");

  const [reviewRating, setReviewRating] =
    useState(5);


  /* ==================================================
      IMAGE ERROR
  ================================================== */

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;

    event.currentTarget.src =
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=85";
  };


  /* ==================================================
      SUBMIT REVIEW
  ================================================== */

  const handleSubmitReview = (event) => {
    event.preventDefault();

    const name = reviewName.trim();
    const text = reviewText.trim();

    if (!name) {
      alert("Please enter your name.");
      return;
    }

    if (!text) {
      alert("Please write your review.");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: name,
      rating: Number(reviewRating),
      text: text,
    };

    const updatedReviews = [
      newReview,
      ...reviews,
    ];

    setReviews(updatedReviews);

    try {
      localStorage.setItem(
        "varanasiGhatsReviews",
        JSON.stringify(updatedReviews)
      );
    } catch (error) {
      console.log(
        "Review could not be saved:",
        error
      );
    }

    setReviewName("");
    setReviewText("");
    setReviewRating(5);

    setShowReviewForm(false);

    alert(
      "Your review has been submitted successfully! ⭐"
    );
  };


  /* ==================================================
      AVERAGE RATING
  ================================================== */

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce(
            (sum, review) =>
              sum + Number(review.rating),
            0
          ) / reviews.length
        ).toFixed(1)
      : "0.0";


  /* ==================================================
      STAR DISPLAY
  ================================================== */

  const renderStars = (rating) => {
    return (
      <span className="review-stars">

        {[1, 2, 3, 4, 5].map((star) => (

          <span
            key={star}
            className={
              star <= Number(rating)
                ? "star active"
                : "star"
            }
          >
            ★
          </span>

        ))}

      </span>
    );
  };


  return (
    <div className="taj-page">

      {/* ================= TOP BAR ================= */}

      <header className="taj-topbar">

        <Link
          to="/"
          className="taj-logo"
        >
          <span>Travel</span>Mate
        </Link>


        <Link
          to="/destinations"
          className="taj-back"
        >
          ← Back to Destinations
        </Link>


        <button
          type="button"
          className={`taj-save ${
            saved ? "saved" : ""
          }`}
          onClick={() =>
            setSaved(!saved)
          }
        >
          {saved
            ? "♥ Saved"
            : "♡ Save"}
        </button>

      </header>


      {/* ================= MAIN CONTENT ================= */}

      <main className="taj-container">


        {/* ================= INTRO ================= */}

        <section className="taj-intro">

          <div className="taj-eyebrow">

            <span></span>

            ICONIC PLACE

          </div>


          <div className="intro-main">


            <div className="intro-title">

              <h1>
                Varanasi
                <br />
                Ghats
              </h1>


              <div className="taj-location">

                <span>●</span>

                Varanasi, Uttar Pradesh, India

              </div>

            </div>


            <div className="taj-description">

              <p>
                The Ghats of Varanasi are a remarkable
                series of riverfront steps along the
                sacred Ganges, where history, culture,
                spirituality and everyday life come
                together.
              </p>


              {showMore && (

                <div className="more-content">

                  <p>
                    Varanasi is one of India's oldest
                    continuously inhabited cities and
                    is deeply connected with the River
                    Ganges. Its ghats stretch along the
                    riverfront and each has its own
                    character and history.
                  </p>


                  <p>
                    Dashashwamedh Ghat is known for
                    the evening Ganga Aarti, while
                    Manikarnika Ghat is traditionally
                    associated with Hindu cremation
                    rituals.
                  </p>


                  <p>
                    Visitors can explore the riverfront
                    by walking along the ghats, taking
                    a traditional boat ride and
                    experiencing the city's historic
                    lanes, temples and markets.
                  </p>

                </div>

              )}


              <button
                type="button"
                className="read-more-btn"
                onClick={() =>
                  setShowMore(!showMore)
                }
              >
                {showMore
                  ? "Read less ↑"
                  : "Read more ↓"}
              </button>

            </div>

          </div>

        </section>


        {/* ================= HERO IMAGE ================= */}

        <section className="taj-hero-image">

          <img
            src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=2000&q=90"
            alt="Varanasi Ghats"
            onError={handleImageError}
          />


          <div className="hero-overlay"></div>


          <div className="hero-caption">

            <span>
              VARANASI, UTTAR PRADESH
            </span>

            <strong>
              Where the Ganges meets eternity
            </strong>

          </div>

        </section>


        {/* ================= DISCOVER ================= */}

        <section className="taj-discover">


          <div className="discover-item">

            <div className="discover-icon">
              📍
            </div>

            <div>

              <span>
                LOCATION
              </span>

              <strong>
                Varanasi, Uttar Pradesh
              </strong>

            </div>

          </div>


          <div className="discover-item">

            <div className="discover-icon">
              🛶
            </div>

            <div>

              <span>
                EXPERIENCE
              </span>

              <strong>
                Ganga Boat Ride
              </strong>

            </div>

          </div>


          <div className="discover-item">

            <div className="discover-icon">
              🪔
            </div>

            <div>

              <span>
                HIGHLIGHT
              </span>

              <strong>
                Ganga Aarti
              </strong>

            </div>

          </div>


          <div className="discover-item">

            <div className="discover-icon">
              🌅
            </div>

            <div>

              <span>
                BEST FOR
              </span>

              <strong>
                Culture & Heritage
              </strong>

            </div>

          </div>

        </section>


        {/* ================= STORY ================= */}

        <section className="taj-section history-section">


          <div className="section-heading">

            <span className="taj-label">
              THE STORY
            </span>

          </div>


          <div className="history-layout">


            <div className="history-title">

              <h2>
                A city
                <br />
                beside
                <br />
                <em>the Ganges.</em>
              </h2>

            </div>


            <div className="history-text">

              <p>
                Varanasi's ghats form one of the
                city's most distinctive landscapes.
                Built and developed over centuries,
                they create a continuous riverfront
                along the western bank of the Ganges.
              </p>


              <p>
                The ghats serve many different
                purposes. Some are used for religious
                ceremonies and bathing, some are
                associated with cremation traditions,
                while others are popular gathering
                places for visitors and local residents.
              </p>


              <p>
                At sunrise, the riverfront becomes
                a peaceful place to watch boats move
                across the Ganges. In the evening,
                the ghats come alive with lamps,
                prayers and the famous Ganga Aarti
                ceremony.
              </p>

            </div>

          </div>

        </section>


        {/* ================= NEARBY PLACES ================= */}

        <section className="taj-section nearby-section">


          <div className="section-heading">

            <span className="taj-label">
              DON'T MISS
            </span>

          </div>


          <div className="places-heading">

            <h2>
              Places to explore nearby
            </h2>

            <p>
              Discover Varanasi's historic temples,
              spiritual landmarks and peaceful
              riverside destinations beyond the
              famous ghats.
            </p>

          </div>


          <div className="taj-cards">


            {/* SARNATH */}

            <article className="taj-card">

              <div className="card-image">

                <img
                  src="https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=1200&q=85"
                  alt="Sarnath Varanasi"
                  onError={handleImageError}
                />

                <span className="card-number">
                  01
                </span>

              </div>


              <div className="card-content">

                <span className="card-location">
                  VARANASI
                </span>

                <h3>
                  Sarnath
                </h3>

                <p>
                  Visit the historic Buddhist site
                  associated with Buddha's first
                  sermon, surrounded by ancient
                  monuments and peaceful gardens.
                </p>


                <Link
                  to="/destinations"
                  className="card-link"
                >
                  Explore place →
                </Link>

              </div>

            </article>


            {/* KASHI VISHWANATH */}

            <article className="taj-card">

              <div className="card-image">

                <img
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85"
                  alt="Kashi Vishwanath Temple"
                  onError={handleImageError}
                />

                <span className="card-number">
                  02
                </span>

              </div>


              <div className="card-content">

                <span className="card-location">
                  VARANASI
                </span>

                <h3>
                  Kashi Vishwanath
                </h3>

                <p>
                  Explore one of Varanasi's most
                  important temples and the historic
                  lanes surrounding the sacred
                  Vishwanath area.
                </p>


                <Link
                  to="/destinations"
                  className="card-link"
                >
                  Explore place →
                </Link>

              </div>

            </article>


            {/* ASSI GHAT */}

            <article className="taj-card">

              <div className="card-image">

                <img
                  src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85"
                  alt="Assi Ghat Varanasi"
                  onError={handleImageError}
                />

                <span className="card-number">
                  03
                </span>

              </div>


              <div className="card-content">

                <span className="card-location">
                  GANGES RIVER
                </span>

                <h3>
                  Assi Ghat
                </h3>

                <p>
                  Enjoy sunrise views, riverside walks
                  and the relaxed atmosphere of one of
                  Varanasi's best-known southern ghats.
                </p>


                <Link
                  to="/destinations"
                  className="card-link"
                >
                  Explore place →
                </Link>

              </div>

            </article>


          </div>

        </section>


        {/* ================= TRAVEL INFORMATION ================= */}

        <section className="taj-info-section">


          <div className="info-heading">

            <span className="taj-label">
              PLAN YOUR VISIT
            </span>

            <h2>
              Travel information
            </h2>

          </div>


          <div className="info-grid">


            {/* BEST TIME */}

            <div className="info-box">

              <div className="info-icon">
                🌤️
              </div>

              <div>

                <span>
                  BEST TIME
                </span>

                <strong>
                  October – March
                </strong>

                <p>
                  Cooler months are generally more
                  comfortable for walking through the
                  city and exploring the ghats.
                </p>

              </div>

            </div>


            {/* EXPERIENCE */}

            <div className="info-box">

              <div className="info-icon">
                🛶
              </div>

              <div>

                <span>
                  EXPERIENCE
                </span>

                <strong>
                  Sunrise Boat Ride
                </strong>

                <p>
                  A morning boat ride offers views of
                  the riverfront and the historic ghats
                  from the Ganges.
                </p>

              </div>

            </div>


            {/* LOCATION */}

            <div className="info-box">

              <div className="info-icon">
                📍
              </div>

              <div>

                <span>
                  LOCATION
                </span>

                <strong>
                  Varanasi, Uttar Pradesh
                </strong>

                <p>
                  The ghats are located along the
                  western bank of the Ganges in
                  central Varanasi.
                </p>

              </div>

            </div>


            {/* GETTING THERE */}

            <div className="info-box">

              <div className="info-icon">
                🚆
              </div>

              <div>

                <span>
                  GETTING THERE
                </span>

                <strong>
                  Rail, Road & Air
                </strong>

                <p>
                  Varanasi is connected by rail, road
                  and air through Lal Bahadur Shastri
                  International Airport.
                </p>

              </div>

            </div>


          </div>

        </section>


        {/* ==================================================
            TRAVELLER REVIEWS
        ================================================== */}

        <section className="taj-reviews-section">


          <div className="section-heading">

            <span className="taj-label">
              TRAVELLER REVIEWS
            </span>

          </div>


          {/* REVIEW HEADER */}

          <div className="reviews-header">


            <div className="reviews-title">

              <h2>
                What travellers say
              </h2>

              <p>
                Share your experience and help
                other travellers discover Varanasi.
              </p>

            </div>


            <div className="overall-rating">

              <strong>
                {averageRating}
              </strong>


              {renderStars(
                Math.round(
                  Number(averageRating)
                )
              )}


              <span>
                Based on {reviews.length}{" "}
                {reviews.length === 1
                  ? "review"
                  : "reviews"}
              </span>

            </div>


          </div>


          {/* WRITE REVIEW BUTTON */}

          <div className="write-review-area">

            <button
              type="button"
              className="write-review-btn"
              onClick={() =>
                setShowReviewForm(
                  (previous) => !previous
                )
              }
            >

              {showReviewForm
                ? "✕ Close Review"
                : "✍ Write a Review"}

            </button>

          </div>


          {/* REVIEW FORM */}

          {showReviewForm && (

            <form
              className="review-form"
              onSubmit={handleSubmitReview}
            >


              <div className="form-heading">

                <h3>
                  Share your experience
                </h3>

                <p>
                  Tell fellow travellers about
                  your Varanasi visit.
                </p>

              </div>


              {/* RATING */}

              <div className="rating-select">

                <label>
                  Your Rating
                </label>


                <div className="select-stars">

                  {[1, 2, 3, 4, 5].map(
                    (star) => (

                      <button
                        type="button"
                        key={star}
                        className={
                          star <= reviewRating
                            ? "select-star selected"
                            : "select-star"
                        }
                        onClick={() =>
                          setReviewRating(star)
                        }
                        aria-label={`${star} star rating`}
                      >
                        ★
                      </button>

                    )
                  )}

                </div>

              </div>


              {/* NAME */}

              <div className="form-group">

                <label>
                  Your Name
                </label>


                <input
                  type="text"
                  value={reviewName}
                  onChange={(event) =>
                    setReviewName(
                      event.target.value
                    )
                  }
                  placeholder="Enter your name"
                />

              </div>


              {/* REVIEW TEXT */}

              <div className="form-group">

                <label>
                  Your Review
                </label>


                <textarea
                  rows="5"
                  value={reviewText}
                  onChange={(event) =>
                    setReviewText(
                      event.target.value
                    )
                  }
                  placeholder="Write about your experience..."
                />

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="submit-review-btn"
              >
                Submit Review →
              </button>


            </form>

          )}


          {/* REVIEWS LIST */}

          <div className="reviews-list">

            {reviews.map((review) => (

              <article
                className="review-card"
                key={review.id}
              >


                <div className="review-user">

                  <div className="review-avatar">

                    {review.name
                      .charAt(0)
                      .toUpperCase()}

                  </div>


                  <div>

                    <h3>
                      {review.name}
                    </h3>


                    {renderStars(
                      review.rating
                    )}

                  </div>

                </div>


                <p className="review-text">
                  “{review.text}”
                </p>


              </article>

            ))}

          </div>


        </section>


        {/* ================= CTA ================= */}

        <section className="taj-cta">


          <div className="cta-content">

            <span>
              READY TO EXPLORE?
            </span>


            <h2>
              Your Varanasi journey
              <br />
              starts here.
            </h2>


            <p>
              Walk through ancient lanes, watch
              the Ganges at sunrise and experience
              the timeless atmosphere of Varanasi
              with TravelMate.
            </p>


            <Link
              to="/destinations"
              className="cta-button"
            >
              Explore More Destinations

              <span>
                →
              </span>

            </Link>

          </div>


          <div className="cta-decoration">
            ✦
          </div>


        </section>


      </main>


      {/* ================= FOOTER ================= */}

      <footer className="taj-footer">


        <div className="footer-inner">


          <Link
            to="/"
            className="footer-logo"
          >
            <span>Travel</span>Mate
          </Link>


          <p>
            Discover places. Create memories.
          </p>


          <div className="footer-links">

            <Link to="/">
              Home
            </Link>

            <Link to="/destinations">
              Destinations
            </Link>

            <Link to="/reviews">
              Reviews
            </Link>

          </div>


        </div>


        <div className="footer-bottom">

          <span>
            © 2026 TravelMate
          </span>

          <span>
            Made for travellers ✦
          </span>

        </div>


      </footer>


    </div>
  );
}

export default VaranasiGhats;

