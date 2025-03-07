
const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/envConfig");
const searchRoutes = require("./routes/searchRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", searchRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

