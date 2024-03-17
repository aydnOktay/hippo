const router = require("express").Router();
const categoryService = require("../modules/category/category.service");
const contactService = require("../modules/contact/contact.service");
const sssService = require("../modules/sss/sss.service");
const aboutService = require("../modules/about/about.service");
const productServices = require("../modules/products/products.service");
const homepageMobile = require("../modules/homepageMobile/homepageMobile.service");
const homepageDesktop = require("../modules/homepageDesktop/homepageDesktop.service");
const homepagesliderr = require("../modules/homeimages/homeimages.service");
const generalsetting = require("../modules/generalSetting/generalSetting.service");

router.get("/", async (req, res) => {
  const categoriesR = categoryService.findAll();
  const homepagesliderR = homepageDesktop.findAll();
  const homepagesliderMobileR = homepageMobile.findAll();
  const contactDataR = contactService.findOne();
  const aboutServiceR = aboutService.findOne();
  const generalsettingR = generalsetting.findOne();
  const homepageServiceRR = homepagesliderr.findAll();
  const [categories, homepageslider, homepagesliderMobile, contactData, aboutData, homepageDataa, general] = await Promise.all([
    categoriesR,
    homepagesliderR,
    homepagesliderMobileR,
    contactDataR,
    aboutServiceR,
    homepageServiceRR,
    generalsettingR
  ]);
  res.render("home", {
    data: {
      categories,
      homepageslider,
      homepagesliderMobile,
      contactData,
      aboutData,
      homepageDataa,
      general
    },
  });
});

router.get("/contact", async (req, res) => {
  const categories = await categoryService.findAll();
  const contactServicee = await contactService.findOne();

  res.render("contact", {
    data: {
      categories,
      contactServicee,
    },
  });
});

router.get("/categories/:categorySlug", async (req, res) => {
  const { categorySlug } = req.params;
  const search = req.query?.search;
  const categories = await categoryService.findAll();
  const category = await categoryService.findOne({ slug: categorySlug });
  const products = await productServices.findAll({
    product_whic: category._id,
    // if search is not empty, filter products by search
    ...(search && {
      $or: [{ product_name: { $regex: search, $options: "i" } }],
    }),
  });
  const contact = await contactService.findOne();

  res.render("category-list", {
    data: {
      category,
      categories,
      products,
      contact,
    },
  });
});

router.get("/products/:productSlug", async (req, res) => {
  const { productSlug } = req.params;

  const product = await productServices.findOne({ product_slug: productSlug });
  res.render("single-product", {
    data: {
      product,
    },
  });
});

router.get("/about", async (req, res) => {
  const categories = await categoryService.findAll();
  const aboutServicee = await aboutService.findOne();
  const contactServicee = await contactService.findOne();
  res.render("about", {
    data: {
      categories,
      aboutServicee,
      contactServicee,
    },
  });
});

router.get("/category-list/:slug", async (req, res) => {
  const slug = req.params.slug;
  const categories = await categoryService.findAll();
  const category = await categoryService.findAll({ slug: slug });
  const product = await productServices.findAll({
    product_whic: category[0].id,
  });
  const contactServicee = await contactService.findOne();
  res.render("category-list", {
    data: {
      product,
      categories,
      contactServicee,
    },
  });
});

router.get("/single-product/:slug", async (req, res) => {
  const slug = req.params.slug;
  const categories = await categoryService.findAll();
  const product = await productServices.findOne({ product_slug: slug });
  const contactServicee = await contactService.findOne();

  res.render("single-product", {
    data: {
      product,
      categories,
      contactServicee,
    },
  });
});

router.get("/single-product", async (req, res) => {
  const categories = await categoryService.findAll();
  const contactServicee = await contactService.findOne();
  res.render("single-product", {
    data: {
      categories,
      contactServicee,
    },
  });
});

router.get("/sss", async (req, res) => {
  const categories = await categoryService.findAll();
  const sss = await sssService.findAll();
  const contactServicee = await contactService.findOne();
  res.render("sss", {
    data: {
      categories,
      sss,
      contactServicee,
    },
  });
});

router.get("/monitor", async (req, res) => {
  const categories = await categoryService.findAll();
  res.render("monitor", {
    data: {
      categories,
    },
  });
});

router.get("/aksesuar", (req, res) => {
  res.render("aksesuar");
});

router.get("/ses", async (req, res) => {
  const categories = await categoryService.findAll();
  res.render("ses", {
    data: {
      categories,
    },
  });
});

module.exports = router;
