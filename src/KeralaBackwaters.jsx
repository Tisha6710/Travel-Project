import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./KeralaBackwaters.css";

function KeralaBackwaters() {
  const [showMore, setShowMore] = useState(false);
  const [saved, setSaved] = useState(false);

  /* ================= REVIEW SYSTEM ================= */

  const defaultReviews = [
    {
      id: 1,
      name: "Ananya Sharma",
      rating: 5,
      text: "The Kerala backwaters were incredibly peaceful and beautiful. The houseboat experience was unforgettable.",
    },
    {
      id: 2,
      name: "Rahul Mehta",
      rating: 5,
      text: "A perfect place to relax and enjoy nature. The views from the houseboat were absolutely amazing.",
    },
    {
      id: 3,
      name: "Simran Kapoor",
      rating: 4,
      text: "Loved the greenery, villages and peaceful waterways. Definitely worth experiencing when visiting Kerala.",
    },
  ];

  const [reviews, setReviews] = useState(() => {
    try {
      const savedReviews = localStorage.getItem(
        "keralaBackwatersReviews"
      );

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
        "keralaBackwatersReviews",
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
      <span className="kerala-review-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={
              star <= Number(rating)
                ? "kerala-star active"
                : "kerala-star"
            }
          >
            ★
          </span>
        ))}
      </span>
    );
  };


  /* ================= IMAGE ERROR ================= */

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src =
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85";
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
                Kerala
                <br />
                Backwaters
              </h1>


              <div className="taj-location">

                <span>●</span>

                Alappuzha, Kerala, India

              </div>

            </div>


            <div className="taj-description">

              <p>
                The Kerala Backwaters are a
                beautiful network of lakes,
                canals, rivers and lagoons
                surrounded by coconut palms,
                green paddy fields and peaceful
                villages.
              </p>


              {showMore && (

                <div className="more-content">

                  <p>
                    Alappuzha, also known as
                    Alleppey, is one of the most
                    popular gateways to Kerala's
                    backwaters and is famous for
                    its traditional houseboat
                    experiences.
                  </p>


                  <p>
                    A backwater journey offers
                    a relaxing view of Kerala's
                    natural beauty and local life,
                    with traditional homes,
                    villages and tropical
                    landscapes along the waterways.
                  </p>


                  <p>
                    Visitors can also explore
                    nearby destinations such as
                    Kumarakom, Marari Beach and
                    Kuttanad.
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
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=90"
            alt="Kerala Backwaters"
            onError={handleImageError}
          />

          <div className="hero-overlay"></div>


          <div className="hero-caption">

            <span>
              ALAPPUZHA, KERALA
            </span>

            <strong>
              A peaceful journey through paradise
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
                Alappuzha, Kerala
              </strong>

            </div>

          </div>


          <div className="discover-item">

            <div className="discover-icon">
              🚤
            </div>

            <div>

              <span>
                EXPERIENCE
              </span>

              <strong>
                Houseboat Cruise
              </strong>

            </div>

          </div>


          <div className="discover-item">

            <div className="discover-icon">
              🌴
            </div>

            <div>

              <span>
                HIGHLIGHT
              </span>

              <strong>
                Tropical Landscapes
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
                Nature & Relaxation
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
                A journey
                <br />
                through
                <br />
                <em>paradise.</em>
              </h2>

            </div>


            <div className="history-text">

              <p>
                Kerala's backwaters form an
                extensive network of waterways
                connecting lakes, rivers, canals
                and coastal lagoons across the
                state.
              </p>


              <p>
                Traditional houseboats, known as
                kettuvallams, are one of the most
                memorable ways to experience this
                landscape. These boats were
                traditionally used to transport
                goods and have become a popular
                part of Kerala's tourism experience.
              </p>


              <p>
                The backwaters also provide a
                glimpse into everyday life in
                Kerala, with coconut trees,
                paddy fields, villages and local
                communities lining the waterways.
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
              Extend your Kerala journey beyond
              the backwaters and discover peaceful
              beaches, scenic villages and beautiful
              lakeside destinations.
            </p>

          </div>


          <div className="taj-cards">


            {/* ================= KUMARAKOM ================= */}

            <article className="taj-card">

              <div className="card-image">

                <img
                  src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=85"
                  alt="Kumarakom Kerala"
                  onError={handleImageError}
                />

                <span className="card-number">
                  01
                </span>

              </div>


              <div className="card-content">

                <span className="card-location">
                  KERALA
                </span>

                <h3>
                  Kumarakom
                </h3>

                <p>
                  Explore peaceful waterways,
                  coconut groves and the scenic
                  Vembanad Lake surrounded by
                  tropical greenery.
                </p>


                <Link
                  to="/destinations"
                  className="card-link"
                >
                  Explore place →
                </Link>

              </div>

            </article>


            {/* ================= MARARI BEACH ================= */}

            <article className="taj-card">

              <div className="card-image">

                <img
                  src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=85"
                  alt="Marari Beach Kerala"
                  onError={handleImageError}
                />

                <span className="card-number">
                  02
                </span>

              </div>


              <div className="card-content">

                <span className="card-location">
                  ALAPPUZHA
                </span>

                <h3>
                  Marari Beach
                </h3>

                <p>
                  Relax on a peaceful Kerala beach
                  known for golden sand, coconut
                  palms and a calm coastal atmosphere.
                </p>


                <Link
                  to="/destinations"
                  className="card-link"
                >
                  Explore place →
                </Link>

              </div>

            </article>


            {/* ================= KUTTANAD ================= */}

            <article className="taj-card">

              <div className="card-image">

                <img
                  src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85"
                  alt="Kuttanad Kerala"
                  onError={handleImageError}
                />

                <span className="card-number">
                  03
                </span>

              </div>


              <div className="card-content">

                <span className="card-location">
                  ALAPPUZHA
                </span>

                <h3>
                  Kuttanad
                </h3>

                <p>
                  Discover Kerala's scenic
                  rice-growing region, famous for
                  its paddy fields, canals and
                  beautiful countryside.
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
                  October – February
                </strong>

                <p>
                  Pleasant weather makes this
                  period comfortable for exploring
                  the backwaters.
                </p>

              </div>

            </div>


            {/* EXPERIENCE */}

            <div className="info-box">

              <div className="info-icon">
                🚤
              </div>

              <div>

                <span>
                  EXPERIENCE
                </span>

                <strong>
                  Houseboat Cruise
                </strong>

                <p>
                  Choose between day cruises and
                  overnight houseboat stays.
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
                  Alappuzha, Kerala
                </strong>

                <p>
                  Alappuzha is one of the main
                  gateways to Kerala's backwater
                  network.
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
                  Alappuzha is well connected by
                  road and rail, with Kochi
                  International Airport serving
                  the region.
                </p>

              </div>

            </div>


          </div>

        </section>


        {/* ==================================================
            TRAVELLER REVIEWS
        ================================================== */}

        <section className="kerala-reviews-section">


          <div className="section-heading">

            <span className="taj-label">
              TRAVELLER REVIEWS
            </span>

          </div>


          {/* REVIEW HEADER */}

          <div className="kerala-reviews-header">


            <div className="kerala-reviews-title">

              <h2>
                What travellers say
              </h2>

              <p>
                Share your experience and help
                other travellers plan their Kerala
                backwater journey.
              </p>

            </div>


            <div className="kerala-overall-rating">

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

          <div className="kerala-write-review-area">

            <button
              type="button"
              className="kerala-write-review-btn"
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
              className="kerala-review-form"
              onSubmit={handleSubmitReview}
            >


              <div className="kerala-form-heading">

                <h3>
                  Share your experience
                </h3>

                <p>
                  Tell fellow travellers about
                  your Kerala backwater experience.
                </p>

              </div>


              {/* RATING */}

              <div className="kerala-rating-select">

                <label>
                  Your Rating
                </label>


                <div className="kerala-select-stars">

                  {[1, 2, 3, 4, 5].map(
                    (star) => (

                      <button
                        type="button"
                        key={star}
                        className={
                          star <= reviewRating
                            ? "kerala-select-star selected"
                            : "kerala-select-star"
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

              <div className="kerala-form-group">

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

              <div className="kerala-form-group">

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
                className="kerala-submit-review-btn"
              >
                Submit Review →
              </button>


            </form>

          )}


          {/* REVIEWS LIST */}

          <div className="kerala-reviews-list">

            {reviews.map((review) => (

              <article
                className="kerala-review-card"
                key={review.id}
              >


                <div className="kerala-review-user">


                  <div className="kerala-review-avatar">

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


                <p className="kerala-review-text">
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
              Your Kerala adventure
              <br />
              starts here.
            </h2>


            <p>
              Cruise through peaceful waterways,
              discover tropical landscapes and
              experience the beauty of Kerala
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

export default KeralaBackwaters;