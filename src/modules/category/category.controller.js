const categoryService = require("./category.service");
const productService = require("../products/products.service");
const AppError = require("../../errors/AppError");
const toSlug = require("../../utils/toSlug");

const pageView = async (req, res) => {
  const categories = await categoryService.findAll();
  res.render("admin/categories", { data: { categories } });
};

const addViews = async (req, res) => {
  const categories = await categoryService.findAll();
  res.render("admin/categoriesAdd", { data: { categories } });
};

const add = async (req, res) => {
  const data = req.body;
  const category_image = req.file?.filename;
  // convert to slug
  const slug = toSlug(data?.category_name);
  const cc = await categoryService.create({
    category_name: data.category_name,
    slug: slug,
    category_image: category_image,
  });
  res.redirect("/admin/category");
};

const delet = async (req, res) => {
  const id = req.params.id;
  await categoryService.deleteById(id);
  await productService.deleteMany({ product_whic: id });
  res.redirect("/admin/category");
};

const updateView = async (req, res) => {
  const id = req.params.id;
  const categories = await categoryService.findAll();
  const category = await categoryService.findById(id);
  res.render("admin/categoryView", {
    data: {
      category,
      categories,
    },
  });
};

const update = async (req, res) => {
  const id = req.params.id;
  const category_image = req.file?.filename;
  const data = req.body;
  const slug = toSlug(data?.category_name);
  if (!category_image) {
    await categoryService.updateById(id, {
      category_name: data.category_name,
      slug: slug,
    });
    return res.redirect("/admin/category");
  }
  await categoryService.updateById(id, {
    category_name: data.category_name,
    slug: slug,
    category_image: category_image,
  });
  return res.redirect("/admin/category");
};
module.exports = {
  pageView,
  add,
  delet,
  addViews,
  updateView,
  update,
};
