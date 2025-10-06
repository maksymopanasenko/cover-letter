const express = require("express");
const router = express.Router();

const { webhookHandler } = require("../controllers/outrank-webhook");

router.post("/", webhookHandler);

module.exports = router;