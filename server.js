// assign express to the app variable so that it can be chained to other methods on the Express server.
const express = require("express");
const app = express();
const { animals } = require("./data/animals");

app.get("/api/animals", (req, res) => {
  res.json(animals);
});

app.listen(3001, () => {
  console.log(`API server on port 3001!`);
});
