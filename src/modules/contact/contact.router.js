const express = require("express");
const router = express.Router();
const controller = require("./contact.controller");
const upload = require("../../middlewares/uploadMiddleware");

router.get("/", controller.pageView);
router.post("/update", upload.single("file"), controller.add);

module.exports = router;
