
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Restaurants.css";

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
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80";

const restaurants = [
  {
    name: "Mountain Spice",
    city: "Manali",
    location: "Mall Road, Manali",
    cuisine: "Indian · Himachali",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/maps/search/restaurants+in+Manali/",
  },
  {
    name: "Beachside Bistro",
    city: "Goa",
    location: "Calangute, Goa",
    cuisine: "Seafood · Continental",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/maps/search/restaurants+in+Goa/",
  },
  {
    name: "Royal Thali House",
    city: "Jaipur",
    location: "Pink City, Jaipur",
    cuisine: "Rajasthani · Indian",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/maps/search/restaurants+in+Jaipur/",
  },
  {
    name: "Coconut Grove",
    city: "Kerala",
    location: "Alleppey, Kerala",
    cuisine: "South Indian · Seafood",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/maps/search/restaurants+in+Kerala/",
  },
  {
    name: "The Ladakh Kitchen",
    city: "Ladakh",
    location: "Leh Market, Ladakh",
    cuisine: "Tibetan · Local",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/maps/search/restaurants+in+Leh/",
  },
  {
    name: "Ganga View Cafe",
    city: "Rishikesh",
    location: "Tapovan, Rishikesh",
    cuisine: "Cafe · Vegetarian",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/maps/search/restaurants+in+Rishikesh/",
  },
  {
    name: "Lake Palace Dining",
    city: "Udaipur",
    location: "Lake Pichola, Udaipur",
    cuisine: "Indian · Fine Dining",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/maps/search/restaurants+in+Udaipur/",
  },
  {
    name: "Ghat Street Kitchen",
    city: "Varanasi",
    location: "Assi Ghat, Varanasi",
    cuisine: "Indian · Street Food",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/maps/search/restaurants+in+Varanasi/",
  },
  {
    name: "Taj Spice Garden",
    city: "Agra",
    location: "Tajganj, Agra",
    cuisine: "Mughlai · Indian",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/maps/search/restaurants+in+Agra/",
  },
  {
    name: "Marine Drive Cafe",
    city: "Mumbai",
    location: "Marine Drive, Mumbai",
    cuisine: "Cafe · Continental",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/maps/search/restaurants+in+Mumbai/",
  },
  {
    name: "Capital Food Studio",
    city: "Delhi",
    location: "Connaught Place, Delhi",
    cuisine: "North Indian · Asian",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/maps/search/restaurants+in+Delhi/",
  },
  {
    name: "Hillside Tea House",
    city: "Darjeeling",
    location: "Mall Road, Darjeeling",
    cuisine: "Cafe · Bakery",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/maps/search/restaurants+in+Darjeeling/",
  },
  {
    name: "Island Catch",
    city: "Andaman Nicobar",
    location: "Havelock Island",
    cuisine: "Seafood · Indian",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/maps/search/restaurants+in+Andaman/",
  },
  {
    name: "Mysore Heritage Cafe",
    city: "Mysore",
    location: "Palace Road, Mysore",
    cuisine: "South Indian · Cafe",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/maps/search/restaurants+in+Mysore/",
  },
  {
    name: "Old Manali Cafe",
    city: "Manali",
    location: "Old Manali",
    cuisine: "Cafe · Italian",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/maps/search/restaurants+in+Manali/",
  },
  {
    name: "Sunset Beach Shack",
    city: "Goa",
    location: "Candolim Beach, Goa",
    cuisine: "Seafood · Goan",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/maps/search/restaurants+in+Goa/",
  },
];

