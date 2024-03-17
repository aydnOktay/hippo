const BaseService = require("../base/base.service");
const homepageMobileModel = require("./homepageMobile.model");

class HomepageMobileService extends BaseService {
    constructor(){
        super(homepageMobileModel)
    }
}

module.exports = new HomepageMobileService();