const express = require("express");
const upload = require("../../middlewares/uploadMiddleware");
const controller = require("./homeimages.controller");
const router = express.Router();

router.get("/",controller.pageView);
router.get("/add",controller.addView);
router.post("/",upload.single("file"),controller.add);
router.get("/delet/:id",controller.delet);

module.exports=router;