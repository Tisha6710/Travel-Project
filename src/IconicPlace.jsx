import React from "react";
import { Link, useParams } from "react-router-dom";

const places = {
  "taj-mahal": {
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=90",
    tagline: "A timeless symbol of love",
    description:
      "The Taj Mahal is one of India's most iconic monuments. Built from white marble, it is surrounded by beautiful gardens, reflecting pools and impressive Mughal architecture.",
    highlights: [
      "Taj Mahal",
      "Agra Fort",
      "Mehtab Bagh",
      "Itmad-ud-Daulah",
    ],
    bestTime: "October to March",
  },

  "gateway-of-india": {
    name: "Gateway of India",
    location: "Mumbai, Maharashtra",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=90",
    tagline: "Mumbai's iconic waterfront landmark",
    description:
      "The Gateway of India stands proudly on Mumbai's waterfront and is one of the city's most recognizable landmarks. Explore the surrounding harbour, Colaba and nearby attractions.",
    highlights: [
      "Gateway of India",
      "Marine Drive",
      "Colaba Causeway",
      "Elephanta Caves",
    ],
    bestTime: "November to February",
  },

  manali: {
    name: "Manali",
    location: "Himachal Pradesh",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=90",
    tagline: "Mountains, snow and unforgettable adventures",
    description:
      "Manali is a beautiful Himalayan destination surrounded by snow-covered mountains, valleys, rivers and forests. It is perfect for nature lovers and adventure seekers.",
    highlights: [
      "Solang Valley",
      "Rohtang Pass",
      "Hadimba Temple",
      "Old Manali",
    ],
    bestTime: "October to June",
  },

  jaipur: {
    name: "Jaipur",
    location: "Rajasthan",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=90",
    tagline: "The Pink City of India",
    description:
      "Jaipur is famous for its magnificent forts, royal palaces, colourful markets and rich Rajasthani culture.",
    highlights: [
      "Hawa Mahal",
      "Amber Fort",
      "City Palace",
      "Jal Mahal",
    ],
    bestTime: "October to March",
  },

  "kerala-backwaters": {
    name: "Kerala Backwaters",
    location: "Kerala",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=90",
    tagline: "Peaceful waters and tropical beauty",
    description:
      "Kerala's backwaters offer a peaceful experience through palm-lined waterways, villages, lagoons and traditional houseboats.",
    highlights: [
      "Alleppey",
      "Kumarakom",
      "Houseboat Cruise",
      "Vembanad Lake",
    ],
    bestTime: "October to February",
  },

  "varanasi-ghats": {
    name: "Varanasi Ghats",
    location: "Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1600&q=90",
    tagline: "Ancient ghats beside the Ganges",
    description:
      "Varanasi is one of India's oldest cities and is famous for its ghats, temples, riverfront views and vibrant cultural atmosphere.",
    highlights: [
      "Dashashwamedh Ghat",
      "Assi Ghat",
      "Ganga Aarti",
      "Kashi Vishwanath Temple",
    ],
    bestTime: "October to March",
  },

  ladakh: {
    name: "Ladakh",
    location: "Ladakh",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=90",
    tagline: "High-altitude landscapes and adventure",
    description:
      "Ladakh is known for dramatic mountains, high-altitude lakes, monasteries and spectacular Himalayan landscapes.",
    highlights: [
      "Pangong Lake",
      "Nubra Valley",
      "Leh Palace",
      "Khardung La",
    ],
    bestTime: "May to September",
  },

  goa: {
    name: "Goa",
    location: "Goa, India",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=90",
    tagline: "Beaches, sunsets and coastal escapes",
    description:
      "Goa combines beautiful beaches, Portuguese heritage, vibrant markets, coastal cuisine and relaxed holiday experiences.",
    highlights: [
      "Baga Beach",
      "Calangute Beach",
      "Fort Aguada",
      "Old Goa",
    ],
    bestTime: "November to February",
  },
};

function IconicPlace() {
  const { slug } = useParams();

  const place = places[slug];

  if (!place) {
    return (
      <div className="iconic-not-found">
        <h1>Destination Not Found</h1>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="iconic-detail-page">

      {/* HERO */}

      <section
        className="iconic-detail-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 25, 22, 0.55),
              rgba(0, 25, 22, 0.75)
            ),
            url("${place.image}")
          `,
        }}
      >

        <div className="iconic-detail-hero-content">

          <span>EXPLORE INDIA</span>

          <h1>{place.name}</h1>

          <p>📍 {place.location}</p>

          <div className="iconic-detail-tagline">
            {place.tagline}
          </div>

        </div>

      </section>


      {/* CONTENT */}

      <main className="iconic-detail-container">

        <Link to="/" className="back-home-btn">
          ← Back to Home
        </Link>


        <section className="iconic-intro">

          <div className="iconic-intro-text">

            <span className="small-title">
              TRAVELMATE DESTINATION GUIDE
            </span>

            <h2>
              Discover {place.name}
            </h2>

            <p>
              {place.description}
            </p>

            <p>
              Plan your journey with TravelMate and explore
              memorable places, local experiences and beautiful
              landscapes.
            </p>

          </div>


          <div className="quick-info-card">

            <h3>Quick Information</h3>

            <div className="quick-info-row">
              <span>📍 Location</span>
              <strong>{place.location}</strong>
            </div>

            <div className="quick-info-row">
              <span>🌤 Best Time</span>
              <strong>{place.bestTime}</strong>
            </div>

            <div className="quick-info-row">
              <span>✨ Experience</span>
              <strong>Travel & Explore</strong>
            </div>

          </div>

        </section>


        {/* HIGHLIGHTS */}

        <section className="iconic-highlights">

          <div className="detail-section-title">

            <span>DON'T MISS</span>

            <h2>Top places to explore</h2>

          </div>


          <div className="highlight-grid">

            {place.highlights.map((item, index) => (

              <div
                className="highlight-card"
                key={item}
              >

                <div className="highlight-number">
                  0{index + 1}
                </div>

                <h3>{item}</h3>

                <p>
                  Explore this beautiful attraction
                  during your journey.
                </p>

              </div>

            ))}

          </div>

        </section>


        {/* CTA */}

        <section className="iconic-detail-cta">

          <div>

            <span>YOUR JOURNEY STARTS HERE</span>

            <h2>
              Ready to explore {place.name}?
            </h2>

            <p>
              Discover unforgettable places with TravelMate.
            </p>

          </div>

          <Link to="/destinations">
            Explore More Destinations →
          </Link>

        </section>

      </main>

    </div>
  );
}

export default IconicPlace;