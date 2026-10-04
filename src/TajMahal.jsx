import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TajMahal.css";

function TajMahal() {
  const [showMore, setShowMore] = useState(false);
  const [saved, setSaved] = useState(false);

  /* ==================================================
      REVIEW STATES
  ================================================== */

  const defaultReviews = [
    {
      id: 1,
      name: "Aarav Sharma",
      rating: 5,
      text: "Absolutely beautiful place. The architecture and overall experience were unforgettable.",
    },
    {
      id: 2,
      name: "Priya Mehta",
      rating: 5,
      text: "Taj Mahal is even more beautiful in real life. Sunrise is definitely worth experiencing.",
    },
    {
      id: 3,
      name: "Rahul Verma",
      rating: 4,
      text: "A wonderful historical place. The surrounding monuments are also worth exploring.",
    },
  ];

  const [reviews, setReviews] = useState(() => {
    try {
      const savedReviews =
        localStorage.getItem("tajMahalReviews");

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
      ADD REVIEW
  ================================================== */

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
        "tajMahalReviews",
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
      RATING CALCULATION
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
      STAR FUNCTION
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


      {/* ==================================================
          TOP BAR
      ================================================== */}

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


      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <main className="taj-container">


        {/* ==================================================
            INTRO
        ================================================== */}

        <section className="taj-intro">

          <div className="taj-eyebrow">

            <span></span>

            ICONIC PLACE

          </div>


          <div className="intro-main">

            <div className="intro-title">

              <h1>
                Taj Mahal
              </h1>


              <div className="taj-location">

                <span>
                  ●
                </span>

                Agra, Uttar Pradesh, India

              </div>

            </div>


            <div className="taj-description">

              <p>
                The Taj Mahal is one of India's
                most celebrated monuments, known
                for its white marble architecture,
                detailed inlay work and its beautiful
                setting beside the Yamuna River.
              </p>


              {showMore && (

                <div className="more-content">

                  <p>
                    Commissioned by Mughal emperor
                    Shah Jahan in memory of Mumtaz
                    Mahal, the monument forms part
                    of a magnificent architectural
                    complex with gardens, a mosque
                    and other structures.
                  </p>


                  <p>
                    The monument is admired for its
                    symmetrical design, marble
                    craftsmanship and changing
                    appearance throughout the day.
                  </p>


                  <p>
                    A visit to Agra can also include
                    nearby historic places such as
                    Agra Fort, Mehtab Bagh and
                    Itimad-ud-Daulah.
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


        {/* ==================================================
            HERO IMAGE
        ================================================== */}

        <section className="taj-hero-image">

          <img
            src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2000&q=90"
            alt="Taj Mahal in Agra"
          />

          <div className="hero-overlay"></div>


          <div className="hero-caption">

            <span>
              AGRA, INDIA
            </span>

            <strong>
              The timeless symbol of love
            </strong>

          </div>

        </section>


        {/* ==================================================
            DISCOVER INFORMATION
        ================================================== */}

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
                Agra, Uttar Pradesh
              </strong>

            </div>

          </div>


          <div className="discover-item">

            <div className="discover-icon">
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


          <div className="discover-item">

            <div className="discover-icon">
              📸
            </div>

            <div>

              <span>
                EXPERIENCE
              </span>

              <strong>
                Architecture & History
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
                Sunrise & Sunset
              </strong>

            </div>

          </div>


        </section>


        {/* ==================================================
            HISTORY / STORY
        ================================================== */}

        <section className="taj-section history-section">


          <div className="section-heading">

            <span className="taj-label">
              THE STORY
            </span>

          </div>


          <div className="history-layout">


            <div className="history-title">

              <h2>
                A monument
                <br />
                that tells a
                <br />
                <em>story.</em>
              </h2>

            </div>


            <div className="history-text">

              <p>
                Built during the Mughal period,
                the Taj Mahal is known for its
                grand white marble structure and
                finely detailed decorative work.
              </p>


              <p>
                The complex combines architecture,
                gardens and water features into a
                carefully planned composition. Its
                symmetry and craftsmanship have
                made it an important part of India's
                architectural heritage.
              </p>


              <p>
                The monument stands on the southern
                bank of the Yamuna River in Agra
                and remains one of the city's major
                attractions.
              </p>

            </div>

          </div>

        </section>


        {/* ==================================================
            PLACES TO EXPLORE
        ================================================== */}

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
              Extend your Agra trip beyond the
              Taj Mahal and discover historic forts,
              peaceful gardens and beautiful Mughal
              architecture.
            </p>

          </div>


          <div className="taj-cards">


            {/* AGRA FORT */}

            <article className="taj-card">

              <div className="card-image">

                <img
                  src="https://assets2.exodus.co.uk/uploads/2015/09/Agra-Fort.jpeg"
                  alt="Agra Fort"
                />

                <span className="card-number">
                  01
                </span>

              </div>


              <div className="card-content">

                <span className="card-location">
                  AGRA
                </span>

                <h3>
                  Agra Fort
                </h3>

                <p>
                  Explore the massive red sandstone
                  fort and its impressive Mughal-era
                  architecture.
                </p>


                <Link
                  to="/destination/Agra"
                  className="card-link"
                >
                  Explore place →
                </Link>

              </div>

            </article>


            {/* MEHTAB BAGH */}

            <article className="taj-card">

              <div className="card-image">

                <img
                  src="https://www.timbuktutravel.com/cdn-cgi/image/quality%3D50%2Cformat%3Dauto/https%3A/assets.timbuktutravel.com/experiences/kodak_images/000/015/824/original/Visit_Mehtab_Bagh__the_Moonlight_Gardens_of_Agra.jpg"
                  alt="Mehtab Bagh"
                />

                <span className="card-number">
                  02
                </span>

              </div>


              <div className="card-content">

                <span className="card-location">
                  AGRA
                </span>

                <h3>
                  Mehtab Bagh
                </h3>

                <p>
                  A peaceful Mughal garden across
                  the Yamuna offering beautiful views
                  towards the Taj Mahal.
                </p>


                <Link
                  to="/destination/Agra"
                  className="card-link"
                >
                  Explore place →
                </Link>

              </div>

            </article>


            {/* BABY TAJ */}

            <article className="taj-card">

              <div className="card-image">

                <img
                  src="https://commons.wikimedia.org/wiki/Special:FilePath/Itimad-ud-Daulah%20Agra%2001.jpg"
                  alt="Itimad ud Daulah"
                />

                <span className="card-number">
                  03
                </span>

              </div>


              <div className="card-content">

                <span className="card-location">
                  AGRA
                </span>

                <h3>
                  Itimad-ud-Daulah
                </h3>

                <p>
                  Discover the delicate marble tomb
                  often called the Baby Taj for its
                  elegant craftsmanship.
                </p>


                <Link
                  to="/destination/Agra"
                  className="card-link"
                >
                  Explore place →
                </Link>

              </div>

            </article>


          </div>

        </section>


        {/* ==================================================
            TRAVEL INFORMATION
        ================================================== */}

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


            <div className="info-box">

              <div className="info-icon">
                🕐
              </div>

              <div>

                <span>
                  OPENING
                </span>

                <strong>
                  30 min before sunrise
                </strong>

                <p>
                  Generally open until 30 min
                  before sunset.
                </p>

              </div>

            </div>


            <div className="info-box">

              <div className="info-icon">
                📅
              </div>

              <div>

                <span>
                  WEEKLY CLOSURE
                </span>

                <strong>
                  Friday
                </strong>

                <p>
                  Check official information
                  before travelling.
                </p>

              </div>

            </div>


            <div className="info-box">

              <div className="info-icon">
                📍
              </div>

              <div>

                <span>
                  LOCATION
                </span>

                <strong>
                  Agra, Uttar Pradesh
                </strong>

                <p>
                  Located beside the Yamuna River.
                </p>

              </div>

            </div>


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
                  Agra is connected with major
                  Indian cities.
                </p>

              </div>

            </div>


          </div>

        </section>


        {/* ==================================================
            RATING & REVIEWS
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
                other travellers plan their visit
                to the Taj Mahal.
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
                  your Taj Mahal visit.
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

              <div className="form-group">

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

              <div className="form-group">

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


              {/* SUBMIT BUTTON */}

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


                <div className="review-card-top">

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

                </div>


                <p className="review-text">
                  “{review.text}”
                </p>


              </article>

            ))}

          </div>


        </section>


        {/* ==================================================
            CTA
        ================================================== */}

        <section className="taj-cta">


          <div className="cta-content">

            <span>
              READY TO EXPLORE?
            </span>


            <h2>
              Your Agra adventure
              <br />
              starts here.
            </h2>


            <p>
              Discover India's heritage,
              architecture and unforgettable
              places with TravelMate.
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


      {/* ==================================================
          FOOTER
      ================================================== */}

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

export default TajMahal;