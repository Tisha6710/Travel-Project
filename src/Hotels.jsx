
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
            <span>
              {favorites.length}
            </span>
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
              Open the hotel link to explore available details
              and booking information.
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
                          <span className="hotel-verified">
                            Hotel details
                          </span>

                          <a
                            className="hotel-view-button"
                            href={hotel.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View hotel ↗
                          </a>
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

      {/* FOOTER */}
      <footer className="hotels-footer">
        <strong>✈ TravelMate</strong>
        <p>Find your stay. Plan your journey. Explore more.</p>
      </footer>
    </div>
  );
}

