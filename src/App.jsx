import { Routes, Route, Link } from "react-router-dom";
import Destinations from "./Destinations";
import DestinationDetails from "./DestinationDetails";
import "./App.css";

function Home() {
  return (
    <div>
      <nav>
        <h2>TravelMate</h2>

        <div>
          <Link to="/">
            <button>Home</button>
          </Link>

          <Link to="/destinations">
            <button>Destinations</button>
          </Link>

          <button onClick={() => alert("Reviews Page")}>Reviews</button>

          <button onClick={() => alert("Login Page")}>Login</button>
        </div>
      </nav>

      <main>
        <h1>Discover Your Perfect Destination</h1>

        <p>
          Explore destinations, read reviews and get personalized
          travel recommendations.
        </p>

        <Link to="/destinations">
          <button>Explore Destinations</button>
        </Link>

        <div className="destinations">

          <div className="card">
            <h3>Manali</h3>
            <p>Mountains, snow and beautiful valleys.</p>
            <button>View Details</button>
          </div>

          <div className="card">
            <h3>Goa</h3>
            <p>Beaches, sunsets and a relaxing vacation.</p>
            <button>View Details</button>
          </div>

          <div className="card">
            <h3>Jaipur</h3>
            <p>Explore forts, palaces and rich culture.</p>
            <button>View Details</button>
          </div>

        </div>
      </main>
    </div>
  );
}

function App() {
  return (
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/destinations" element={<Destinations />} />
  <Route
    path="/destination/:name"
    element={<DestinationDetails />}
  />
</Routes>
  );
}

export default App;
