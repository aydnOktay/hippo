const homeimagesModel = require("./homeimages.model");
const BaseService = require("../base/base.service");

class HomeimagesService extends BaseService {
  constructor() {
    super(homeimagesModel);
  }
}

module.exports = new HomeimagesService();