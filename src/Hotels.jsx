
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Hotels.css";

const destinations = [
  "Manali",
  "Goa",
  "Jaipur",
  "Kerala",
  "Ladakh",
  "Rishikesh",
  "Udaipur",
  "Varanasi",
  "Agra",
  "Mumbai",
  "Delhi",
  "Darjeeling",
  "Andaman Nicobar",
  "Mysore",
];

const fallbackImage =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80";

const hotels = [
  {
    name: "The Himalayan",
    city: "Manali",
    location: "Hadimba Road, Manali",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80",
    website: "https://www.booking.com/",
  },
  {
    name: "Sea Breeze Resort",
    city: "Goa",
    location: "Calangute Beach, Goa",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80",
    website: "https://www.booking.com/",
  },
  {
    name: "Royal Heritage Hotel",
    city: "Jaipur",
    location: "Pink City, Jaipur",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
    website: "https://www.booking.com/",
  },
  {
    name: "Backwater Retreat",
    city: "Kerala",
    location: "Alleppey, Kerala",
    image:
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=900&q=80",
    website: "https://www.booking.com/",
  },
  {
    name: "Mountain View Stay",
    city: "Ladakh",
    location: "Leh, Ladakh",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=80",
    website: "https://www.booking.com/",
  },
  {
    name: "Ganga Riverside Resort",
    city: "Rishikesh",
    location: "Tapovan, Rishikesh",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80",
    website: "https://www.booking.com/",
  },
  {
    name: "Lake Palace Stay",
    city: "Udaipur",
    location: "Lake Pichola, Udaipur",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
    website: "https://www.booking.com/",
  },
  {
    name: "Ganges View Hotel",
    city: "Varanasi",
    location: "Assi Ghat, Varanasi",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    website: "https://www.booking.com/",
  },
  {
    name: "Taj View Residency",
    city: "Agra",
    location: "Tajganj, Agra",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
    website: "https://www.booking.com/",
  },
  {
    name: "Marine Drive Hotel",
    city: "Mumbai",
    location: "Marine Drive, Mumbai",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80",
    website: "https://www.booking.com/",
  },
  {
    name: "Capital Comfort Inn",
    city: "Delhi",
    location: "Connaught Place, Delhi",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    website: "https://www.booking.com/",
  },
  {
    name: "Hillside Retreat",
    city: "Darjeeling",
    location: "Mall Road, Darjeeling",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=80",
    website: "https://www.booking.com/",
  },
  {
    name: "Island Paradise Resort",
    city: "Andaman Nicobar",
    location: "Havelock Island",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80",
    website: "https://www.booking.com/",
  },
  {
    name: "Mysore Grand Hotel",
    city: "Mysore",
    location: "Mysore Palace Road",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
    website: "https://www.booking.com/",
  },
  {
    name: "Green Valley Resort",
    city: "Manali",
    location: "Old Manali",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80",
    website: "https://www.booking.com/",
  },
  {
    name: "Palm Garden Hotel",
    city: "Goa",
    location: "Candolim, Goa",
    image:
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=900&q=80",
    website: "https://www.booking.com/",
  },
];

function HotelImage({ src, alt }) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <img
      src={imageSrc}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (imageSrc !== fallbackImage) {
          setImageSrc(fallbackImage);
        }
      }}
    />
  );
}

