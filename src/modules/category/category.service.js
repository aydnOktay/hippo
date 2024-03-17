const categoryModel = require("./category.model");
const BaseService = require("../base/base.service");

class CategoryService extends BaseService {
  constructor() {
    super(categoryModel);
  }
}

module.exports = new CategoryService();
