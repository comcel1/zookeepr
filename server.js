// assign express to the app variable so that it can be chained to other methods on the Express server.
const express = require("express");
const app = express();
// NOTE FOR TUTOR needed to add requirement of path
const path = require("path");

const apiRoutes = require("./routes/apiRoutes");

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// API routes
app.use("/api", apiRoutes);
// Add middleware to connect CSS
app.use(express.static("public"));
// server for HTML page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
// server for animals HTML page
app.get("/animals", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/animals.html"));
});
//server for zookeepers HTML page
app.get("/zookeepers", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/zookeepers.html"));
});
// WILDCARD "catch all" (must come last!!!)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
