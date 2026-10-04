import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GatewayOfIndia.css";

function GatewayOfIndia() {
  const [showMore, setShowMore] = useState(false);
  const [saved, setSaved] = useState(false);

  /* ================= REVIEW DATA ================= */

  const defaultReviews = [
    {
      id: 1,
      name: "Riya Sharma",
      rating: 5,
      text: "The Gateway of India is beautiful, especially in the evening. The sea view makes the experience even better.",
    },
    {
      id: 2,
      name: "Arjun Mehta",
      rating: 5,
      text: "One of the must-visit places in Mumbai. Great architecture and a lively atmosphere around the monument.",
    },
    {
      id: 3,
      name: "Neha Verma",
      rating: 4,
      text: "A wonderful landmark to visit while exploring South Mumbai. Marine Drive and Colaba are nearby too.",
    },
  ];

  const [reviews, setReviews] = useState(() => {
    try {
      const savedReviews =
        localStorage.getItem("gatewayOfIndiaReviews");

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


  /* ================= SUBMIT REVIEW ================= */

  const handleSubmitReview = (e) => {
    e.preventDefault();

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
        "gatewayOfIndiaReviews",
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


  /* ================= AVERAGE RATING ================= */

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


  /* ================= STAR FUNCTION ================= */

  const renderStars = (rating) => {
    return (
      <span className="gateway-review-stars">

        {[1, 2, 3, 4, 5].map((star) => (

          <span
            key={star}
            className={
              star <= Number(rating)
                ? "gateway-star active"
                : "gateway-star"
            }
          >
            ★
          </span>

        ))}

      </span>
    );
  };


  return (
    <div className="gateway-page">


      {/* ================= TOP BAR ================= */}

      <header className="gateway-topbar">

        <Link
          to="/"
          className="gateway-logo"
        >
          <span>Travel</span>Mate
        </Link>


        <Link
          to="/destinations"
          className="gateway-back"
        >
          ← Back to Destinations
        </Link>


        <button
          type="button"
          className={`gateway-save ${
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


      {/* ================= MAIN ================= */}

      <main className="gateway-container">


        {/* ================= INTRO ================= */}

        <section className="gateway-intro">

          <div className="gateway-eyebrow">

            <span></span>

            ICONIC PLACE

          </div>


          <div className="gateway-intro-main">


            <div className="gateway-title">

              <h1>
                Gateway
                <br />
                of India
              </h1>


              <div className="gateway-location">

                <span>●</span>

                Mumbai, Maharashtra, India

              </div>

            </div>


            <div className="gateway-description">

              <p>
                The Gateway of India is one of
                Mumbai's most recognisable
                landmarks, standing proudly on
                the waterfront overlooking the
                Arabian Sea.
              </p>


              {showMore && (

                <div className="gateway-more">

                  <p>
                    Built during the early twentieth
                    century, the monument became
                    an important ceremonial landmark
                    and a prominent symbol of Mumbai's
                    historic waterfront.
                  </p>


                  <p>
                    Its Indo-Saracenic architectural
                    style, grand arch and location
                    beside the sea make it one of
                    the city's most visited attractions.
                  </p>


                  <p>
                    A visit can easily be combined
                    with nearby attractions such as
                    Colaba, the Taj Mahal Palace and
                    Marine Drive.
                  </p>

                </div>

              )}


              <button
                type="button"
                className="gateway-read-more"
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


        {/* ================= HERO ================= */}

        <section className="gateway-hero">

          <img
            src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=2000&q=90"
            alt="Gateway of India Mumbai"
          />

          <div className="gateway-hero-overlay"></div>


          <div className="gateway-hero-caption">

            <span>
              MUMBAI, INDIA
            </span>

            <strong>
              The iconic gateway by the sea
            </strong>

          </div>

        </section>


        {/* ================= DISCOVER ================= */}

        <section className="gateway-discover">


          <div className="gateway-discover-item">

            <div className="gateway-discover-icon">
              📍
            </div>

            <div>

              <span>
                LOCATION
              </span>

              <strong>
                Mumbai, Maharashtra
              </strong>

            </div>

          </div>


          <div className="gateway-discover-item">

            <div className="gateway-discover-icon">
              🏛️
            </div>

            <div>

              <span>
                TYPE
              </span>

              <strong>
                Historic Monument
              </strong>

            </div>

          </div>


          <div className="gateway-discover-item">

            <div className="gateway-discover-icon">
              🌊
            </div>

            <div>

              <span>
                EXPERIENCE
              </span>

              <strong>
                Heritage & Waterfront
              </strong>

            </div>

          </div>


          <div className="gateway-discover-item">

            <div className="gateway-discover-icon">
              🌇
            </div>

            <div>

              <span>
                BEST FOR
              </span>

              <strong>
                Evening & Photography
              </strong>

            </div>

          </div>

        </section>


        {/* ================= STORY ================= */}

        <section className="gateway-section gateway-story">

          <div className="gateway-section-heading">

            <span>
              THE STORY
            </span>

          </div>


          <div className="gateway-story-content">


            <div className="gateway-story-title">

              <h2>
                A landmark
                <br />
                by the
                <br />
                <em>sea.</em>
              </h2>

            </div>


            <div className="gateway-story-text">

              <p>
                The Gateway of India was built
                in the early twentieth century
                and became an important landmark
                on Mumbai's waterfront.
              </p>


              <p>
                The monument combines
                Indo-Saracenic architectural
                elements with a grand central arch,
                creating a distinctive entrance
                facing the Arabian Sea.
              </p>


              <p>
                Today, the Gateway remains closely
                connected with Mumbai's historic
                identity and is a popular starting
                point for exploring the city's
                southern neighbourhoods.
              </p>

            </div>

          </div>

        </section>


        {/* ================= NEARBY ================= */}

        <section className="gateway-section gateway-nearby">


          <div className="gateway-section-heading">

            <span>
              DON'T MISS
            </span>

          </div>


          <div className="gateway-places-heading">

            <h2>
              Places to explore nearby
            </h2>

            <p>
              Explore Mumbai beyond the Gateway
              of India with grand hotels, historic
              neighbourhoods, waterfront views
              and lively streets.
            </p>

          </div>


          {/* ================= CARDS ================= */}

          <div className="gateway-cards">


            {/* TAJ MAHAL PALACE */}

            <article className="gateway-card">

              <div className="gateway-card-image">

                <img
                  src="https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1000&q=85"
                  alt="Taj Mahal Palace Mumbai"
                />

                <span className="gateway-card-number">
                  01
                </span>

              </div>


              <div className="gateway-card-content">

                <span className="gateway-card-location">
                  COLABA
                </span>

                <h3>
                  Taj Mahal Palace
                </h3>

                <p>
                  Admire one of Mumbai's most
                  famous historic hotels, located
                  directly opposite the Gateway
                  of India.
                </p>


                <Link
                  to="/destination/Mumbai"
                  className="gateway-card-link"
                >
                  Explore place →
                </Link>

              </div>

            </article>


            {/* COLABA CAUSEWAY */}

            <article className="gateway-card">

              <div className="gateway-card-image">

                <img
                  src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1000&q=85"
                  alt="Colaba Mumbai"
                />

                <span className="gateway-card-number">
                  02
                </span>

              </div>


              <div className="gateway-card-content">

                <span className="gateway-card-location">
                  COLABA
                </span>

                <h3>
                  Colaba Causeway
                </h3>

                <p>
                  Walk through one of South Mumbai's
                  lively streets filled with shops,
                  cafés, markets and local character.
                </p>


                <Link
                  to="/destination/Mumbai"
                  className="gateway-card-link"
                >
                  Explore place →
                </Link>

              </div>

            </article>


            {/* MARINE DRIVE */}

            <article className="gateway-card">

              <div className="gateway-card-image">

                <img
                  src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=1000&q=85"
                  alt="Marine Drive Mumbai"
                />

                <span className="gateway-card-number">
                  03
                </span>

              </div>


              <div className="gateway-card-content">

                <span className="gateway-card-location">
                  MUMBAI
                </span>

                <h3>
                  Marine Drive
                </h3>

                <p>
                  Enjoy the sea breeze and beautiful
                  city views along Mumbai's famous
                  waterfront promenade.
                </p>


                <Link
                  to="/destination/Mumbai"
                  className="gateway-card-link"
                >
                  Explore place →
                </Link>

              </div>

            </article>


          </div>

        </section>


        {/* ================= TRAVEL INFORMATION ================= */}

        <section className="gateway-info-section">


          <div className="gateway-info-heading">

            <span>
              PLAN YOUR VISIT
            </span>

            <h2>
              Travel information
            </h2>

          </div>


          <div className="gateway-info-grid">


            <div className="gateway-info-box">

              <div className="gateway-info-icon">
                🕐
              </div>

              <div>

                <span>
                  BEST TIME
                </span>

                <strong>
                  Early Morning & Evening
                </strong>

                <p>
                  Cooler hours are comfortable
                  for exploring the waterfront.
                </p>

              </div>

            </div>


            <div className="gateway-info-box">

              <div className="gateway-info-icon">
                📍
              </div>

              <div>

                <span>
                  LOCATION
                </span>

                <strong>
                  Apollo Bandar, Mumbai
                </strong>

                <p>
                  Located at the southern end
                  of Mumbai's waterfront.
                </p>

              </div>

            </div>


            <div className="gateway-info-box">

              <div className="gateway-info-icon">
                🚆
              </div>

              <div>

                <span>
                  GETTING THERE
                </span>

                <strong>
                  Train, Road & Taxi
                </strong>

                <p>
                  South Mumbai is connected to
                  the city's major transport routes.
                </p>

              </div>

            </div>


            <div className="gateway-info-box">

              <div className="gateway-info-icon">
                📸
              </div>

              <div>

                <span>
                  EXPERIENCE
                </span>

                <strong>
                  Heritage & Photography
                </strong>

                <p>
                  Enjoy the architecture, sea views
                  and surrounding landmarks.
                </p>

              </div>

            </div>


          </div>

        </section>


        {/* ==================================================
            REVIEWS
        ================================================== */}

        <section className="gateway-reviews-section">


          <div className="gateway-section-heading">

            <span>
              TRAVELLER REVIEWS
            </span>

          </div>


          {/* REVIEW HEADER */}

          <div className="gateway-reviews-header">


            <div className="gateway-reviews-title">

              <h2>
                What travellers say
              </h2>

              <p>
                Share your experience and help
                other travellers plan their visit
                to the Gateway of India.
              </p>

            </div>


            <div className="gateway-overall-rating">

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


          {/* WRITE REVIEW */}

          <div className="gateway-write-review-area">

            <button
              type="button"
              className="gateway-write-review-btn"
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
              className="gateway-review-form"
              onSubmit={handleSubmitReview}
            >


              <div className="gateway-form-heading">

                <h3>
                  Share your experience
                </h3>

                <p>
                  Tell fellow travellers about
                  your Gateway of India visit.
                </p>

              </div>


              {/* RATING */}

              <div className="gateway-rating-select">

                <label>
                  Your Rating
                </label>


                <div className="gateway-select-stars">

                  {[1, 2, 3, 4, 5].map(
                    (star) => (

                      <button
                        type="button"
                        key={star}
                        className={
                          star <= reviewRating
                            ? "gateway-select-star selected"
                            : "gateway-select-star"
                        }
                        onClick={() =>
                          setReviewRating(
                            star
                          )
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

              <div className="gateway-form-group">

                <label>
                  Your Name
                </label>


                <input
                  type="text"
                  value={reviewName}
                  onChange={(e) =>
                    setReviewName(
                      e.target.value
                    )
                  }
                  placeholder="Enter your name"
                />

              </div>


              {/* REVIEW */}

              <div className="gateway-form-group">

                <label>
                  Your Review
                </label>


                <textarea
                  rows="5"
                  value={reviewText}
                  onChange={(e) =>
                    setReviewText(
                      e.target.value
                    )
                  }
                  placeholder="Write about your experience..."
                />

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="gateway-submit-review-btn"
              >
                Submit Review →
              </button>


            </form>

          )}


          {/* REVIEWS LIST */}

          <div className="gateway-reviews-list">

            {reviews.map((review) => (

              <article
                className="gateway-review-card"
                key={review.id}
              >


                <div className="gateway-review-user">


                  <div className="gateway-review-avatar">

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


                <p className="gateway-review-text">
                  “{review.text}”
                </p>


              </article>

            ))}

          </div>


        </section>


        {/* ================= CTA ================= */}

        <section className="gateway-cta">


          <div className="gateway-cta-content">

            <span>
              READY TO EXPLORE?
            </span>


            <h2>
              Your Mumbai
              <br />
              adventure starts here.
            </h2>


            <p>
              Discover India's iconic landmarks,
              vibrant cities and unforgettable
              travel experiences with TravelMate.
            </p>


            <Link
              to="/destinations"
              className="gateway-cta-button"
            >
              Explore More Destinations

              <span>
                →
              </span>

            </Link>

          </div>


          <div className="gateway-cta-decoration">
            ✦
          </div>


        </section>


      </main>


      {/* ================= FOOTER ================= */}

      <footer className="gateway-footer">


        <div className="gateway-footer-inner">


          <Link
            to="/"
            className="gateway-footer-logo"
          >
            <span>Travel</span>Mate
          </Link>


          <p>
            Discover places. Create memories.
          </p>


          <div className="gateway-footer-links">

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


        <div className="gateway-footer-bottom">

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

export default GatewayOfIndia;