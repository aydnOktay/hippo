const productModel = require("./products.model");
const BaseService = require("../base/base.service");

class ProductService extends BaseService {
  constructor() {
    super(productModel);
  }

}

module.exports = new ProductService();