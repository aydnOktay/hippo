const productService = require("./products.service");
const categoryService = require("../category/category.service");
const toSlug = require("../../utils/toSlug");

const pageView = async (req, res) => {
  const categories = await categoryService.findAll();
  const id = req.params.categoryId;
  res.render("admin/ekipmanekle", {
    data: {
      categories,
      id
    },
  });
};

const singleproduct = async (req,res)=>{
  const categoryId=req.params.categoryId;
  const categories = await categoryService.findAll();
  const category = await categoryService.findById(categoryId);
  const products = await productService.findAll({product_whic:categoryId})
  res.render("admin/singleproduct",{
    data:{
      categories,products,category
    }
  })
};

const add = async (req, res) => {
  const data = req.body;
  const product_img = req.file.filename;
  const product_props = data.product_props.split(",");
  const slug = toSlug(data?.product_name);
  const product = await productService.create({
    product_name: data.product_name,
    product_description: data.product_description,
    daily_price: Number(data.daily_price),
    three_day_price: Number(data.three_day_price),
    weekly_price: Number(data.weekly_price),
    product_props: product_props,
    product_whic: data.id,
    product_img: product_img,
    product_slug: slug,
  });
  res.redirect("/admin/product");
};

const delet = async(req,res)=>{
  const id = req.params.id;
  const categoryId = req.params.categoryId;
  await productService.deleteById(id);
  res.redirect(`/admin/product/singleproduct/${categoryId}`)
};

const updateView = async(req,res)=>{
  const id = req.params.id;
  const categories = await categoryService.findAll();
  const product = await productService.findById(id);
  product.product_props=product.product_props?.join(",");
  res.render("admin/ekipmanGuncelle", {
    data: {
      categories, product
    }
  })
} 

const update = async (req,res)=>{
  const id = req.params.id;
  const product_img = req.file?.filename;
  const data = req.body;
  const product_props = data.product_props.split(",");
  const slug = toSlug(data?.product_name);
  if (!product_img) {
    const dataLast = await productService.updateById(id, {
      product_name: data.product_name,
      product_description: data.product_description,
      daily_price: Number(data.daily_price),
      three_day_price: Number(data.three_day_price),
      weekly_price: Number(data.weekly_price),
      product_props: product_props,
      product_slug: slug,
    });
    return res.redirect(`/admin/product/singleproduct/${dataLast.product_whic}`)
  }
  const dataLast = await productService.updateById(id, {
    product_name: data.product_name,
    product_description: data.product_description,
    daily_price: Number(data.daily_price),
    three_day_price: Number(data.three_day_price),
    weekly_price: Number(data.weekly_price),
    product_props: product_props,
    product_img: product_img,
    product_slug: slug,
  });
  return res.redirect(`/admin/product/singleproduct/${dataLast.product_whic}`)
};
module.exports = {
  pageView,
  add,
  singleproduct,delet,updateView,update
};
