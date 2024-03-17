const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/uploadMiddleware");
const controller = require("./about.controller");
const aboutService = require("./about.service");

router.get("/", controller.pageView);
router.post("/update", upload.single("file"), controller.update);

module.exports = router;
