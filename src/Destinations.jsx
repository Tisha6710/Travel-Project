import { useState } from "react";
import { Link } from "react-router-dom";

function Destinations() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const destinations = [
    {
      name: "Manali",
      tagline: "Mountains, snow and beautiful valleys.",
      category: "Mountains",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Goa",
      tagline: "Beaches, sunsets and a relaxing vacation.",
      category: "Beaches",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Jaipur",
      tagline: "Forts, palaces and rich royal culture.",
      category: "Historical",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Kerala",
      tagline: "Backwaters, beaches and lush greenery.",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Ladakh",
      tagline: "High mountains, lakes and adventure.",
      category: "Mountains",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Rishikesh",
      tagline: "River adventures and peaceful surroundings.",
      category: "Adventure",
      image:
        "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Udaipur",
      tagline: "Beautiful lakes and magnificent palaces.",
      category: "Historical",
      image:
        "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Varanasi",
      tagline: "Ancient ghats and vibrant Indian culture.",
      category: "Cultural",
      image:
        "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Agra",
      tagline: "Home to the iconic Taj Mahal.",
      category: "Historical",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Mumbai",
      tagline: "Beaches, city life and endless energy.",
      category: "City",
      image:
        "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Delhi",
      tagline: "History, food and modern city life.",
      category: "City",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Darjeeling",
      tagline: "Tea gardens, hills and scenic views.",
      category: "Mountains",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Andaman",
      tagline: "Crystal-clear waters and tropical beaches.",
      category: "Beaches",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Amritsar",
      tagline: "Golden Temple and rich Punjabi culture.",
      category: "Cultural",
      image:
        "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Mysore",
      tagline: "Palaces, heritage and royal charm.",
      category: "Historical",
      image:
        "https://images.unsplash.com/photo-1600100397608-f010c1f0c2c5?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch = destination.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || destination.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="tm-destinations-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <Link to="/" className="logo">
          ✈️ TravelMate
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-item">
            Home
          </Link>

          <Link to="/destinations" className="nav-item active">
            Destinations
          </Link>

          <Link to="/reviews" className="nav-item">
            Reviews
          </Link>

          <Link to="/login" className="login-btn">
            Login
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <section className="tm-destinations-header">
        <h1>Explore Destinations</h1>

        <p>
          Discover beautiful places across India for your next trip.
        </p>

        {/* SEARCH + FILTER */}
        <div className="tm-destination-filters">
          <input
            type="text"
            placeholder="Search destination..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Mountains">Mountains</option>
            <option value="Beaches">Beaches</option>
            <option value="Historical">Historical</option>
            <option value="Nature">Nature</option>
            <option value="Adventure">Adventure</option>
            <option value="Cultural">Cultural</option>
            <option value="City">City</option>
          </select>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="tm-destination-list">
        <div className="tm-destination-grid">

          {filteredDestinations.map((destination) => (
            <div
              className="tm-destination-card"
              key={destination.name}
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="tm-destination-image"
              />

              <div className="tm-destination-content">

                <span className="tm-destination-category">
                  {destination.category}
                </span>

                <h3>{destination.name}</h3>

                <p>{destination.tagline}</p>

                <Link
                  to={`/destination/${destination.name}`}
                  className="tm-destination-details-btn"
                >
                  View Details →
                </Link>

              </div>
            </div>
          ))}

        </div>

        {/* NO RESULT */}
        {filteredDestinations.length === 0 && (
          <div className="tm-no-destination">
            <h3>No destination found</h3>
            <p>Try searching for another destination.</p>
          </div>
        )}
      </section>

      {/* PAGE CSS */}
      <style>{`

        .tm-destinations-page {
          min-height: 100vh;
          background: #f8fbfb;
        }

        .tm-destinations-header {
          padding: 125px 7% 50px;
          text-align: center;
        }

        .tm-destinations-header h1 {
          margin: 0;
          font-size: 48px;
          color: #123b40;
        }

        .tm-destinations-header p {
          margin: 12px 0 30px;
          color: #718386;
          font-size: 16px;
        }

        .tm-destination-filters {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          max-width: 800px;
          margin: 0 auto;
        }

        .tm-destination-filters input,
        .tm-destination-filters select {
          height: 50px;
          padding: 0 16px;
          border: 1px solid #d8e5e6;
          border-radius: 10px;
          background: #ffffff;
          outline: none;
          font-size: 15px;
          color: #29484c;
          box-sizing: border-box;
        }

        .tm-destination-filters input {
          flex: 1;
        }

        .tm-destination-filters select {
          width: 210px;
          cursor: pointer;
        }

        .tm-destination-filters input:focus,
        .tm-destination-filters select:focus {
          border-color: #087f8c;
          box-shadow: 0 0 0 3px rgba(8, 127, 140, 0.08);
        }

        .tm-destination-list {
          padding: 20px 7% 80px;
        }

        .tm-destination-grid {
          max-width: 1300px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .tm-destination-card {
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #e3eeee;
          box-shadow: 0 8px 25px rgba(18, 59, 64, 0.07);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .tm-destination-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 18px 35px rgba(18, 59, 64, 0.13);
        }

        .tm-destination-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .tm-destination-card:hover .tm-destination-image {
          transform: scale(1.04);
        }

        .tm-destination-content {
          padding: 20px;
        }

        .tm-destination-category {
          display: inline-block;
          padding: 5px 10px;
          margin-bottom: 10px;
          border-radius: 20px;
          background: #e8f7f8;
          color: #087f8c;
          font-size: 12px;
          font-weight: 700;
        }

        .tm-destination-content h3 {
          margin: 0 0 8px;
          font-size: 25px;
          color: #123b40;
        }

        .tm-destination-content p {
          margin: 0 0 18px;
          color: #718386;
          font-size: 14px;
          line-height: 1.5;
        }

        .tm-destination-details-btn {
          text-decoration: none;
          color: #087f8c;
          font-size: 14px;
          font-weight: 700;
          transition: color 0.25s ease;
        }

        .tm-destination-details-btn:hover {
          color: #065e68;
        }

        .tm-no-destination {
          text-align: center;
          padding: 70px 20px;
          color: #718386;
        }

        .tm-no-destination h3 {
          color: #123b40;
          font-size: 24px;
        }

        @media (max-width: 900px) {
          .tm-destination-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .tm-destinations-header {
            padding: 110px 20px 40px;
          }

          .tm-destinations-header h1 {
            font-size: 36px;
          }

          .tm-destination-filters {
            flex-direction: column;
          }

          .tm-destination-filters input,
          .tm-destination-filters select {
            width: 100%;
          }

          .tm-destination-grid {
            grid-template-columns: 1fr;
          }

          .tm-destination-list {
            padding: 20px;
          }
        }

      `}</style>
    </div>
  );
}

export default Destinations;