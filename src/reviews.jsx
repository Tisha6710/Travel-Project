import { useState } from "react";
import { Link } from "react-router-dom";

function Reviews() {

  const [reviews, setReviews] = useState([
    {
      name: "Priya Sharma",
      rating: 5,
      text: "TravelMate helped me find an amazing destination for my trip. The recommendations were really useful!",
      photo: null
    },
    {
      name: "Rahul Verma",
      rating: 4,
      text: "I really liked the destination information. It made planning my trip much easier.",
      photo: null
    },
    {
      name: "Ananya Singh",
      rating: 5,
      text: "The website is simple and easy to use. I discovered some beautiful places through TravelMate.",
      photo: null
    }
  ]);

  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState(null);

  // Photo select karne par preview
  const handlePhotoChange = (e) => {

    const file = e.target.files[0];

    if (file) {

      // Sirf images allow
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        return;
      }

      // 5 MB limit
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5 MB.");
        return;
      }

      const reader = new FileReader();

      reader.onloadend = () => {
        setPhoto(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!text.trim()) {
      alert("Please write your review.");
      return;
    }

    const newReview = {
      name: name,
      rating: Number(rating),
      text: text,
      photo: photo
    };

    // New review sabse upar
    setReviews([newReview, ...reviews]);

    // Form clear
    setName("");
    setRating(5);
    setText("");
    setPhoto(null);

    // File input clear
    document.getElementById("review-photo").value = "";

    alert("Your review has been submitted successfully! ⭐");
  };


  return (
    <div className="reviews-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <Link to="/" className="logo">
          ✈️ TravelMate
        </Link>

        <div className="nav-links">

          <Link to="/" className="nav-item">
            Home
          </Link>

          <Link to="/destinations" className="nav-item">
            Destinations
          </Link>

          <Link to="/reviews" className="nav-item active">
            Reviews
          </Link>

          <Link to="/login" className="login-btn">
            Login
          </Link>

        </div>

      </nav>


      {/* ================= HEADER ================= */}

      <section className="reviews-hero">

        <span className="hero-tag">
          TRAVELLER EXPERIENCES
        </span>

        <h1>
          Real stories from <span>real travellers.</span>
        </h1>

        <p>
          Discover what travellers experienced on their journeys
          and share your own travel story with the TravelMate community.
        </p>

      </section>


      {/* ================= MAIN CONTENT ================= */}

      <div className="reviews-container">


        {/* ================= WRITE REVIEW ================= */}

        <div className="review-form-card">

          <div className="review-form-header">

            <div className="review-form-icon">
              ✍️
            </div>

            <div>
              <h2>Share Your Experience</h2>

              <p>
                Tell other travellers about your journey.
              </p>
            </div>

          </div>


          <form onSubmit={handleSubmit}>

            {/* NAME */}

            <div className="review-field">

              <label>Your Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

            </div>


            {/* RATING */}

            <div className="review-field">

              <label>Your Rating</label>

              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >

                <option value="5">
                  ⭐⭐⭐⭐⭐ 5 Stars
                </option>

                <option value="4">
                  ⭐⭐⭐⭐ 4 Stars
                </option>

                <option value="3">
                  ⭐⭐⭐ 3 Stars
                </option>

                <option value="2">
                  ⭐⭐ 2 Stars
                </option>

                <option value="1">
                  ⭐ 1 Star
                </option>

              </select>

            </div>


            {/* REVIEW */}

            <div className="review-field">

              <label>Your Review</label>

              <textarea
                placeholder="Write about your travel experience..."
                rows="6"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

            </div>


            {/* PHOTO */}

            <div className="review-field">

              <label>
                Add Travel Photo
                <span className="optional-text">
                  (Optional)
                </span>
              </label>

              <label
                htmlFor="review-photo"
                className="photo-upload-box"
              >

                <span className="upload-icon">
                  📸
                </span>

                <span>
                  Click to upload a photo
                </span>

                <small>
                  JPG, PNG or JPEG • Max 5 MB
                </small>

              </label>

              <input
                id="review-photo"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden-file-input"
              />

            </div>


            {/* PHOTO PREVIEW */}

            {photo && (

              <div className="photo-preview">

                <img
                  src={photo}
                  alt="Travel preview"
                />

                <button
                  type="button"
                  className="remove-photo"
                  onClick={() => {
                    setPhoto(null);
                    document.getElementById("review-photo").value = "";
                  }}
                >
                  ×
                </button>

              </div>

            )}


            {/* SUBMIT */}

            <button
              type="submit"
              className="submit-review-btn"
            >
              Share Review ⭐
            </button>

          </form>

        </div>


        {/* ================= ALL REVIEWS ================= */}

        <div className="reviews-list-section">

          <div className="reviews-list-header">

            <div>

              <span className="small-heading">
                TRAVELLER STORIES
              </span>

              <h2>
                What travellers say
              </h2>

            </div>

            <div className="review-count">
              {reviews.length} Reviews
            </div>

          </div>


          {/* REVIEW CARDS */}

          <div className="reviews-list">

            {reviews.map((review, index) => (

              <div
                className="travel-review-card"
                key={index}
              >

                <div className="review-card-top">

                  <div className="review-user">

                    <div className="user-avatar">
                      {review.name.charAt(0).toUpperCase()}
                    </div>

                    <div>

                      <h3>
                        {review.name}
                      </h3>

                      <div className="review-stars">
                        {"⭐".repeat(review.rating)}
                      </div>

                    </div>

                  </div>

                  <span className="verified-review">
                    ✓ Traveller
                  </span>

                </div>


                <p className="review-text">
                  "{review.text}"
                </p>


                {/* Uploaded photo */}

                {review.photo && (

                  <div className="review-photo">

                    <img
                      src={review.photo}
                      alt="Traveller experience"
                    />

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* ================= BACK HOME ================= */}

      <div className="back-home">

        <Link to="/">
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Reviews;