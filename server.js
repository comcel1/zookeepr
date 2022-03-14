// assign express to the app variable so that it can be chained to other methods on the Express server.
const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
// NOTE FOR TUTOR needed to add requirement of path

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// Add middleware to connect CSS
app.use(express.static("public"));
// API routes
app.use("/api", apiRoutes);
// Add middleware to connect to HTML routes
app.use("/", htmlRoutes);

// Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
