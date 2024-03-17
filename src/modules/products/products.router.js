const express = require("express");
const router = express.Router();
const controller = require("./products.controller");
const upload = require("../../middlewares/uploadMiddleware");

router.get("/:categoryId", controller.pageView);
// add new product
router.post("/", upload.single("file"), controller.add);
router.get("/singleproduct/:categoryId", controller.singleproduct);
router.get("/delet/:id/:categoryId",controller.delet);
router.get("/update/:id",controller.updateView);
router.post("/update/:id",upload.single("file"),controller.update);

module.exports = router;
