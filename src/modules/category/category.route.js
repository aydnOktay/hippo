const express = require("express");
const router = express.Router();
const controller = require("./category.controller");
const validateSchema = require("../../middlewares/validateSchema");
const upload = require("../../middlewares/uploadMiddleware");

router.get("/", controller.pageView);
router.get("/categoriesAdd", controller.addViews);
router.post("/add", upload.single("file"), controller.add);
router.get("/delete/:id", controller.delet);
router.get("/update/:id", controller.updateView);
router.post("/updatee/:id", upload.single("file"), controller.update);

module.exports = router;
