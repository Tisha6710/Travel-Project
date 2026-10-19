
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
          <span className="restaurants-benefit-icon" aria-hidden="true">
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
          <span className="restaurants-benefit-icon" aria-hidden="true">
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
          <span className="restaurants-benefit-icon" aria-hidden="true">
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
                          <span className="restaurant-details-label">
                            Explore dining
                          </span>

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
