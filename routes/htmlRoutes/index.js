const path = require("path");
const router = require("express").Router();

// server for HTML page
// when we coded in server.js, these lines were named "app.get" and have been changed to "router.get"
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});
// server for animals HTML page
router.get("/animals", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/animals.html"));
});

//server for zookeepers HTML page
router.get("/zookeepers", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/zookeepers.html"));
});
// WILDCARD "catch all" (must come last!!!)
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

module.exports = router;
