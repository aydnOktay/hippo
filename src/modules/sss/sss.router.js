const express = require("express");
const router = express.Router();
const controller = require("./sss.controller");

router.get("/",controller.pageView);
router.get("/sssAdd",controller.sssAddView);
router.post("/add",controller.add);
router.get("/delete/:id",controller.delet);

module.exports = router;