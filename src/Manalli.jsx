import { useState } from "react";
import { Link } from "react-router-dom";
import "./Manalli.css";

function Manalli() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="manalli-page">

      {/* TOP BAR */}
      <div className="manalli-topbar">
        <div>TRAVELMATE • DISCOVER INDIA</div>
        <div>PLAN YOUR JOURNEY • MAKE MEMORIES</div>
      </div>

      {/* NAVBAR */}
      <nav className="manalli-navbar">
        <Link to="/" className="manalli-logo">
          Travel<span>Mate</span>
        </Link>

        <div className="manalli-navlinks">
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/login">Login</Link>
        </div>

        <Link to="/destinations" className="manalli-nav-button">
          Explore India →
        </Link>
      </nav>

      {/* INTRO */}
      <section className="manalli-intro">
        <span>HIMACHAL PRADESH • NORTH INDIA</span>

        <h1>
          Discover the magic of
          <br />
          <em>Manali.</em>
        </h1>

        <p>
          Snow-covered mountains, peaceful valleys, winding rivers
          and unforgettable adventures — Manali is where nature
          feels truly alive.
        </p>
      </section>

      {/* HERO */}
      <section className="manalli-hero">
        <img
          src="https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1800&q=90"
          alt="Manali mountains"
        />

        <div className="manalli-hero-overlay"></div>

        <div className="manalli-hero-content">
          <span>THE VALLEY OF GODS</span>
          <h2>MANALI</h2>
          <p>
            Where mountains meet memories.
          </p>
        </div>

        <div className="manalli-hero-scroll">
          SCROLL TO EXPLORE
          <span>↓</span>
        </div>
      </section>

      {/* DISCOVER STRIP */}
      <section className="manalli-discover">
        <div>
          <span>01</span>
          <p>Mountain Views</p>
        </div>

        <div>
          <span>02</span>
          <p>Adventure</p>
        </div>

        <div>
          <span>03</span>
          <p>Old Manali</p>
        </div>

        <div>
          <span>04</span>
          <p>Peaceful Valleys</p>
        </div>
      </section>

      {/* STORY */}
      <section className="manalli-story">
        <div className="manalli-story-image">
          <img
            src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1000&q=85"
            alt="Manali landscape"
          />
        </div>

        <div className="manalli-story-content">
          <span className="manalli-label">THE STORY OF MANALI</span>

          <h2>
            A mountain town
            <br />
            <em>full of stories.</em>
          </h2>

          <p>
            Manali is surrounded by dramatic Himalayan peaks,
            green forests and the beautiful Beas River. Its
            combination of nature, culture and adventure makes
            it one of the most loved mountain destinations in India.
          </p>

          {showMore && (
            <p>
              From the charming lanes of Old Manali to the
              breathtaking landscapes around Solang Valley,
              every corner offers something different. Visitors
              can enjoy peaceful walks, mountain views, local
              food and thrilling outdoor experiences.
            </p>
          )}

          <button
            className="manalli-read-button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "READ LESS ↑" : "READ MORE →"}
          </button>
        </div>
      </section>

      {/* NEARBY */}
      <section className="manalli-nearby">

        <div className="manalli-section-heading">
          <span>EXPLORE AROUND MANALI</span>

          <h2>
            Places worth
            <br />
            <em>discovering.</em>
          </h2>
        </div>

        <div className="manalli-nearby-grid">

          <Link
            to="/experience/solang-adventure"
            className="manalli-place-card"
          >
            <div className="manalli-place-image">
              <img
                src="https://images.unsplash.com/photo-1548786811-dd6e453ccca7?auto=format&fit=crop&w=1000&q=85"
                alt="Solang Valley"
              />
            </div>

            <div className="manalli-place-info">
              <span>01 • ADVENTURE</span>
              <h3>Solang Valley</h3>
              <p>
                Snow, mountains and thrilling adventures.
              </p>
              <strong>EXPLORE →</strong>
            </div>
          </Link>

          <Link
            to="/experience/hadimba-old-manali"
            className="manalli-place-card"
          >
            <div className="manalli-place-image">
              <img
                src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=85"
                alt="Old Manali"
              />
            </div>

            <div className="manalli-place-info">
              <span>02 • CULTURE</span>
              <h3>Old Manali</h3>
              <p>
                Cafés, forests, local culture and peaceful streets.
              </p>
              <strong>EXPLORE →</strong>
            </div>
          </Link>

          <Link
            to="/experience/beas-river"
            className="manalli-place-card"
          >
            <div className="manalli-place-image">
              <img
                src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85"
                alt="Beas River"
              />
            </div>

            <div className="manalli-place-info">
              <span>03 • NATURE</span>
              <h3>Beas River</h3>
              <p>
                Calm waters flowing through the Himalayan valley.
              </p>
              <strong>EXPLORE →</strong>
            </div>
          </Link>

        </div>
      </section>

      {/* TRAVEL INFORMATION */}
      <section className="manalli-travel">

        <div className="manalli-travel-heading">
          <span>PLAN YOUR VISIT</span>

          <h2>
            Travel information
            <br />
            <em>for Manali.</em>
          </h2>
        </div>

        <div className="manalli-info-grid">

          <div className="manalli-info-card">
            <span>BEST TIME</span>
            <h3>March – June</h3>
            <p>
              Great weather for sightseeing, hiking and outdoor
              activities.
            </p>
          </div>

          <div className="manalli-info-card">
            <span>WINTER</span>
            <h3>October – February</h3>
            <p>
              Ideal for snow lovers and winter mountain experiences.
            </p>
          </div>

          <div className="manalli-info-card">
            <span>EXPERIENCE</span>
            <h3>Adventure + Nature</h3>
            <p>
              Explore valleys, rivers, forests and mountain trails.
            </p>
          </div>

          <div className="manalli-info-card">
            <span>TRIP STYLE</span>
            <h3>3 – 5 Days</h3>
            <p>
              Enough time to explore Manali and nearby attractions.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="manalli-cta">
        <div className="manalli-cta-overlay"></div>

        <div className="manalli-cta-content">
          <span>YOUR NEXT ADVENTURE</span>

          <h2>
            Ready to experience
            <br />
            <em>Manali?</em>
          </h2>

          <p>
            Pack your bags. The mountains are waiting.
          </p>

          <Link to="/destinations" className="manalli-cta-button">
            Explore More Destinations →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="manalli-footer">

        <div className="manalli-footer-main">

          <div>
            <Link to="/" className="manalli-footer-logo">
              Travel<span>Mate</span>
            </Link>

            <p>
              Discover India differently.
              <br />
              Travel more. Remember forever.
            </p>
          </div>

          <div>
            <h4>EXPLORE</h4>
            <Link to="/destinations">Destinations</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/login">Login</Link>
          </div>

          <div>
            <h4>POPULAR</h4>
            <Link to="/taj-mahal">Taj Mahal</Link>
            <Link to="/gateway-of-india">Gateway of India</Link>
            <Link to="/manali">Manali</Link>
          </div>

        </div>

        <div className="manalli-footer-bottom">
          <span>© 2026 TravelMate</span>
          <span>MADE FOR TRAVEL LOVERS</span>
        </div>

      </footer>

    </div>
  );
}

export default Manalli;