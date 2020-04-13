const express = require("express");

const CakeCtrl = require("../controllers/cake_controller.js");

const router = express.Router();

router.get("/cakes", CakeCtrl.getCakes);

module.exports = router;
