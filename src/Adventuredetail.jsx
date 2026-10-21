import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AdventureDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const place = location.state;

  if (!place) {
    return (
      <div className="adventure-not-found" style={{ textAlign: "center", padding: "100px" }}>
        <h2>Destination data not found!</h2>
        <button onClick={() => navigate(-1)} style={{ padding: "10px 20px", marginTop: "15px", cursor: "pointer" }}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="adventure-detail-page">
      <button 
        type="button" 
        className="back-btn" 
        onClick={() => navigate(-1)}
      >
        ← Back to Adventures
      </button>

      <div className="adventure-detail-container">
        <img src={place.image} alt={place.name || place.title} className="detail-image" />
        
        <div className="detail-content">
          <p className="detail-location">📍 {place.location || place.subtitle}</p>
          <h1>{place.name || place.title}</h1>
          <p className="detail-desc">{place.description}</p>

          <div className="info-grid">
            <div className="info-card">
              <h3>History / Culture</h3>
              <p>{place.history || "Renowned globally as a primary hub for extreme adventure and adrenaline sports."}</p>
            </div>
            <div className="info-card">
              <h3>Best Time to Visit</h3>
              <p>{place.bestTime || "October to June"}</p>
            </div>
            <div className="info-card">
              <h3>Famous For</h3>
              <p>{place.famousFor || "High-octane adventure sports, rugged tracks, and scenic views."}</p>
            </div>
          </div>

          <button 
            type="button" 
            className="book-experience-btn"
            onClick={() => alert(`Booking confirmed for ${place.name || place.title}!`)}
          >
            Book This Extreme Adventure Now
          </button>
        </div>
      </div>

      <style>{`
        .adventure-detail-page {
          min-height: 100vh;
          padding: 40px 8%;
          background: #fff7ed;
          color: #ea580c;
          font-family: Arial, sans-serif;
        }

        .back-btn {
          background: none;
          border: none;
          color: #ea580c;
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
          margin-bottom: 25px;
        }

        .back-btn:hover {
          color: #c2410c;
        }

        .adventure-detail-container {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(234, 88, 12, 0.15);
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
          color: #ea580c;
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
          background: #ea580c;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.2s;
        }

        .book-experience-btn:hover {
          background: #c2410c;
        }
      `}</style>
    </div>
  );
}