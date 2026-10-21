import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CultureDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const place = location.state;

  if (!place) {
    return (
      <div className="culture-not-found" style={{ textAlign: "center", padding: "100px" }}>
        <h2>Culture destination data not found!</h2>
        <button onClick={() => navigate(-1)} style={{ padding: "10px 20px", marginTop: "15px", cursor: "pointer" }}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="culture-detail-page">
      <button 
        type="button" 
        className="back-btn" 
        onClick={() => navigate(-1)}
      >
        ← Back to Culture
      </button>

      <div className="culture-detail-container">
        <img src={place.image} alt={place.name || place.title} className="detail-image" />
        
        <div className="detail-content">
          <p className="detail-location">📍 {place.location || place.subtitle}</p>
          <h1>{place.name || place.title}</h1>
          <p className="detail-desc">{place.description || place.subtitle}</p>

          <div className="info-grid">
            <div className="info-card">
              <h3>History / Culture</h3>
              <p>{place.history || "Renowned globally for its rich heritage of ancient traditions, royal architecture, and historical monuments."}</p>
            </div>
            <div className="info-card">
              <h3>Best Time to Visit</h3>
              <p>{place.bestTime || "October to March"}</p>
            </div>
            <div className="info-card">
              <h3>Famous For</h3>
              <p>{place.famousFor || "Palaces, historical landmarks, local arts, and cultural tours."}</p>
            </div>
          </div>

          <button 
            type="button" 
            className="book-experience-btn"
            onClick={() => alert(`Cultural tour reservation confirmed for ${place.name || place.title}!`)}
          >
            Book This Cultural Experience Now
          </button>
        </div>
      </div>

      <style>{`
        .culture-detail-page {
          min-height: 100vh;
          padding: 40px 8%;
          background: #f7f4ed;
          color: #163b32;
          font-family: Arial, sans-serif;
        }

        .back-btn {
          background: none;
          border: none;
          color: #163b32;
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
          margin-bottom: 25px;
        }

        .back-btn:hover {
          color: #a77937;
        }

        .culture-detail-container {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(22, 59, 50, 0.1);
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
          color: #a77937;
          font-weight: bold;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .detail-content h1 {
          font-family: Georgia, serif;
          font-size: 32px;
          margin-bottom: 15px;
          color: #163b32;
        }

        .detail-desc {
          color: #66736b;
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
          color: #163b32;
          margin-bottom: 8px;
          font-family: Georgia, serif;
        }

        .info-card p {
          color: #66736b;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        .book-experience-btn {
          width: 100%;
          padding: 15px;
          background: #163b32;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.2s;
        }

        .book-experience-btn:hover {
          background: #2f6b59;
        }
      `}</style>
    </div>
  );
}