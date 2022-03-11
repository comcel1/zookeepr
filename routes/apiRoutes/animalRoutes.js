const router = require("express").Router();
const { animals } = require("../../data/animals.json");
const {
  filterByQuery,
  findById,
  createNewAnimal,
  validateAnimal,
} = require("../../lib/animals");

// api/animals (route)
router.get("/", (req, res) => {
  let results = animals;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.get("/:id", (req, res) => {
  const result = findById(req.params.id, animals);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post("/", (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = (Number(animals[animals.length - 1].id) + 1).toString();

  if (!validateAnimal(req.body)) {
    res.status(400).send("The animal is not properly formatted.");
  } else {
    // add animal to json file and animals array in this function
    const animal = createNewAnimal(req.body, animals);
    // shows new animal that we created
    res.json(animal);
  }
});

module.exports = router;