function RestaurantImage({ src, alt }) {
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

export default function Restaurants() {
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCity =
      !selectedCity || restaurant.city === selectedCity;

    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      !searchText ||
      restaurant.name.toLowerCase().includes(searchText) ||
      restaurant.city.toLowerCase().includes(searchText) ||
      restaurant.location.toLowerCase().includes(searchText) ||
      restaurant.cuisine.toLowerCase().includes(searchText);

    return matchesCity && matchesSearch;
  });

  const displayedRestaurants = showFavorites
    ? filteredRestaurants.filter((restaurant) =>
        favorites.includes(restaurant.name)
      )
    : filteredRestaurants;

  const itemsPerPage = 3;
  const totalPages = Math.ceil(
    displayedRestaurants.length / itemsPerPage
  );

  const visibleRestaurants = displayedRestaurants.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  function toggleFavorite(name) {
    setFavorites((previous) =>
      previous.includes(name)
        ? previous.filter((item) => item !== name)
        : [...previous, name]
    );

    setCurrentPage(0);
  }

  function toggleFavoritesView() {
    setShowFavorites((previous) => !previous);
    setCurrentPage(0);

    document
      .getElementById("restaurant-results")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  function handleSearch(event) {
    event.preventDefault();
    setCurrentPage(0);

    document
      .getElementById("restaurant-results")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  function selectDestination(city) {
    setSelectedCity(city);
    setSearch("");
    setCurrentPage(0);

    document
      .getElementById("restaurant-results")
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

  function exploreDining(restaurant) {
    setSelectedRestaurant(restaurant);
  }

  return (
    <div className="restaurants-page">
      {/* NAVBAR */}
      <header className="restaurants-topbar">
        <Link to="/" className="restaurants-logo">
          ✈ TravelMate
        </Link>

        <nav className="restaurants-nav">
          <Link to="/">Home</Link>
          <a href="#restaurant-results">Restaurants</a>

          <button
            type="button"
            className={`restaurants-favorites ${
              showFavorites ? "active" : ""
            }`}
            onClick={toggleFavoritesView}
            aria-pressed={showFavorites}
            aria-label={`${favorites.length} favourite restaurants`}
          >
            <span aria-hidden="true">💗</span>
            <span>{favorites.length}</span>
          </button>
        </nav>

        <Link to="/" className="restaurants-back">
          ← Back
        </Link>
      </header>

      {/* HERO */}
      <section className="restaurants-hero">
        <div className="restaurants-hero-content">
          <p className="restaurants-eyebrow">
            TASTE YOUR WAY THROUGH INDIA
          </p>

          <h1>
            Find Your Perfect <span>Restaurant</span>
          </h1>

          <p className="restaurants-hero-subtitle">
            Discover local flavours, memorable meals and places
            worth exploring.
          </p>

          <form
            className="restaurants-search"
            onSubmit={handleSearch}
          >
            <span
              className="restaurants-search-icon"
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
              placeholder="Search restaurants, cuisines or destinations..."
              aria-label="Search restaurants, cuisines or destinations"
            />

            <button type="submit">Search</button>
          </form>

          <div className="restaurants-destination-chips">
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
      <section className="restaurants-benefits">
        <div className="restaurants-benefit">
          <span
            className="restaurants-benefit-icon"
            aria-hidden="true"
          >
            ✓
          </span>
          <div>
            <h3>Explore Local Flavours</h3>
            <p>
              Discover restaurants and cuisines inspired by
              destinations across India.
            </p>
          </div>
        </div>

        <div className="restaurants-benefit">
          <span
            className="restaurants-benefit-icon"
            aria-hidden="true"
          >
            ♡
          </span>
          <div>
            <h3>Save Your Favourites</h3>
            <p>
              Use the heart on a restaurant card to save places
              you want to explore.
            </p>
          </div>
        </div>

        <div className="restaurants-benefit">
          <span
            className="restaurants-benefit-icon"
            aria-hidden="true"
          >
            ↗
          </span>
          <div>
            <h3>Find Nearby Options</h3>
            <p>
              Open the restaurant search link to explore places
              and directions in your chosen destination.
            </p>
          </div>
        </div>
      </section>

      {/* RESTAURANT LISTING */}
      <main
        className="restaurants-listing"
        id="restaurant-results"
      >
        <div className="restaurants-section-heading">
          <div>
            <p className="restaurants-eyebrow">
              {showFavorites ? "YOUR SAVED PLACES" : "EXPLORE INDIA"}
            </p>

            <h2>
              {showFavorites
                ? "Your Favourite Restaurants"
                : selectedCity
                ? `Restaurants in ${selectedCity}`
                : "Popular Restaurants"}
            </h2>

            <p>
              {showFavorites
                ? "All your saved restaurant choices in one place."
                : "Explore places to eat on your next trip."}
            </p>

            <p className="restaurants-results-count">
              {displayedRestaurants.length}{" "}
              {displayedRestaurants.length === 1
                ? "restaurant"
                : "restaurants"}{" "}
              found
            </p>
          </div>

          {(selectedCity || search || showFavorites) && (
            <button
              type="button"
              className="restaurants-see-all"
              onClick={clearFilters}
            >
              Show All Restaurants
            </button>
          )}
        </div>

        {displayedRestaurants.length > 0 ? (
          <>
            <div className="restaurants-carousel">
              <button
                type="button"
                className="restaurants-carousel-arrow"
                onClick={() => changePage(-1)}
                disabled={currentPage === 0}
                aria-label="Previous restaurants"
              >
                ←
              </button>

              <div className="restaurant-grid">
                {visibleRestaurants.map((restaurant) => {
                  const isFavorite = favorites.includes(
                    restaurant.name
                  );

                  return (
                    <article
                      className="restaurant-card"
                      key={restaurant.name}
                    >
                      <div className="restaurant-image-wrap">
                        <RestaurantImage
                          src={restaurant.image}
                          alt={`${restaurant.name}, ${restaurant.city}`}
                        />

                        <span className="restaurant-location-tag">
                          {restaurant.city}
                        </span>

                        <button
                          type="button"
                          className={`restaurant-heart ${
                            isFavorite ? "is-favorite" : ""
                          }`}
                          onClick={() =>
                            toggleFavorite(restaurant.name)
                          }
                          aria-label={
                            isFavorite
                              ? `Remove ${restaurant.name} from favourites`
                              : `Add ${restaurant.name} to favourites`
                          }
                          aria-pressed={isFavorite}
                        >
                          {isFavorite ? "♥" : "♡"}
                        </button>
                      </div>

                      <div className="restaurant-card-content">
                        <p className="restaurant-city">
                          {restaurant.city}, India
                        </p>

                        <h3>{restaurant.name}</h3>

                        <p className="restaurant-cuisine">
                          🍽️ {restaurant.cuisine}
                        </p>

                        <p className="restaurant-area">
                          <span aria-hidden="true">📍</span>{" "}
                          {restaurant.location}
                        </p>

                        <div className="restaurant-card-footer">
                          <button
                            type="button"
                            className="restaurant-details-label"
                            onClick={() => exploreDining(restaurant)}
                            style={{
                              border: "none",
                              background: "transparent",
                              padding: 0,
                              font: "inherit",
                              color: "inherit",
                              cursor: "pointer",
                              textAlign: "left",
                            }}
                          >
                            Explore dining
                          </button>

                          <a
                            className="restaurant-view-button"
                            href={restaurant.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View places ↗
                          </a>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <button
                type="button"
                className="restaurants-carousel-arrow"
                onClick={() => changePage(1)}
                disabled={currentPage >= totalPages - 1}
                aria-label="Next restaurants"
              >
                →
              </button>
            </div>

            <div className="restaurants-carousel-pagination">
              <span>
                {currentPage + 1} / {Math.max(totalPages, 1)}
              </span>

              <div className="restaurants-carousel-dots">
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
                      aria-label={`Go to restaurant page ${index + 1}`}
                    />
                  )
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="restaurants-empty">
            <h3>
              {showFavorites
                ? "No favourite restaurants yet 💗"
                : "No restaurants found"}
            </h3>

            <p>
              {showFavorites
                ? "Tap the heart on a restaurant card to save it here."
                : "Try another destination, cuisine or search term."}
            </p>

            <button type="button" onClick={clearFilters}>
              Show All Restaurants
            </button>
          </div>
        )}
      </main>

      {/* RESTAURANT DETAILS POPUP */}
      {selectedRestaurant && (
        <div
          className="restaurant-modal-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedRestaurant(null);
            }
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0, 0, 0, 0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <section
            className="restaurant-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="restaurant-detail-title"
            style={{
              background: "#fff",
              borderRadius: "18px",
              width: "100%",
              maxWidth: "650px",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
              color: "#123b2a",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedRestaurant(null)}
              aria-label="Close restaurant details"
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                zIndex: 1,
                width: "40px",
                height: "40px",
                border: "none",
                borderRadius: "50%",
                background: "#fff",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <RestaurantImage
              src={selectedRestaurant.image}
              alt={selectedRestaurant.name}
            />

            <div style={{ padding: "24px" }}>
              <p
                style={{
                  color: "#0d9488",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {selectedRestaurant.city}, India
              </p>

              <h2
                id="restaurant-detail-title"
                style={{ margin: "8px 0 12px" }}
              >
                {selectedRestaurant.name}
              </h2>

              <p style={{ lineHeight: 1.8, color: "#52635a" }}>
                Explore {selectedRestaurant.name}, listed in{" "}
                {selectedRestaurant.location}. Its listed cuisine
                is {selectedRestaurant.cuisine}. Use this information
                to explore dining options during your visit to{" "}
                {selectedRestaurant.city}.
              </p>

              <h3 style={{ marginTop: "22px" }}>
                Restaurant information
              </h3>

              <p style={{ lineHeight: 1.8 }}>
                <strong>📍 Location:</strong>{" "}
                {selectedRestaurant.location}
              </p>

              <p style={{ lineHeight: 1.8 }}>
                <strong>🍽️ Cuisine:</strong>{" "}
                {selectedRestaurant.cuisine}
              </p>

              <p style={{ lineHeight: 1.8 }}>
                <strong>📌 Destination:</strong>{" "}
                {selectedRestaurant.city}, India
              </p>

              <h3 style={{ marginTop: "22px" }}>
                Before you visit
              </h3>

              <p style={{ lineHeight: 1.8, color: "#52635a" }}>
                Check current opening hours, menu, prices,
                availability and customer reviews before visiting.
                These details have not been verified by TravelMate.
              </p>

              <a
                href={selectedRestaurant.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  marginTop: "22px",
                  padding: "14px",
                  background: "#0d9488",
                  color: "#fff",
                  textAlign: "center",
                  textDecoration: "none",
                  borderRadius: "10px",
                  fontWeight: 700,
                }}
              >
                Find restaurants on Google Maps ↗
              </a>

              <button
                type="button"
                onClick={() => setSelectedRestaurant(null)}
                style={{
                  display: "block",
                  width: "100%",
                  marginTop: "10px",
                  padding: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "10px",
                  background: "#fff",
                  color: "#123b2a",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Close details
              </button>
            </div>
          </section>
        </div>
      )}

      {/* FOOTER */}
      <footer className="restaurants-footer">
        <strong>✈ TravelMate</strong>
        <p>
          Discover local flavours. Find your next favourite meal.
        </p>
      </footer>
    </div>
  );
}
