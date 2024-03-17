const categoryService = require("../category/category.service");
const AppError = require("../../errors/AppError");
const contactService = require("./contact.service");

const pageView = async (req, res) => {
  let contact = await contactService.findOne();
  const categories = await categoryService.findAll();
  if (!contact) {
    contact = {
      adress: "",
      citys: "",
      phone: "",
      email: "",
      youtube: "",
      instagram: "",
      vimeo:"",
      contact_image: "",
    };
  }
  res.render("admin/contact", { data: { contact, categories } });
};
const add = async (req, res) => {
  const data = req.body;
  const contact_image = req.file?.filename;
  // find one contact if exist and update else create new contact
  let contact = await contactService.findOne();
  if (contact) {
    contact = await contactService.updateById(contact._id, {
      ...data,
      contact_image,
    });
  }
  if (!contact) {
    contact = await contactService.create({ ...data, contact_image });
  }
  res.redirect("/admin/contact");
};

module.exports = {
  add,
  pageView,
};
