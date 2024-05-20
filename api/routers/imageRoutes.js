const express = require("express");
const router = express.Router();

const imageController = require("../controllers/image/imageController");

router.route("/:folder/:filename").get(imageController.getImage);

module.exports = router;
