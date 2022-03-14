const router = require("express").Router();
const animalRoutes = require("./animalRoutes");

router.use("/animals", animalRoutes);

router.use(require("./zookeeperRoutes"));
module.exports = router;
