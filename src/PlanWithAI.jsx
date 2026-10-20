import React, { useState } from "react";

export default function PlanWithAI() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("3");
  const [budget, setBudget] = useState("Moderate");
  const [interests, setInterests] = useState("Nature, Food and Sightseeing");
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setItinerary("");
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/plan-trip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ destination, days, budget, interests }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to create your itinerary.");
      }

      setItinerary(data.itinerary);
    } catch (err) {
      setError(
        err.message ||
          "Backend se connect nahi ho pa raha. Check karo ki server running hai."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="plan-with-ai"
      style={{
        maxWidth: "1100px",
        margin: "60px auto",
        padding: "40px 24px",
        borderRadius: "24px",
        background: "#f0fff4",
        color: "#063b27",
      }}
    >
      <p style={{ fontWeight: 700, letterSpacing: "2px" }}>
        ✨ YOUR PERSONAL TRAVEL ASSISTANT
      </p>

      <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", marginBottom: "12px" }}>
        Plan your trip with AI
      </h2>

      <p>Tell us what you love. Get a personalised travel itinerary.</p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginTop: "28px",
        }}
      >
        <label>
          Destination
          <input
            required
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="e.g. Manali"
            style={inputStyle}
          />
        </label>

        <label>
          Trip duration
          <select value={days} onChange={(e) => setDays(e.target.value)} style={inputStyle}>
            <option value="1">1 day</option>
            <option value="2">2 days</option>
            <option value="3">3 days</option>
            <option value="5">5 days</option>
            <option value="7">7 days</option>
            <option value="10">10 days</option>
          </select>
        </label>

        <label>
          Budget
          <select value={budget} onChange={(e) => setBudget(e.target.value)} style={inputStyle}>
            <option value="Budget">Budget-friendly</option>
            <option value="Moderate">Moderate</option>
            <option value="Luxury">Luxury</option>
          </select>
        </label>

        <label>
          Your interests
          <input
            required
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="Nature, food, adventure..."
            style={inputStyle}
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          style={{
            gridColumn: "1 / -1",
            padding: "15px",
            border: "none",
            borderRadius: "12px",
            background: "#00d66b",
            color: "#00351d",
            fontWeight: 700,
            fontSize: "16px",
            cursor: loading ? "wait" : "pointer",
          }}
        >
          {loading ? "Creating your itinerary..." : "✨ Create my AI trip plan"}
        </button>
      </form>

      {error && <p role="alert" style={{ color: "#b91c1c" }}>{error}</p>}

      {itinerary && (
        <div
          style={{
            marginTop: "28px",
            padding: "24px",
            borderRadius: "16px",
            background: "#fff",
            lineHeight: 1.8,
            whiteSpace: "pre-wrap",
          }}
        >
          <h3>Your personalised itinerary</h3>
          {itinerary}
        </div>
      )}
    </section>
  );
}

const inputStyle = {
  display: "block",
  boxSizing: "border-box",
  width: "100%",
  marginTop: "8px",
  padding: "12px",
  border: "1px solid #b8d8c5",
  borderRadius: "10px",
  background: "#fff",
  fontSize: "15px",
};