
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Forums.css";

const initialForums = [
  {
    id: 1,
    title: "Best places to visit in Manali?",
    category: "Destinations",
    destination: "Manali",
    author: "TravelExplorer",
    date: "Recently",
    replies: 12,
    description:
      "Planning a trip to Manali. Which places should I visit, and how many days are enough?",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Budget-friendly Goa trip",
    category: "Travel Tips",
    destination: "Goa",
    author: "WanderSoul",
    date: "Recently",
    replies: 8,
    description:
      "Share your tips for affordable stays, local food and beautiful beaches in Goa.",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Must-try food in Jaipur",
    category: "Food",
    destination: "Jaipur",
    author: "FoodieTraveller",
    date: "Recently",
    replies: 16,
    description:
      "Looking for local food recommendations, famous street food and good places to eat.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Kerala itinerary for 5 days",
    category: "Itineraries",
    destination: "Kerala",
    author: "RoamingRiya",
    date: "Recently",
    replies: 10,
    description:
      "Help me plan a five-day Kerala trip covering backwaters, nature and local experiences.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Things to know before visiting Ladakh",
    category: "Travel Tips",
    destination: "Ladakh",
    author: "MountainMiles",
    date: "Recently",
    replies: 21,
    description:
      "What should first-time visitors prepare for when planning a Ladakh adventure?",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Peaceful cafes in Rishikesh",
    category: "Food",
    destination: "Rishikesh",
    author: "ChaiAndTrails",
    date: "Recently",
    replies: 6,
    description:
      "Recommend cafes with river views, vegetarian food and a relaxing atmosphere.",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    title: "Udaipur: two-day travel plan",
    category: "Itineraries",
    destination: "Udaipur",
    author: "WeekendWanderer",
    date: "Recently",
    replies: 14,
    description:
      "How should I plan two days in Udaipur to explore the lakes, markets and heritage?",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    title: "First trip to Varanasi",
    category: "Destinations",
    destination: "Varanasi",
    author: "CuriousTraveller",
    date: "Recently",
    replies: 9,
    description:
      "Looking for tips on exploring the ghats, local culture and food respectfully.",
    image:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=80",
  },
];

const categories = [
  "All",
  "Destinations",
  "Travel Tips",
  "Food",
  "Itineraries",
];

