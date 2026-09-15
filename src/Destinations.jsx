import { useState } from "react";

import { Link } from "react-router-dom";

function Destinations() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");

  const destinations = [
    {
      name: "Manali",
      description: "Mountains, snow and beautiful valleys.",
      category: "Mountains",
    },
    {
      name: "Goa",
      description: "Beaches, sunsets and a relaxing vacation.",
      category: "Beaches",
    },
    {
      name: "Jaipur",
      description: "Explore forts, palaces and rich culture.",
      category: "Historical",
    },
  ];

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch = destination.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All Categories" ||
      destination.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h1>Explore Destinations</h1>

      <p>Find the perfect destination for your next trip.</p>

      <input
        type="text"
        placeholder="Search destination..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="filter-box"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>All Categories</option>
        <option>Mountains</option>
        <option>Beaches</option>
        <option>Historical</option>
      </select>

      <div className="destinations">
        {filteredDestinations.map((destination) => (
          <div className="card" key={destination.name}>
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
            <Link to={`/destination/${destination.name}`}>
  <button>View Details</button>
</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;