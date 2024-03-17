const express = require("express");
const router = express.Router();
const controller = require("./generalSetting.controller");

router.get("/",controller.pageView);

module.exports=router;