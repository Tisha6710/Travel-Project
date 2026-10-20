
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("TravelMate backend is running!");
});

app.post("/api/plan-trip", async (req, res) => {
  try {
    const { location, destination, days, budget, preferences } = req.body;
    const place = destination || location;

    if (!place) {
      return res.status(400).json({
        error: "Please enter a destination."
      });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      instructions: "You are a helpful travel planner. Create practical day-by-day travel itineraries.",
      input: `Plan a trip to ${place}.
Days: ${days || "Not specified"}
Budget: ${budget || "Not specified"}
Preferences: ${preferences || "General sightseeing"}

Include a day-by-day itinerary, attractions, food suggestions and transport tips.`
    });

    res.json({
      success: true,
      plan: response.output_text
    });
  } catch (error) {
    console.error("Trip planning error:", error.message);
    res.status(500).json({
      error: "Could not generate the trip plan. Check the backend terminal."
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`TravelMate backend running at http://localhost:${PORT}`);
});
