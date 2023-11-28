const express = require("express");
const router = express.Router();

const { vote } = require("../controllers/statistics");

router.post("/", vote);

module.exports = router;
