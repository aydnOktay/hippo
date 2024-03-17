const homeimagesService = require("./homeimages.service");
const categoryService = require("../category/category.service");

const pageView = async (req, res) => {
    const categories = await categoryService.findAll();
    const sliders = await homeimagesService.findAll();
    res.render("admin/homepageslider", {
        data: {
            categories,sliders
        }
    })
}

const addView = async (req,res)=>{
    const categories = await categoryService.findAll();
    res.render("admin/homepagesliderAdd", {
        data: {
            categories
        }
    })
}

const add = async (req,res)=>{
  const homeimages_image = req.file?.filename;
  await homeimagesService.create({
    homeimages_image:homeimages_image
  });
  res.redirect("/admin/homepageslider");
}

const delet = async (req,res)=>{
    const id = req.params.id;
    await homeimagesService.deleteById(id);
    res.redirect("/admin/homepageslider")
}   


module.exports = {
    pageView,add,delet,addView
}