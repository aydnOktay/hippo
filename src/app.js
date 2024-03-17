require("dotenv").config({
  path: process.env.NODE_ENV === "PROD" ? ".env" : ".env.dev",
});
const express = require("express");
const connectDb = require("./utils/connectDb");
require("express-async-errors");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const session = require('express-session');
const compression = require("compression");
const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(morgan("common"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
let options = {
  etag: false,
  maxAge: "5000",
};
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, "..", "public"), options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.listen(port, async () => {
  try {
    await connectDb();
    console.log("Connected to database");
    // app.use("/", require("./middlewares/routeCache")(100));
    app.use("/admin", require("./modules"));
    app.use("/", require("./pages"));
    app.use(require("./middlewares/notFound"));
    app.use(require("./middlewares/errorHandler"));

    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log("Error connecting to database", error);
    process.exit(1);
  }
});