export default function Forums() {
  const [forums, setForums] = useState(initialForums);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDestination, setSelectedDestination] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [activeForum, setActiveForum] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDestination, setNewDestination] = useState("Manali");
  const [newCategory, setNewCategory] = useState("Travel Tips");
  const [author, setAuthor] = useState("");
  const [replies, setReplies] = useState({});
  const [replyText, setReplyText] = useState("");

  const filteredForums = forums.filter((forum) => {
    const query = search.trim().toLowerCase();

    const matchesSearch =
      !query ||
      forum.title.toLowerCase().includes(query) ||
      forum.description.toLowerCase().includes(query) ||
      forum.destination.toLowerCase().includes(query) ||
      forum.category.toLowerCase().includes(query) ||
      forum.author.toLowerCase().includes(query);

    const matchesCategory =
      selectedCategory === "All" ||
      forum.category === selectedCategory;

    const matchesDestination =
      selectedDestination === "All" ||
      forum.destination === selectedDestination;

    return matchesSearch && matchesCategory && matchesDestination;
  });

  function createForum(event) {
    event.preventDefault();

    if (!newTitle.trim() || !newDescription.trim() || !author.trim()) {
      return;
    }

    const forum = {
      id: Date.now(),
      title: newTitle.trim(),
      description: newDescription.trim(),
      category: newCategory,
      destination: newDestination,
      author: author.trim(),
      date: "Just now",
      replies: 0,
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    };

    setForums((previous) => [forum, ...previous]);
    setSearch("");
    setSelectedCategory("All");
    setSelectedDestination("All");
    setNewTitle("");
    setNewDescription("");
    setAuthor("");
    setShowForm(false);
  }

  function addReply(event) {
    event.preventDefault();

    if (!replyText.trim() || !activeForum) return;

    const reply = {
      id: Date.now(),
      author: author.trim() || "Guest Traveller",
      text: replyText.trim(),
    };

    setReplies((previous) => ({
      ...previous,
      [activeForum.id]: [
        ...(previous[activeForum.id] || []),
        reply,
      ],
    }));

    setForums((previous) =>
      previous.map((forum) =>
        forum.id === activeForum.id
          ? { ...forum, replies: forum.replies + 1 }
          : forum
      )
    );

    setReplyText("");
    setActiveForum((previous) => ({
      ...previous,
      replies: previous.replies + 1,
    }));
  }

  function clearFilters() {
    setSearch("");
    setSelectedCategory("All");
    setSelectedDestination("All");
  }

  return (
    <div className="forums-page">
      <header className="forums-topbar">
        <Link to="/" className="forums-logo">
          ✈ TravelMate
        </Link>

        <nav className="forums-nav">
          <Link to="/">Home</Link>
          <a href="#forum-discussions">Discussions</a>
          <button
            type="button"
            className="forums-create-nav"
            onClick={() => setShowForm(true)}
          >
            + Create Forum
          </button>
        </nav>

        <Link to="/" className="forums-back">
          ← Back
        </Link>
      </header>

      <section className="forums-hero">
        <div className="forums-hero-content">
          <p className="forums-eyebrow">
            YOUR TRAVEL COMMUNITY
          </p>

          <h1>
            Share Stories. <span>Travel Together.</span>
          </h1>

          <p className="forums-subtitle">
            Ask questions, exchange travel tips and learn from
            fellow explorers before your next adventure.
          </p>

          <form
            className="forums-search"
            onSubmit={(event) => event.preventDefault()}
          >
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search discussions, destinations or tips..."
              aria-label="Search forums"
            />
            <button type="submit">Search</button>
          </form>

          <button
            type="button"
            className="forums-hero-button"
            onClick={() => setShowForm(true)}
          >
            Start a Discussion&nbsp; +
          </button>
        </div>
      </section>

      <section className="forums-stats">
        <div>
          <strong>{forums.length}</strong>
          <span>Discussions</span>
        </div>
        <div>
          <strong>{forums.reduce((sum, forum) => sum + forum.replies, 0)}</strong>
          <span>Replies</span>
        </div>
        <div>
          <strong>{new Set(forums.map((forum) => forum.destination)).size}</strong>
          <span>Destinations</span>
        </div>
      </section>

      <main className="forums-main" id="forum-discussions">
        <div className="forums-heading">
          <div>
            <p className="forums-eyebrow">COMMUNITY TALK</p>
            <h2>Explore Discussions</h2>
            <p>Find advice, ask questions and share what you know.</p>
          </div>

          <button
            type="button"
            className="forums-create-button"
            onClick={() => setShowForm(true)}
          >
            + Create Discussion
          </button>
        </div>

        <div className="forums-filters">
          <div className="forums-categories">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={
                  selectedCategory === category ? "active" : ""
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <select
            value={selectedDestination}
            onChange={(event) =>
              setSelectedDestination(event.target.value)
            }
            aria-label="Filter by destination"
          >
            <option value="All">All destinations</option>
            {Array.from(
              new Set(forums.map((forum) => forum.destination))
            )
              .sort()
              .map((destination) => (
                <option key={destination} value={destination}>
                  {destination}
                </option>
              ))}
          </select>
        </div>

        <div className="forums-results-row">
          <p>
            <strong>{filteredForums.length}</strong>{" "}
            {filteredForums.length === 1
              ? "discussion"
              : "discussions"}{" "}
            found
          </p>

          {(search ||
            selectedCategory !== "All" ||
            selectedDestination !== "All") && (
            <button type="button" onClick={clearFilters}>
              Clear filters
            </button>
          )}
        </div>

        {filteredForums.length > 0 ? (
          <div className="forums-grid">
            {filteredForums.map((forum) => (
              <article className="forum-card" key={forum.id}>
                <div className="forum-image">
                  <img
                    src={forum.image}
                    alt={forum.destination}
                    loading="lazy"
                  />
                  <span className="forum-category-tag">
                    {forum.category}
                  </span>
                </div>

                <div className="forum-card-content">
                  <p className="forum-destination">
                    📍 {forum.destination}, India
                  </p>

                  <h3>{forum.title}</h3>

                  <p className="forum-description">
                    {forum.description}
                  </p>

                  <div className="forum-meta">
                    <span>By {forum.author}</span>
                    <span>{forum.date}</span>
                  </div>

                  <div className="forum-card-footer">
                    <span className="forum-replies">
                      💬 {forum.replies} replies
                    </span>

                    <button
                      type="button"
                      className="forum-view-button"
                      onClick={() => setActiveForum(forum)}
                    >
                      Join Discussion ↗
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="forums-empty">
            <h3>No discussions found</h3>
            <p>Try a different search or create a new discussion.</p>
            <button type="button" onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        )}
      </main>

      <footer className="forums-footer">
        <strong>✈ TravelMate</strong>
        <p>Better trips begin with shared experiences.</p>
      </footer>

      {showForm && (
        <div
          className="forums-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowForm(false);
            }
          }}
        >
          <section
            className="forums-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="create-forum-title"
          >
            <button
              type="button"
              className="forums-modal-close"
              onClick={() => setShowForm(false)}
              aria-label="Close form"
            >
              ×
            </button>

            <p className="forums-eyebrow">COMMUNITY CONTRIBUTION</p>
            <h2 id="create-forum-title">Start a Discussion</h2>
            <p>Share a question or tip with fellow travellers.</p>

            <form onSubmit={createForum}>
              <label htmlFor="forum-author">Your name</label>
              <input
                id="forum-author"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
                placeholder="Enter your name"
                required
              />

              <label htmlFor="forum-title">Discussion title</label>
              <input
                id="forum-title"
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}
                placeholder="What would you like to discuss?"
                required
              />

              <label htmlFor="forum-description">Details</label>
              <textarea
                id="forum-description"
                value={newDescription}
                onChange={(event) =>
                  setNewDescription(event.target.value)
                }
                placeholder="Write your question or travel tip..."
                rows={4}
                required
              />

              <label htmlFor="forum-category">Category</label>
              <select
                id="forum-category"
                value={newCategory}
                onChange={(event) => setNewCategory(event.target.value)}
              >
                {categories
                  .filter((category) => category !== "All")
                  .map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
              </select>

              <label htmlFor="forum-destination">Destination</label>
              <select
                id="forum-destination"
                value={newDestination}
                onChange={(event) =>
                  setNewDestination(event.target.value)
                }
              >
                {[
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
                ].map((destination) => (
                  <option key={destination} value={destination}>
                    {destination}
                  </option>
                ))}
              </select>

              <button type="submit" className="forums-submit-button">
                Publish Discussion
              </button>
            </form>
          </section>
        </div>
      )}

      {activeForum && (
        <div
          className="forums-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveForum(null);
              setReplyText("");
            }
          }}
        >
          <section
            className="forums-modal discussion-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="active-forum-title"
          >
            <button
              type="button"
              className="forums-modal-close"
              onClick={() => {
                setActiveForum(null);
                setReplyText("");
              }}
              aria-label="Close discussion"
            >
              ×
            </button>

            <span className="forum-category-tag modal-category">
              {activeForum.category}
            </span>

            <h2 id="active-forum-title">{activeForum.title}</h2>

            <p className="forum-destination">
              📍 {activeForum.destination}, India
            </p>

            <p>{activeForum.description}</p>

            <div className="forum-meta">
              <span>Started by {activeForum.author}</span>
              <span>{activeForum.replies} replies</span>
            </div>

            <div className="forum-reply-list">
              <h3>Replies</h3>

              {(replies[activeForum.id] || []).length === 0 ? (
                <p>No replies yet. Be the first to respond!</p>
              ) : (
                (replies[activeForum.id] || []).map((reply) => (
                  <div className="forum-reply" key={reply.id}>
                    <strong>{reply.author}</strong>
                    <p>{reply.text}</p>
                  </div>
                ))
              )}
            </div>

            <form onSubmit={addReply}>
              <label htmlFor="forum-reply-input">Your reply</label>
              <textarea
                id="forum-reply-input"
                value={replyText}
                onChange={(event) => setReplyText(event.target.value)}
                placeholder="Share your advice or experience..."
                rows={3}
                required
              />
              <button type="submit" className="forums-submit-button">
                Post Reply
              </button>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}
