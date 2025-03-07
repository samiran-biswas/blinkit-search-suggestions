const searchService = require("../services/searchService");

const searchProducts = async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const results = await searchService.fetchSearchResults(query);
    res.json(results);
  } catch (error) {
    console.error("Error fetching search results:", error.message);
    res.status(500).json({ error: "Failed to fetch search results", details: error.message });
  }
};

module.exports = { searchProducts };
