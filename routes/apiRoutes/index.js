const router = require("express").Router();
const animalRoutes = require("./animalRoutes");

router.use("/animals", animalRoutes);

module.exports = router;
