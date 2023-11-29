const express = require("express");
const router = express.Router();

const { vote, getStatistics } = require("../controllers/statistics");

router.get("/", getStatistics);

router.post("/", vote);

module.exports = router;