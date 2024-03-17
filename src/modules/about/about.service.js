const BaseService = require("../base/base.service");
const aboutModel = require("./about.model");

class AboutService extends BaseService {
    constructor(){
        super(aboutModel)
    }
}

module.exports = new AboutService();