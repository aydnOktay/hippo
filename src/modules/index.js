const router = require("express").Router();
const authRoute = require("../middlewares/authRoute");
const categoryService = require("./category/category.service");
const contactService = require("./contact/contact.service");

// public routes
router.use("/auth", require("./auth/auth.route"));
router.get("/getAllCategories", async (req, res) => {
  const categories = await categoryService.findAll();
  res.json(categories);
});
router.get("/getContactInfo", async (req, res) => {
  const contactInfo = await contactService.findOne();
  res.json(contactInfo);
});

router.use(authRoute);

router.use("/category", require("./category/category.route"));
router.use("/contact", require("./contact/contact.router"));
router.use("/sss", require("./sss/sss.router"));
router.use("/about", require("./about/about.router"));
router.use("/desktop", require("./homepageDesktop/homepageDesktop.router"));
router.use("/mobile", require("./homepageMobile/homepageMobile.router"));
router.use("/product", require("./products/products.router"));
router.use("/homepageslider", require("./homeimages/homeimages.router"));
router.use(
  "/generalsetting",
  require("./generalSetting/generalSetting.router")
);
router.use("/", async (req, res) => {
  const categories = await categoryService.findAll();
  res.render("admin/categories", { data: { categories } });
});

module.exports = router;
