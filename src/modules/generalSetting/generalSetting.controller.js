const generalSettingService = require("./generalSetting.service");
const categoryService = require("../category/category.service");

const pageView = async (req,res)=>{
  const categories = await categoryService.findAll();
    res.render("admin/generalSetting",{
        data: { categories } 
    });
}

module.exports= {
    pageView
}