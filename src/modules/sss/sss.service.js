const sssModel = require("./sss.model");
const BaseService = require("../base/base.service");

class SssService extends BaseService {
    constructor(){
        super(sssModel);
    }

}

module.exports = new SssService();