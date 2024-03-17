const express = require("express");
const router = express.Router();
const controller = require("./auth.controller");

router.get("/login", controller.pageView);
router.post("/login", controller.login);
router.get("/logout", controller.logout);

// güncelleme işlemi için
module.exports = router;
