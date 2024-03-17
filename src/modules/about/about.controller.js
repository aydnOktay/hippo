const aboutService = require("./about.service");
const categoryService = require("../category/category.service");

const pageView = async (req, res) => {
  let about = await aboutService.findOne();
  const categories = await categoryService.findAll();
  if (!about) {
    about = {
      about_images: "",
      about_description: "",
    };
  }
  res.render("admin/about", { data: { about, categories } });
};
const update = async (req, res) => {
  const data = req.body;
  const about_images = req.file?.filename;
  let about = await aboutService.findOne();
  if (about) {
    about = await aboutService.updateById(about._id, {
      ...data,
      about_images,
    });
  }
  if (!about) {
    about = await aboutService.create({ ...data, about_images });
  }

  res.redirect("/admin/about");
};

module.exports = {
  update,
  pageView,
};
