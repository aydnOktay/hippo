const homepageDesktopService = require("./homepageDesktop.service");
const categoryService = require("../category/category.service");

const pageView = async (req, res) => {
  const homepageslider = await homepageDesktopService.findAll();
  const categories = await categoryService.findAll();

  res.render("admin/homepageDesktop", { data: { homepageslider,categories } });
};

const addViews = async (req, res) => {
  const categories = await categoryService.findAll();

  res.render("admin/homepageDesktopAdd",{data:{categories}});
};

const add = async (req, res) => {
  const slider_image = req.file?.filename;
  await homepageDesktopService.create({
    slider_image: slider_image,
  });
  res.redirect("/admin/desktop");
};

const delet = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await homepageDesktopService.deleteById(id);
  res.redirect("/admin/desktop");
};

module.exports = {
  pageView,
  addViews,
  add,
  delet,
};
