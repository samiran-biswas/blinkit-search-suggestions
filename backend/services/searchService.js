const axios = require("axios");
const { BLINKIT_API_URL, LAT, LON } = require("../config/envConfig");

const fetchSearchResults = async (query) => {
  try {
    const response = await axios.get(BLINKIT_API_URL, {
      params: {
        start: 0,
        size: 10,
        search_type: 7,
        q: query
      },
      headers: {
        "User-Agent": "Mozilla/5.0",
        lat: LAT,
        lon: LON
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { fetchSearchResults };
