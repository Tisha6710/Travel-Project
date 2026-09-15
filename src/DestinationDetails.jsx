import { useParams, Link } from "react-router-dom";
import { useState } from "react";

function DestinationDetails() {
  const { name } = useParams();
  const [reviewerName, setReviewerName] = useState("");
const [rating, setRating] = useState("");
const [reviewText, setReviewText] = useState("");
const [submittedReview, setSubmittedReview] = useState(null);
  return (
    <div className="details-page">
      <h1>{name}</h1>

      <p>
        Explore this beautiful destination and discover amazing
        places, experiences and travel opportunities.
      </p>

      <h2>Destination Rating</h2>
      <p>⭐ 4.5 / 5</p>

      <h2>About this Destination</h2>
      <p>
        This destination is a great choice for travellers looking
        for memorable experiences.
      </p>

      <h2>Reviews</h2>

<div className="review-form">
  <h3>Write a Review</h3>

  <input
  type="text"
  placeholder="Your name"
  className="review-input"
  value={reviewerName}
  onChange={(e) => setReviewerName(e.target.value)}
/>

  <select
  className="review-input"
  value={rating}
  onChange={(e) => setRating(e.target.value)}
>
  <option value="">Select Rating</option>
  <option value="1">⭐ 1</option>
  <option value="2">⭐ 2</option>
  <option value="3">⭐ 3</option>
  <option value="4">⭐ 4</option>
  <option value="5">⭐ 5</option>
</select>

  <textarea
  placeholder="Write your review..."
  className="review-input"
  rows="5"
  value={reviewText}
  onChange={(e) => setReviewText(e.target.value)}
></textarea>

 <button
  onClick={() => {
    setSubmittedReview({
      name: reviewerName,
      rating: rating,
      review: reviewText,
    });

    alert("Review submitted successfully!");
  }}
>
  Submit Review
</button>
</div>
      <Link to="/destinations">
  <button>← Back to Destinations</button>
</Link>
    </div>
  );
}

export default DestinationDetails;