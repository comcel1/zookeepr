// assign express to the app variable so that it can be chained to other methods on the Express server.
const express = require("express");
const app = express();

const apiRoutes = require("./routes/apiRoutes");

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// API routes
app.use("/api", apiRoutes);

// Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