export default function Hotels() {
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  // Hotel details modal and demo booking form
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingMessage, setBookingMessage] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestCount, setGuestCount] = useState("2");

  const filteredHotels = hotels.filter((hotel) => {
    const matchesCity =
      !selectedCity || hotel.city === selectedCity;

    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      !searchText ||
      hotel.name.toLowerCase().includes(searchText) ||
      hotel.city.toLowerCase().includes(searchText) ||
      hotel.location.toLowerCase().includes(searchText);

    return matchesCity && matchesSearch;
  });

  const displayedHotels = showFavorites
    ? filteredHotels.filter((hotel) =>
        favorites.includes(hotel.name)
      )
    : filteredHotels;

  const hotelsPerPage = 3;
  const totalPages = Math.ceil(
    displayedHotels.length / hotelsPerPage
  );

  const visibleHotels = displayedHotels.slice(
    currentPage * hotelsPerPage,
    currentPage * hotelsPerPage + hotelsPerPage
  );

  function toggleFavorite(hotelName) {
    setFavorites((previousFavorites) =>
      previousFavorites.includes(hotelName)
        ? previousFavorites.filter(
            (name) => name !== hotelName
          )
        : [...previousFavorites, hotelName]
    );

    setCurrentPage(0);
  }

  function toggleFavoritesView() {
    setShowFavorites((previous) => !previous);
    setCurrentPage(0);

    document
      .getElementById("hotel-results")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  function handleSearch(event) {
    event.preventDefault();
    setCurrentPage(0);

    document
      .getElementById("hotel-results")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  function selectDestination(city) {
    setSelectedCity(city);
    setSearch("");
    setCurrentPage(0);

    document
      .getElementById("hotel-results")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  function clearFilters() {
    setSearch("");
    setSelectedCity("");
    setShowFavorites(false);
    setCurrentPage(0);
  }

  function changePage(direction) {
    setCurrentPage((page) =>
      Math.max(
        0,
        Math.min(page + direction, Math.max(totalPages - 1, 0))
      )
    );
  }

  function openHotelDetails(hotel) {
    setSelectedHotel(hotel);
    setShowBookingForm(false);
    setBookingMessage("");
    setGuestName("");
    setGuestEmail("");
    setCheckIn("");
    setCheckOut("");
    setGuestCount("2");
  }

  function closeHotelDetails() {
    setSelectedHotel(null);
    setShowBookingForm(false);
    setBookingMessage("");
  }

  function handleBookingRequest(event) {
    event.preventDefault();

    if (checkOut <= checkIn) {
      setBookingMessage(
        "Please select a check-out date after your check-in date."
      );
      return;
    }

    setBookingMessage(
      `Thanks, ${guestName}! Your demo booking request for ${selectedHotel.name} has been prepared. This is a demo only; no actual booking has been submitted.`
    );
  }

  return (
    <div className="hotels-page">
      {/* NAVBAR */}
      <header className="hotels-topbar">
        <Link to="/" className="hotels-logo">
          ✈ TravelMate
        </Link>

        <nav className="hotels-nav">
          <Link to="/">Home</Link>

          <a href="#hotel-results">Hotels</a>

          <button
            type="button"
            className={`nav-favorites ${
              showFavorites ? "active" : ""
            }`}
            onClick={toggleFavoritesView}
            aria-pressed={showFavorites}
          >
            <span aria-hidden="true">💗</span>
            <span>{favorites.length}</span>
          </button>
        </nav>

        <Link to="/" className="hotels-back">
          ← Back
        </Link>
      </header>

      {/* HERO */}
      <section className="hotels-hero">
        <div className="hotels-hero-content">
          <p className="hotels-eyebrow">
            YOUR JOURNEY, YOUR STAY
          </p>

          <h1>
            Find Your Perfect <span>Stay</span>
          </h1>

          <p className="hotels-hero-subtitle">
            Discover comfortable stays for your next adventure.
          </p>

          <form className="hotels-search" onSubmit={handleSearch}>
            <span
              className="hotels-search-icon"
              aria-hidden="true"
            >
              ⌕
            </span>

            <input
              type="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setCurrentPage(0);
              }}
              placeholder="Search hotels or destinations..."
              aria-label="Search hotels or destinations"
            />

            <button type="submit">Search</button>
          </form>

          <div className="hotels-destination-chips">
            {destinations.map((city) => (
              <button
                key={city}
                type="button"
                className={
                  selectedCity === city ? "selected" : ""
                }
                onClick={() => selectDestination(city)}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="hotels-benefits">
        <div className="hotels-benefit">
          <span className="benefit-icon" aria-hidden="true">
            ✓
          </span>
          <div>
            <h3>Handpicked Stays</h3>
            <p>
              Explore a selection of stays for different travel
              styles and budgets.
            </p>
          </div>
        </div>

        <div className="hotels-benefit">
          <span className="benefit-icon" aria-hidden="true">
            ♡
          </span>
          <div>
            <h3>Save Your Favourites</h3>
            <p>
              Tap the heart on a hotel card to keep track of
              places you like.
            </p>
          </div>
        </div>

        <div className="hotels-benefit">
          <span className="benefit-icon" aria-hidden="true">
            ↗
          </span>
          <div>
            <h3>Explore Your Stay</h3>
            <p>
              View hotel information and prepare a booking
              request directly in TravelMate.
            </p>
          </div>
        </div>
      </section>

      {/* HOTEL LISTING */}
      <main className="hotels-listing" id="hotel-results">
        <div className="hotels-section-heading">
          <div>
            <p className="hotels-eyebrow">
              {showFavorites ? "YOUR SAVED STAYS" : "EXPLORE INDIA"}
            </p>

            <h2>
              {showFavorites
                ? "Your Favourite Hotels"
                : selectedCity
                ? `Hotels in ${selectedCity}`
                : "Popular Hotels & Stays"}
            </h2>

            <p>
              {showFavorites
                ? "Your saved hotels are collected here."
                : "Find a stay for your next trip."}
            </p>

            <p className="hotels-results-count">
              {displayedHotels.length}{" "}
              {displayedHotels.length === 1 ? "hotel" : "hotels"}{" "}
              found
            </p>
          </div>

          {(selectedCity || search || showFavorites) && (
            <button
              type="button"
              className="hotels-see-all"
              onClick={clearFilters}
            >
              Show All Hotels
            </button>
          )}
        </div>

        {displayedHotels.length > 0 ? (
          <>
            <div className="hotels-carousel">
              <button
                type="button"
                className="carousel-arrow"
                onClick={() => changePage(-1)}
                disabled={currentPage === 0}
                aria-label="Previous hotels"
              >
                ←
              </button>

              <div className="hotel-grid">
                {visibleHotels.map((hotel) => {
                  const isFavorite = favorites.includes(
                    hotel.name
                  );

                  return (
                    <article
                      className="hotel-card"
                      key={hotel.name}
                    >
                      <div className="hotel-image-wrap">
                        <HotelImage
                          src={hotel.image}
                          alt={`${hotel.name}, ${hotel.city}`}
                        />

                        <span className="hotel-location-tag">
                          {hotel.city}
                        </span>

                        <button
                          type="button"
                          className={`hotel-heart ${
                            isFavorite ? "is-favorite" : ""
                          }`}
                          onClick={() =>
                            toggleFavorite(hotel.name)
                          }
                          aria-label={
                            isFavorite
                              ? `Remove ${hotel.name} from favourites`
                              : `Add ${hotel.name} to favourites`
                          }
                          aria-pressed={isFavorite}
                        >
                          {isFavorite ? "♥" : "♡"}
                        </button>
                      </div>

                      <div className="hotel-card-content">
                        <p className="hotel-city">
                          {hotel.city}, India
                        </p>

                        <h3>{hotel.name}</h3>

                        <p className="hotel-area">
                          <span aria-hidden="true">📍</span>{" "}
                          {hotel.location}
                        </p>

                        <div className="hotel-card-footer">
                        

                          {/* Opens the in-app details modal */}
                          <button
                            type="button"
                            className="hotel-view-button"
                            onClick={() => openHotelDetails(hotel)}
                          >
                            View hotel →
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <button
                type="button"
                className="carousel-arrow"
                onClick={() => changePage(1)}
                disabled={currentPage >= totalPages - 1}
                aria-label="Next hotels"
              >
                →
              </button>
            </div>

            <div className="carousel-pagination">
              <span>
                {currentPage + 1} / {Math.max(totalPages, 1)}
              </span>

              <div className="carousel-dots">
                {Array.from(
                  { length: totalPages },
                  (_, index) => (
                    <button
                      type="button"
                      key={index}
                      className={
                        currentPage === index ? "active" : ""
                      }
                      onClick={() => setCurrentPage(index)}
                      aria-label={`Go to hotel page ${index + 1}`}
                    />
                  )
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="hotels-empty">
            <h3>
              {showFavorites
                ? "No favourite hotels yet 💗"
                : "No hotels found"}
            </h3>

            <p>
              {showFavorites
                ? "Tap the heart on a hotel card to save it here."
                : "Try another destination or search term."}
            </p>

            <button type="button" onClick={clearFilters}>
              Show All Hotels
            </button>
          </div>
        )}
      </main>

      {/* HOTEL DETAILS MODAL */}
      {selectedHotel && (
        <div
          className="hotel-modal-overlay"
          onClick={closeHotelDetails}
          role="presentation"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(15, 23, 42, 0.72)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <section
            className="hotel-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="hotel-modal-title"
            onClick={(event) => event.stopPropagation()}
            style={{
              position: "relative",
              background: "#fff",
              color: "#1f2937",
              width: "100%",
              maxWidth: "680px",
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "18px",
              boxShadow: "0 25px 70px rgba(0,0,0,0.3)",
            }}
          >
            <button
              type="button"
              onClick={closeHotelDetails}
              aria-label="Close hotel details"
              style={{
                position: "absolute",
                zIndex: 2,
                top: "12px",
                right: "12px",
                width: "40px",
                height: "40px",
                border: "none",
                borderRadius: "50%",
                background: "#fff",
                color: "#111827",
                fontSize: "25px",
                cursor: "pointer",
                boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
              }}
            >
              ×
            </button>

            <img
              src={selectedHotel.image}
              alt={selectedHotel.name}
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = fallbackImage;
              }}
              style={{
                display: "block",
                width: "100%",
                height: "260px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "24px" }}>
              <p
                style={{
                  margin: "0 0 8px",
                  color: "#0d9488",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontSize: "12px",
                }}
              >
                {selectedHotel.city}, India
              </p>

              <h2
                id="hotel-modal-title"
                style={{
                  margin: "0 0 10px",
                  fontSize: "28px",
                  color: "#111827",
                }}
              >
                {selectedHotel.name}
              </h2>

              <p style={{ margin: "0 0 18px", color: "#4b5563" }}>
                📍 {selectedHotel.location}
              </p>

              <p style={{ lineHeight: 1.7, color: "#4b5563" }}>
                Explore {selectedHotel.name} in {selectedHotel.city}.
                Review the stay details and prepare a booking request
                using the form below.
              </p>

              <h3 style={{ margin: "22px 0 12px" }}>
                Stay highlights
              </h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "24px",
                }}
              >
                {[
                  "Comfortable stay",
                  "Convenient location",
                  "Travel-friendly",
                  "Hotel information",
                ].map((facility) => (
                  <span
                    key={facility}
                    style={{
                      padding: "9px 12px",
                      borderRadius: "20px",
                      background: "#f0fdfa",
                      color: "#0f766e",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    ✓ {facility}
                  </span>
                ))}
              </div>

              {!showBookingForm ? (
                <button
                  type="button"
                  onClick={() => {
                    setShowBookingForm(true);
                    setBookingMessage("");
                  }}
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    border: "none",
                    borderRadius: "10px",
                    background: "#0d9488",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Request a booking
                </button>
              ) : (
                <form onSubmit={handleBookingRequest}>
                  <h3 style={{ margin: "0 0 16px" }}>
                    Booking request
                  </h3>

                  <label
                    htmlFor="guest-name"
                    style={modalLabelStyle}
                  >
                    Your name
                  </label>
                  <input
                    id="guest-name"
                    type="text"
                    value={guestName}
                    onChange={(event) =>
                      setGuestName(event.target.value)
                    }
                    placeholder="Enter your name"
                    required
                    style={modalInputStyle}
                  />

                  <label
                    htmlFor="guest-email"
                    style={modalLabelStyle}
                  >
                    Email address
                  </label>
                  <input
                    id="guest-email"
                    type="email"
                    value={guestEmail}
                    onChange={(event) =>
                      setGuestEmail(event.target.value)
                    }
                    placeholder="you@example.com"
                    required
                    style={modalInputStyle}
                  />

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                      gap: "12px",
                    }}
                  >
                    <div>
                      <label
                        htmlFor="check-in"
                        style={modalLabelStyle}
                      >
                        Check-in
                      </label>
                      <input
                        id="check-in"
                        type="date"
                        value={checkIn}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(event) =>
                          setCheckIn(event.target.value)
                        }
                        required
                        style={modalInputStyle}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="check-out"
                        style={modalLabelStyle}
                      >
                        Check-out
                      </label>
                      <input
                        id="check-out"
                        type="date"
                        value={checkOut}
                        min={checkIn || new Date().toISOString().split("T")[0]}
                        onChange={(event) =>
                          setCheckOut(event.target.value)
                        }
                        required
                        style={modalInputStyle}
                      />
                    </div>
                  </div>

                  <label
                    htmlFor="guest-count"
                    style={modalLabelStyle}
                  >
                    Number of guests
                  </label>
                  <select
                    id="guest-count"
                    value={guestCount}
                    onChange={(event) =>
                      setGuestCount(event.target.value)
                    }
                    style={modalInputStyle}
                  >
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                    <option value="5">5 guests</option>
                    <option value="6">6+ guests</option>
                  </select>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      marginTop: "10px",
                      padding: "14px 18px",
                      border: "none",
                      borderRadius: "10px",
                      background: "#0d9488",
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Submit demo request
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setShowBookingForm(false);
                      setBookingMessage("");
                    }}
                    style={{
                      width: "100%",
                      marginTop: "10px",
                      padding: "11px",
                      border: "1px solid #d1d5db",
                      borderRadius: "10px",
                      background: "#fff",
                      color: "#374151",
                      cursor: "pointer",
                    }}
                  >
                    Back to hotel details
                  </button>
                </form>
              )}

              {bookingMessage && (
                <p
                  role="status"
                  style={{
                    marginTop: "16px",
                    padding: "12px",
                    borderRadius: "8px",
                    background: bookingMessage.startsWith("Please")
                      ? "#fef2f2"
                      : "#f0fdfa",
                    color: bookingMessage.startsWith("Please")
                      ? "#b91c1c"
                      : "#115e59",
                    lineHeight: 1.6,
                  }}
                >
                  {bookingMessage}
                </p>
              )}

              <p
                style={{
                  margin: "16px 0 0",
                  fontSize: "12px",
                  lineHeight: 1.5,
                  color: "#6b7280",
                }}
              >
                Demo only: this form does not submit a real reservation
                or send your information to a hotel.
              </p>
            </div>
          </section>
        </div>
      )}

      {/* FOOTER */}
      <footer className="hotels-footer">
        <strong>✈ TravelMate</strong>
        <p>Find your stay. Plan your journey. Explore more.</p>
      </footer>
    </div>
  );
}

const modalLabelStyle = {
  display: "block",
  margin: "14px 0 7px",
  fontWeight: 600,
  fontSize: "14px",
  color: "#374151",
};

const modalInputStyle = {
  boxSizing: "border-box",
  display: "block",
  width: "100%",
  minWidth: 0,
  padding: "12px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  background: "#fff",
  color: "#111827",
  fontSize: "15px",
  marginBottom: "8px",
};
