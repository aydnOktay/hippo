const homepageMobileService = require("./homepageMobile.service");
const categoryService = require("../category/category.service");


const pageView = async (req, res) => {
    const homepageslider = await homepageMobileService.findAll();
  const categories = await categoryService.findAll();
    res.render("admin/homepageMobile", { data: { homepageslider,categories } });
}

const addViews = async (req, res) => {
  const categories = await categoryService.findAll();
    res.render("admin/homepageMobileAdd",{data:{categories}})
}

const add = async (req, res) => {
    const slider_image = req.file?.filename;
    await homepageMobileService.create({
        slider_image: slider_image
    });
    res.redirect("/admin/mobile")
}

const delet = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    await homepageMobileService.deleteById(id);
    res.redirect("/admin/mobile")
}



module.exports = {
    pageView, addViews, add, delet
}