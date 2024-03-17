const express = require("express");
const router = express.Router();
const controller = require("./homepageMobile.controller");
const upload = require("../../middlewares/uploadMiddleware");

router.get("/", controller.pageView);
router.get("/homepageMobileAdd", controller.addViews);
router.post("/add", upload.single("file"), controller.add);
router.get("/delete/:id", controller.delet);

module.exports = router;
