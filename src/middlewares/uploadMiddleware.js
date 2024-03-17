const multer = require("multer");
const AppError = require("../errors/AppError");
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/../../public/demos/store");
  },
  filename: function (req, file, cb) {
    cb(null, crypto.randomUUID() + "." + file?.mimetype?.split("/")[1]);
  },
});
const upload = multer({ storage: storage });

module.exports = upload;
