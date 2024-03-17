const BaseService = require("../base/base.service");
const homepageModel = require("./homepageDesktop.model");

class HomepageDesktopService extends BaseService {
    constructor(){
        super(homepageModel)
    }
}

module.exports = new HomepageDesktopService();