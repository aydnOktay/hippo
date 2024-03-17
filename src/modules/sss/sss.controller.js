const sssService = require("./sss.service");
const categoryService = require("../category/category.service");

const pageView = async (req,res)=>{
    const sss = await sssService.findAll();
  const categories = await categoryService.findAll();
    res.render("admin/sss", { data: { sss,categories } });
}

const sssAddView = async (req,res)=>{
  const categories = await categoryService.findAll();
     res.render("admin/sssAdd", { data: { categories } });
}


const add = async(req,res)=>{
    const data = req.body;
    await sssService.create({
        question:data.question,
        answer:data.answer
    });
    res.redirect("/admin/sss");
}

const delet = async (req,res)=>{
    const id=req.params.id;
    await sssService.deleteById(id);
    res.redirect("/admin/sss");
}

module.exports={
    add,delet,pageView,sssAddView
}