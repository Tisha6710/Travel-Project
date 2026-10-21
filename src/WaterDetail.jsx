import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function WaterDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const place = location.state;

  // Agar direct URL hit kare aur state na ho toh wapas page par bhej dein
  if (!place) {
    return (
      <div className="water-not-found">
        <h2>Destination data not found!</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="water-detail-page">
      <button 
        type="button" 
        className="back-btn" 
        onClick={() => navigate(-1)}
      >
        ← Back to Water Adventures
      </button>

      <div className="water-detail-container">
        <img src={place.image} alt={place.name || place.title} className="detail-image" />
        
        <div className="detail-content">
          <p className="detail-location">📍 {place.location || place.subtitle}</p>
          <h1>{place.name || place.title}</h1>
          <p className="detail-desc">{place.description}</p>

          <div className="info-grid">
            <div className="info-card">
              <h3>History / Culture</h3>
              <p>{place.history || "Famous for its incredible water landscapes and coastal beauty."}</p>
            </div>
            <div className="info-card">
              <h3>Best Time to Visit</h3>
              <p>{place.bestTime || "October to March"}</p>
            </div>
            <div className="info-card">
              <h3>Famous For</h3>
              <p>{place.famousFor || "Water sports, scenic views, and relaxation."}</p>
            </div>
          </div>

          <button 
            type="button" 
            className="book-experience-btn"
            onClick={() => alert(`Booking confirmed for ${place.name || place.title}!`)}
          >
            Book This Water Adventure Now
          </button>
        </div>
      </div>

      <style>{`
        .water-detail-page {
          min-height: 100vh;
          padding: 40px 8%;
          background: #f0f9ff;
          color: #0369a1;
          font-family: Arial, sans-serif;
        }

        .back-btn {
          background: none;
          border: none;
          color: #0284c7;
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
          margin-bottom: 25px;
        }

        .back-btn:hover {
          color: #0369a1;
        }

        .water-detail-container {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(2, 132, 199, 0.15);
          max-width: 900px;
          margin: 0 auto;
        }

        .detail-image {
          width: 100%;
          height: 380px;
          object-fit: cover;
        }

        .detail-content {
          padding: 40px;
        }

        .detail-location {
          color: #0284c7;
          font-weight: bold;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .detail-content h1 {
          font-family: Georgia, serif;
          font-size: 32px;
          margin-bottom: 15px;
          color: #0f172a;
        }

        .detail-desc {
          color: #475569;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .info-card {
          background: #f8fafc;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .info-card h3 {
          font-size: 16px;
          color: #0f172a;
          margin-bottom: 8px;
          font-family: Georgia, serif;
        }

        .info-card p {
          color: #475569;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        .book-experience-btn {
          width: 100%;
          padding: 15px;
          background: #0284c7;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.2s;
        }

        .book-experience-btn:hover {
          background: #0369a1;
        }

        .water-not-found {
          text-align: center;
          padding: 100px;
        }
      `}</style>
    </div>
  );
}