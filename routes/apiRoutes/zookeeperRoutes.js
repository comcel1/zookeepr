const router = require("express").Router();
const {
  filterByQuery,
  findById,
  createNewZookeeper,
  validateZookeeper,
} = require("../../lib/zookeepers");
const { zookeepers } = require("../../data/zookeepers.json");

// api/zookeepers (route)
router.get("/zookeepers", (req, res) => {
  let results = zookeepers;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.get("/zookeepers/:id", (req, res) => {
  const result = findById(req.params.id, zookeepers);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
});

router.post("/zookeepers", (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = (Number(zookeepers[zookeepers.length - 1].id) + 1).toString();

  if (!validateZookeeper(req.body)) {
    res.status(400).send("The zookeeper is not properly formatted.");
  } else {
    // add zookeeper to json file and zookeepers array in this function
    const zookeeper = createNewZookeeper(req.body, zookeepers);
    // shows new zookeeper that we created
    res.json(zookeeper);
  }
});

module.exports = router;
