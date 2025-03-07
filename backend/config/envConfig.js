require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 8000,
  LAT: process.env.LAT,
  LON: process.env.LON,
  BLINKIT_API_URL: process.env.BLINKIT_API_URL
};
